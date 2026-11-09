# Find the contract vehicles an agency uses

Check how a contract vehicle is used, holders on record, task orders and dollars obligated, and pick the right vehicle when a name fits several.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-the-contract-vehicles-an-agency-uses

## What you get

See how many contract holders, task orders and dollars a contract vehicle carries, so you can decide which vehicles are worth a position. This is for contractors choosing where to compete and for acquisition planners judging how busy a vehicle is.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Veterans Affairs buys IT through T4NG2, and many agencies use OASIS+ for
professional services. For each, show how many contract holders G2X has on
record, how many task orders and how many dollars were obligated on them. If
a name matches several vehicles, list them so I can pick one by its vehicle ID.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt.

| Vehicle | Holders on record | Task orders | Obligated dollars to date |
| --- | --- | --- | --- |
| DA01--Transformation Twenty-One Total Technology Next Generation 2 (T4NG2) | 34 | 34 | 34000 |
| R--GSA OASIS+ MAC Program Small Business IDIQ | 163 | 241 | 774474168.46 |

## How to read it

- The counts are what G2X can see. Holders may be missing, and the figures are not the vehicle's ceiling. The program office publishes both.
- The T4NG2 figures look low, 34 orders worth $34,000 in total, so the record may be thin. Confirm with the program office before you judge the vehicle by it.
- OASIS+ comes in several pools by set-aside. Pick the pool that fits your size and certifications so you do not read a neighboring pool's numbers.
- Name the vehicles you care about, from the agency's solicitations, forecast or acquisition pages. The answer covers the vehicles you name, not every vehicle an agency has used.

## Check it

The answer carries no G2X link, so check the counts against the program office's published holder list and ceiling.

## Variations

- "Which vehicle does this solicitation number belong to, and who holds it?"
- "Compare the Unrestricted and Small Business OASIS+ pools by task orders and dollars."
- "Show me the vehicle for award number VA11816D1019 and its orders."

## Related recipes

- [Choose a contract vehicle from agency usage](./choose-a-contract-vehicle-from-agency-usage.md)
- [Track task orders on a vehicle](./track-task-orders-on-a-vehicle.md)
- [See how an agency spends in your NAICS code](./see-how-an-agency-spends-in-your-naics.md)
