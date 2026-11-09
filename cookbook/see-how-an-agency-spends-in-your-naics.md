# See how an agency spends in your NAICS code

See how one agency's contract dollars and award counts in a NAICS code split by set-aside type for a fiscal year, with one plain-language question.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/see-how-an-agency-spends-in-your-naics

## What you get

Ask your AI agent to add up what one agency obligated in your NAICS code for a fiscal year, grouped by how the work was set aside. Contractors use it to judge where an agency's money goes before choosing a target, and government market researchers use it to see how past spending split across small business categories.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
How did the Department of Veterans Affairs spend under NAICS 541512 in fiscal
year 2025? Group the dollars obligated and the number of awards by set-aside
type, largest first, and tell me which groups look like small business work.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt.

| Set-aside | Obligated dollars | Awards |
| --- | --- | --- |
| Unclassified | 3396212870.029999 | 199 |
| SERVICE DISABLED VETERAN OWNED SMALL BUSINESS SET-ASIDE | 432547168.77000004 | 124 |
| NO SET ASIDE USED. | 84234187.23 | 82 |
| SMALL BUSINESS SET ASIDE - TOTAL | 10526822.870000001 | 8 |
| SDVOSB SOLE SOURCE | 407390.81 | 2 |

## How to read it

- Dollars count all money obligated that year, and the award count counts awards with any activity that year, including awards first made in earlier years.
- The largest group is labeled Unclassified, and the answer does not say what falls in it, so do not read it as "no set-aside" or as small business work. Spelling differs between rows, and "SERVICE DISABLED VETERAN OWNED SMALL BUSINESS SET-ASIDE" and "SDVOSB SOLE SOURCE" are separate groups. Ask your agent to combine them for one service-disabled veteran figure.
- This is one agency, one NAICS code and one fiscal year. Other years, other agencies and task orders placed on another agency's vehicle can look different. Check the official record before you rely on a figure.

## Check it

The answer has no G2X links. To check a row, ask your agent to list the awards behind it, then open the G2X record links it returns, as in [Read a contract award record](./read-a-contract-award-record.md). Award counts from a list can differ from the grouped counts above.

## Variations

- "Group the same VA NAICS 541512 spend by awarding office instead of set-aside."
- "Show the top 10 awardees by obligated dollars for DHS under NAICS 541611 in fiscal year 2025."
- "Show Army obligations under NAICS 541512 by fiscal year for 2023 to 2025."

## Related recipes

- [Find the offices buying your service](./find-the-offices-buying-your-service.md)
- [Find the contract vehicles an agency uses](./find-the-contract-vehicles-an-agency-uses.md)
- [Ask a data question in plain English](./ask-a-data-question-in-plain-english.md)
