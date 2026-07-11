# CLAUDE.md

This file is Claude Code's working memory for the Ivertim project. It is **not** a source of strategic truth — `README.md`, `/docs` and `/design-system` always take precedence. This file only tracks status, decisions, and open items between sessions.

Authority hierarchy (per `README.md`): `README.md` → `/docs` → `/design-system` → explicit new owner decision → existing code → AI/developer assumptions. If something is undefined: don't invent a value, don't introduce a new pattern, propose and explain, wait for approval.

**Workflow rule:** all strategy/branding/design-system documentation was produced with ChatGPT before this handoff. Claude Code now owns the Development phase. Working mode is always **plan first, build second** — nothing gets implemented without an explicit go-ahead in that session. At the end of every meaningful session, this file's Current Progress / Completed / Current Task / Next Task / Session Notes sections must be updated so the next session can pick up exactly where this one left off.

**Copywriting & Marketing:** the owner continues to write copy and run marketing with ChatGPT, not here. Claude Code keeps read/reference visibility into `docs/01-branding.md` and `docs/07-marketing.md` (voice, tone, banned/preferred phrasing, content mix) so implementation stays consistent with whatever copy arrives, and should flag — not silently accept — any incoming copy that contradicts the locked voice/tone rules. Full site copy is being developed with ChatGPT over multiple sessions (owner considers it stronger at site psychology/conversion copy). Once that copywriting work is complete, the plan is to turn it into a **dedicated Claude Code skill** capturing voice, structure and content rules — not built yet, tracked in Next Task.

**🛑 HOLD on page/visual development (set 2026-07-11, reconfirmed 2026-07-12):** the technical scaffold (routes, Content Collections, tokens, font, contact infrastructure) is done and stays as-is. Do **not** proceed with further page development, section components, visual layouts, or temporary/placeholder copy until Copywriting is fully finished and content for all pages is confirmed. Do not treat this hold as lifted just because a later message discusses content or copy in passing — it lifts only when the owner explicitly says to resume page/component/layout work. As of 2026-07-12 the owner is working the visual-identity side separately with **Claude Design** (a brandbook/presentation organizing the existing locked docs — logo system, color, type, spacing, radius, shadow, motion, photography/art direction, site application examples, a few mockups). That work does not invent or change any locked decision and is not this session's job — Claude Code's role here stays repo/technical prep only.

## Project Summary

Ivertim is a furniture-manufacturing company from Prijedor (panel/board furniture — kitchens, wardrobes, cabinets — plus service board-cutting, full apartment/house fit-outs, 3D design, CNC-based production, transport and installation).

Brand essence: **"Kompetentnost kojoj vjeruješ"** (Competence you can trust). Tone: calm, precise, advisory, never salesy or superlative-driven. Verbal principle: *Slušaj → postavi → shvati → izmjeri → predloži* (Listen → ask → understand → measure → propose).

Primary audience: new apartment/house owners, buyers wanting full fit-outs, small carpentry workshops needing service-cutting. Architects are explicitly not the primary target in phase one.

## Current Architecture

**Astro + TypeScript**, static-first (`output: "static"` + `@astrojs/vercel` adapter), approved by owner + ChatGPT on 2026-07-11. Only two routes opt out of prerendering (`export const prerender = false`): `/kontakt` (needs to read post-submit `?status=` query params) and `/api/contact` (POST handler). Everything else is static HTML at build time.

