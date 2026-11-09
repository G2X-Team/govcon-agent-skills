# Pull text from a solicitation attachment

Ask your AI agent to read one solicitation attachment and quote its scope, set-aside and amendment dates exactly, so you can rely on exact wording.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/pull-text-from-a-solicitation-attachment

## What you get

Read the full text of one document on a federal opportunity and have your agent quote the scope, set-aside and amendments from it. This is for contractors in capture and proposals who need exact wording, not a paraphrase.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Read the text of "PIEE Solicitation Module Link for N6449826R0020" on the
Seaport CTF Design Services Follow On opportunity. Quote its description, then list
the attachments and amendments it names, with their dates.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt.

| Item | Text from the attachment |
| --- | --- |
| Set-aside | This opportunity is for SEAPORT NXG MAC HOLDERS ONLY and is a Small Business SET ASIDE. |
| Scope | This requirement is for a five year period of performance for a Cost Plus-Fixed-Fee type seaport task order for the Compatibility Test Facility (CTF) design of test and evaluation facility installations, systems, and equipment under the cognizance of NSWCPD. |
| Place of performance | 5001 S. Broad Street Philadelphia, PA 19112 |
| Amendment date | 2026-10-26 |
| Response date | 2026-10-23 17:00 Eastern Standard Time |

## How to read it

- The document is a copy of an agency web page, so it also holds menu text. The useful parts are the description, place of performance, clause notes and the list of attachments.
- The page lists an amendment dated 2026-10-26. Get it from the agency's portal, and take the current response date from the G2X page and that amendment, not from this copy.
- Use the quotes as your working text, then check the official record before you rely on a date or requirement.

## Check it

Open the G2X page for the opportunity from the link in the answer and compare the response date and document list with the text.

## Variations

- "Read the statement of work attached to this opportunity and list every deliverable with its due date."
- "Read page 3 of the performance work statement and quote the staffing requirements."
- "Read the attachment text and tell me which clauses require a certification with my offer."

## Related recipes

- [Read solicitation documents](./read-solicitation-documents.md)
- [Build a compliance matrix](./build-a-compliance-matrix.md)
- [Summarize a solicitation](./summarize-a-solicitation.md)
