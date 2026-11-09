# Find subcontractors for a recompete

Build a shortlist of subcontractor and teaming candidates for a recompete, with contract counts, obligated dollars and SBA certifications.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-subcontractors-for-a-recompete

## What you get

Get a shortlist of firms that already win work in your recompete's industry code, with their contract counts, dollars and SBA certifications. This is for contractors in capture and proposals who need teaming partners.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
I am preparing to bid on a recompete of a facilities support contract, NAICS 561210.
Find subcontractor and teaming candidates in that NAICS with at least 5 contracts from
fiscal 2024 to 2026. Show contract counts, obligated dollars and SBA certifications.
Leave out the incumbent if I give you its UEI.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt.

| Company | Contracts in NAICS | Obligated dollars | SBA certifications |
| --- | --- | --- | --- |
| JONES LANG LASALLE AMERICAS, INC. | 1418 | 321893107.17 | None listed |
| DAE SUNG LLC | 1069 | 105795141.87 | SBA Certified 8A Program Participant |
| ALUTIIQ LOGISTICS & MAINTENANCE SERVICES, LLC | 934 | 109227979.81 | SBA Certified 8A Program Participant |
| ACTION FACILITIES MANAGEMENT INC | 912 | 250676852.51 | SBA Certified 8A Program Participant, SBA Certified Woman Owned Small Business |

## How to read it

- A high contract count shows a firm wins this kind of work. It does not show that it will team with you, has capacity, or is tied to the incumbent.
- The list does not say which agencies a firm has served. Ask your agent for its contract history to see whether it has worked for your recompete's agency.
- "None listed" means the answer shows no SBA certification for that firm. That can also happen when the check could not be made, so ask your agent whether each firm's certifications were checked before you treat it as a firm without one. An 8(a) listing can help with a set-aside or subcontracting plan, but the rules depend on the solicitation. Check the official record before you rely on a figure.

## Check it

Open the G2X page for a firm from the link in the answer, for example [DAE SUNG LLC](https://g2x.com/app/companies/X6E8D5J5BZF7), and look at its awards for your agency and scope.

## Variations

- "Same search, but leave out the incumbent's UEI and show me the next page."
- "Use fiscal years 2023 to 2025 and require at least 10 contracts."
- "Same search, and say which firms' SBA certifications could not be checked."
- "From this list, keep only firms listed as SBA 8(a) program participants and check their contract history for my agency."

## Related recipes

- [Build a recompete list](./build-a-recompete-list.md)
- [Research the incumbent on a recompete](./research-the-incumbent-on-a-recompete.md)
- [Find teaming partners with a certification](./find-teaming-partners-with-a-certification.md)
