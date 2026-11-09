# Read a contract award record

Open one known federal contract award and read the awardee, agency, key dates and dollar figures, with what each amount means.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/read-a-contract-award-record

## What you get

Open one federal contract award and have your agent explain it in plain words. Contractors use it to check an incumbent's award before a bid, and government specialists use it to confirm what a prior award covered and what it cost. You need the award's ID from an earlier search, such as [Find contracts expiring next year](./find-contracts-expiring-next-year.md).

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Open the award CONT_AWD_36C10B24N10190019_3600_VA11816D1019_3600 and explain
it to me: who holds it, which agency bought it, the award date, when the
period of performance ends, and the difference between the obligations to
date and the contract value. Link me to its G2X page.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. Award: IDENTITY AND ACCESS MANAGEMENT, Department of Veterans Affairs, awarded 2024-07-02.

| Item | Value |
| --- | --- |
| Awardee | BY LIGHT PROFESSIONAL IT SERVICES LLC |
| Period of performance ends | 2027-01-04 |
| Obligations to date | 81493287.1 |
| Current contract value | 81493287.1 |
| Total contract value | not available |

## How to read it

- Obligations to date is the money committed on the award so far. Current contract value is the base plus the options exercised so far. Here they are equal.
- Total contract value, the base plus all options, is not available for this award. Do not read the current value as the ceiling.
- Unexercised options can extend the end date, and a later modification can change any figure. Check the official record before you rely on a figure.

## Check it

Open the G2X page for the award from the link in the answer to see the same record. For the contract documents, statement of work or option schedule, use the agency's official sources or ask the contracting office.

## Variations

- "Open this award and list its modifications with dates and obligation changes."
- "Open this IDV award and tell me its stated ceiling and who else holds it."

## Related recipes

- [Find contracts expiring next year](./find-contracts-expiring-next-year.md)
- [See a company's published labor rates](./see-a-companys-published-labor-rates.md)
- [Review a vendor's federal award history](./review-a-vendors-federal-award-history.md)
