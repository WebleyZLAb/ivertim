# CLAUDE.md

This file is Claude Code's working memory for the Ivertim project. It is **not** a source of strategic truth — `README.md`, `/docs` and `/design-system` always take precedence. This file only tracks status, decisions, and open items between sessions.

Authority hierarchy (per `README.md`): `README.md` → `/docs` → `/design-system` → explicit new owner decision → existing code → AI/developer assumptions. If something is undefined: don't invent a value, don't introduce a new pattern, propose and explain, wait for approval.

**Workflow rule:** all strategy/branding/design-system documentation was produced with ChatGPT before this handoff. Claude Code now owns the Development phase. Working mode is always **plan first, build second** — nothing gets implemented without an explicit go-ahead in that session. At the end of every meaningful session, this file's Current Progress / Completed / Current Task / Next Task / Session Notes sections must be updated so the next session can pick up exactly where this one left off.

**Copywriting & Marketing:** the owner continues to write copy and run marketing with ChatGPT, not here. Claude Code keeps read/reference visibility into `docs/01-branding.md` and `docs/07-marketing.md` (voice, tone, banned/preferred phrasing, content mix) so implementation stays consistent with whatever copy arrives, and should flag — not silently accept — any incoming copy that contradicts the locked voice/tone rules. Full site copy is being developed with ChatGPT over multiple sessions (owner considers it stronger at site psychology/conversion copy). Once that copywriting work is complete, the plan is to turn it into a **dedicated Claude Code skill** capturing voice, structure and content rules — not built yet, tracked in Next Task.

## Project Summary

Ivertim is a furniture-manufacturing company from Prijedor (panel/board furniture — kitchens, wardrobes, cabinets — plus service board-cutting, full apartment/house fit-outs, 3D design, CNC-based production, transport and installation).

Brand essence: **"Kompetentnost kojoj vjeruješ"** (Competence you can trust). Tone: calm, precise, advisory, never salesy or superlative-driven. Verbal principle: *Slušaj → postavi → shvati → izmjeri → predloži* (Listen → ask → understand → measure → propose).

Primary audience: new apartment/house owners, buyers wanting full fit-outs, small carpentry workshops needing service-cutting. Architects are explicitly not the primary target in phase one.

## Current Architecture

None yet. `PROJECT_RULES.md` deliberately leaves framework, bundler, routing, CMS, styling implementation, and deployment open. No `/src` exists by design until a stack is proposed and approved. Repository is currently a flat docs project (`docs/`, `design-system/`, root files); no git repo initialized in this working directory yet.

## Current Progress

- **Phase:** Documentation-only. No source code, no `/src`, no implementation exists yet.
- **Design System:** v1.0.0, locked for this website phase (spacing, geometry, motion, layout, typography scale, neutral + Srednji orah accent palette, functional colors, semantic mapping, focus/overlay/selection/skeleton/progress tokens are all complete).

## Completed

- Full documentation read-through: `README.md`, `PROJECT_RULES.md`, `CHANGELOG.md`, `CLAUDE_FIRST_PROMPT.md`, `REPOSITORY_STRUCTURE.md`, all 8 files in `/docs`, all 12 files in `/design-system`.
- Created this `CLAUDE.md` as operational memory, per `CLAUDE_FIRST_PROMPT.md` and `design-system/ai-behaviour.md`.
- Locked Instrument Sans Variable as the official typeface. Updated `design-system/typography.md` (Font Family section replacing the placeholder), `README.md` (Design System section), and `CHANGELOG.md` (Locked list) per explicit owner instruction.

## Current Task

None in progress. Waiting on owner direction for next step.

## Next Task

1. Propose technical stack + architecture (framework, TS/JS, routing, styling approach, CMS/content approach, deployment) — **must be presented for approval before any implementation begins**, per `CLAUDE_FIRST_PROMPT.md` and `PROJECT_RULES.md`.
2. Once stack is approved, create `/src` structure.
3. Connect/import Instrument Sans Variable (now locked) into the implementation once a stack exists.
4. Validate color contrast in real browser components before production.
5. Test focus and disabled states in-browser.
6. Generate implementation tokens (CSS custom properties, optional Tailwind theme mapping) from `/design-system` spec.
7. Once the ChatGPT copywriting work is finished, build a dedicated Claude Code skill from it (voice, structure, content rules) so copy stays usable and consistent here going forward.

