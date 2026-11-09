# Scan agency procurement forecasts

Ask your AI agent for planned federal buys by NAICS code and fiscal year, with anticipated award dates, set-asides, estimated values and incumbents.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/scan-agency-procurement-forecasts

## What you get

See what agencies say they plan to buy before it is an open solicitation, for your NAICS code and fiscal year. This is for contractors in capture and business development who want to shape a bid early, and for program offices comparing what other agencies have posted.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Scan agency procurement forecasts for NAICS 541512 in fiscal year 2027. For
each one, show the agency, anticipated award date, set-aside, estimated value,
contract vehicle and incumbent if listed, and include the G2X link.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt.

| Title | Agency | Anticipated award | Set-aside | Estimated value |
| --- | --- | --- | --- | --- |
| Information Systems Division Professional Services | DHS | 2026-10-30 | SDVOSB | Over $100M |
| Railroad Safety Information Management Support | DOT | 2026-11-01 | Small Business Set Aside - Total | $5M - $9.9M |
| Asset Tracking Maintenance and Services | DHS | 2026-11-03 | None | $10M to $20M |

## How to read it

- A forecast is a planned buy that an agency has published. It is not an open solicitation, and you cannot submit an offer to it.
- Anticipated award dates, values and set-asides are the agency's estimates and can change. A date only days away, such as 2026-10-30, may mean the solicitation is already out or the buy has slipped, so search open opportunities for the same requirement.
- Estimated values are ranges, not budgets: use them to size the buy, not to price it. Contract vehicle and incumbent appear only where the agency listed them, and a missing incumbent does not mean the work is new.
- The list shows upcoming forecasts. Ask your agent to include awarded ones if you want history. Check the official record before you rely on a figure.

## Check it

Open the G2X forecast page from the link in the answer and compare the agency, the date and the value with the table.

## Variations

- "Scan VA procurement forecasts for NAICS 541512 and list the ones planned as set-asides for veteran-owned firms."
- "Scan DHS forecasts for NAICS 541330 with anticipated awards between January and June 2027."
- "Scan forecasts for 236220 at the Army and show which ones list an incumbent."

## Related recipes

- [Find open opportunities by NAICS code](./find-open-opportunities-by-naics.md)
- [Find sources sought opportunities](./find-sources-sought-opportunities.md)
- [Find contracts expiring next year](./find-contracts-expiring-next-year.md)
