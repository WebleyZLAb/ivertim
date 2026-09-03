# Repository Structure

```text
Ivertim/
├── README.md                   ← start here: strategy, brand, IA, design system, locked decisions
├── PROJECT_RULES.md            ← development guardrails (what Claude Code may/must not decide)
├── CLAUDE_FIRST_PROMPT.md
├── CHANGELOG.md
├── CLAUDE.md                   ← Claude Code's operational memory (status, decisions, open questions)
├── .gitignore
├── .env.example                ← required env vars for the contact form (no real secrets committed)
│
├── docs/                       ← strategy, brand, UX, visual, token and marketing documentation
│   ├── 00-strategy.md              — business/positioning strategy
│   ├── 01-branding.md              — brand essence, voice, tone
│   ├── 02-logo-identity.md         — logo direction and rules (see public/images/ for actual asset files)
│   ├── 03-web-experience.md        — information architecture, UX principles
│   ├── 04 - Copywriting/           — full copywriting blueprint set (communication system + per-page
│   │                                  blueprints); "Approved" status per file, revised 2026-09-02/03
│   │                                  for the service pivot — see CLAUDE.md
│   ├── 05-visual-experience.md     — visual direction, photography, color direction
│   ├── 06-design-tokens.md         — token architecture overview
│   ├── 07-development-rules.md     — engineering priorities and rules
│   ├── 08-marketing.md             — content/marketing principles
│   └── 09 - Signature System.md    — recurring visual language / brand signature system
│
├── design-system/               ← locked v1.0.0 design system, source of truth for all visual values
│   ├── README.md                    — index and status
│   ├── design-principles.md
│   ├── colors.md                    — neutral + Srednji orah accent palette, semantic mapping
│   ├── typography.md                — Instrument Sans Variable, type scale
│   ├── spacing.md
│   ├── geometry.md                  — radius, border, opacity, blur, shadow, elevation
│   ├── layout.md                    — breakpoints, containers, grid
│   ├── motion.md                    — duration, easing
│   ├── components.md                — icon scale, component token mappings, z-index
│   ├── interaction-states.md
│   ├── accessibility.md
│   └── ai-behaviour.md
│
├── public/
│   └── images/
│       ├── logo-horizontal.svg          — final horizontal lockup (light), 2026-09-03
│       ├── logo-horizontal-inverse.svg  — final horizontal lockup (dark bg)
│       ├── logo-mark.svg                — final standalone mark (light)
│       ├── logo-mark-inverse.svg        — final standalone mark (dark bg)
│       ├── logo-wordmark.svg            — final standalone wordmark (light)
│       ├── logo-wordmark-inverse.svg    — final standalone wordmark (dark bg)
│       ├── signature-shape.svg          — vector source for the Signature System shape (light)
│       ├── signature-shape-inverse.svg  — Signature Shape (dark bg)
│       ├── logo-horizontal.png          — superseded by logo-horizontal.svg, kept pending cleanup decision
│       ├── logo-mark.png                — superseded by logo-mark.svg, kept pending cleanup decision
│       └── logo-vertical.png            — still the only vertical lockup; no SVG delivered yet
│
└── src/                          ← Astro technical scaffold (see CLAUDE.md for current build status)
    ├── content.config.ts             — Content Collections schemas (usluge, projekti, blog)
    ├── content/
    │   ├── usluge/                       — empty, pending real service content
    │   ├── projekti/                     — empty, pending real project content
    │   └── blog/                         — empty, pending real blog content
    ├── layouts/
    │   ├── BaseLayout.astro              — HTML shell, font loading, meta
    │   └── PageLayout.astro              — Header + main + Footer wrapper
    ├── components/
    │   ├── Header.astro
    │   └── Footer.astro
    ├── pages/                         — routes matching the locked IA (Home, Usluge, Projekti,
    │                                     Proces saradnje, Blog, Kontakt) + /api/contact endpoint
    ├── lib/
    │   └── email.ts                      — contact form email sending, isolated behind this module
    ├── styles/
    │   ├── tokens.css                    — CSS custom properties generated 1:1 from /design-system
    │   └── global.css                    — reset + base token application
    └── env.d.ts
```

## Reading order for understanding the project

1. `README.md` — brand strategy, IA, locked decisions, authority hierarchy.
2. `docs/00-strategy.md` → `docs/09 - Signature System.md` (including `docs/04 - Copywriting/`) — full strategy/brand/UX/copywriting/visual/marketing context.
3. `design-system/` — the locked, implementable design system (colors, type, spacing, geometry, motion).
4. `public/images/` — actual approved logo asset files: final SVG for horizontal lockup, mark, wordmark and Signature Shape (light + dark each); vertical lockup still PNG-only.
5. `src/` — current technical scaffold implementing the above. `CLAUDE.md` has the up-to-date status,
   technical decisions, and known limitations of this scaffold (e.g. temporary fluid-typography values
   not yet visually validated).

`CLAUDE.md` is operational memory, not strategic source of truth — `README.md` and the docs above always take precedence if anything conflicts.
