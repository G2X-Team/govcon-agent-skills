# Choose a contract vehicle from usage data

See how a multiple-award vehicle is used, with contract holders, task orders and dollars obligated, before you pick an ordering vehicle.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/choose-a-contract-vehicle-from-agency-usage

## What you get

How a contract vehicle is actually used, such as how many contract holders and task orders are on record and how much has been obligated, before you decide where to place an order. This is for contracting officers, specialists and program offices working on acquisition planning.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
I am planning a services acquisition and considering OASIS+ as the ordering
vehicle. List the OASIS+ vehicles on record with their ordering periods.
Then, for the small business vehicle, tell me how many contract holders,
task orders and obligated dollars are on record. Remind me what those
figures do not tell me.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. Three of the six OASIS+ vehicles listed.

| Vehicle | Program | Ordering period |
|---|---|---|
| R--GSA OASIS+ MAC Program Unrestricted IDIQ | OAS+UR | 2024-12-06 to 2034-12-05 |
| R--GSA OASIS+ MAC Program Small Business IDIQ | OAS+SB | 2024-12-17 to 2034-12-18 |
| R--GSA OASIS+ MAC Program Women Owned Small Business | OAS+WO | 2024-09-30 to 2034-09-29 |

For the Small Business vehicle (solicitation 47QRCA23R0001, last date to order 2034-12-18):

| Measure | On record |
|---|---|
| Contract holders | 163 |
| Task orders | 241 |
| Dollars obligated | 774474168.46 |

## How to read it

- G2X's records may not list every holder, so treat the counts as a floor for activity, not a roster.
- Obligated dollars are not the vehicle's ceiling or remaining capacity. The program office publishes the ceiling and the holder list.
- This describes a vehicle across all of its orders, not only your agency's. To see which vehicles your agency's peers order against, use [Find the contract vehicles an agency uses](./find-the-contract-vehicles-an-agency-uses.md).
- Usage is one input to market research. It does not say whether a vehicle covers your scope, whether its holders have capacity, or which ordering procedures apply. Check the official record before you rely on a figure.

## Check it

This answer has no page link to open. Compare the holder count and obligated dollars with what the program office publishes for the vehicle, and ask your agent for any holder's award history by UEI to see its recent orders.

## Variations

- "Show how the GSA Alliant 3 vehicle is used: holders on record, task orders and obligated dollars. Tell me what I need to confirm with the program office."
- "I know the IDV PIID GS35F0119Y. Report that award and a bounded list of its orders."
- "Compare two vehicles I am considering for network services and list what the award data cannot tell me about either."

## Related recipes

- [Find the contract vehicles an agency uses](./find-the-contract-vehicles-an-agency-uses.md)
- [Track task orders on a vehicle](./track-task-orders-on-a-vehicle.md)
- [Review a vendor's federal award history](./review-a-vendors-federal-award-history.md)
