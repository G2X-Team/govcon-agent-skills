# Review a vendor's federal award history

See a vendor's prime award counts, indefinite-delivery contracts held and recent awards by UEI, as one input to a past performance review.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/review-a-vendors-federal-award-history

## What you get

See a vendor's federal contracting portfolio: how many prime awards it holds, which indefinite-delivery contracts and vehicles it holds, and its recent awards. This is for contracting officers, specialists and program offices who want a quick picture of a vendor's federal footprint during market research or a past performance review.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
For the vendor with UEI GHXRMYW4EBH5, show me its federal prime award
portfolio: how many prime awards, how many indefinite-delivery contracts, and
which vehicles it holds. Then list its recent awards from fiscal year 2024
forward with the awarding agency, dates and dollars obligated. Tell me what
this history does not cover, so I know what else to review.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. UNICARE BUILDING MAINTENANCE, INC has 29 contracts and 2 IDVs on record. From fiscal year 2024 forward the answer reported 8 awards and 564691.77 dollars obligated.

| Number | Type | Agency | Dates listed | Obligated |
| --- | --- | --- | --- | --- |
| FA860125FG124 | Contract | Department of the Air Force | 2024-10-01 to 2025-09-30 | $4,139 |
| 47QSMS24D0027 | IDV | Federal Acquisition Service | 2029-01-21 | |
| FA480013D0004 | IDV | Department of the Air Force | 2018-09-29 | |

## How to read it

- This is a portfolio summary, not a performance record. It says what the vendor holds and roughly how much has been obligated, not how well the work was done, so past performance evaluations stay a separate review.
- Read the scope of each number: the 29 contracts cover the whole history, while the 8 awards are for fiscal year 2024 forward, so do not expect the rows to add up to the counts. The whole-history answer listed counts and vehicles but not the individual contracts. Narrow by fiscal year, NAICS code or set-aside to see more.
- The history covers federal prime awards on record. State, local and commercial work, and the vendor's current capacity, are not in it. Check the official record before you rely on a figure.

## Check it

The answer carries no G2X link, so look the vendor up on G2X by its UEI and open its award records. Confirm the registration status, the awards and the vehicle holdings in the official award records before you rely on them.

## Variations

- "For this UEI, show only awards ending in the next 180 days, so I can see which of its contracts are about to expire."
- "Filter this vendor's history to NAICS 561720 and set-aside code SBA and tell me whether it has performed work like my requirement."
- "Show this vendor's IDVs and vehicles only, and tell me which agencies awarded them."

## Related recipes

- [Review a company's contract history](./review-a-companys-contract-history.md)
- [Research the incumbent on a recompete](./research-the-incumbent-on-a-recompete.md)
- [Verify a vendor's socioeconomic status](./verify-a-vendors-socioeconomic-status.md)
