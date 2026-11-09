# See a company's published labor rates

Pull one company's published ceiling rates by its UEI, with labor category, education, experience, worksite and vehicle, to size up a rival or a partner.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/see-a-companys-published-labor-rates

## What you get

Ask your AI agent for the labor rates one company has published, with the labor category, the rate per hour and the requirements behind each rate. Pricing teams use it to size up a rival or a teaming partner before they price, and government cost analysts use it to see what a vendor has published for the categories in a requirement. You need the company's 12-character UEI.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Show the published labor rates for the company with UEI NKKQE6FG4C28. List
the highest rates first. For each give the labor category, the rate per hour,
the education level, the years of experience, the worksite, the schedule and
the vehicle number, and tell me how many rates the company has published.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The answer reported 366 published rates for BY LIGHT PROFESSIONAL IT SERVICES LLC, highest rate first.

| Labor category | Rate per hour | Education | Years of experience | Vehicle number |
| --- | --- | --- | --- | --- |
| HIT Communications Specialist III OCONUS | 213.57 | Masters | 5 | GS35F0308U |
| Communications Specialist III OCONUS | 213.57 | Masters | 5 | GS35F0308U |
| Program Manager | 211.27 | Bachelors | 9 | GS35F0308U |

## How to read it

- These are ceiling rates the company has published on a vehicle. They are not prices it offered on a bid, and a company can bid lower.
- The same rate can repeat across rows. Two similar titles carry 213.57 here, so count distinct categories, not rows, when you size up a rate card.
- The top rates here are for an overseas (OCONUS) category. Do not compare them with a domestic category without checking the worksite and the category you will actually price. Two rates with the same title can ask for different education, experience or clearance.
- A few rows are a first look at 366 rates. Ask for a labor category or a price range to see the part of the rate card you care about. Check the official record before you rely on a figure.

## Check it

Open the source link in the answer to check a rate against its published source.

## Variations

- "Show only this company's Engineer rates, lowest first, with their vehicle numbers."
- "Show this company's rates that require a Top Secret clearance."
- "Compare this company's Project Manager rates with another company's by UEI."

## Related recipes

- [Benchmark labor rates for a bid](./benchmark-labor-rates-for-a-bid.md)
- [Build an IGCE with labor rate benchmarks](./build-an-igce-with-labor-rate-benchmarks.md)
- [Size up a rival before you bid](./size-up-a-rival-before-you-bid.md)
