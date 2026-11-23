# Workflow: bid protest risk check

Use this sequence when a capture or bid team wants to check GAO, SBA Office of Hearings and Appeals (`sba_oha`) or Court of Federal Claims protest history for an agency, solicitation or competitor before committing bid resources.

## Steps

1. **Calibrate the session.** Call `g2x_calibrate_session` so company context is confirmed. If the user names a competitor or agency, keep that target distinct from the user's company.
2. **Resolve the company when needed.** Call `g2x_search_companies` to confirm the target UEI and legal name before pulling contract history.
3. **Search protest dockets.** Call `g2x_search_records` with `dataset: "protests"` and targeted filters (for example `source_system: "sba_oha"` for SBA OHA size or status appeals, or `outcome: "Sustained"`). If the user needs exact totals across a time period or agency, run `g2x_query` with `"protests --help"` first to check supported flags.
4. **Respect plan availability.** Protest data requires the Starter Team plan or higher. If G2X returns a plan note, report it clearly and link to G2X pricing without inventing docket records.
5. **Cross-check contract context.** Call `g2x_company_contract_history` or `g2x_get_record` when a protest ties back to a specific incumbent or solicitation.
6. **Report facts apart from hypotheses.** Deliver a cited table of matching dockets (docket number, source system, agency, outcome, date and G2X link), followed by capture questions to verify with legal or proposal leadership. Never present research as legal advice.
