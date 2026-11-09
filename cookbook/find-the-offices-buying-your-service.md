# Find the offices buying your service

See which contracting offices obligated the most money under your NAICS code, so you know which buyers to research and meet first.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-the-offices-buying-your-service

## What you get

See which contracting offices obligated the most money under one NAICS code, with how many awards each placed. This is for contractor business development and capture staff deciding which buyers to research first.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Which 6 contracting offices obligated the most money under NAICS 541512 in
fiscal year 2025? Show the office name, office code, dollars obligated and
number of awards for each. Tell me how many offices the query found in total
and whether the answer is provisional.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt.

| Office | Office code | Obligated dollars | Awards |
| --- | --- | --- | --- |
| TECHNOLOGY ACQUISITION CENTER NJ (36C10B) | 36C10B | 3481353079.849998 | 268 |
| GSA FAS AAS FEDSIM | 47QFCA | 3013366228.99 | 72 |
| OFC OF ACQUISITION AND GRANTS MGMT | 75FCMC | 1857955170.23 | 169 |
| ACQUISITIONS - AQM MOMENTUM | 19AQMM | 993705261.7000002 | 170 |

## How to read it

- Each row is one contracting office. Obligated dollars are money committed in fiscal year 2025 on awards under NAICS 541512, not the ceiling of those contracts.
- Dollars and award counts tell different stories. The second office shows 72 awards for over 3 billion dollars, while the fourth shows 170 awards for under 1 billion. Match the office to the size of work you can win. A smaller office further down the list may fit a small business better.
- Several office names do not name their agency, so use the office code to find the agency. Use the figures to decide whom to research, not as numbers to quote. Check the official record before you rely on a figure.

## Check it

Ask your agent for the awards from one office, for example office code 36C10B, and open the G2X pages it returns to compare amounts with the row. Look up the office on the agency's own site before you send a capability statement.

## Variations

- "Show the top 10 offices by obligated dollars for PSC D302 in fiscal year 2025."
- "Which offices under the Department of Veterans Affairs (agency code 3600) obligated the most on NAICS 541512?"
- "List awards from office 36C10B under NAICS 541512 that end in the next 12 months, soonest first."

## Related recipes

- [See how an agency spends in your NAICS](./see-how-an-agency-spends-in-your-naics.md)
- [Find contracts expiring next year](./find-contracts-expiring-next-year.md)
- [Ask a data question in plain English](./ask-a-data-question-in-plain-english.md)
