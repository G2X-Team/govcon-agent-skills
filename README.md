# Government Contracting by G2X

Practical government contracting sales, business development and capture skills for your AI agent, powered by G2X through GovCon MCP.

Start with **Government Contracting**, then choose focused skills for the job you need to finish. Research a buying office, find work, understand an incumbent, evaluate a partner, read requirements, prepare a capture decision or move a pursuit forward. Each skill produces a useful work product with source evidence and next actions.

G2X supplies government market intelligence. GovCon MCP connects supported records, documents and account workflows to your agent. The skills teach the work; installing them does not create a data connection or grant account access.

## Install

Main entry:

```sh
npx skills add G2X-Team/govcon-skills --skill government-contracting
```

Choose individual workflows:

```sh
npx skills add G2X-Team/govcon-skills --skill govcon-agency-account-plan govcon-incumbent-research govcon-teaming-partners
```

The installer lets you select a supported agent and project or global scope. See the [official CLI documentation](https://www.skills.sh/docs/cli) for current options. New skill names become available from this command after their source revision is released; a review branch is not a live catalog update.

## Connect G2X

Use your agent's documented remote MCP setup and sign in with your G2X account:

```text
https://mcp.g2x.com/mcp
```

For research without account-changing tools:

```text
https://mcp.g2x.com/mcp/research
```

Follow the [G2X connection and tool guides](https://g2x.com/mcp). Actual tools, permissions and usage depend on your connection and account. Discover live schemas rather than assuming access from a skill's examples.

## Twenty-four focused workflows

Each focused skill is self-contained and can be installed alone. You do not need a sibling skill for its instructions. The umbrella routes to a focused skill when installed, or works directly with available G2X tools.

| Workflow | Skill | Job |
| --- | --- | --- |
| [Agency Account Plan](skills/govcon-agency-account-plan/SKILL.md) | `govcon-agency-account-plan` | Choose specific government buying offices and build an evidence-backed sales account plan |
| [Amendment Review](skills/govcon-amendment-review/SKILL.md) | `govcon-amendment-review` | Compare government solicitation amendments and identify response-planning changes |
| [Bid Decision Research](skills/govcon-bid-decision/SKILL.md) | `govcon-bid-decision` | Prepare an evidence-based pursue, hold or stop recommendation for a government opportunity |
| [Buyer Meeting Preparation](skills/govcon-buyer-meeting-prep/SKILL.md) | `govcon-buyer-meeting-prep` | Prepare a government sales meeting around the buyer mission, documented evidence and decision-changing questions |
| [Capture Planning](skills/govcon-capture-plan/SKILL.md) | `govcon-capture-plan` | Draft a government contracting capture plan with customer questions, company proof, competitive hypotheses and next actions |
| [Company Brief](skills/govcon-company-brief/SKILL.md) | `govcon-company-brief` | Turn company capabilities and evidence into reusable government contracting research context |
| [Company Diligence](skills/govcon-company-diligence/SKILL.md) | `govcon-company-diligence` | Resolve a government contractor and examine supported capabilities, classifications and public claims |
| [CRM Follow-Up](skills/govcon-crm-follow-up/SKILL.md) | `govcon-crm-follow-up` | Turn actual government sales notes into a follow-up draft and specifically requested G2X CRM changes |
| [Forecast Research](skills/govcon-forecast-research/SKILL.md) | `govcon-forecast-research` | Turn public acquisition forecasts into earlier business development research leads |
| [Incumbent Research](skills/govcon-incumbent-research/SKILL.md) | `govcon-incumbent-research` | Build a sourced incumbent or competitor brief from company and award evidence |
| [Industry Day Preparation](skills/govcon-industry-day-prep/SKILL.md) | `govcon-industry-day-prep` | Research a government industry day and prepare an attendance decision and useful questions |
| [Published Labor Rate Research](skills/govcon-labor-rate-research/SKILL.md) | `govcon-labor-rate-research` | Compare published labor-rate references for government contracting research |
| [Government Market Research](skills/govcon-market-research/SKILL.md) | `govcon-market-research` | Define and research a government contracting market using consistent award measures and scope |
| [Opportunity Discovery](skills/govcon-opportunity-discovery/SKILL.md) | `govcon-opportunity-discovery` | Find and screen government opportunities against company capabilities and constraints |
| [Pursuit Pipeline Review](skills/govcon-pipeline-review/SKILL.md) | `govcon-pipeline-review` | Review a government contracting pipeline and prepare decisions, owners and next actions |
| [Recompete Research](skills/govcon-recompete-research/SKILL.md) | `govcon-recompete-research` | Research expiring awards and potential follow-on opportunities for forward capture planning |
| [Solicitation Requirements Review](skills/govcon-requirements-review/SKILL.md) | `govcon-requirements-review` | Read a government solicitation package and build a cited requirements working list |
| [Research Handoff](skills/govcon-research-handoff/SKILL.md) | `govcon-research-handoff` | Turn government contracting research into a sourced brief and requested G2X handoff |
| [Proposal Response Outline](skills/govcon-response-outline/SKILL.md) | `govcon-response-outline` | Build a government proposal response outline from the actual solicitation instructions and evaluation criteria |
| [State Local and Education Opportunities](skills/govcon-sled-discovery/SKILL.md) | `govcon-sled-discovery` | Research state, local and education procurement opportunities across supported records and source portals |
| [Supply Item Research](skills/govcon-supply-item-research/SKILL.md) | `govcon-supply-item-research` | Research government supply items, NSNs and supplier evidence |
| [Teaming Partner Research](skills/govcon-teaming-partners/SKILL.md) | `govcon-teaming-partners` | Find complementary government contracting teaming candidates and prepare diligence |
| [Contract Vehicle Research](skills/govcon-vehicle-strategy/SKILL.md) | `govcon-vehicle-strategy` | Research a government contract vehicle and potential routes to market |
| [Watchlists and Saved Searches](skills/govcon-watchlist-management/SKILL.md) | `govcon-watchlist-management` | Create or review specifically requested government contracting watchlists and saved searches |

## Try it

> Use Government Contracting to turn our company context into a focused agency account plan. Show the evidence, unknowns and next research decision.

> Use the incumbent research skill to brief this company and contract. Separate award facts from competitive hypotheses.

> Use the pipeline review skill to prepare decisions and an exact change preview. Do not change records until I request the specific changes.

## Existing govcon-mcp installs

The `govcon-mcp` skill remains available as a compatible entry, including its complete technical references and nine workflows. Existing install commands and local skill references keep working. New installs can use `government-contracting` and the focused skills. This does not silently rename or replace a person's installed skill.

## Evidence and requested actions

Calibrate company context, inspect current tools, preserve exact source links and read complete controlling documents. A search sample is not a market total, an expiring award is not a confirmed recompete and a requirements extraction is not a compliance decision.

Research does not authorize messages, paid analysis or account writes. Perform only specifically requested bounded actions, honor host controls and verify the result. Keep proposed changes and completed actions distinct.

## Validate

```sh
node scripts/validate.mjs
```

The validator retains full coverage of the compatible entry's tool registry and checks every added skill's identity, known tool names and standalone references. CLI discovery/installation and runtime behavior require separate checks; static validation is not proof of an authenticated workflow.

- [G2X](https://g2x.com)
- [Connections and current tool reference](https://g2x.com/mcp)
- [G2X support](https://g2x.com/support)
