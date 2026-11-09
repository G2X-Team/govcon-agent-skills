# Verify a vendor's socioeconomic status

Read the socioeconomic certifications on record for a vendor by UEI, as a quick first look before you confirm status in the official records.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/verify-a-vendors-socioeconomic-status

## What you get

Look up the socioeconomic certifications recorded for a vendor, such as 8(a), HUBZone, service-disabled veteran-owned and women-owned small business, from its UEI. This is for contracting officers, specialists and program offices who need a fast first look during market research or before a set-aside decision.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Check the socioeconomic certifications on record for the vendor with UEI
GHXRMYW4EBH5. List each business type and each SBA certification exactly as
recorded. Tell me what this lookup does not confirm, so I know what to verify
in the official registration records before I rely on it.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The answer was for UNICARE BUILDING MAINTENANCE, INC.

| Item | Value |
| --- | --- |
| Certifications checked | yes |
| Business types | Minority Owned Business, Self Certified Small Disadvantaged Business, For Profit Organization, Asian-Pacific American Owned, DOT Certified DBE, Self-Certified HUBZone Joint Venture, Subchapter S Corporation |
| SBA business types | SBA Certified Hub Zone Firm |

## How to read it

- Official registration records remain the authority. This lookup is for screening and for knowing where to look. It does not establish eligibility for a set-aside, and the contracting officer's determination does not rest on it.
- Read the wording closely. "Self Certified Small Disadvantaged Business" and "Self-Certified HUBZone Joint Venture" are self-certifications, while "SBA Certified Hub Zone Firm" is a separate SBA entry. Do not treat the two kinds as the same.
- Registration status and expiration are not shown, and a certification can lapse, so confirm the vendor's registration is active and current. An empty result means "not on record here", not "not certified". Size status depends on your requirement's NAICS code, and this lookup does not decide it.

## Check it

Open the vendor's G2X page, [UNICARE BUILDING MAINTENANCE, INC](https://g2x.com/app/companies/GHXRMYW4EBH5). Then confirm the same certifications and the registration status in the official registration records and, for SBA programs, in the SBA's own certification records, before you rely on them.

## Variations

- "For each of these three UEIs, give me the recorded certifications and flag any with no certification details on record."
- "Which of these vendors list an SBA-certified status, and which list only self-certified types? Keep them in separate columns."
- "Summarize the certification wording for this vendor in a note I can attach to my market research file, and list what I still need to verify."

## Related recipes

- [Apply the rule of two with market data](./apply-the-rule-of-two-with-market-data.md)
- [Check a company's socioeconomic status](./check-a-companys-socioeconomic-status.md)
- [Find capable small businesses for market research](./market-research-find-capable-small-businesses.md)
