# Find capable small businesses for market research

Build a first list of candidate firms from the G2X company directory, with primary NAICS code, state and federal award history, for market research.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/market-research-find-capable-small-businesses

## What you get

Start a candidate list for market research: firms whose names fit your requirement, with each firm's primary NAICS code, state and federal award history. This is for contracting officers, small business specialists and program offices working on market research and acquisition planning.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
I am doing market research for a cybersecurity services requirement. Search the
G2X company directory for firms with "cybersecurity" in their name. For each
firm show the legal business name, UEI, primary NAICS code, state, how many
federal awards it has on record and the total obligated, with its G2X record
link. Then tell me what this search does not show, so I know what to check
before I treat any of them as a capable small business.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt.

| Company | UEI | Primary NAICS | State | Awards on record |
| --- | --- | --- | --- | --- |
| AYON CYBERSECURITY, INC. | D99JMB845P75 | 334111 | FL | 70 |
| TYETECHNOLOGY CYBERSECURITY ACADEMY CORPORATION | ZBJ9QWXQD5Z3 | 611420 | NC | 0 |
| ADVANCED CYBERSECURITY SOLUTIONS, LLC | YMJBTEH9EW96 | 541512 | MD | 0 |

## How to read it

- A name match is a lead, not a capability finding. Names can point to the wrong line of work: the first firm lists primary NAICS 334111 and the second lists 611420, neither of which is a cybersecurity services code.
- Zero awards on record means no federal prime awards were found for that firm, not that it lacks capability. Nothing here shows size or socioeconomic status, so check certifications, award history, capability statements and responses to your request for information. The market research conclusions are yours. Check the official record before you rely on a figure.

## Check it

Open the G2X page for a row and compare its UEI, primary NAICS code and state with the table, for example [AYON CYBERSECURITY, INC.](https://g2x.com/app/companies/D99JMB845P75). Confirm registration, size and certifications in the official registration records before you rely on any firm.

## Variations

- "Search the company directory for firms with 'network engineering' in the name and list their primary NAICS codes and states."
- "Look up this UEI and tell me the legal business name, primary NAICS code and award history."
- "Show the next page of the cybersecurity company search, and group the results by primary NAICS code."

## Related recipes

- [Verify a vendor's socioeconomic status](./verify-a-vendors-socioeconomic-status.md)
- [Apply the rule of two with market data](./apply-the-rule-of-two-with-market-data.md)
- [Find companies by capability and NAICS](./find-companies-by-capability-and-naics.md)
