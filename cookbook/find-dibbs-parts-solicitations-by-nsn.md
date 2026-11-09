# Find DIBBS parts opportunities by NSN

Ask your AI agent to find a National Stock Number from an item name, read what the item is, and open the DIBBS opportunity search for that part.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-dibbs-parts-solicitations-by-nsn

## What you get

From an item name to a National Stock Number, what that part is, and the DIBBS opportunity search for it. This is for contractors that supply spare parts to the Defense Logistics Agency and want to know which parts to watch.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).
The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Search for flat washers in federal supply class 5310 and list five stock
numbers. Then look up the last one: tell me what the item is, how many part
numbers it has, and which weapon systems use it. Give me the DIBBS link.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. Five stock numbers for flat washers in federal supply class 5310.

| Stock number | Item | Federal supply class |
| --- | --- | --- |
| [5310-01-205-9196](https://g2x.com/app/opportunities/dibbs?q=5310-01-205-9196) | WASHER,FLAT | 5310 NUTS AND WASHERS |
| [5310-00-584-5628](https://g2x.com/app/opportunities/dibbs?q=5310-00-584-5628) | WASHER,FLAT | 5310 NUTS AND WASHERS |
| [5310-01-349-9634](https://g2x.com/app/opportunities/dibbs?q=5310-01-349-9634) | WASHER,FLAT | 5310 NUTS AND WASHERS |
| [5310-01-705-3549](https://g2x.com/app/opportunities/dibbs?q=5310-01-705-3549) | WASHER,FLAT | 5310 NUTS AND WASHERS |
| [5310-00-432-4064](https://g2x.com/app/opportunities/dibbs?q=5310-00-432-4064) | WASHER,FLAT | 5310 NUTS AND WASHERS |

The last one, 5310-00-432-4064, is WASHER,FLAT with 11 part numbers. It is used on: "MRAP - COMMON NSN - USED ON 7 MRAP VARIANTS AND 45 OTHER WEAPON SYSTEMS; AND MRAP - COUGAR CAT1 A1; MRAP - M-ATV; HIGH-MOBILITY ARTILLERY ROCKET SYSTEM (HIMARS); LOGISTICS SUPPORT VESSEL".

## How to read it

- An NSN names one item. The same item can carry many part numbers from different makers, so a match on a part number is a start, not proof it fits.
- The "used on" line helps you judge demand and whether the part is tied to a weapon system program. Not every stock number has one.
- The stock number tells you what the part is, and DIBBS is where open buys for it appear. Check the official record before you rely on a detail.

## Check it

Open the DIBBS link on a stock number in the table to see which opportunities G2X lists for it. Then read each solicitation on DIBBS for its drawings, quality clauses and any approved source list.

## Variations

- "Look up part number 9M-1974 and tell me which stock numbers it belongs to."
- "List the catalog items for supplier CAGE code 75Q65 in federal supply class 5310."
- "Find stock numbers for 'cartridge carbon dioxide' and tell me which ones had recent DIBBS award activity."

## Related recipes

- [Find sources for a national stock number](./find-sources-for-a-national-stock-number.md)
- [Find open opportunities by NAICS code](./find-open-opportunities-by-naics.md)
- [Review a vendor's federal award history](./review-a-vendors-federal-award-history.md)
