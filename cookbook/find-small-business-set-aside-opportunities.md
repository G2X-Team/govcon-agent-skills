# Find small business set-aside opportunities

Ask your AI agent for open federal opportunities in your NAICS code that list a small business set-aside, with agency, type and response deadline.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-small-business-set-aside-opportunities

## What you get

Open federal opportunities in your NAICS code, narrowed to the ones that list a small business set-aside, so you spend capture time where your size status counts. This is for small business contractors in business development and proposals.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).
The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Find open federal opportunities under NAICS 541330 that are small business
set-asides. Show title, type, set-aside, response deadline and the G2X
link, and keep only rows whose set-aside says small business.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The first five opportunities listed, all from the Department of Defense under NAICS 541330.

| Opportunity | Type | Set-aside | Response deadline |
| --- | --- | --- | --- |
| [Seaport - CTF Design Services Follow On](https://g2x.com/app/opportunities/sam/a9db7470-096c-4071-9f01-47f58da967bc) | Solicitation | Total Small Business | 2026-11-06T17:00:00-05:00 |
| [Keyport Infrastructure Security Support Services (KISSS)](https://g2x.com/app/opportunities/sam/150859d7-2923-4ec2-8bd7-c396d1c8ce29) | Presolicitation | Total Small Business | 2026-11-16T17:00:00-08:00 |
| [Overseas Professional Support Services](https://g2x.com/app/opportunities/sam/e9db9ab3-6f46-4c08-a215-c3967c71f537) | Combined Synopsis/Solicitation | Total Small Business | 2026-11-04T11:00:00-08:00 |
| [RFP for Advanced Signatures Technologies (AST)](https://g2x.com/app/opportunities/sam/4ed376e7-0167-4f74-88a6-6ab075ea5ffa) | Solicitation | Total Small Business | 2026-11-16T13:00:00-05:00 |
| [NALCOMIS Virtual Environment System Administration Support](https://g2x.com/app/opportunities/sam/e5a8d80a-ad53-453e-a284-25f565ce815b) | Solicitation | Total Small Business | 2026-10-30T17:00:00Z |

## How to read it

- "Total Small Business" is the set-aside value on the opportunity. It does not tell you whether your company qualifies under the size standard for that NAICS code.
- Check the set-aside column on every row: an opportunity can mention small business without carrying a set-aside. Other set-aside types, such as 8(a), HUBZone, service-disabled veteran-owned or women-owned, appear in the same column. Name the one you want in the prompt.
- The type matters. A Presolicitation is an early announcement, so check the deadline and the follow-on solicitation. A Solicitation or Combined Synopsis/Solicitation is a request for offers.
- Five rows is a sample, not every set-aside under the code. Ask for more or add an agency to narrow it.

## Check it

Open the G2X page on a title and compare its set-aside and deadline with the table. Then read the opportunity itself for the size standard and the clause that sets the set-aside.

## Variations

- "Find open 8(a) set-aside opportunities under NAICS 541512 and show the agency for each."
- "Find open service-disabled veteran-owned set-asides at the VA under NAICS 236220."
- "Find small business set-aside solicitations under 541330 due in the next 30 days."

## Related recipes

- [Find open opportunities by NAICS code](./find-open-opportunities-by-naics.md)
- [Find sources sought opportunities](./find-sources-sought-opportunities.md)
- [Find 8(a) and HUBZone firms in a state](./find-8a-and-hubzone-firms-in-a-state.md)
