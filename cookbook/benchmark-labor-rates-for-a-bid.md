# Benchmark labor rates for a bid

Get the spread of published ceiling rates for one labor category, from lowest to highest with the median and quartiles, before you price a bid.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/benchmark-labor-rates-for-a-bid

## What you get

The spread of published ceiling rates for one labor category, so you can see where your proposed rate sits. Pricing and proposal teams use it to test a rate before submission, and government cost estimators use it as a starting point for the labor lines in an independent government estimate.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Benchmark published labor rates for the category "Project Manager". Give me
the number of rates, the lowest, the 10th, 25th, 50th, 75th and 90th
percentiles and the highest in dollars per hour. Show who published the lowest,
the median and the highest rate, and on which schedule and vehicle.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. 2699 published rates for "project manager", in dollars per hour. The middle of the range, the 25th to 75th percentile, ran from 119.65 to 177.11.

| Position | Rate per hour | Company | Schedule | Vehicle number |
| --- | --- | --- | --- | --- |
| Lowest | 38.06 | INTEGRITY NATIONAL CORPORATION | MAS | GS21F163AA |
| Median | 146.6 | CASEPOINT, LLC | MAS | 47QTCA18D00BZ |
| Highest | 449.75 | FEDERAL MERCHANTS CORP. | MAS | 47QTCA18D00AZ |

## How to read it

- These are ceiling rates, the most a company has published it will charge on a vehicle. They are not what anyone offered on your bid and not what any agency paid.
- The spread is wide, from 38.06 to 449.75 dollars per hour, because "Project Manager" covers very different jobs. Narrow the benchmark by education, years of experience, clearance or worksite before you price against it.
- The median is the middle published rate, not an average. The 25th to 75th percentile band is a safer range to test against than the extremes.
- Your own price still depends on your indirect rates, your wrap and the solicitation's evaluation approach. Check the official record before you rely on a figure or name a competitor in a price volume.

## Check it

This answer has no page link to open. Ask your agent to list individual Project Manager rates with their company and vehicle number, then check a few against the company's own published rates.

## Variations

- "Benchmark Senior Software Engineer rates, limited to contractors with a Top Secret clearance and at least 8 years of experience."
- "Show the Project Manager rates for one company by its UEI, highest first."
- "Compare the median Systems Engineer rate on two different vehicles."

## Related recipes

- [Build an IGCE with labor rate benchmarks](./build-an-igce-with-labor-rate-benchmarks.md)
- [Choose a contract vehicle from agency usage](./choose-a-contract-vehicle-from-agency-usage.md)
- [Find the contract vehicles an agency uses](./find-the-contract-vehicles-an-agency-uses.md)