- **Content:** Astro Content Collections, markdown/MDX in-repo (`src/content/usluge`, `src/content/projekti`, `src/content/blog`), schemas in `src/content.config.ts`. No CMS, no database. Collections exist but are empty — waiting on real content.
- **Styling/tokens:** `src/styles/tokens.css` — CSS custom properties generated 1:1 from `/design-system/*.md` (colors, spacing, geometry, motion, layout, typography scale, icon scale, z-index). `src/styles/global.css` is the reset + base application of those tokens. No Tailwind.
- **Typography:** self-hosted via `@fontsource-variable/instrument-sans` (avoids third-party font requests to Google Fonts), loaded in `src/layouts/BaseLayout.astro`.
- **Fluid type scale:** display/H1–H3 use `clamp()` with mobile minimums Claude Code chose (docs left exact formulas to implementation) — see file header comment in `tokens.css`. Flagged in Known Issues for visual validation, not a locked design decision.
- **Layout:** `src/layouts/BaseLayout.astro` (HTML shell + font + meta) → `src/layouts/PageLayout.astro` (Header + main + Footer wrapper, reused by all simple pages).
- **Routing:** file-based, matches locked IA — `/`, `/usluge` + `/usluge/[slug]`, `/projekti` + `/projekti/[slug]`, `/proces-saradnje`, `/blog` + `/blog/[slug]`, `/kontakt`.
- **Contact form:** `src/pages/kontakt.astro` (plain HTML `<form method="POST" action="/api/contact">`, works without JS) → `src/pages/api/contact.ts` (server-side validation, honeypot field, redirects with `?status=`) → `src/lib/email.ts` (Resend, isolated/swappable, reads `RESEND_API_KEY` / `CONTACT_EMAIL_TO` / `CONTACT_EMAIL_FROM` from env — none set yet, see `.env.example`). Astro's built-in same-origin POST protection is active by default (verified).
- **Repo:** git initialized locally 2026-07-11; pushed to GitHub 2026-07-12 at [github.com/WebleyZLAb/ivertim](https://github.com/WebleyZLAb/ivertim) (owner-provided remote, owner-created repo).
- **Logo assets:** `public/images/logo-horizontal.png`, `logo-vertical.png`, `logo-mark.png` — real approved logo files (PNG placeholders, final SVG pending from owner). Not yet wired into `Header.astro` or favicon — that's page/component work, still under the dev hold below.

## Current Progress

- **Phase:** Initial scaffold built and verified (dev server + production build both succeed). No real content/copy yet — all pages are structurally complete with `<!-- TODO -->` placeholders instead of invented marketing copy.
- **Design System:** v1.0.0, locked for this website phase, and now fully mirrored into `src/styles/tokens.css`.

## Completed

- Full documentation read-through: `README.md`, `PROJECT_RULES.md`, `CHANGELOG.md`, `CLAUDE_FIRST_PROMPT.md`, `REPOSITORY_STRUCTURE.md`, all 8 files in `/docs`, all 12 files in `/design-system`.
- Created this `CLAUDE.md` as operational memory, per `CLAUDE_FIRST_PROMPT.md` and `design-system/ai-behaviour.md`.
- Locked Instrument Sans Variable as the official typeface. Updated `design-system/typography.md` (Font Family section replacing the placeholder), `README.md` (Design System section), and `CHANGELOG.md` (Locked list) per explicit owner instruction.
- Stack proposal (Astro + TS) discussed, refined with ChatGPT's input, and approved by owner.
- Scaffolded the full Astro project: token CSS from `/design-system`, base/page layouts, Header/Footer, all IA routes, content collection schemas, contact form + server endpoint + isolated email module, `.env.example`. Verified `npm run dev` and `npm run build` both succeed; manually tested the contact endpoint (valid submission, honeypot, missing fields, invalid email) via direct HTTP requests — all behaved correctly. Initialized git and made the first local commit.

## Current Task

**Paused by explicit owner instruction.** Scaffold is done, pushed to GitHub, and stays as-is. No further page development, section components, visual layouts, or placeholder copy until Copywriting is fully finished and content for all pages is confirmed. Owner is now working the visual-identity brandbook/presentation separately with Claude Design, using this repo as its source. Waiting on both that and Copywriting before resuming dev.

## Next Task

Blocked on Copywriting + brandbook completion — do not start these until the owner explicitly resumes page/component/layout work:

1. Once ChatGPT copywriting work is finished, build a dedicated Claude Code skill from it (voice, structure, content rules).
2. Once real Usluge/Projekti/Blog content arrives, add it as markdown/MDX files in `src/content/*` (schemas already defined in `src/content.config.ts`) and build out the actual section components/visual layouts around it.
3. Once business contact details are confirmed, fill in the Kontakt page intro + add LocalBusiness structured data.
4. Visually validate the fluid typography clamp() values and color contrast in-browser once real copy/images exist — these are explicitly **temporary, not a final design decision** (owner reconfirmed 2026-07-11).
5. Build a proper mobile navigation pattern for `Header.astro` — current mobile nav just wraps the links rather than a dedicated menu/toggle.
6. Wire the real logo assets (`public/images/logo-*.png`, later swapped for final SVGs) into `Header.astro` and the favicon once the brandbook/visual-identity pass is done — currently the header still shows a plain text wordmark and the favicon is Astro's default.

Not blocked, can happen independently whenever convenient:
- Set up real `RESEND_API_KEY` / `CONTACT_EMAIL_TO` / `CONTACT_EMAIL_FROM` once the business email/domain is confirmed.
- Decide on a Vercel (or other) project connection when ready to deploy.

## Open Questions

- Dark mode: token naming is dark-mode-ready but dark mode itself is out of scope for v1 launch.
- "Razgovarajmo" is explicitly labeled a *working name* for the primary CTA in `README.md`/`docs/03-web-experience.md` — not necessarily final copy, flagged so it isn't accidentally treated as locked.
- No Vercel project / deployment target is connected yet — will need owner's Vercel account access or a decision on who owns that account when we're ready to deploy.

**Pending owner/ChatGPT input (not blocking, just not decided yet):**
- Exact final list of Usluge (service) pages — owner will confirm exact list from the business owner.
- Business contact details (phone, email, address, working hours) for Kontakt + structured data — owner will provide.
- Real domain/email for `CONTACT_EMAIL_FROM` (Resend requires a verified sending domain) — currently a placeholder in `.env.example`.
- Legal/compliance content (privacy policy, cookies, impressum) — will be produced by the owner or ChatGPT, not authored here by default.

**Resolved:**
- Language: Serbian, ijekavica, single-language for now. Bilingual (Serbian + English only) is a possible future addition, explicitly out of scope for v1.
- Technical stack: Astro + TypeScript, approved by owner and ChatGPT — see Current Architecture / Technical Decisions.
- Content authoring path: Astro Content Collections (markdown/MDX in-repo), no CMS.

## Technical Decisions

**Approved 2026-07-11 (owner + ChatGPT):**
- Framework: **Astro**, TypeScript, static-first output with `@astrojs/vercel` adapter. Rationale: content/brochure-style site, SEO and minimal shipped JS are priorities per `docs/06-development-rules.md`; Astro ships zero JS by default (islands only where needed).
- Content: **Astro Content Collections** (markdown/MDX in-repo), no CMS, no database.
- Styling/tokens: **CSS custom properties** generated directly from `/design-system`, no Tailwind (kept optional, not added — avoids a second token system).
- Images: `astro:assets` (not yet used since no real images exist yet).
- Animation: plain CSS transitions using the motion tokens, no animation library.
- Contact form: Astro server endpoint (`/api/contact`, `prerender: false`) + Resend, isolated behind `src/lib/email.ts` so the provider can be swapped. Server-side validation + honeypot spam protection implemented; no third-party anti-spam vendor (e.g. Turnstile) added — would need proposing separately if spam becomes a real problem.
- Deployment target: Vercel (previously "considered" in docs, now the actual adapter installed). Not yet connected to a live Vercel project.
- Testing: not set up yet — plan remains Playwright for a couple of critical paths (nav, contact form) once there's real content to test against; no unit test framework unless isolated logic emerges that warrants it.
- i18n: structure kept ready for a future `/en/` addition (Astro has built-in i18n routing) but not implemented — English routes are out of scope for v1.

**Guardrails (apply regardless of stack):**
- Mobile-first, semantic HTML, progressive enhancement, accessible components.
- All design values must come from design-system tokens — no hardcoded HEX/px where a token exists.
- No CMS, auth, database, analytics/tracking, major UI library, or new runtime/deploy platform without proposing first.

Locked product/brand/design decisions (must not change without explicit owner approval):

- **IA:** Home, Usluge (per-service URLs), Projekti (per-project URLs), Proces saradnje, Blog/Savjeti, Kontakt. Single nav CTA, working name "Razgovarajmo".
- **Color:** Light mode is primary/only mode for v1. Brand accent = Srednji orah (`accent-500 #805A3C`, primary action `accent-600 #6E4D33` / hover `accent-700 #5C402A` / active `accent-800 #493221`). Green reserved strictly for functional success states, never brand accent. No second decorative accent family.
- **Visual language:** clarity > novelty, whitespace > border > shadow, one primary CTA per context. Banned: glassmorphism, neumorphism, neon glow, colored shadows, heavy gradients, default carousels, decorative-only animation.
- **Logo:** rounded-footprint mark, single controlled stroke, no slogan alongside primary logo in phase one.
- **Photography:** real process/material/measurement shots only; no generic stock, no over-retouched or AI-perfect scenes.
- **Content mix (blog):** 50% educational / 30% sales-adjacent / 20% other.
- **Typography:** Instrument Sans Variable is the official typeface (single family, variable font, fallback `Instrument Sans, system-ui, sans-serif`). Hierarchy comes from size/weight/line-height/letter-spacing only — never a second font family without approval.

## Known Issues

- `npm audit` reports 3 high-severity advisories, all transitive (`path-to-regexp` ReDoS via `@vercel/routing-utils` inside `@astrojs/vercel`). This is a build-time/config-parsing path, not exposed to end-user request input directly, and `npm audit fix --force` would downgrade the adapter to a breaking-change version — left as-is deliberately, revisit when the adapter ships a clean fix.
- Fluid typography `clamp()` values for display/H1–H3 and `--section-gap` use mobile minimums Claude Code invented (docs explicitly delegate exact formulas to implementation, see `tokens.css` header comment) — **explicitly temporary, owner confirmed 2026-07-11 these are not a final decision** and must be visually validated once real content/copy exists.
- `Header.astro` mobile nav just wraps rather than using a real mobile menu pattern — functional and accessible, but not a polished final pattern.
- Contact form email sending isn't actually configured (`RESEND_API_KEY` etc. unset) — form submits and fails gracefully with a generic error message until real credentials are added.

## Session Notes

- **2026-07-11:** Initial full documentation read-through; created this `CLAUDE.md`. No implementation work done. Next session should open with a proposed stack/architecture for approval before writing any code.
- **2026-07-11:** Locked Instrument Sans Variable as the official typeface. Updated `design-system/typography.md`, `README.md`, and `CHANGELOG.md` per explicit owner instruction.
- **2026-07-11:** Reorganized this file into the fixed section structure (Project Summary / Current Architecture / Current Progress / Completed / Current Task / Next Task / Open Questions / Technical Decisions / Known Issues / Session Notes) per owner instruction.
- **2026-07-11:** Owner confirmed: documentation phase was done with ChatGPT; Claude Code now owns Development going forward. Confirmed workflow is plan-first, build-second, and that this file must be updated at the end of every meaningful session with what was done, current status, and the next step in order. No implementation work started yet — still in planning/handoff stage.
- **2026-07-11:** Reviewed open questions with owner. Resolved: language is Serbian ijekavica only for now (English possibly later). Clarified as pending owner/ChatGPT input rather than truly open: exact Usluge page list, business contact details, legal/compliance content. Copywriting continues in ChatGPT (multi-day effort); plan confirmed to eventually turn that finished copy into a dedicated Claude Code skill (added to Next Task, not started).
- **2026-07-11:** Proposed Astro + TypeScript stack; owner ran it by ChatGPT, which approved with refinements (plain Markdown by default, hybrid-render contact endpoint with server validation/honeypot/isolated email module, i18n-ready structure, tokens-only-from-design-system). Owner approved everything and granted broad implementation autonomy ("radi kako misliš da je najbolje"), with the site needing to be functional by end of August 2026. Scaffolded the full Astro project end-to-end (see Current Architecture), fixed two real bugs found during verification (deprecated `astro:content` zod re-export → import from `zod` directly; `/kontakt` needed `prerender: false` to read post-submit query params, since it was silently swallowing the status message otherwise), verified dev server + production build + contact endpoint behavior, and made the first local git commit. Next session should pick up once real content/copy/contact details arrive.
- **2026-07-11:** Owner reviewed the scaffold and put an explicit **hold on further page/component/visual development**: technical scaffold stays as built, but no page development, section components, visual layouts, or placeholder copy until Copywriting is fully finished and content for all pages is confirmed. Also reconfirmed the fluid typography `clamp()` values Claude Code chose are explicitly temporary, not a final decision. Nothing further built this session — Next Task items are now blocked pending that content handoff.
- **2026-07-12:** Owner created a GitHub repo and asked Claude Code to push the full project there, add the three real (PNG placeholder) logo asset files owner supplied in `public/images/`, and make sure the repo structure is clear enough for a separate Claude Design session to understand strategy/identity/web experience/tokens/visual principles/scaffold from it. Renamed the logo files to a consistent `logo-horizontal.png` / `logo-vertical.png` / `logo-mark.png` naming, rewrote `REPOSITORY_STRUCTURE.md` to reflect the actual current tree (previously only listed the pre-scaffold docs-only structure), updated `README.md`'s status line and logo section to point at the real assets and at `CLAUDE.md` for current technical status, and added an asset-file pointer section to `docs/02-logo-identity.md`. Pushed everything to `github.com/WebleyZLAb/ivertim`. Owner will now build a brandbook/presentation with Claude Design from this repo (not inventing new identity, just presenting what's already locked) — dev hold stays in effect until both that and Copywriting are done.
