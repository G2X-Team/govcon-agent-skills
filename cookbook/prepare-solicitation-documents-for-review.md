# Prepare solicitation documents for review

Have your AI agent get one active solicitation's documents ready and tell you which can be read now, so you know what to analyze before you commit time.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/prepare-solicitation-documents-for-review

## What you get

Get one active solicitation's documents ready and see which of them can be read now. This is for contractors in capture and proposals who want to know what they can analyze before they commit time.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

This recipe starts document preparation, so use it when you plan to read the solicitation. To only list what is already available, use [Read solicitation documents](./read-solicitation-documents.md).

## Prompt to paste

```text
Find an open solicitation under NAICS 541512 that has documents G2X can read.
Prepare its documents for review, then tell me which documents are ready, which
are still being read, and which are only links. Give me the G2X link.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. Opportunity: Marine Corps Education Command Information Technology Support Services, solicitation M0026427R0001, DEPT OF DEFENSE, response deadline 2026-11-09T15:00:00Z.

| Document | Type | Status |
| --- | --- | --- |
| Registration Instructions for the PIEE Solicitation Module | link | skipped |
| Web Based Training for the PIEE Solicitation Module | link | skipped |
| PIEE Solicitation Module Link for M0026427R0001 | link | pending |

## How to read it

- All of the documents shown are links, not files, and none was ready to analyze at the time of the answer. Two were skipped and one is pending.
- Every title shown names the PIEE Solicitation Module, and one is its registration instructions. The package itself is likely reached there after you register, so confirm on the agency's side.
- Documents held in an agency portal that needs registration may stay unreadable until you obtain them from the agency. Ask again later, since the status can change. Check the official record before you rely on a date or figure.

## Check it

Open the G2X page for the opportunity from the link in the answer and compare its document list with the table. Follow the registration instructions the agency lists to reach the package yourself.

## Variations

- "Prepare the documents for this opportunity and tell me which are ready to read: [paste the G2X link]."
- "List the three soonest-due open solicitations under NAICS 541512 and tell me how many documents each has ready."
- "Prepare this opportunity's documents, then say whether it is ready for a requirements summary."

## Related recipes

- [Read solicitation documents](./read-solicitation-documents.md)
- [Summarize a solicitation](./summarize-a-solicitation.md)
- [Pull text from a solicitation attachment](./pull-text-from-a-solicitation-attachment.md)
