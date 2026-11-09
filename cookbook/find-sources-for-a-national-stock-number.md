# Find sources for a national stock number

Identify the item behind a national stock number and the part numbers and catalog holders on record, as a starting point for supply market research.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-sources-for-a-national-stock-number

## What you get

A starting point for supply market research from a national stock number (NSN): what the item is, which federal supply class it sits in, and which part numbers and catalog holders are on record. This is for supply and logistics specialists, buyers and contracting officers who need to identify an item before they look for sources.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
I am doing market research on a part. Look up NSN 5305-01-599-0244. Tell me
what the item is, its federal supply class, what it is used on, and each part
number with the CAGE code and company listed against it. Then tell me what
this lookup does not establish about approved sources.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt.

| NSN | Item | Federal supply class | Used on |
|---|---|---|---|
| 5305-01-599-0244 | SCREW,CAP,SOCKET HEAD | 5305 SCREWS | MRAP - M-ATV |

| Part number | Company listed | CAGE code | Location |
|---|---|---|---|
| 3883473 | OSHKOSH CORP | 45152 | OSHKOSH, WI, UNITED STATES |
| 3883473 | OSHKOSH DEFENSE LLC | 75Q65 | OSHKOSH, WI, UNITED STATES |

## How to read it

- This answers "what is this item and whose part number is on it". It does not answer "who may supply it". The company entries are labeled "catalog references (part-number holders in the catalog), not approved sources."
- Approved or qualified sources, source control, qualification requirements and technical data restrictions come from the item's engineering and procurement records. Check them before you set evaluation criteria or limit competition.
- The two entries share a part number but list different CAGE codes, and the catalog identifies a part by CAGE code and part number together. Treat them as two catalog references, and confirm in the official catalog record how they relate before you treat them as one design or as two sources. Distributors, other manufacturers and equivalent parts are not shown.
- The answer shows no prices, lead times, quantities or past buys.

## Check it

This answer has no page link to open. Confirm the stock number, item name and part-number entries in the official catalog record, then check the procurement history and source restrictions for the item through your own buying system.

## Variations

- "Look up the bare item number 015990244 and tell me whether the NSN was cancelled or replaced."
- "Look up these four NSNs one at a time and put the item name and federal supply class in one table, noting any the catalog does not hold."
- "For this NSN, list the open opportunities on G2X that name it, so I can see whether a buy is already in progress."

## Related recipes

- [Find DIBBS parts solicitations by NSN](./find-dibbs-parts-solicitations-by-nsn.md)
- [Find companies by capability and NAICS](./find-companies-by-capability-and-naics.md)
- [See what similar offices bought](./see-what-similar-offices-bought.md)
