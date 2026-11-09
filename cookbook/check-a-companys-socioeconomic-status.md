# Check a company's socioeconomic status

Look up a company's socioeconomic certifications by UEI, such as 8(a), HUBZone, SDVOSB and WOSB, and see what G2X can and cannot confirm.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/check-a-companys-socioeconomic-status

## What you get

The socioeconomic certifications listed for one company by its UEI, and which details G2X does not show. This is for contractors in teaming, subcontracting and proposals who need to know how a partner can count toward a set-aside.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Check the socioeconomic status of the company with UEI PFSLMY1VAK71. List every
certification or business type G2X has for it, say which ones the SBA certified and
which are self-certified, and tell me what I still need to verify elsewhere.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
The answer was for BCT PARTNERS LLC. Nothing was cut.

| Item | Answer |
| --- | --- |
| Business types | Minority Owned Business, Self Certified Small Disadvantaged Business, For Profit Organization, Economically Disadvantaged Women-Owned Small Business (EDWOSB) Joint Venture (8D), DOT Certified DBE, Small Business Joint Venture, Black American Owned, Subchapter S Corporation |
| SBA business types | SBA Certified Small Disadvantaged Business |
| Certifications checked | yes |

## How to read it

- The labels separate what the SBA certified from what the company reports about itself. Here the SBA line lists a Small Disadvantaged Business certification, and the business types line also lists a self-certified one.
- This record shows no 8(a), HUBZone or service-disabled veteran-owned entry. Do not read a missing label as proof the company lacks a status.
- G2X does not show registration status or expiration dates. A certification that has lapsed can still appear in a list, so check the dates in the official registration record before you count a partner toward a set-aside or a limitation on subcontracting.

## Check it

This answer has no page link to open. Ask your agent for the company's G2X page, and confirm each certification and its dates in the company's official registration record before you count it.

## Variations

- "For each company on my teaming shortlist, check socioeconomic status by UEI and put the results in one table."
- "Which of these three UEIs show an 8(a) or HUBZone entry, and which ones G2X could not check?"
- "Does this company's record show an SBA certified status or only self-certified ones?"

## Related recipes

- [Verify a vendor's socioeconomic status](./verify-a-vendors-socioeconomic-status.md)
- [Find teaming partners with a certification](./find-teaming-partners-with-a-certification.md)
- [Find 8(a) and HUBZone firms in a state](./find-8a-and-hubzone-firms-in-a-state.md)
