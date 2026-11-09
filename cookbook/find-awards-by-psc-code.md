# Find awards by PSC code

List federal contract awards that carry one product or service code, with the awardee, dates and dollars, and see how many match before you narrow.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-awards-by-psc-code

## What you get

The awards coded to one product or service code (PSC), with the awardee, dates and dollars, and the number of awards that match. Contractors use it to see who has won work under a code they sell into, and government market researchers use it to find prior awards for a similar requirement.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
List awards coded to PSC D302. Show a few with the awardee, the awarding
agency, the award date, the period of performance end date, obligations to
date and NAICS code, and tell me how many awards match in total. Link each to
its G2X record.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. Four of the 8242 awards that match PSC D302.

| Contract | Awardee | Awarding agency | Period ends | Dollars obligated |
| --- | --- | --- | --- | --- |
| [GSQ0317DS0036](https://g2x.com/app/awards/contracts/CONT_AWD_GSQ0317DS0036_4732_GS00Q09BGD0025_4735) | GENERAL DYNAMICS INFORMATION TECHNOLOGY, INC. | Federal Acquisition Service | 2022-12-04 | 20971851.5 |
| [47QFMA21F0003](https://g2x.com/app/awards/contracts/CONT_AWD_47QFMA21F0003_4732_47QTCK18D0003_4732) | GENERAL DYNAMICS INFORMATION TECHNOLOGY, INC. | Federal Acquisition Service | 2026-01-31 | 575507884.38 |
| [50310220F0070](https://g2x.com/app/awards/contracts/CONT_AWD_50310220F0070_5000_50310219D0003_5000) | ASCELLA TECHNOLOGIES, INC. | Securities and Exchange Commission | 2027-03-31 | 7096130.71 |
| [70SBUR19F00000029](https://g2x.com/app/awards/contracts/CONT_AWD_70SBUR19F00000029_7003_GS35F053GA_4732) | SLALOM, INC. | U.S. Citizenship and Immigration Services | 2023-06-30 | 128374833.93 |

## How to read it

- A total of 8242 means a PSC alone is a broad net. It spans many agencies, years and NAICS codes. Add an agency, a fiscal year or a NAICS code one at a time, because a combination can match nothing. A result of 0 is not proof that no such awards exist: loosen one filter and ask again.
- The list mixes old and current awards, so read the end date on each row; several here ended years ago.
- A PSC describes what was bought, while the NAICS code describes the industry of the seller. They often differ.
- "Dollars obligated" is the money obligated on the award so far, not its price or what the work would cost today. Check the official record before you rely on a figure.

## Check it

Open the G2X page linked on any contract number to see the award, and compare its dates and dollars with the row.

## Variations

- "List awards with PSC D302 and NAICS 541512 at the Department of Homeland Security, awarded since October 2023."
- "Count awards by PSC for Army under NAICS 541512 in fiscal year 2025 and show the top 5 codes."
- "Show only IDV awards coded to PSC D399, with their stated ceilings."

## Related recipes

- [Check prior awards for a similar requirement](./check-prior-awards-for-a-similar-requirement.md)
- [See how an agency spends in your NAICS code](./see-how-an-agency-spends-in-your-naics.md)
- [Search across G2X records](./search-across-g2x-records.md)
