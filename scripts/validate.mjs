#!/usr/bin/env node
// Validate every skill in this repository and the GovCon MCP skill's tool index.
// No dependencies. Run: node scripts/validate.mjs
// Add --live to also check that server.json matches https://mcp.g2x.com/server.json byte for byte.
//
// Checks:
// 1. SKILL.md frontmatter has name, description and a semver metadata.version.
// 2. Every tool name mentioned in skill markdown exists in the registry index.
// 3. Every registry tool is documented exactly once as a "### `g2x_...`" heading
//    in references/, in the area file the index names.
// 4. Writing rules: no em dashes, never the word "assistant".
// 5. Every skill folder follows the Agent Skills specification
//    (https://agentskills.io/specification): a name that matches the folder,
//    1-64 lowercase letters, digits and single hyphens, and a one-line
//    description of at most 1024 characters. Its links stay inside the folder,
//    so each skill works when installed alone.
// 6. README.md lists exactly the skill folders present, and its relative links resolve.
// 7. server.json parses and names a streamable HTTP remote.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillDir = join(root, "skills", "govcon-mcp");
const errors = [];

function markdownFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...markdownFiles(path));
    else if (entry.name.endsWith(".md")) out.push(path);
  }
  return out.sort();
}

// Registry index
const indexPath = join(skillDir, "references", "_tool-index.json");
if (!existsSync(indexPath)) {
  console.error(`FAIL missing ${indexPath}`);
  process.exit(1);
}
const index = JSON.parse(readFileSync(indexPath, "utf8"));
const registry = new Map();
for (const tool of index.tools ?? []) {
  if (registry.has(tool.name)) errors.push(`index: duplicate tool ${tool.name}`);
  for (const field of ["name", "area", "plan", "access"]) {
    if (!tool[field]) errors.push(`index: ${tool.name ?? "?"} missing ${field}`);
  }
  if (tool.access && !["read", "write"].includes(tool.access)) {
    errors.push(`index: ${tool.name} access must be read or write`);
  }
  registry.set(tool.name, tool);
}

// Frontmatter
const skillMd = readFileSync(join(skillDir, "SKILL.md"), "utf8");
const frontmatter = skillMd.match(/^---\n([\s\S]*?)\n---/);
if (!frontmatter) {
  errors.push("SKILL.md: missing YAML frontmatter");
} else {
  if (!/^name:\s*govcon-mcp\s*$/m.test(frontmatter[1])) errors.push("SKILL.md: frontmatter name must be govcon-mcp");
  if (!/^description:\s*\S/m.test(frontmatter[1])) errors.push("SKILL.md: frontmatter missing description");
  if (!/version:\s*"?\d+\.\d+\.\d+"?/.test(frontmatter[1])) errors.push("SKILL.md: frontmatter missing semver version");
}
const version = frontmatter?.[1].match(/version:\s*"?(\d+\.\d+\.\d+)"/)?.[1] ?? "unknown";

// Mentions and documented headings
const files = markdownFiles(skillDir);
const mentioned = new Map(); // tool -> [files]
const documented = new Map(); // tool -> [files]
const TOOL_NAME = /\bg2x_[a-z0-9_]+\b/g;
for (const file of files) {
  const text = readFileSync(file, "utf8");
  const rel = file.slice(root.length + 1);
  if (text.includes("—")) errors.push(`${rel}: contains an em dash`);
  if (/\bassistant\b/i.test(text)) errors.push(`${rel}: contains the word assistant; say agents`);
  for (const name of text.match(TOOL_NAME) ?? []) {
    if (!mentioned.has(name)) mentioned.set(name, []);
    if (!mentioned.get(name).includes(rel)) mentioned.get(name).push(rel);
  }
  if (rel.includes("/references/")) {
    for (const match of text.matchAll(/^### `(g2x_[a-z0-9_]+)`\s*$/gm)) {
      const name = match[1];
      if (!documented.has(name)) documented.set(name, []);
      documented.get(name).push(rel);
      const expectedArea = registry.get(name)?.area;
      if (expectedArea && rel !== `skills/govcon-mcp/references/${expectedArea}.md`) {
        errors.push(`${rel}: ${name} documented here but index area is ${expectedArea}`);
      }
    }
  }
}

for (const [name, where] of mentioned) {
  if (!registry.has(name)) errors.push(`unknown tool ${name} mentioned in ${where.join(", ")}`);
}
for (const name of registry.keys()) {
  const spots = documented.get(name) ?? [];
  if (spots.length === 0) errors.push(`registry tool ${name} is not documented in references/`);
  if (spots.length > 1) errors.push(`registry tool ${name} documented ${spots.length} times: ${spots.join(", ")}`);
}
for (const name of documented.keys()) {
  if (!registry.has(name)) errors.push(`documented heading ${name} is not in the registry index`);
}

// Internal links from markdown must resolve
for (const file of files) {
  const text = readFileSync(file, "utf8");
  const rel = file.slice(root.length + 1);
  for (const match of text.matchAll(/\]\((references\/[^)]+|workflows\/[^)]+|\.\.\/references\/[^)]+)\)/g)) {
    const target = match[1].split("#")[0];
    if (!target) continue;
    if (!existsSync(join(dirname(file), target))) errors.push(`${rel}: link does not resolve: ${match[1]}`);
  }
}

