# Colors

**Status:** Locked  
**Version:** 1.0.0

The approved primary palette is **Srednji orah**.

The brand accent is warm walnut brown. Green is not a brand accent. Green appears only inside functional success states.

## Base neutral scale

| Token | HEX |
|---|---|
| `neutral-0` | `#FFFFFF` |
| `neutral-50` | `#F7F6F4` |
| `neutral-100` | `#F1EFEC` |
| `neutral-200` | `#E6E2DC` |
| `neutral-300` | `#D5CFC6` |
| `neutral-400` | `#B7AEA3` |
| `neutral-500` | `#958A7E` |
| `neutral-600` | `#74685C` |
| `neutral-700` | `#5A4F45` |
| `neutral-800` | `#40372F` |
| `neutral-900` | `#2B241F` |
| `neutral-950` | `#181513` |

## Base accent scale — Srednji orah

| Token | HEX |
|---|---|
| `accent-50` | `#F7F2ED` |
| `accent-100` | `#EEE2D6` |
| `accent-200` | `#DDC5AD` |
| `accent-300` | `#C8A27F` |
| `accent-400` | `#A97850` |
| `accent-500` | `#805A3C` |
| `accent-600` | `#6E4D33` |
| `accent-700` | `#5C402A` |
| `accent-800` | `#493221` |
| `accent-900` | `#362518` |
| `accent-950` | `#22160E` |

## Semantic tokens

### Text

| Token | Maps to |
|---|---|
| `text-primary` | `neutral-950` |
| `text-secondary` | `neutral-700` |
| `text-tertiary` | `neutral-500` |
| `text-disabled` | `neutral-400` |
| `text-inverse` | `neutral-0` |
| `text-accent` | `accent-700` |

### Background

| Token | Maps to |
|---|---|
| `bg-primary` | `neutral-50` |
| `bg-secondary` | `neutral-100` |
| `bg-tertiary` | `neutral-200` |
| `bg-inverse` | `neutral-950` |

### Surface

| Token | Maps to |
|---|---|
| `surface-0` | `neutral-50` |
| `surface-1` | `neutral-0` |
| `surface-2` | `neutral-100` |
| `surface-3` | `neutral-0` |
| `surface-accent-subtle` | `accent-50` |
| `surface-inverse` | `neutral-950` |

`surface-3` is visually separated from `surface-1` through elevation and shadow, not by introducing another arbitrary color.

### Border

| Token | Maps to |
|---|---|
| `border-subtle` | `neutral-200` |
| `border-default` | `neutral-300` |
| `border-strong` | `neutral-500` |
| `border-accent` | `accent-600` |

### Icon

| Token | Maps to |
|---|---|
| `icon-primary` | `neutral-900` |
| `icon-secondary` | `neutral-600` |
| `icon-tertiary` | `neutral-500` |
| `icon-disabled` | `neutral-400` |
| `icon-accent` | `accent-700` |
| `icon-inverse` | `neutral-0` |

## Action colors

### Primary action

| Token | Maps to |
|---|---|
| `action-primary` | `accent-600` |
| `action-primary-hover` | `accent-700` |
| `action-primary-active` | `accent-800` |
| `action-primary-text` | `neutral-0` |

### Secondary action

| Token | Maps to |
|---|---|
| `action-secondary` | `transparent` |
| `action-secondary-text` | `neutral-950` |
| `action-secondary-border` | `neutral-400` |
| `action-secondary-hover` | `neutral-100` |

### Link

| Token | Maps to |
|---|---|
| `link-default` | `accent-700` |
| `link-hover` | `accent-800` |
| `link-active` | `accent-900` |
| `link-visited` | `accent-800` |

## Functional colors

Functional colors communicate state. They are not brand colors.

### Success

| Token | HEX |
|---|---|
| `success-text` | `#25633B` |
| `success-bg` | `#EAF5ED` |
| `success-border` | `#B7D9C0` |
| `success-solid` | `#347A4B` |

### Warning

| Token | HEX |
|---|---|
| `warning-text` | `#855707` |
| `warning-bg` | `#FFF6E3` |
| `warning-border` | `#E8C77A` |
| `warning-solid` | `#B7791F` |

### Error

| Token | HEX |
|---|---|
| `error-text` | `#8F2D2D` |
| `error-bg` | `#FDECEC` |
| `error-border` | `#E7B6B6` |
| `error-solid` | `#B43C3C` |

### Info

| Token | HEX |
|---|---|
| `info-text` | `#2F5F8F` |
| `info-bg` | `#EDF4FB` |
| `info-border` | `#BDD0E4` |
| `info-solid` | `#3E73A8` |

## Focus ring

| Token | Value |
|---|---|
| `focus-default` | `0 0 0 3px rgb(200 162 127 / 0.42)` |
| `focus-inverse` | `0 0 0 3px rgb(221 197 173 / 0.58)` |
| `focus-error` | `0 0 0 3px rgb(180 60 60 / 0.25)` |

Focus must not be represented only by a border-color change.

## Overlays

| Token | Value |
|---|---|
| `overlay-light` | `rgb(24 21 19 / 0.20)` |
| `overlay-medium` | `rgb(24 21 19 / 0.45)` |
| `overlay-heavy` | `rgb(24 21 19 / 0.70)` |

## Selection and highlight

| Token | Maps to |
|---|---|
| `selection-bg` | `accent-200` |
| `selection-text` | `neutral-950` |
| `highlight-bg` | `accent-100` |
| `highlight-text` | `neutral-950` |

## Skeleton and progress

| Token | Maps to |
|---|---|
| `skeleton-base` | `neutral-200` |
| `skeleton-highlight` | `neutral-100` |
| `progress-track` | `neutral-200` |
| `progress-fill` | `accent-600` |

## Dark mode readiness

Dark mode is not part of the first implementation, but semantic token names must remain mode-independent.

Future dark mode should remap semantic tokens rather than rename component tokens.

## Rules

- Components use semantic tokens, not direct HEX values.
- Base scales exist to build semantic mappings.
- Do not introduce a second decorative accent family.
- Green is reserved for success states.
- Do not use color as the only indicator of state.
- No hardcoded HEX values inside components.
- If a missing color role is discovered, propose a new semantic role before using a base color directly.
