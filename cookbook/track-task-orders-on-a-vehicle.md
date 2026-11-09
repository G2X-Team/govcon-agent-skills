# Track task orders on a vehicle

See how many task orders sit under one IDV award, how many dollars were obligated on them, and review the orders with dates and amounts.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/track-task-orders-on-a-vehicle

## What you get

Ask your AI agent for the task orders placed under one IDV award, with the count, the dollars obligated and the orders themselves. Contractors use it to see which orders an incumbent holds and when they end, and government program offices use it to review ordering activity on a vehicle. You need the IDV's award number.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Show me the task orders under IDV VA11816D1019. Give the number of orders on
record, the dollars obligated on them, the IDV's own obligation and stated
ceiling, and then list the orders with award date, end date and obligations.
Link each to its G2X record.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The IDV has 1 contract holder on record and 26 task orders, with 534251977.15 dollars obligated on them. Its own obligation is 0 USD and its stated ceiling is 22,300,000,000 USD.

| Order number | Awarded | Ends | Obligations to date |
| --- | --- | --- | --- |
| 36C10B24N10190019 | 2024-07-02 | 2027-01-04 | 81493287.1 |
| 36C10B23N10190023 | 2022-12-15 | 2026-12-15 | 716234.76 |
| 36C10B22N10190022 | 2022-04-11 | 2025-07-11 | 70310441.65 |
| 36C10B21N10190020 | 2021-01-28 | 2026-01-31 | 12766040.63 |

## How to read it

- The counts are what G2X can see. Holders may be missing, and the figures are not the vehicle's ceiling. The program office publishes both.
- The stated ceiling, 22.3 billion dollars, is far above the 534.3 million obligated on the 26 orders, and only 1 holder is on record. Confirm the holders and the ceiling with the program office before you size the opportunity.
- The IDV's own obligation is 0, so the money sits on the orders.
- Two of these four orders show end dates before the day of capture, so open each record and look for a later modification or option before you treat an order as ended.

## Check it

Open the G2X pages for the IDV and any order from the links in the answer. To read more orders, ask your agent to continue the search, and check that the pages together reach the 26 orders reported.

## Variations

- "List the orders under this IDV that end in calendar year 2027, soonest first."
- "Which orders under this IDV had the most dollars obligated, and who holds them?"

## Related recipes

- [Find the contract vehicles an agency uses](./find-the-contract-vehicles-an-agency-uses.md)
- [Choose a contract vehicle from agency usage](./choose-a-contract-vehicle-from-agency-usage.md)
- [Read a contract award record](./read-a-contract-award-record.md)
