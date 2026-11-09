# Build a recompete list

List contracts ending in the next 12 months for a NAICS code, each with the open opportunities that could be its recompete.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/build-a-recompete-list

## What you get

The contracts in your NAICS code that end in the next 12 months, each paired with the open opportunities that could be its recompete. Contractors use it to build a capture pipeline from the follow-on work, and government acquisition planners use it to see which expiring requirements already have opportunities out.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Build me a recompete list for NAICS 541611. Show contracts ending in the next
12 months, soonest first. For each one give the agency, the awardee, the end
date and the dollars obligated, then list any opportunities that could be its
recompete with the type, the deadline and how confident the match is.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. Three of the 5565 contracts ending in the next 12 months, soonest first.

| Contract | Agency | Awardee | Ends | Dollars obligated |
| --- | --- | --- | --- | --- |
| [75D30122F15688](https://g2x.com/app/awards/contracts/CONT_AWD_75D30122F15688_7523_75D30120A08217_7523) | Centers for Disease Control and Prevention | WESTAT, INC. | 2026-10-29 | 8014204.46 |
| [693JF721F000078](https://g2x.com/app/awards/contracts/CONT_AWD_693JF721F000078_6938_47QRAA19D0085_4732) | Maritime Administration | GUIDEHOUSE INC. | 2026-10-29 | 4615601.53 |
| [HT001125C0069](https://g2x.com/app/awards/contracts/CONT_AWD_HT001125C0069_9700_-NONE-_-NONE-) | Defense Health Agency | ALEKNAGIK TECHNOLOGY, LLC | 2026-10-29 | 3695936.07 |

Opportunities listed as possible recompetes for those contracts:

| Contract | Opportunity | Type | Due date | Match |
| --- | --- | --- | --- | --- |
| 75D30122F15688 | [Safety, Prevention, Epidemiology, and Education Development for Health Care and Antimicrobial Resistance - SPEED 2027-2032](https://g2x.com/app/opportunities/sam/3ce3d10b-c31a-4ae6-a3ec-da79fe67541e) | Presolicitation | 2026-11-08T22:00:00 | strong |
| 693JF721F000078 | [Marine Coaching services](https://g2x.com/app/opportunities/sam/86fc3b30-ded5-4751-9a7f-2e1747816895) | Sources Sought | 2026-07-22T18:00:00 | possible |
| HT001125C0069 | [Request for Information for Defense Travel System and Centrally Billed Account Reconciliation Support](https://g2x.com/app/opportunities/sam/66e71f3f-2a9c-403d-8570-6076c563b5a0) | Sources Sought | 2026-01-21T17:00:00 | possible |

## How to read it

- Every row is a possibility, not a confirmed recompete. Read the opportunity itself before you count it: a strong match can still describe a different requirement.
- A closed Sources Sought opportunity may mean the market research is done and a solicitation could follow, or that the requirement went another way. The answer does not say which.
- An opportunity that announces an intent to extend a sole source contract is a warning sign for a competitive recompete: the agency may be planning to keep the incumbent.
- Confirm the response deadline and instructions on the opportunity before you act on it.

## Check it

Open the contract and opportunity links in the tables to read each award and opportunity with its dates on its G2X page.

## Variations

- "Same recompete list for NAICS 541512, but start three months from now and sort by contract value."
- "Show contracts held by this UEI that end in the next 18 months and any opportunities that could replace them."
- "Limit the list to one contracting office and PSC R408."

## Related recipes

- [Find contracts expiring next year](./find-contracts-expiring-next-year.md)
- [Research the incumbent on a recompete](./research-the-incumbent-on-a-recompete.md)
- [Find recompetes at one agency](./find-recompetes-at-one-agency.md)
