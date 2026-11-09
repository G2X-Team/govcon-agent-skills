# Check prior awards for a similar requirement

Search federal contract awards by NAICS code and wording to see how comparable work was awarded, set aside and funded, for your acquisition plan.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/check-prior-awards-for-a-similar-requirement

## What you get

Recent federal awards for work like yours: who won, how long the period runs, whether a set-aside applied and what has been obligated. This is for contracting officers, specialists and program offices building market research and an acquisition plan.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
I am writing the acquisition plan for a janitorial services requirement.
Search federal contract awards in NAICS 561720 from fiscal year 2025 that
mention "janitorial services". For each award show the PIID, the awardee,
the award date, when the period of performance ends, obligations to date,
the PSC, the set-aside and the description, with the G2X record link. Tell me
whether this is every matching award, and which amounts the record does not hold.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The first five matches, with more behind them.

| PIID | Awardee | Period ends | Obligated to date | Set-aside |
|---|---|---|---|---|
| [1305M325C0002](https://g2x.com/app/awards/contracts/CONT_AWD_1305M325C0002_1330_-NONE-_-NONE-) | A. JAMES GLOBAL SERVICES, INC | 2027-11-20 | 179167.8 | 8AN |
| [SP470525C0003](https://g2x.com/app/awards/contracts/CONT_AWD_SP470525C0003_9700_-NONE-_-NONE-) | DIDLAKE INC | 2027-04-30 | 8859299.46 | Not listed |
| [W912WJ25PA028](https://g2x.com/app/awards/contracts/CONT_AWD_W912WJ25PA028_9700_-NONE-_-NONE-) | GERMRIP LLC | Not listed | 5250 | Not listed |
| [127EAV25P0002](https://g2x.com/app/awards/contracts/CONT_AWD_127EAV25P0002_12C2_-NONE-_-NONE-) | BIAH GROUP LLC | 2029-11-03 | 445.38 | Not listed |
| [697DCK25P00053](https://g2x.com/app/awards/contracts/CONT_AWD_697DCK25P00053_6920_-NONE-_-NONE-) | US ECO PRODUCTS CORP | 2026-10-31 | 179164.06 | NONE |

## How to read it

- This is a sample of the matches, not the whole list. Add filters (agency, office, value range, set-aside) or ask for every match before you draw a conclusion about how the market buys this work.
- Use the rows to frame questions: how long were comparable periods, were they set aside, were the awards small purchases or multi-year contracts? Obligations here run from 445.38 to 8859299.46 dollars. "Obligated to date" is money obligated so far, not the contract's value or what the work would cost today.
- The BIAH GROUP LLC row is a contract terminated for convenience (modification P00001). Obligated to date sums every action G2X has recorded, including the termination, so it can differ from the award summary on USAspending. Open the record and read its actions before you compare amounts.
- Descriptions are written by whoever entered the award, so they vary. The last row reads "EXTEND CONTRACT SERVICES FOR PERIOD OF PERFORMANCE OCTOBER 2026", an extension, not a fresh requirement. A blank set-aside does not mean the award was unrestricted. Read each description before you treat a row as comparable.
- Past awards show what other offices did. They do not decide your acquisition strategy, your set-aside decision or your price analysis. Check the official record before you rely on a figure.

## Check it

Open the G2X page linked on any PIID in the table and compare its dates and amounts with the row.

## Variations

- "Count the FY2025 awards in NAICS 561720 with an 8(a) set-aside, then list the 10 largest by obligations."
- "List the contract actions and modifications on award 1305M325C0002, with dates and obligation changes."
- "Show awards in PSC S201 that end between 2026-10-01 and 2027-09-30, so I can see which similar work will come up for recompete."

## Related recipes

- [Read a contract award record](./read-a-contract-award-record.md)
- [See what similar offices bought](./see-what-similar-offices-bought.md)
- [Find awards by PSC code](./find-awards-by-psc-code.md)
