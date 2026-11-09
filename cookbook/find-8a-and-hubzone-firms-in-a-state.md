# Find 8(a) and HUBZone firms in a state

Search the company directory for firms with 8(a) or HUBZone in their name, narrow them by state, then confirm each certification before you team.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-8a-and-hubzone-firms-in-a-state

## What you get

A lead list of 8(a) and HUBZone firms in one state, built by searching company names and then confirming each firm's certification one by one. This is for contractors in teaming and subcontracting who need small business partners near a work location.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Search G2X for companies with "HUBZone" in their name. Show the legal name, UEI, state,
primary NAICS and award count for each, then list the ones in Maryland. Remind me what
I must confirm before I treat any of them as a certified HUBZone or 8(a) firm.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. Five of the eight firms listed.

| Company | UEI | State | Primary NAICS | Awards on record |
| --- | --- | --- | --- | --- |
| [HUBZONE, CORP.](https://g2x.com/app/companies/XE9DSUDNYUL6) | XE9DSUDNYUL6 | CA | 236220 | 36 |
| [CAROLINA HUBZONE INC](https://g2x.com/app/companies/J1KFKJNECEB1) | J1KFKJNECEB1 | SC | 236220 | 1 |
| [HUBZONE COALITION CORP,](https://g2x.com/app/companies/JKRFZYE5VJB5) | JKRFZYE5VJB5 | MD | 541611 | 10 |
| [ASYNCHRONY HUBZONE LLC](https://g2x.com/app/companies/LWMKB1UK7AE3) | LWMKB1UK7AE3 | MO | 541511 | 6 |
| [TIG-PROCON 8A HUBZONE JV, LLC](https://g2x.com/app/companies/GN83V4F29BJ8) | GN83V4F29BJ8 | MD | 541611 | 1 |

## How to read it

- Every match here has "HUBZone" in a name. A name does not prove a certification, and a certified firm whose name lacks the word will not appear.
- Two of these rows are in Maryland: HUBZONE COALITION CORP, and TIG-PROCON 8A HUBZONE JV, LLC.
- Primary NAICS is one code on the company record. It is a first screen for fit, not proof the firm can do your scope. A small award count can mean a new firm or one that mostly works as a subcontractor.
- Run [Check a company's socioeconomic status](./check-a-companys-socioeconomic-status.md) on each shortlisted UEI, and check the official record for status and dates before you treat a firm as certified.

## Check it

Open a firm's G2X page from its name in the table. Confirm that the firm's location and status meet the solicitation's HUBZone or 8(a) requirements before you count it in a plan.

## Variations

- "Search G2X for companies with '8(a)' in their name, then keep the ones in Virginia and check each one's certification by UEI."
- "Show the next page of the HUBZone name search and list only firms in Maryland."
- "For these Maryland firms, show primary NAICS and award count, and tell me which ones match NAICS 541611."

## Related recipes

- [Check a company's socioeconomic status](./check-a-companys-socioeconomic-status.md)
- [Verify a vendor's socioeconomic status](./verify-a-vendors-socioeconomic-status.md)
- [Find capable small businesses for market research](./market-research-find-capable-small-businesses.md)
