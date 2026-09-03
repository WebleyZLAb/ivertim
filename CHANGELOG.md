# Changelog

All notable changes to the project documentation and Design System are documented here.

## [2.1.1] - Remove superseded PNG logos (2026-09-03)

PATCH per §15 semver rule — asset cleanup, no decision change.

### Removed

- `public/images/logo-horizontal.png`, `public/images/logo-mark.png` — superseded by the SVG versions added in `[2.1.0]`; owner confirmed removal.

### Changed

- `docs/02-logo-identity.md`, `REPOSITORY_STRUCTURE.md`, `CLAUDE.md` — updated to reflect the removal.

## [2.1.0] - Final SVG logo assets (2026-09-03)

MINOR per §15 semver rule — new assets resolve a documented gap, no locked decision changes.

### Added

- `public/images/logo-horizontal.svg` / `logo-horizontal-inverse.svg` — final horizontal lockup (light/dark).
- `public/images/logo-mark.svg` / `logo-mark-inverse.svg` — final standalone mark (light/dark).
- `public/images/logo-wordmark.svg` / `logo-wordmark-inverse.svg` — final standalone wordmark (light/dark), a variant that previously had no dedicated asset.
- `public/images/signature-shape.svg` / `signature-shape-inverse.svg` — first real vector source for the Signature Shape described in `docs/09 - Signature System.md` (previously only described in prose, no asset).

### Changed

- `docs/02-logo-identity.md` §Asset fajlovi, `README.md` §5, `REPOSITORY_STRUCTURE.md` — updated to list the new SVGs as primary and note what's still missing (vertical lockup SVG, favicon, app/social icon, monochrome-only variants).

### Note

- `logo-horizontal.png` and `logo-mark.png` are superseded by the new SVGs but were left in the repo rather than deleted without being asked; `logo-vertical.png` remains the only vertical-lockup asset (no SVG delivered for it yet).

## [2.0.1] - Pivot consistency pass (2026-09-03)

PATCH per §15 semver rule — clarifies and completes the 2.0.0 pivot without changing any locked decision. Full context in `CLAUDE.md`.

### Changed

- `docs/04 - Copywriting/00 - Communication System.md` — bumped to v1.1. This is the document every other copywriting file defers to on tone, and it had never been updated for the pivot: §6 ("Šta prodajemo") only described the namještaj-po-mjeri audience, §7 ("Redoslijed razmišljanja") ended every chain in "Namještaj", and §13 ("Emocije") had no example for uslužno rezanje. Added the parallel uslužno-rezanje framing to all three sections (existing namještaj-po-mjeri content unchanged), reusing phrasing already approved in `Cutting-Service-Blueprint-v1.0.md`.
- `docs/04 - Copywriting/Home-Blueprint-v1.0-Full.md` §5 Globalna pravila — "Prvo čovjek. Zatim prostor. Tek onda namještaj." inherited the same furniture-only assumption from the Communication System; reworded to "Zatim potreba — rezanje ili namještaj po mjeri. Tek onda rješenje." to match §8 USLUGE, which was already two-service framed.
- `docs/04 - Copywriting/Process-Blueprint-v1.0.md` — bumped to v1.1. The page's six steps (ending in Montaža) only describe the namještaj-po-mjeri process; uslužno rezanje has its own shorter process with no montaža step (see `Cutting-Service-Blueprint-v1.0.md` §11). Added §10a with that shortened track and a note that the shared Proces saradnje page needs to present both tracks (e.g. two tabs/sections) rather than one process presented as universal.
- `REPOSITORY_STRUCTURE.md` — copywriting folder description no longer says "needs revision"; it was already revised in `[2.0.0]`.
- `README.md` — removed a duplicated Typography section (§8) and an absolute GitHub URL that should have been a relative link (§8, design-system/README.md reference).
- This changelog — `[1.0.2]` and `[2.0.0]` reordered so entries read newest-version-first, per §15.

## [1.0.2] - Signature System + Copywriting set (backfilled 2026-09-02)

Changes were made directly on GitHub on 2026-07-22/23 without a changelog entry at the time; this entry backfills them for the record.

### Added

- `docs/09 - Signature System.md` — recurring visual language / brand signature system, extends logo identity, visual experience and design tokens. Status: Approved.
- `docs/04 - Copywriting/` — full copywriting blueprint set: Communication System plus per-page blueprints (Home, Services Landing, Process, Contact, Projects, Project Template, Advice, Advice Template, and per-service mini blueprints for Kitchens/Wardrobes/Living Room/Hospitality/Business/Custom). Status: Approved per file.

### Changed

- `docs/04-visual-experience.md` → `docs/05-visual-experience.md`, `docs/05-design-tokens.md` → `docs/06-design-tokens.md`, `docs/06-development-rules.md` → `docs/07-development-rules.md`, `docs/07-marketing.md` → `docs/08-marketing.md` — renumbered to make room for the Copywriting folder at `04`.