// Every skill folder
const EXTERNAL = /^[a-z][a-z0-9+.-]*:/i;
const SKILL_NAME = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const skillsRoot = join(root, "skills");
const skillNames = readdirSync(skillsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
for (const folder of skillNames) {
  const dir = join(skillsRoot, folder);
  const relEntry = `skills/${folder}/SKILL.md`;
  if (!existsSync(join(dir, "SKILL.md"))) {
    errors.push(`skills/${folder}: missing SKILL.md`);
    continue;
  }
  const fm = readFileSync(join(dir, "SKILL.md"), "utf8").match(/^---\n([\s\S]*?)\n---\n/)?.[1];
  if (fm === undefined) {
    errors.push(`${relEntry}: missing YAML frontmatter`);
    continue;
  }
  const field = (key) =>
    fm.match(new RegExp(`^${key}:[ \\t]*(.*?)[ \\t]*$`, "m"))?.[1].replace(/^(["'])(.*)\1$/, "$2");
  const name = field("name");
  if (!name) errors.push(`${relEntry}: frontmatter missing name`);
  else {
    if (name !== folder) errors.push(`${relEntry}: name ${name} does not match folder ${folder}`);
    if (name.length > 64 || !SKILL_NAME.test(name)) {
      errors.push(`${relEntry}: name must be 1-64 lowercase letters, digits and single hyphens`);
    }
  }
  const description = field("description");
  if (!description || /^[|>]/.test(description)) errors.push(`${relEntry}: frontmatter needs a one-line description`);
  else if (description.length > 1024) {
    errors.push(`${relEntry}: description is ${description.length} characters; the limit is 1024`);
  }
  if (!/^metadata:[ \t]*\n(?:[ \t]+.*\n)*?[ \t]+version:[ \t]*"?\d+\.\d+\.\d+"?/m.test(fm)) {
    errors.push(`${relEntry}: frontmatter missing a semver metadata.version`);
  }
  if (dir === skillDir) continue; // The govcon-mcp content is checked above.
  for (const file of markdownFiles(dir)) {
    const text = readFileSync(file, "utf8");
    const rel = file.slice(root.length + 1);
    if (text.includes("—")) errors.push(`${rel}: contains an em dash`);
    if (/\bassistant\b/i.test(text)) errors.push(`${rel}: contains the word assistant; say agents`);
    for (const tool of new Set(text.match(TOOL_NAME) ?? [])) {
      if (!registry.has(tool)) errors.push(`${rel}: unknown tool ${tool}`);
    }
    for (const match of text.matchAll(/\]\(([^)\s]+)[^)]*\)/g)) {
      const target = match[1].split("#")[0];
      if (!target || EXTERNAL.test(target)) continue;
      const resolved = resolve(dirname(file), target);
      if (!resolved.startsWith(dir + sep) || !existsSync(resolved)) {
        errors.push(`${rel}: link must resolve inside skills/${folder}: ${match[1]}`);
      }
    }
  }
}

// README index and links
const readme = readFileSync(join(root, "README.md"), "utf8");
const listed = new Set([...readme.matchAll(/\bskills\/([a-z0-9-]+)\//g)].map((match) => match[1]));
for (const name of skillNames) {
  if (!listed.has(name)) errors.push(`README.md: skill ${name} is not listed`);
}
for (const name of listed) {
  if (!skillNames.includes(name)) errors.push(`README.md: lists skills/${name}/, which does not exist`);
}
for (const match of readme.matchAll(/\]\(([^)\s]+)[^)]*\)|\bsrc="([^"]+)"/g)) {
  const target = (match[1] ?? match[2]).split("#")[0];
  if (!target || EXTERNAL.test(target)) continue;
  if (!existsSync(join(root, target))) errors.push(`README.md: link does not resolve: ${target}`);
}

// MCP Registry entry
const serverPath = join(root, "server.json");
let serverBytes;
try {
  serverBytes = readFileSync(serverPath);
  const server = JSON.parse(serverBytes.toString("utf8"));
  for (const key of ["$schema", "name", "title", "description", "version"]) {
    if (!server[key]) errors.push(`server.json: missing ${key}`);
  }
  if (!server.remotes?.some((remote) => remote.type === "streamable-http" && /^https:\/\//.test(remote.url ?? ""))) {
    errors.push("server.json: needs a streamable-http remote with an https URL");
  }
} catch (error) {
  errors.push(`server.json: ${error.message}`);
}
if (process.argv.includes("--live") && serverBytes) {
  const liveUrl = "https://mcp.g2x.com/server.json";
  try {
    const response = await fetch(liveUrl);
    const live = Buffer.from(await response.arrayBuffer());
    if (!response.ok) errors.push(`server.json: ${liveUrl} returned HTTP ${response.status}`);
    else if (!live.equals(serverBytes)) errors.push(`server.json: differs from ${liveUrl}`);
    else console.log(`server.json matches ${liveUrl} byte for byte.`);
  } catch (error) {
    errors.push(`server.json: could not fetch ${liveUrl}: ${error.message}`);
  }
}

const names = [...registry.keys()].sort();
console.log(`GovCon MCP skill v${version}`);
console.log(`Registry tools (${names.length}):`);
for (const name of names) {
  const tool = registry.get(name);
  console.log(`  ${name} [${tool.area}] plan="${tool.plan}" access=${tool.access}${tool.research_endpoint ? " research=yes" : ""}`);
}
console.log(`Mentioned in skill markdown: ${mentioned.size} tool names across ${files.length} markdown files.`);
console.log(`Documented reference headings: ${documented.size}.`);
console.log(`Skill folders (${skillNames.length}): ${skillNames.join(", ")}.`);

if (errors.length) {
  console.error(`\nFAIL ${errors.length} problem(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log("\nPASS every mentioned tool is in the registry, and every registry tool is documented exactly once.");
console.log(`PASS all ${skillNames.length} skill folders, the README skill list and server.json.`);
