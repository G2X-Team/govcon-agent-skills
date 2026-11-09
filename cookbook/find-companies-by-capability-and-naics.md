# Find companies by capability and NAICS

Search the G2X company directory by name or UEI, then read each firm's primary NAICS, state and federal award count to build a teaming shortlist.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-companies-by-capability-and-naics

## What you get

Companies found with a capability word, each with its primary NAICS code, state and federal award count, so you can shortlist firms. This is for contractors in capture, teaming and subcontractor sourcing.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Search G2X for companies with "cybersecurity" in their name. For each one, show the
legal name, UEI, primary NAICS code, state and how many federal awards it has on
record. Then tell me which ones list 541512 as their primary NAICS.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. Five of the 188 firms found.

| Company | UEI | Primary NAICS | State | Awards on record |
| --- | --- | --- | --- | --- |
| [AYON CYBERSECURITY, INC.](https://g2x.com/app/companies/D99JMB845P75) | D99JMB845P75 | 334111 | FL | 70 |
| [PACIFIC NORTHWEST CYBERSECURITY LLC](https://g2x.com/app/companies/H1V6QJYL7KJ3) | H1V6QJYL7KJ3 | 541512 | OR | 0 |
| [INNOVATIVE CYBERSECURITY SOLUTIONS LLC.](https://g2x.com/app/companies/GE1DL4M1V3Y5) | GE1DL4M1V3Y5 | 541611 | TX | 0 |
| [TYETECHNOLOGY CYBERSECURITY ACADEMY CORPORATION](https://g2x.com/app/companies/ZBJ9QWXQD5Z3) | ZBJ9QWXQD5Z3 | 611420 | NC | 0 |
| [ADVANCED CYBERSECURITY SOLUTIONS, LLC](https://g2x.com/app/companies/YMJBTEH9EW96) | YMJBTEH9EW96 | 541512 | MD | 0 |

## How to read it

- Primary NAICS is one code on the company's record. A firm can bid and win in other codes, so treat it as a first screen: only 2 of these 5 firms list 541512.
- An award count of 0 means no federal awards on record for that company. It does not mean the firm has no past performance, because it may have worked as a subcontractor or in the commercial market.
- Each UEI is its own entry, so a company with more than one UEI can appear more than once. Your agent should ask you which entity you mean.
- To rank firms by contracts actually won in a NAICS, use [Find teaming partners with a certification](./find-teaming-partners-with-a-certification.md).

## Check it

Open the G2X company page linked on a firm's name and compare the legal name and UEI with what the company gives you. Confirm the firm's current registration and any certification before you rely on it in a teaming agreement or a proposal.

## Variations

- "Search G2X for companies with 'cloud' in their name and list their primary NAICS, state and award counts."
- "Look up the company with UEI YMJBTEH9EW96 and give me its G2X record link."
- "Find companies named like 'Pacific Northwest Cybersecurity' and tell me which state each is in."

## Related recipes

- [Find teaming partners with a certification](./find-teaming-partners-with-a-certification.md)
- [Find capable small businesses for market research](./market-research-find-capable-small-businesses.md)
- [Review a company's contract history](./review-a-companys-contract-history.md)
