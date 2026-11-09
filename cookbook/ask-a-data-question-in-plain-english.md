# Ask a data question in plain English

Ask a procurement spending question in everyday words and get a ranked answer from your AI agent, then check the numbers yourself.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/ask-a-data-question-in-plain-english

## What you get

Ask a spending or count question in everyday words and get a ranked answer with dollars and award counts. Contractors use it to size a market before a bid; government teams use it for market research and acquisition planning.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Which five agencies obligated the most money on NAICS 541512 in fiscal
year 2025? Show dollars obligated and number of awards for each, tell me
how many agencies the query found in total, and say whether the answer
is provisional.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The top five of 62 agencies in total.

| Agency | Dollars obligated | Awards |
| --- | --- | --- |
| Department of Defense | 9464160541.159992 | 11168 |
| General Services Administration | 5537076994.6 | 356 |
| Department of Veterans Affairs | 3923951411.709998 | 416 |
| Department of Health and Human Services | 3364271513.8099985 | 1107 |
| Department of Homeland Security | 2567702227.4600005 | 758 |

## How to read it

- Each row is one awarding agency. "Dollars obligated" is money committed in fiscal year 2025 on awards under NAICS 541512. It is not the total value of those contracts.
- Use the answer to size a market and decide where to look next, not as a figure for a filing.
- A NAICS code matches the code recorded on the award. Work you would call IT services may sit under other codes, so repeat the question for each code you serve.
- Check the official record before you rely on a figure.

## Check it

This answer has no page link to open. Ask your agent to list every award behind one row, for example Department of Veterans Affairs, with its fiscal year 2025 obligations, and check that they add up to the row.

## Variations

- "How many active awards under PSC D302 end between 2026-10-01 and 2027-09-30?"
- "Which five NAICS codes had the most obligated dollars at the Department of Veterans Affairs in fiscal year 2025?"
- "What is the GSA per diem rate for Huntsville, Alabama?"

## Related recipes

- [See how an agency spends in your NAICS](./see-how-an-agency-spends-in-your-naics.md)
- [Find the offices buying your service](./find-the-offices-buying-your-service.md)
- [Search across G2X records](./search-across-g2x-records.md)
