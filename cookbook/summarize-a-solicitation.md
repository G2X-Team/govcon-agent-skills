# Summarize a solicitation

Have your AI agent start a requirements summary for one active solicitation, covering what offerors must do, submit or meet, with sources.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/summarize-a-solicitation

## What you get

Start a requirements summary for one active solicitation: what the offeror must do, submit or meet, each with its source location. This is for contractors in capture and proposals who want a first pass before a full read. It starts a summary for you, so check the opportunity's documents first with [Prepare solicitation documents for review](./prepare-solicitation-documents-for-review.md).

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Start a requirements summary for the Marine Corps Education Command
Information Technology Support Services solicitation, number M0026427R0001.
Tell me whether a run was already in progress and give me its run id. When
it finishes, list the requirements by type with where each one comes from.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt.

| Item | Value |
| --- | --- |
| Title | Requirements extraction already running |
| Status | running |
| Message | Requirements extraction is running. |

## How to read it

- This answer confirms a requirements summary is under way. It holds no requirements yet, so ask your agent to check on it and list the requirements by type with where each one comes from.
- The summary was already in progress, so asking again returns the same one instead of starting a second.
- For this opportunity, the documents listed in that recipe were links and none was ready. With no files to read, expect little to come out, and check what the summary found before you rely on it.
- A requirements summary is a first pass that helps you build a checklist. It does not replace reading the instructions to offerors and the evaluation factors in the solicitation itself.

## Check it

Open the G2X page for the opportunity and compare its documents with what the summary used. For each requirement it returns, open the source location it cites and confirm the wording in the document.

## Variations

- "Summarize only the statement of work attachment of this opportunity: [paste the G2X link]."
- "Check the progress of the run you started and tell me when its requirements are ready."
- "Start requirements summaries for the two soonest-due solicitations under NAICS 541512, and compare what each asks offerors to submit."

## Related recipes

- [Prepare solicitation documents for review](./prepare-solicitation-documents-for-review.md)
- [Build a compliance matrix](./build-a-compliance-matrix.md)
- [Read solicitation documents](./read-solicitation-documents.md)
