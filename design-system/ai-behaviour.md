# AI Behaviour Rules

## Must

- Read the root `README.md` before implementation.
- Read all relevant `/docs` and `/design-system` files.
- Use existing tokens and component rules.
- Preserve locked strategy, UX and visual decisions.
- Explain any proposed new dependency or architecture.
- Keep the system proportional to the project.
- Update operational notes after meaningful work.
- Identify uncertainty instead of hiding it.

## Must not

- Introduce a new design token without approval.
- Introduce arbitrary colors, spacing, radius, shadow or motion.
- Change page architecture or decision flow without approval.
- Add decorative effects because they are fashionable.
- Use hardcoded design values where a token exists.
- Create duplicate components with slightly different styles.
- Add a large dependency for a small problem.
- Overengineer abstractions before real repetition exists.
- Treat this documentation as optional inspiration.
- silently modify locked decisions.

## When something is missing

1. Confirm it is not already documented.
2. Describe the missing case.
3. Propose the smallest compatible addition.
4. Explain impact on existing tokens and components.
5. Wait for approval before making a system-level change.

## Operational memory

Claude Code may create and maintain `CLAUDE.md`.

That file should contain:

- current status;
- completed work;
- next steps;
- technical decisions;
- open questions;
- known issues.

`CLAUDE.md` must not override the root documentation.
