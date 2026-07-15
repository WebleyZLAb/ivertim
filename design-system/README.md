# Ivertim Design System

**Verzija:** 1.0.1

Ovaj folder je izvor istine za sve vizuelne i interakcijske vrijednosti.

## Princip

Komponente ne izmišljaju vrijednosti. One sastavljaju postojeće tokene.

## Slojevi

1. Base token
2. Semantic token
3. Component mapping
4. Interaction state

## Machine-ready izvor

`tokens.css` je jedini izvor istine za konkretne implementacione vrijednosti (HEX, px, rem, ms, clamp formule). Ako se bilo koji drugi dokument u ovom folderu (`colors.md`, `spacing.md`, `typography.md`...) razlikuje od `tokens.css`, `tokens.css` ima prednost, jer predstavlja finalnu, verifikovanu vrijednost, dok su ostali dokumenti opisni/konceptualni.

- [`tokens.css`](./tokens.css) — CSS custom properties, spremne za direktan import u kod.
- [`IMPLEMENTATION_TOKENS.md`](./IMPLEMENTATION_TOKENS.md) — tabela tačnih `clamp()` formula, breakpointa i objašnjenje šta je sve pokriveno u `tokens.css`.

AI agent ili developer koji implementira komponentu treba prvo pogledati `tokens.css`, a ne izvoditi vrijednosti iz proznih opisa u drugim dokumentima ovog foldera.

## Dokumenti

**Konceptualni / opisni**

- `spacing.md`
- `geometry.md`
- `motion.md`
- `layout.md`
- `typography.md`
- `colors.md`
- `components.md`
- `interaction-states.md`
- `accessibility.md`
- `design-principles.md`
- `ai-behaviour.md`

**Implementacioni (machine-ready)**

- `tokens.css`
- `IMPLEMENTATION_TOKENS.md`

## Status

Design System v1.0.1 is locked for the current website phase.

Completed:

- spacing;
- geometry;
- opacity;
- blur;
- shadow;
- elevation;
- motion;
- easing;
- layout;
- responsive behavior;
- typography scale;
- icon scale;
- component rules;
- interaction states;
- neutral palette;
- Srednji orah accent palette;
- functional colors;
- semantic color mapping;
- focus and overlay tokens;
- **complete implementation values (`tokens.css`) — spacing, radius, shadow, motion, typography, color, and component dimensions all resolved to exact px/rem/hex/ms values;**
- **exact fluid `clamp()` formulas for all responsive typography and layout tokens;**
- **font-family locked: Instrument Sans Variable (see `tokens.css` → `--font-sans`).**

Nove vrijednosti se ne uvode bez dokumentovane potrebe i odobrenja.
