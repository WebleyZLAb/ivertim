# Changelog

All notable changes to the project documentation and Design System are documented here.

## [1.0.2] - Signature System + Copywriting set (backfilled 2026-09-02)

Changes were made directly on GitHub on 2026-07-22/23 without a changelog entry at the time; this entry backfills them for the record.

### Added

- `docs/09 - Signature System.md` — recurring visual language / brand signature system, extends logo identity, visual experience and design tokens. Status: Approved.
- `docs/04 - Copywriting/` — full copywriting blueprint set: Communication System plus per-page blueprints (Home, Services Landing, Process, Contact, Projects, Project Template, Advice, Advice Template, and per-service mini blueprints for Kitchens/Wardrobes/Living Room/Hospitality/Business/Custom). Status: Approved per file.

### Changed

- `docs/04-visual-experience.md` → `docs/05-visual-experience.md`, `docs/05-design-tokens.md` → `docs/06-design-tokens.md`, `docs/06-development-rules.md` → `docs/07-development-rules.md`, `docs/07-marketing.md` → `docs/08-marketing.md` — renumbered to make room for the Copywriting folder at `04`.

### Known gap at time of backfill

- The root `README.md` and `REPOSITORY_STRUCTURE.md` doc links/tree were not updated when the above renumbering happened, and neither file listed the new Copywriting or Signature System docs — fixed 2026-09-02.
- Six of the per-service mini blueprints declare `Nasljeđuje: Service Template Blueprint v1.0`, but no such file exists in the repo — still open, see `CLAUDE.md`.
- `docs/04 - Copywriting/README.md` exists but is empty — still open.

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
