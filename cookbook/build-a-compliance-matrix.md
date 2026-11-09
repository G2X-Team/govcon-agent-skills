# Read a compliance matrix for a solicitation

Ask your AI agent for the compliance matrix on a federal solicitation, see each requirement's status, or learn that none exists yet.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/build-a-compliance-matrix

## What you get

The compliance matrix for a solicitation in your AI agent: one row per requirement, with its status and the evidence behind it. This is for contractors in proposals and capture who track every "shall" before a bid goes out. If there is no matrix yet, your agent says so.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).
The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Show me the compliance matrix for the Seaport CTF Design Services Follow On
solicitation (N6449826R0020). List each requirement with its status and how many
citations support it. If there is no matrix yet, say so.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Both opportunities tried (the two linked below) returned an empty matrix with 0 requirements. The answer said: "This opportunity has no workspace in your account yet."

## How to read it

- An empty answer is a real answer. It means no matrix exists for this opportunity in your account yet, not that the solicitation has no requirements.
- When a matrix exists, expect one row per requirement with its status and evidence. None came back here, so this page shows the empty answer.
- Your agent should report the empty answer as it is and not draft a matrix from memory. A matrix built without the solicitation text is not evidence of compliance. To work from the document text, start with [Read solicitation documents](./read-solicitation-documents.md).
- Before you rely on any matrix, check a few rows against Sections L and M of the solicitation itself.

## Check it

Open the G2X pages for the two opportunities, then check your own G2X account for a matrix.

- [Seaport - CTF Design Services Follow On](https://g2x.com/app/opportunities/sam/a9db7470-096c-4071-9f01-47f58da967bc)
- [TOTAL ENGINEERING AND INTEGRATION SERVICES (TEIS) IV On-Ramp Opportunity](https://g2x.com/app/opportunities/sam/f3b9b36b-0217-4fdd-9ce7-f60e33539fc6)

## Variations

- "Do I have a compliance matrix for any opportunity I am working? Check this one and tell me its status counts."
- "Read the compliance matrix for this workspace and list the requirements that are not yet covered."
- "Read the solicitation text for this opportunity and list the instructions and evaluation factors I would need to cover in a matrix."

## Related recipes

- [Read solicitation documents](./read-solicitation-documents.md)
- [Summarize a solicitation](./summarize-a-solicitation.md)
- [Prepare solicitation documents for review](./prepare-solicitation-documents-for-review.md)
