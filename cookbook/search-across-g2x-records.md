# Search across G2X records

Search G2X by keyword for contract vehicles, awards, forecasts and more, and get a short list of matches with links to the G2X records.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/search-across-g2x-records

## What you get

Search G2X by keyword for contract vehicles, awards, forecasts and more, and get a short list of matches with a link to each record. Contractors use it to research a market before a bid; government acquisition teams use it for market research and acquisition planning.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Search the G2X contract vehicles dataset for "cloud". Show 5 results with
the title, agency, NAICS, PSC, award date, obligated amount and total value,
and give me the G2X record link for each. Tell me the total number of matches.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The answer reported 10 matches.

| Title | Agency | Award date | Obligated | Total value |
| --- | --- | --- | --- | --- |
| 9531CB26Q0016 | CONSUMER FINANCIAL PROTECTION BUREAU | 2026-07-22 | 0 | 0 |
| United States International Development Finance Corporation Office of Information Technology (OIT) OIT Cloud First Enterprise Systems Support Services (CFESSS) | UNITED STATES INTERNATIONAL DEVELOPMENT FINANCE CORPORATION | 2023-04-04 | 55795967.62 | 91750193 |
| USDA STRATUS Cloud Agreement (BOA) Pool 3: SaaS Providers | USDA, DEPARTMENTAL ADMINISTRATION | 2024-04-25 | 149041842.26 | 350878794.48 |

## How to read it

- The keyword matches words in the record, not only its title, so some titles are just a solicitation number. 9531CB26Q0016 is described as "CLOUD SERVICES FOR CFPB".
- Dollar amounts are raw numbers. The first row shows 0 for both obligated and total value, which most likely means no amount is recorded for it, so open the record before you quote it.
- One keyword is a starting list. It does not cover every vehicle that mentions the word, so search again with a synonym or a NAICS code. Check the official record before you rely on a figure.

## Check it

Open a G2X record link from the answer and compare the agency and dates with the row. For a vehicle you may use, confirm its ordering rules with the issuing agency before you plan around it.

## Variations

- "Search the protests dataset for active protests that mention cybersecurity and show the outcome for each."
- "Search the forecasts dataset for cybersecurity requirements and show the title and agency for each."
- "Search the agencies dataset for the Department of Veterans Affairs and show me its record link."

## Related recipes

- [Find the contract vehicles an agency uses](./find-the-contract-vehicles-an-agency-uses.md)
- [Read a contract award record](./read-a-contract-award-record.md)
- [Ask a data question in plain English](./ask-a-data-question-in-plain-english.md)
