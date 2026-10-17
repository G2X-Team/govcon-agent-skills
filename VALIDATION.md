# Candidate validation

October 17, 2026. This is source and installation evidence, not a live skills.sh index update or an authenticated G2X acceptance run.

- Existing tool-index validation passed before and after the change: 66 reference headings retained exactly once.
- Extended validation passed for all 26 skill folders: main Government Contracting entry, 24 focused skills and the compatible govcon-mcp entry.
- Skill Creator's frontmatter validator passed all 26 skills.
- `skills@1.7.2 add /path/to/candidate --list` discovered the expanded collection.
- `skills@1.7.2 add /path/to/candidate --skill govcon-agency-account-plan --agent codex --yes --copy --json` installed only that focused skill into an isolated project's `.agents/skills` directory. No sibling or global skill was installed. Telemetry was disabled for the check.
- Initial CLI discovery with `--list --json` failed because those options cannot be combined. Repeating with `--list` succeeded; the failed receipt is retained.
- New skills use known tool names as discovery targets and defer to current schemas/access. The existing registry snapshot is dated October 12; this change does not claim every indexed tool is available in every connection.
- No customer records, account writes, paid analysis or messaging were exercised. Behavioral and authenticated workflow proof are separate from these structural checks.
- The new install names and skills.sh pages require the approved source to be released and indexed. The existing public listing has not been verified as updated.
