#!/usr/bin/env node
// Validate the GovCon MCP skill against its tool index.
// No dependencies. Run: node scripts/validate.mjs
//
// Checks:
// 1. SKILL.md frontmatter has name, description and a semver metadata.version.
// 2. Every tool name mentioned in skill markdown exists in the registry index.
// 3. Every registry tool is documented exactly once as a "### `g2x_...`" heading
//    in references/, in the area file the index names.
// 4. Writing rules: no em dashes, never the word "assistant".

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
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

// Focused skills must work when installed alone. Validate names, known tools
// and every local reference, rather than assuming sibling skills are present.
const skillRoots = readdirSync(join(root, "skills"), { withFileTypes: true })
  .filter(entry => entry.isDirectory()).map(entry => join(root, "skills", entry.name));
for (const dir of skillRoots) {
  if (dir === skillDir) continue;
  const entry = join(dir, "SKILL.md");
  if (!existsSync(entry)) { errors.push(`${dir}: missing SKILL.md`); continue; }
  const body = readFileSync(entry, "utf8");
  const name = body.match(/^name:\s*(\S+)\s*$/m)?.[1];
  if (name !== dir.split("/").at(-1)) errors.push(`${entry}: name does not match folder`);
  if (!/^description:\s*\S/m.test(body)) errors.push(`${entry}: missing description`);
  if (!/version:\s*"?\d+\.\d+\.\d+"?/.test(body)) errors.push(`${entry}: missing version`);
  for (const file of markdownFiles(dir)) {
    const text = readFileSync(file, "utf8");
    if (text.includes("—") || /\bassistant\b/i.test(text)) errors.push(`${file}: writing rule violation`);
    for (const tool of text.match(TOOL_NAME) ?? []) {
      if (!registry.has(tool)) errors.push(`${file}: unknown tool ${tool}`);
    }
    for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].split("#")[0];
      if (!target || /^[a-z]+:/i.test(target)) continue;
      const resolved = join(dirname(file), target);
      if (!resolved.startsWith(dir + "/") || !existsSync(resolved)) {
        errors.push(`${file}: reference is missing or outside this standalone skill: ${target}`);
      }
    }
  }
}
console.log(`Skill folders: ${skillRoots.length}; umbrella + 24 focused skills + compatible MCP entry.`);

const names = [...registry.keys()].sort();
console.log(`GovCon MCP skill v${version}`);
console.log(`Registry tools (${names.length}):`);
for (const name of names) {
  const tool = registry.get(name);
  console.log(`  ${name} [${tool.area}] plan="${tool.plan}" access=${tool.access}${tool.research_endpoint ? " research=yes" : ""}`);
}
console.log(`Mentioned in skill markdown: ${mentioned.size} tool names across ${files.length} markdown files.`);
console.log(`Documented reference headings: ${documented.size}.`);

if (errors.length) {
  console.error(`\nFAIL ${errors.length} problem(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log("\nPASS every mentioned tool is in the registry, and every registry tool is documented exactly once.");
