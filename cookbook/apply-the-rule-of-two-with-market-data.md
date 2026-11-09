# Apply the rule of two with market data

Gather candidate firms and recorded socioeconomic status into one evidence table for a rule of two review. The decision stays with the contracting officer.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/apply-the-rule-of-two-with-market-data

## What you get

Candidate firms for your requirement, with what is on record about each firm's socioeconomic status, in one evidence table. This is for contracting officers, small business specialists and program offices building a set-aside file during market research. The decision stays with the contracting officer.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
I am assembling market research evidence for a janitorial services
requirement under NAICS 561720. Search the G2X company directory for firms
with "janitorial" in their name. For three of them, check the socioeconomic
certifications on record by UEI. Put the result in one evidence table: firm,
UEI, primary NAICS code, state, federal awards on record, and what the
certification check returned. Do not decide whether the rule of two is met.
List what is missing from the evidence instead.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt.

| Company | UEI | Primary NAICS | State | Awards on record |
|---|---|---|---|---|
| UNICARE BUILDING MAINTENANCE, INC | GHXRMYW4EBH5 | 561720 | TX | 31 |
| G & B JANITORIAL SERVICE LLC | KAC3YBL5RNQ5 | 561720 | PA | 4 |
| ADVANCED TEK JANITORIAL SERVICE INC | ZDFLHSNNCL14 | 561720 | CO | 11 |

The certification check for G & B JANITORIAL SERVICE LLC returned business types "For Profit Organization, Business or Organization" and SBA business types "None listed". For ADVANCED TEK JANITORIAL SERVICE INC it returned: "G2X does not have certification details for this company."

## How to read it

- This is evidence for a file, not a finding. A few firms in a table do not establish a reasonable expectation of offers from at least two responsible small businesses at a fair price. That judgment, and the set-aside decision, are the contracting officer's.
- "None listed" or no details means G2X has nothing to show. It does not mean the firm is not small.
- The table says nothing about capability, capacity, past performance or likely price. Add capability statements, responses to your request for information and your own price analysis.
- Check the official record before you rely on a figure.

## Check it

Open the G2X company pages in the answer, such as [G & B JANITORIAL SERVICE LLC](https://g2x.com/app/companies/KAC3YBL5RNQ5) and [ADVANCED TEK JANITORIAL SERVICE INC](https://g2x.com/app/companies/ZDFLHSNNCL14), and compare them with the table.

## Variations

- "Check the certifications on record for all three firms and sort them into: certification listed, none listed, and no details on record."
- "Add each firm's recent federal award history by UEI, then list which ones have performed janitorial work for a federal customer."
- "Draft a short note for my market research file that lists the sources I checked, what each returned and what I still need to confirm."

## Related recipes

- [Find capable small businesses for market research](./market-research-find-capable-small-businesses.md)
- [Verify a vendor's socioeconomic status](./verify-a-vendors-socioeconomic-status.md)
- [Find teaming partners with a certification](./find-teaming-partners-with-a-certification.md)
