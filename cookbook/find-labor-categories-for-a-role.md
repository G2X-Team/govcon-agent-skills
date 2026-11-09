# Find labor categories for a role

Search a role in plain words, such as cloud engineer, and see which published labor category titles match, with each ceiling rate per hour.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/find-labor-categories-for-a-role

## What you get

The published labor category titles that match a role you describe in plain words, with each one's ceiling rate per hour, experience, education and clearance. This is for contractors in pricing and proposals who need to map a staffing role to the categories other vendors publish.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Search G2X for published labor categories that match "cloud engineer". For the first
five, show the exact title, company, ceiling rate per hour, minimum years of experience,
education, worksite and security clearance. Tell me how many matches there are and
what these rates do not tell me.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. Five matches titled "Cloud Engineer", in dollars per hour, out of 300 found.

| Company | Rate per hour | Minimum years | Education | Clearance |
| --- | --- | --- | --- | --- |
| ZION CLOUD SOLUTIONS LLC | 129.54 | 7 | Bachelors | Not required |
| XMS SOLUTIONS INC | 216.12 | 5 | Bachelors | Not required |
| FEDTEC LLC | 83.19 | 2 | Bachelors | Required |
| PROMANTUS INC | 99.24 | 2 | Bachelors | Not required |
| E-INFOSOL LLC | 163.52 | 7 | Bachelors | Not required |

## How to read it

- These are published ceiling rates, not offered prices. Prices negotiated on a task order can differ.
- The same title ranges from 83.19 to 216.12 per hour in this excerpt. Compare like with like: minimum years, education and clearance sit beside every rate. The count of 300 is a floor: more may match.
- Vendors word titles differently. If a role has no match, ask for synonyms such as architect or DevOps engineer.
- Rates do not show the work, location adjustments, discounts or whether a vendor will bid. Use them as a benchmark, not a quote.

## Check it

Open the official rate link in the answer, https://calc.gsa.gov/, and find the same category and company. Confirm the contract vehicle before you cite a rate in a proposal or an estimate.

## Variations

- "Search labor categories that match 'program manager' and show the 10 highest rates with their minimum years of experience."
- "Find 'cybersecurity analyst' labor categories that require a security clearance and list what each one asks for."
- "Find 'devops engineer' labor categories priced under 150 dollars an hour."

## Related recipes

- [Benchmark labor rates for a bid](./benchmark-labor-rates-for-a-bid.md)
- [Build an IGCE with labor rate benchmarks](./build-an-igce-with-labor-rate-benchmarks.md)
- [Find the contract vehicles an agency uses](./find-the-contract-vehicles-an-agency-uses.md)
