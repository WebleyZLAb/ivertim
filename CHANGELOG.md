# Changelog

All notable changes to the project documentation and Design System are documented here.

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