## Open Questions

- No technical stack has been proposed/approved yet — this is the immediate next conversation.
- Dark mode: token naming is dark-mode-ready but dark mode itself is out of scope for v1 launch.
- "Razgovarajmo" is explicitly labeled a *working name* for the primary CTA in `README.md`/`docs/03-web-experience.md` — not necessarily final copy, flagged so it isn't accidentally treated as locked.
- Content authoring path (CMS vs. flat files for the eventual ChatGPT-produced copy) still connects to the stack decision — to be settled together with the stack proposal.

**Pending owner/ChatGPT input (not blocking, just not decided yet):**
- Exact final list of Usluge (service) pages — owner will confirm exact list from the business owner.
- Business contact details (phone, email, address, working hours) for Kontakt + structured data — owner will provide.
- Legal/compliance content (privacy policy, cookies, impressum) — will be produced by the owner or ChatGPT, not authored here by default.

**Resolved:**
- Language: Serbian, ijekavica, single-language for now. Bilingual (Serbian + English only) is a possible future addition, explicitly out of scope for v1.

## Technical Decisions

None yet on stack. Guardrails already fixed regardless of stack choice:
- Mobile-first, semantic HTML, progressive enhancement, accessible components.
- All design values must come from design-system tokens — no hardcoded HEX/px where a token exists.
- Tailwind is optional; if used, it must map onto the existing token system, not become a second one.
- No CMS, auth, database, analytics/tracking, major UI library, or new runtime/deploy platform without proposing first.
- Vite, Next.js, GitHub and Vercel are mentioned in docs as "previously considered" but not committed.

Locked product/brand/design decisions (must not change without explicit owner approval):

- **IA:** Home, Usluge (per-service URLs), Projekti (per-project URLs), Proces saradnje, Blog/Savjeti, Kontakt. Single nav CTA, working name "Razgovarajmo".
- **Color:** Light mode is primary/only mode for v1. Brand accent = Srednji orah (`accent-500 #805A3C`, primary action `accent-600 #6E4D33` / hover `accent-700 #5C402A` / active `accent-800 #493221`). Green reserved strictly for functional success states, never brand accent. No second decorative accent family.
- **Visual language:** clarity > novelty, whitespace > border > shadow, one primary CTA per context. Banned: glassmorphism, neumorphism, neon glow, colored shadows, heavy gradients, default carousels, decorative-only animation.
- **Logo:** rounded-footprint mark, single controlled stroke, no slogan alongside primary logo in phase one.
- **Photography:** real process/material/measurement shots only; no generic stock, no over-retouched or AI-perfect scenes.
- **Content mix (blog):** 50% educational / 30% sales-adjacent / 20% other.
- **Typography:** Instrument Sans Variable is the official typeface (single family, variable font, fallback `Instrument Sans, system-ui, sans-serif`). Hierarchy comes from size/weight/line-height/letter-spacing only — never a second font family without approval.

## Known Issues

- None yet (no code exists to have issues).

## Session Notes

- **2026-07-11:** Initial full documentation read-through; created this `CLAUDE.md`. No implementation work done. Next session should open with a proposed stack/architecture for approval before writing any code.
- **2026-07-11:** Locked Instrument Sans Variable as the official typeface. Updated `design-system/typography.md`, `README.md`, and `CHANGELOG.md` per explicit owner instruction.
- **2026-07-11:** Reorganized this file into the fixed section structure (Project Summary / Current Architecture / Current Progress / Completed / Current Task / Next Task / Open Questions / Technical Decisions / Known Issues / Session Notes) per owner instruction.
- **2026-07-11:** Owner confirmed: documentation phase was done with ChatGPT; Claude Code now owns Development going forward. Confirmed workflow is plan-first, build-second, and that this file must be updated at the end of every meaningful session with what was done, current status, and the next step in order. No implementation work started yet — still in planning/handoff stage.
- **2026-07-11:** Reviewed open questions with owner. Resolved: language is Serbian ijekavica only for now (English possibly later). Clarified as pending owner/ChatGPT input rather than truly open: exact Usluge page list, business contact details, legal/compliance content. Copywriting continues in ChatGPT (multi-day effort); plan confirmed to eventually turn that finished copy into a dedicated Claude Code skill (added to Next Task, not started).
