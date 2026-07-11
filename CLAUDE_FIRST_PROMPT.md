# Claude Code — First Session Prompt

Copy and paste this prompt into Claude Code after opening the local repository folder.

---

Read the entire root `README.md`, then read every Markdown file inside `/docs` and `/design-system`, followed by `PROJECT_RULES.md` and `CHANGELOG.md`.

Treat this documentation as the authoritative project specification, not as optional guidance.

Before writing code:

1. Summarize your understanding of Ivertim, the brand, UX, visual system and design tokens.
2. Identify any contradictions or missing implementation details.
3. Propose the most appropriate technical stack and project architecture for this website.
4. Do not change locked strategy, UX, visual or token decisions.
5. Do not create arbitrary visual values.
6. Do not add dependencies without explaining why they are needed.
7. Create a `CLAUDE.md` file for your own operational memory.
8. In `CLAUDE.md`, record:
   - current project status;
   - approved technical decisions;
   - completed tasks;
   - next tasks;
   - open questions;
   - known issues.
9. Update `CLAUDE.md` at the end of every meaningful work session.

Do not begin implementation until you have first presented the proposed stack and architecture for approval.
