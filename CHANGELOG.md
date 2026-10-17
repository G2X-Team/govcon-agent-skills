# Changelog

## 2.0.0 (2026-10-17)

The repository is now `G2X-Team/govcon-agent-skills` and holds 25 skills: the GovCon MCP skill and 24 focused workflow skills. It is also the public listing repository for GovCon MCP by G2X.

### Added

- 24 self-contained workflow skills, each installable alone: `govcon-agency-account-plan`, `govcon-amendment-review`, `govcon-bid-decision`, `govcon-buyer-meeting-prep`, `govcon-capture-plan`, `govcon-company-brief`, `govcon-company-diligence`, `govcon-crm-follow-up`, `govcon-forecast-research`, `govcon-incumbent-research`, `govcon-industry-day-prep`, `govcon-labor-rate-research`, `govcon-market-research`, `govcon-opportunity-discovery`, `govcon-pipeline-review`, `govcon-recompete-research`, `govcon-requirements-review`, `govcon-research-handoff`, `govcon-response-outline`, `govcon-sled-discovery`, `govcon-supply-item-research`, `govcon-teaming-partners`, `govcon-vehicle-strategy` and `govcon-watchlist-management`.
- `server.json`, the MCP Registry entry for GovCon MCP by G2X, identical to https://mcp.g2x.com/server.json, and the G2X logo (`logo.svg`, `logo-400.png`).
- A GovCon MCP section in the README: what it does, how to connect, example prompts and links.
- Validation for every skill folder: Agent Skills frontmatter, known tool names, links that stay inside the skill, a README that lists exactly the skills present, and a valid `server.json`. `--live` also compares `server.json` with the live manifest.

### Changed

- Install and listing commands use the new repository name. The old `G2X-Team/govcon-skills` URL redirects.

The `govcon-mcp` skill is unchanged at 1.4.0.

## 1.4.0 (2026-10-12)

Weekly refresh against the full GovCon MCP tool registry. The skill now documents every registered tool by name, with a validator to keep it that way.

### Added

- A complete per-tool reference: 66 tools, one entry each, grouped by capability area under `skills/govcon-mcp/references/`. Each entry gives the exact tool name, purpose, key inputs, output shape, plan availability, limits and one example call.
- Tools documented by name for the first time: `g2x_calibrate_session`, `g2x_usage`, `g2x_search_opportunities`, `g2x_search_records`, `g2x_get_record`, `g2x_opportunity_documents`, `g2x_prepare_opportunity_documents`, `g2x_forecast_scan`, `g2x_expiring_awards`, `g2x_recompete_radar`, `g2x_get_graph_neighborhood`, `g2x_company_contract_history`, `g2x_teaming_partners`, `g2x_socioeconomic_status`, `g2x_company_evidence`, `g2x_company_signals`, `g2x_company_web_profile`, `g2x_rank_companies`, `g2x_search_events`, `g2x_get_event`, `g2x_labor_rates`, `g2x_search_ebuy`, `g2x_get_ebuy`, `g2x_list_ebuy_attachments`, all watchlist, saved search and pipeline tools, all remaining CRM write tools, and all G2X AI profile and claimed company profile tools.
- `skills/govcon-mcp/references/_tool-index.json`: the registry list (name, area, plan, read or write, research endpoint) the reference is checked against.
- `scripts/validate.mjs`: fails on any tool name outside the registry and on any registry tool that is not documented exactly once.
- Nine end-to-end workflows under `skills/govcon-mcp/workflows/`: find and qualify, recompete radar to pipeline, teaming partner search, solicitation to compliance matrix, incumbent and market research, watch an agency or code, weekly pipeline review, supply items and eBuy, and move a workflow into G2X.
- Session calibration as the first move, a question-to-tool decision table, and coverage of the read-only research endpoint.

### Changed

- References reorganized from playbook topics to capability areas. The former markets, documents, events, pursuits, work products and migration guidance is carried into the capability references and the workflows.
- Plan and limit language aligned with the server: GovCon MCP is included on every plan; capture work and metered company lookups need Starter and up; bid protests need Starter Team and up; labor rates follow account access.
- Calibration wording from 1.3.1 is included: filter keys are per dataset, and a company is the user's only when calibration returned it or the user named it.

### Removed

- `g2x_people_directory` and `g2x_people_profiles`. Both people tools are retired and are not registered for any account. The skill now says the people directory is not available yet and to use people named in returned source documents, with citations.

## 1.3.1

Calibrate the session first with `g2x_calibrate_session`; per-dataset filter keys; company ownership wording; people directory and plan wording aligned with the served skill. (Folded into 1.4.0.)

## 1.2.1

Playbook guidance for opportunities, markets, companies, events, documents, capture, work products, pursuits, CRM, migration and connection recovery.
