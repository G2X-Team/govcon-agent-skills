# Find open opportunities by NAICS code

Ask your AI agent for open federal opportunities under one NAICS code and get titles, types, agencies, set-asides and due dates with G2X record links.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-open-opportunities-by-naics

## What you get

A short list of active federal opportunities for the one NAICS code your company sells under, with the agency, type and response deadline for each. This is for contractors doing business development and capture who want a starting list without opening a search form.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).
The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Find open federal opportunities under NAICS 541512. Show the first five with
title, type, agency, set-aside, response deadline and the G2X link.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. Three of the five opportunities listed.

| Opportunity | Type | Agency | Set-aside | Response deadline |
| --- | --- | --- | --- | --- |
| [Enterprise Inventory Management](https://g2x.com/app/opportunities/sam/a5f6b56a-f8c9-4d16-8a08-1571b56e002f) | Sources Sought | HEALTH AND HUMAN SERVICES, DEPARTMENT OF | Total Small Business | 2026-11-12T11:00:00-05:00 |
| [TOTAL ENGINEERING AND INTEGRATION SERVICES (TEIS) IV On-Ramp Opportunity](https://g2x.com/app/opportunities/sam/f3b9b36b-0217-4fdd-9ce7-f60e33539fc6) | Combined Synopsis/Solicitation | DEPT OF DEFENSE | Partial Small Business | 2026-11-25T16:00:00-07:00 |
| [RFI: Agile Platform for Expeditionary C2 (APEX)](https://g2x.com/app/opportunities/sam/a94d56ff-8e2a-453b-92b2-629cba0f62ec) | Sources Sought | DEPT OF DEFENSE | Not listed | 2026-11-30T17:00:00-05:00 |

## How to read it

- The type tells you what the agency is asking for. Sources Sought is market research, not a request for offers. Combined Synopsis/Solicitation is a live request for offers.
- "Not listed" under set-aside means the record has no set-aside. Read the full opportunity before you assume it is open to all sizes.
- Each response deadline carries a time zone offset. Convert it before you plan around it.
- A short list is a starting point, not a count of every opportunity under the code. One NAICS code matches only opportunities that carry that code, so related codes such as 541511 or 541519 need their own search.

## Check it

Open the G2X page on any title and compare its type, agency and deadline with the table. Deadlines can change by amendment, so confirm the current date on the opportunity before you commit capture time.

## Variations

- "Find open opportunities under NAICS 541330 posted by the Army and sort them by response deadline."
- "Search NAICS 236220 for open construction opportunities that are due before 2026-12-31."
- "Search open opportunities for 541512 and 541519 and tell me which ones list a small business set-aside."

## Related recipes

- [Find small business set-aside opportunities](./find-small-business-set-aside-opportunities.md)
- [Find sources sought opportunities](./find-sources-sought-opportunities.md)
- [Read solicitation documents](./read-solicitation-documents.md)
