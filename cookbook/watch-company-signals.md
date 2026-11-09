# Watch a company's public signals

Check public web and news signals for a company, such as acquisitions and teaming news, each with its source link, before a call or a bid decision.

This recipe is also on the G2X docs: https://g2x.com/docs/cookbook/watch-company-signals

## What you get

Check recent public web and news signals about one company, such as acquisitions, teaming and partnership news and leadership moves, each with its source link. This is for contractors in capture and teaming who want context on a partner or rival before a call or a bid decision.

## Before you start

Connect your AI agent with [Connect your AI agent](https://g2x.com/docs/connect).

The GovCon MCP is included on every G2X plan, from Community Edition through Enterprise.

## Prompt to paste

```text
Check public signals for Leidos (UEI UE9QJD4KK1L6, website leidos.com) about
acquisitions and cybersecurity. For each signal show the title, the date if there is
one and the source link. Tell me which are news and which are the company's own pages.
```

## What you get back

Captured from the live GovCon MCP on 29 October 2026.
Excerpt. The second signal's summary reads: "Leidos delivers offensive, defensive, and resilient cyber operations powered by trusted AI and mission expertise to outpace evolving threats."

| Title | Source link |
| --- | --- |
| Leidos acquires Kudu Dynamics, advancing AI capabilities ... | https://www.leidos.com/insights/leidos-acquires-kudu-dynamics-advancing-ai-capabilities-cyber-warfighters |
| Cyber Operations | https://www.leidos.com/capabilities/cyber |

## How to read it

- Signals are context from public sources, not confirmed facts. Check any award or contract claim against the G2X record.
- Neither signal shows a publication date. The first one's own text is dated May 28, 2025, so it is not recent news: open the source link before you call it current. The second is the company's own capability page, not news.
- An empty list is a valid result. Accenture Federal Services with the topics teaming and acquisition returned no signals, which is not an error.
- Give the UEI or website with the company name, since a name alone can match more than one company. This recipe does not send alerts, so ask again before each call or bid review.

## Check it

Open each source link in the answer and read the original, for example [Cyber Operations](https://www.leidos.com/capabilities/cyber). For an acquisition, also look at the company's contract history to see whether awards moved to the acquiring firm.

## Variations

- "Check teaming and partnership signals for the company with this UEI, and list only the ones with a source link."
- "Give me leadership and acquisition signals for my top three competitors, one table each."
- "Read signals for this company, then compare any award claim against its G2X contract history."

## Related recipes

- [Read a company's public web profile](./read-a-companys-public-web-profile.md)
- [Size up a rival before you bid](./size-up-a-rival-before-you-bid.md)
- [Review a company's contract history](./review-a-companys-contract-history.md)
