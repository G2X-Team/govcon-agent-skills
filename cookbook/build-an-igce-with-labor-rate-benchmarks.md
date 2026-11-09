# Build an IGCE with labor rate benchmarks

Pull published per-hour ceiling rate statistics for a labor category to inform the labor lines of an independent government cost estimate.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/build-an-igce-with-labor-rate-benchmarks

## What you get

A spread of published per-hour ceiling rates for one labor category, so you have a documented benchmark when you price the labor lines of an independent government cost estimate (IGCE). This is for contracting officers, cost analysts and program offices in acquisition planning.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
I am drafting the labor lines of an independent government cost estimate.
Give me the published per-hour ceiling rate statistics for the labor category
"Project Manager": how many rates, the minimum, the 25th and 75th percentiles,
the median and the maximum. Name the rates behind the minimum, median and
maximum so I can look at their contract, education and experience terms.
Remind me what these numbers are and are not.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The statistics cover 2699 published rates for the category, in dollars per hour.

| Statistic | Dollars per hour |
|---|---|
| Minimum | 38.06 |
| 25th percentile | 119.65 |
| Median | 146.6 |
| 75th percentile | 177.11 |
| Maximum | 449.75 |

The rates behind the minimum, median and maximum:

| Point | Rate per hour | Contract holder | Schedule | Education |
|---|---|---|---|---|
| Minimum | 38.06 | INTEGRITY NATIONAL CORPORATION | MAS | High School |
| Median | 146.6 | CASEPOINT, LLC | MAS | Bachelors |
| Maximum | 449.75 | FEDERAL MERCHANTS CORP. | MAS | Bachelors |

## How to read it

- These are published ceiling rates, the most a holder may charge under its vehicle. They are not offered prices, negotiated prices or what any agency paid.
- The spread is wide because one title covers different education, experience, worksite and clearance terms. Narrow the set before you compare it with your requirement.
- Use the percentiles as a range check against your own build-up. The benchmark supports your analysis of the requirement, the labor mix and the level of effort. It does not replace the independent government cost estimate.
- Check the official record before you cite a rate in the estimate file.

## Check it

This answer has no page link to open. Ask your agent for the rates behind the minimum, median and maximum with their full terms, and read those terms against your requirement before you cite a rate.

## Variations

- "Search labor rates for 'Systems Engineer' and show the 10 lowest and highest ceiling rates with their education and experience terms."
- "Give statistics for 'Program Manager' limited to rates that require a Top Secret clearance, and compare the median to the unrestricted median."
- "Show every published rate for one contract holder, by UEI, for the 'Engineer' category, so I can review one vehicle's price list."

## Related recipes

- [Benchmark labor rates for a bid](./benchmark-labor-rates-for-a-bid.md)
- [Choose a contract vehicle from agency usage](./choose-a-contract-vehicle-from-agency-usage.md)
- [Check prior awards for a similar requirement](./check-prior-awards-for-a-similar-requirement.md)
