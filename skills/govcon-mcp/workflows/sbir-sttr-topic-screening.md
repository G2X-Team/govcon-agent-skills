# Workflow: SBIR and STTR topic screening

Use this sequence to find relevant SBIR and STTR topics, verify every proposal due date, and inspect full solicitation documents before starting a technical volume.

## Steps

1. **Calibrate the session.** Call `g2x_calibrate_session` and confirm the company's technical capabilities, target agencies and eligibility constraints.
2. **Search SBIR and STTR topics and attachments.** Call `g2x_search_supplementary` with `source_families: ["sbir_sttr"]` and clear technical keywords. Keep the returned proposal due dates, topic identifiers, agencies, `topic_url` values and G2X links verbatim.
3. **Inspect related funding opportunities and historical awards.** When helpful, call `g2x_search_records` with `dataset: "grants"` to inspect related federal R&D funding opportunities (label these as funding opportunities, never as past awards), and query `dataset: "awards"` when an actual historical award record is required before reporting past funding.
4. **Verify native topics against their official source.** Native `sbir_sttr_opportunity` records are not accepted by `g2x_opportunity_documents` or `g2x_opportunity_attachment_text` (those tools accept SAM, SLED and DIBBS records only). Inspect any available record fields with `g2x_get_record`, then verify eligibility and proposal instructions directly from the returned `topic_url` and the agency solicitation it links to. Call `g2x_opportunity_documents` and `g2x_opportunity_attachment_text` only for a separately resolved SAM, SLED or DIBBS notice.
5. **Save only when asked.** Do not modify a watchlist or pipeline unless the user explicitly asks. Native watching via `g2x_watch_records` is unsupported for `sbir_sttr_opportunity` records; report that limitation rather than relabeling the record type. If the user explicitly asks to add a shortlisted topic to a pipeline, call `g2x_add_to_pipeline` using the supported `manual` type and clearly identify it as a manual pursuit rather than a linked topic.
6. **Deliver the shortlist.** Present each topic's agency, topic number, proposal due dates, matching evidence, `topic_url` and G2X links, and any missing document coverage. Distinguish open calls from historical or pre-release topics.
