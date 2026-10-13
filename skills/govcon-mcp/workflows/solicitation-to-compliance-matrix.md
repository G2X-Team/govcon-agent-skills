# Read a solicitation package and build a compliance matrix

Goal: a requirements and compliance view built from the complete, controlling documents, with citations an evaluator-minded reviewer can check.

## Steps

1. Identify the opportunity and version. Open it with `g2x_get_record`. A file named "final" is not necessarily controlling; check notice, amendment and attachment context.
2. List what is on file. Call `g2x_opportunity_documents` with the opportunity id. Note each document's category, readiness and version, and keep its SAM.gov, G2X and parsed links.
3. Read whole documents. For each document that matters, call `g2x_opportunity_attachment_text` without `page`, and follow its cursor to the last byte. Verify the byte count and SHA-256 agree across chunks. Use `format: "json"` when tables, pages and structure matter. A single page read is for a citation check only.
4. Compare amendments. Read both versions. Report old then new for deadline, instructions, scope, quantities, evaluation criteria and requirements, with file, page and section citations. List any document or page you could not read.
5. Choose who analyzes. Default: extract requirements and build the matrix in this agent from the full text. Include instructions, evaluation factors and amendments, not only the statement of work. Mark each row with its citation and whether company evidence exists, is partial or is missing. Never mark a row compliant because it was extracted.
6. Or use G2X analysis, only when the user chooses it. Call `g2x_prepare_opportunity_documents` if documents are not ready, then `g2x_shred_opportunity` with the selected attachment ids. Keep the run id. Poll `g2x_get_analysis_run` with that same id until it completes. Read the matrix with `g2x_compliance_matrix`. For fit, run `g2x_qualify_opportunity` and read its verdict the same way. Before starting new analysis, check for earlier runs with `g2x_get_analysis_run` and `opportunity_id`.
7. Save where the user asked. A draft in chat, a saved workbook and a structured G2X result are different outcomes. Name the destination and verify by reading back.

## What to tell the user

Deliver the matrix or brief, the documents and versions it rests on, the gaps that could rule the company out, and the next decisions. Keep extracted requirements, fit assessment and response coverage separate. The bid decision stays with the user.
