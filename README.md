# GovCon skills by G2X

The agentic context layer for GovCon.

## Who is behind this

G2X is a federal growth intelligence platform built and run by career government contracting growth and execution professionals. Leading government contractors, including GDIT, Booz Allen Hamilton and Leidos, use G2X. Many people know G2X through its intelligence service first; the platform behind it connects that analyst-curated intelligence with opportunity and award research, company and agency records, GovCon CRM, watchlists and pipelines, Bid Hub and Lumen. That is the context this skill puts in front of your AI agent.

## What the skill does

The GovCon MCP skill (version 1.4.0) gives your agent a working knowledge of how pursuit work actually gets done: which G2X tool answers which question, how to read a solicitation completely instead of skimming one page, how to check an incumbent or teaming partner without confusing a corporate family for a single awardee, when a market number is a real total and when it is a sample, and how to save the finished brief or matrix in your G2X account so your team can pick it up.

It covers all 66 GovCon MCP tools: calibration and usage, opportunity search and whole documents, awards and recompetes, companies and teaming, forecasts and events, pipelines and saved searches, GovCon CRM, Bid/No-Bid capture, DLA supply items, labor rates and GSA eBuy. There is one entry point, twelve reference files and nine end-to-end workflows. The agent loads only what the task in front of it needs.

Your agent does the reasoning and drafting with its own model. G2X supplies the records, the documents and the account actions.

## Install the skill

```sh
npx skills add G2X-Team/govcon-skills --skill govcon-mcp
```

The installer asks which agent to target. To install for Claude Code, Codex and Cursor in the current project:

```sh
npx skills add G2X-Team/govcon-skills --skill govcon-mcp --agent claude-code codex cursor
```

Add `--global` to use the skill across all your projects. The Vercel skills installer needs Node.js 22.20 or newer. Choose Claude Code, Codex, Cursor or another supported agent; the [skills CLI documentation](https://skills.sh/docs/cli) covers the options. The skill's listing is at [skills.sh/g2x-team/govcon-skills/govcon-mcp](https://www.skills.sh/g2x-team/govcon-skills/govcon-mcp).

## Connect G2X

The skill is instructions. The tools come from the hosted G2X MCP, which you add through your agent's normal remote MCP settings:

```text
https://mcp.g2x.com/mcp
```

For research with no account changes, connect to the read-only research endpoint instead:

```text
https://mcp.g2x.com/mcp/research
```

Follow the [connection guide](https://govconmcp.ai/docs) for your client, including its registered OAuth client ID when required, then sign in with your G2X account. GovCon MCP is included on every G2X plan. What your agent can do depends on your account's features and permissions; [G2X pricing](https://g2x.com/pricing) explains the plans. New to G2X? [Create an account](https://g2x.com/sign-up/free) first.

## Put it to work

Try one of these in your agent:

> Use the GovCon MCP skill to find opportunities that fit our company. Explain the fit, show the source evidence, and tell me what we need to learn before pursuing each one.

> Read the complete solicitation and its amendments, build a requirements matrix using your own reasoning, and save it in G2X if this connection supports that destination.

> Research this incumbent and two possible teaming partners. Keep facts separate from assumptions and cite the records.

The agent calibrates the session to your company first, checks the connected tools before it starts, reuses completed analysis when it answers the question, and saves requested outputs through supported G2X actions. It will not invent a tool your connection does not expose, and it treats a request to research as different from a request to change your account.

## What it covers

| Reference | What it helps you do |
| --- | --- |
| [Opportunities and documents](skills/govcon-mcp/references/opportunities.md) | Find notices and past notices, search inside attachments, and read whole solicitation documents. |
| [Awards, vehicles and recompetes](skills/govcon-mcp/references/awards-vehicles.md) | Count and total award spending, research a vehicle, and find expiring work and recompete candidates. |
| [Companies, teaming and status](skills/govcon-mcp/references/companies.md) | Resolve the right company, rank a market, research incumbents and teaming partners, and check certifications. |
| [Agencies, forecasts and events](skills/govcon-mcp/references/forecasts-events.md) | Scan agency forecasts and prepare for industry days and conferences. |
| [Pipelines, watchlists and saved searches](skills/govcon-mcp/references/pipelines.md) | Watch records and codes, save and run searches, and manage pursuit pipelines. |
| [GovCon CRM](skills/govcon-mcp/references/crm.md) | Find accounts and contacts, log meetings and notes, and set follow-ups and tasks. |
| [Bid/No-Bid and capture](skills/govcon-mcp/references/capture.md) | Prepare documents, extract requirements, run Bid/No-Bid, and read the compliance matrix. |
| [DLA, NSN and DIBBS](skills/govcon-mcp/references/dla-nsn.md) | Look up supply items, suppliers, part numbers and replacement NSNs. |
| [Labor rates](skills/govcon-mcp/references/labor-rates.md) | Find published hourly ceiling rates and category statistics. |
| [GSA eBuy](skills/govcon-mcp/references/gsa-ebuy.md) | Search your eBuy RFQs, read their deadlines and amendments, and list their files. |
| [Account, usage and settings](skills/govcon-mcp/references/account.md) | Calibrate the session, check usage, and review AI profiles and claimed company profiles. |
| [Connection and recovery](skills/govcon-mcp/references/connection.md) | Connect, use the research endpoint, and recover from access, limit and tool errors. |

Nine workflows in [skills/govcon-mcp/workflows](skills/govcon-mcp/workflows) give exact tool sequences: find and qualify opportunities, recompete radar to pipeline, teaming partner search, solicitation to compliance matrix, incumbent and market research, watch an agency or code, weekly pipeline review, supply items and eBuy, and move a workflow into G2X.

## Validate this skill

The reference is checked against the tool registry in `skills/govcon-mcp/references/_tool-index.json`. To verify that every tool name in the skill is real and every registered tool is documented exactly once:

```sh
node scripts/validate.mjs
```

It needs only Node.js, with no packages to install. It fails on an unknown tool name, an undocumented registry tool, a duplicate entry, a broken internal link, an em dash or the wrong word for an agent.

## Update

```sh
npx skills update govcon-mcp
```

Keep the whole `skills/govcon-mcp` directory together. The references and workflows are part of the skill.

## Direct procurement data

GovCon MCP is for research, opportunity analysis and the work you keep in G2X. If your team needs procurement data flowing into its own software, data warehouse or custom analysis, [Tango by MakeGov](https://docs.makegov.com/) offers an API, SDKs and its own MCP connection. G2X Professional members receive 50% off any Tango plan; [contact G2X support](https://g2x.com/support) for help applying the member discount.

## Get help

- [GovCon MCP](https://govconmcp.ai)
- [G2X support](https://g2x.com/support)
- [Skills installer](https://github.com/vercel-labs/skills)
