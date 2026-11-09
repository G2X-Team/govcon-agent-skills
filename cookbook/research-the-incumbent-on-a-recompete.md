# Research the incumbent on a recompete

Pull an incumbent contractor's federal award history and held contract vehicles by UEI, so you know who you are up against before you bid.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/research-the-incumbent-on-a-recompete

## What you get

Ask your AI agent what an incumbent has won in your NAICS code and which contract vehicles it holds. Capture and proposal teams use it to size up the company they would displace, and government market researchers use it to see how a current performer's work is spread across agencies. You need the incumbent's 12-character UEI.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
The incumbent on a Veterans Affairs IT contract is BY LIGHT PROFESSIONAL IT
SERVICES LLC, UEI NKKQE6FG4C28. Show its contract history under NAICS 541512:
how many awards and how many dollars obligated, the awards you can list with
agency, dates and dollars, and the contract vehicles it holds.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. For NAICS 541512 the answer reported 112 awards and 1497591690.39 dollars obligated.

| Number | Type | Agency | Dates listed | Obligated |
| --- | --- | --- | --- | --- |
| 49100420F0014 | Contract | National Science Foundation | 2020-01-01 to 2026-11-30 | $102.9M |
| 36C10B24N10190019 | Contract | Department of Veterans Affairs | 2024-07-05 to 2027-01-04 | $81.5M |
| HC108426F0254 | Contract | Defense Information Systems Agency | 2026-05-09 to 2027-05-08 | $41.7M |
| VA11816D1019 | IDV | Department of Veterans Affairs | 2026-03-06 | |
| 47QTCB26D0036 | IDV | Federal Acquisition Service | 2036-03-09 | |

## How to read it

- The rows are a sample, not the whole record, so do not add them up and compare the sum to the 112 awards. Spread matters more than size: this incumbent has awards at three agencies, so it is a multi-agency performer. Subawards are not included.
- An incumbent that holds the vehicle an order sits on can often compete for the follow-on in ways a non-holder cannot, and VA11816D1019 is a held vehicle here. Confirm what a vehicle's date measures on its record, and check the official record before you rely on a figure.

## Check it

The answer carries no G2X link, so confirm the awards and vehicles in the agencies' official award records. To open any award's record on G2X, follow [Read a contract award record](./read-a-contract-award-record.md).

## Variations

- "Show this company's awards in the last three fiscal years only, and only those ending within 180 days."
- "List this company's small business set-aside awards under NAICS 541512."
- "Compare the vehicles held by the incumbent and by one challenger, side by side."

## Related recipes

- [Review a company's contract history](./review-a-companys-contract-history.md)
- [Size up a rival before you bid](./size-up-a-rival-before-you-bid.md)
- [Find subcontractors for a recompete](./find-subcontractors-for-a-recompete.md)
