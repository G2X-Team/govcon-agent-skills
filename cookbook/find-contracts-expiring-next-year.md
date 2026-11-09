# Find contracts expiring next year

List federal contracts whose period of performance ends in a date window, by agency and NAICS code, so you can plan capture before the recompete.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-contracts-expiring-next-year

## What you get

The contracts at one agency that end in a date window, with the awardee, the end date and the dollar value for each. Contractors use it to start capture early on a recompete, and government market researchers and acquisition planners use it to see which requirements are coming up for renewal.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
List Department of Veterans Affairs contracts under NAICS 541512 whose period
of performance ends between January 1, 2027 and December 31, 2027. For each
one, show the contract number, the awardee, the end date and the current
contract value, soonest ending first. Link each to its G2X record.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The first five contracts, soonest ending first.

| Contract | Awardee | Period ends | Current contract value | Set-aside |
| --- | --- | --- | --- | --- |
| [36C10G26N0079](https://g2x.com/app/awards/contracts/CONT_AWD_36C10G26N0079_3600_36C10G24D0048_3600) | SOLDIERPOINT DIGITAL HEALTH, LLC | 2027-01-01 | 540413.6 | Not listed |
| [36C10B24N10240029](https://g2x.com/app/awards/contracts/CONT_AWD_36C10B24N10240029_3600_VA11816D1024_3600) | CLEAR VANTAGE POINT SOLUTIONS LLC | 2027-01-03 | 4713327.84 | SDVOSBC |
| [36C10B24N10190019](https://g2x.com/app/awards/contracts/CONT_AWD_36C10B24N10190019_3600_VA11816D1019_3600) | BY LIGHT PROFESSIONAL IT SERVICES LLC | 2027-01-04 | 81493287.1 | Not listed |
| [36C10B21N10250020](https://g2x.com/app/awards/contracts/CONT_AWD_36C10B21N10250020_3600_VA11816D1025_3600) | INSIGNIA TECHNOLOGY SERVICES, LLC | 2027-01-07 | 3964629.28 | SDVOSBC |
| [36C25026C0045](https://g2x.com/app/awards/contracts/CONT_AWD_36C25026C0045_3600_-NONE-_-NONE-) | CAREFUSION SOLUTIONS, LLC | 2027-01-12 | 34785 | NO SET ASIDE USED. |

## How to read it

- Each end date is the end of the current period, normally the current option period. Options not yet exercised can push an award past it, so treat each date as a planning signal, not a final end date.
- "Current contract value" is the base plus exercised options. It is not the total with all options.
- Four of the five rows are delivery orders under an existing vehicle. Their parent vehicle usually decides who can compete for the follow-on, so look at the vehicle before you decide to pursue one.
- The list does not tell you whether the agency plans a recompete, a sole-source extension or no follow-on at all.

## Check it

Open the G2X page linked on any contract number to see the award and its history. Before you commit capture budget, confirm the end date and any remaining options with the contracting office.

## Variations

- "Show Army contracts under NAICS 541611 that end in fiscal year 2027 and are worth at least $5 million."
- "Which 8(a) set-aside awards at DHS end between July and December 2027?"
- "List the IDV awards, not task orders, that end in 2027 under NAICS 541512."

## Related recipes

- [Build a recompete list](./build-a-recompete-list.md)
- [Research the incumbent on a recompete](./research-the-incumbent-on-a-recompete.md)
- [Find recompetes at one agency](./find-recompetes-at-one-agency.md)
