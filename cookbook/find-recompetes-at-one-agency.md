# Find recompetes at one agency office

Check one contracting office for contracts ending within a year in your NAICS code, with the open opportunities that could be their recompetes.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-recompetes-at-one-agency

## What you get

The contracts at one contracting office that end within the next year, each with the open opportunities that could be its recompete. This is for contractor capture and business development staff who want to watch one buyer's follow-on work.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Show contracts under NAICS 541512 that end in the next 12 months at
contracting office 36C10B, soonest end first. For each, give the holder, end
date, dollars obligated and any open opportunities that could be its recompete,
with the confidence band. Give me the G2X link for each contract.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The first five of 152 contracts, all with the Department of Veterans Affairs.

| Contract | Holder | Ends | Dollars obligated | Open opportunities |
| --- | --- | --- | --- | --- |
| [36C10B23N10240025](https://g2x.com/app/awards/contracts/CONT_AWD_36C10B23N10240025_3600_VA11816D1024_3600) | CLEAR VANTAGE POINT SOLUTIONS LLC | 2026-11-22 | 6130699.2 | 0 |
| [36C10B22N0045EHRM](https://g2x.com/app/awards/contracts/CONT_AWD_36C10B22N0045EHRM_3600_36C10B18D5000_3600) | ORACLE HEALTH GOVERNMENT SERVICES, INC. | 2026-11-30 | 423192138.04 | 3 |
| [36C10B25C0022](https://g2x.com/app/awards/contracts/CONT_AWD_36C10B25C0022_3600_-NONE-_-NONE-) | DOCUMENT STORAGE SYSTEMS, INC. | 2026-11-30 | 60487792.7 | 1 |
| [36C10B26C0054](https://g2x.com/app/awards/contracts/CONT_AWD_36C10B26C0054_3600_-NONE-_-NONE-) | BLEN INC. | 2026-12-01 | 258247.98 | 2 |
| [36C10B22N10240020](https://g2x.com/app/awards/contracts/CONT_AWD_36C10B22N10240020_3600_VA11816D1024_3600) | CLEAR VANTAGE POINT SOLUTIONS LLC | 2026-12-02 | 32729506.75 | 3 |

The open opportunities listed for the second contract, 36C10B22N0045EHRM:

| Opportunity | Type | Due date | Match |
| --- | --- | --- | --- |
| DA01--VA-27-00015330 - Mission-Oriented Services for Application Integration and Capabilities (MOSAIC) | Sources Sought | 2026-11-04T20:00:00 | strong |
| DA01--CORP: VCS Standalone IT Support Contract - RFI (VA-27-00012857) | Sources Sought | 2026-11-09T15:00:00 | strong |
| DA01--RFI Action Only Healthcare Data Auditing Billing and Coding Optimization Software | Sources Sought | 2026-11-06T20:00:00 | strong |

## How to read it

- Every opportunity listed is a possibility, not a confirmed recompete. Read each one before you count it: a "strong" match is not proof of the same work.
- The same opportunity can appear under several contracts. The first one in the second table matched three of these five contracts.
- The end date is the period of performance end on the record. Options or extensions can move it, so confirm before you plan around it.
- Confirm each opportunity's deadline and instructions on the agency's own posting before you respond.

## Check it

Open the G2X page on a contract number and compare the holder, end date and obligated amount with the row. To read the incumbent's history, use [Research the incumbent on a recompete](./research-the-incumbent-on-a-recompete.md).

## Variations

- "Run the same search for office code 47QFCA, with the largest contracts first."
- "Show contracts ending between 6 and 18 months from now at office 36C10B under NAICS 541519."
- "Which of those contracts are held by this UEI: [paste a UEI]?"

## Related recipes

- [Build a recompete list](./build-a-recompete-list.md)
- [Research the incumbent on a recompete](./research-the-incumbent-on-a-recompete.md)
- [Find contracts expiring next year](./find-contracts-expiring-next-year.md)