### Known gap at time of backfill — resolved 2026-09-02

- The root `README.md` and `REPOSITORY_STRUCTURE.md` doc links/tree were not updated when the above renumbering happened, and neither file listed the new Copywriting or Signature System docs — fixed 2026-09-02.
- Six of the per-service mini blueprints declared `Nasljeđuje: Service Template Blueprint v1.0`, but no such file exists in the repo — resolved 2026-09-02 by striking the inherited-template line in all six files (they're no longer standalone services needing a shared template — see `[2.0.0]` below).
- `docs/04 - Copywriting/README.md` existed but was empty — filled in 2026-09-02 with a set index.

## [2.0.0] - Service pivot: uslužno rezanje kao primarna usluga (2026-09-02)

Explicit new owner decision (per README §1 authority hierarchy, supersedes prior documented strategy) — MAJOR per §15 semver rule, changes locked strategy. Full context and reasoning in `CLAUDE.md`.

### Changed

- `docs/00-strategy.md` §Poslovni fokus + §Primarne ciljne grupe — rewritten: (1) uslužno rezanje, kantovanje i bušenje pločastih materijala is now the primary service and production focus, (2) izrada pločastog namještaja po mjeri is secondary. "Kompletno opremanje stanova i kuća" dropped as a separately marketed line item (owner's existing referral network already covers it). 3D projektovanje/CNC/transport-montaža reframed as part of the delivery process, not separate service line items. Primary target audience reordered: stolari/manje radionice now first, apartment/house owners second.
- `README.md` §2 — same two-service list, mirrored from `docs/00-strategy.md`.
- `docs/08-marketing.md` §Glavne teme — rebalanced toward rezanje/kantovanje/bušenje-for-radionice content first, namještaj-po-mjeri themes secondary.
- `docs/04 - Copywriting/Services-Landing-Blueprint-v1.0.md` — bumped to v1.1: restructured from room-category grouping ("Za vaš dom" / "Za veće projekte") into the two real services. Room categories (kuhinje, plakari, dnevne sobe, itd.) become cards/examples under "Izrada namještaja po mjeri" rather than separate services with their own URL.
- `docs/04 - Copywriting/Home-Blueprint-v1.0-Full.md` §USLUGE — H2/lead reworded to the two-service framing.
- Six per-room mini blueprints (`Kitchens-`, `Wardrobes-`, `Living-Room-`, `Hospitality-`, `Business-`, `Custom-Blueprint-v1.0.md`) — annotated with their new role (examples/cards under service #2, not standalone services); content itself unchanged, still usable as-is.

### Added

- `docs/04 - Copywriting/Cutting-Service-Blueprint-v1.0.md` — full page blueprint for the primary service, which previously had no dedicated copy (only passing mentions).
- Index content for the previously-empty `docs/04 - Copywriting/README.md`.

## [1.0.1] - Design Tokens Implementation

### Added

- `design-system/tokens.css` — machine-ready CSS custom properties, jedini izvor istine za implementacione vrijednosti.
- `design-system/IMPLEMENTATION_TOKENS.md` — tačne clamp() formule, breakpointi i pregled pokrivenih vrijednosti.
- Kompletne implementacione vrijednosti za spacing, radius, border, opacity, blur, motion, easing, shadow, z-index, containere, tipografiju, ikone, i sve komponente (button, input, card, navbar, modal, drawer, tooltip, toast, badge, chip, avatar, accordion, focus).
- Font-family zaključan: Instrument Sans Variable.

### Changed

- `design-system/README.md` — dodata sekcija "Machine-ready izvor" i podjela dokumenata na konceptualne i implementacione.
- Glavni `README.md` (sekcije 8, 13) ažurirane da referenciraju `tokens.css` kao jedini izvor istine za implementaciju.

### Open

- Vizuelna verifikacija accent HEX skale (`#805A3C`) uz fizički uzorak/logotip prije produkcije.
- WCAG kontrast provjera u stvarnim komponentama.
- Focus/disabled stanja testirati u browseru.

## [1.0.0] - Design System locked

### Added

- Complete project README
- Strategy, branding, identity, web and visual documentation
- Complete spacing, geometry, motion, layout and typography token architecture
- Neutral palette
- Approved Srednji orah accent palette
- Functional status colors
- Semantic color mappings
- Focus, overlay, selection, skeleton and progress tokens
- Component mappings
- Interaction states
- Accessibility rules
- AI behaviour rules
- Flexible project development rules

### Locked

- Light mode as primary mode
- Srednji orah as the only brand accent family
- Green reserved for functional success states
- Primary action color sequence
- Design System version 1.0.0
- Instrument Sans Variable as the official typeface

### Implementation checks

- Connect the approved font-family
- Validate contrast in actual browser components
- Create Claude Code operational memory
