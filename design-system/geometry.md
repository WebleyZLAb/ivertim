# Geometry

## Radius

| Token | Value |
|---|---:|
| `radius-0` | `0px` |
| `radius-1` | `4px` |
| `radius-2` | `8px` |
| `radius-3` | `12px` |
| `radius-4` | `16px` |
| `radius-full` | `9999px` |

Suggested mapping:

- `radius-1`: badge, tooltip, smallest controls;
- `radius-2`: inputs, compact cards — **also, as of 2026-09-05 (explicit owner decision), all filled buttons.** Buttons went through two revisions the same day: `radius-full` (pill) first, then a rounded-rectangle "echoes the logo mark" look at `radius-4`, then the owner asked to reduce the radius again — settled back at `radius-2`, the original pre-redesign button value, alongside a Signature Shape mark in the bottom-left corner. Icon-only toggle controls (e.g. the mobile menu button) are unaffected — this applies to labelled action buttons. **Same day, later: the corner mark itself was rebuilt as a genuine cutout, not a translucent overlay** — owner's insight that inside the actual logo, the shape is negative space (a literal gap in the mark's own path), not inked, so whatever sits behind shows through. Implemented via the standard two-mask XOR technique (`mask-composite: exclude`, `-webkit-mask-composite: xor` for Safari): the button's gradient fill lives on a `::before`, masked by a full rect + the shape, cancelling out where they overlap to punch a shape-sized hole straight through the fill. Works correctly against any real background behind the button, including the moving `.gradient-brand` section behind `.cta-on-gradient`, since it's true transparency rather than a matched color. Uses the plain `signature-shape.svg` (not `-inverse`) — masks only read alpha, and that file's viewBox is already tightly cropped with no internal margin to fight.
- `radius-3`: standard cards and panels — **also, as of 2026-09-05, the desktop floating navbar shell.** Previously `radius-full` (a full pill); owner asked it to echo the `.cta` button's roundedness instead of being its own shape. Matched by *ratio*, not by copying the button's raw pixel value: `radius-2` (8px) on the button's ~52px height is an 8/52 ≈ 0.154 radius-to-height ratio — applying that same ratio to the navbar's own ~76px height gives ≈11.7px, which lands almost exactly on `radius-3` (12px). Use this same ratio-matching approach (not a flat token copy) whenever a new element needs to "echo" the button's corner feel at a different size;
- `radius-4`: large media blocks and prominent surfaces;
- `radius-full`: pill, avatar, status dot.

## Border width

| Token | Value |
|---|---:|
| `border-0` | `0px` |
| `border-1` | `1px` |
| `border-2` | `2px` |

Only `solid` is part of the core system.

## Opacity

| Token | Value |
|---|---:|
| `opacity-0` | `0` |
| `opacity-20` | `0.20` |
| `opacity-40` | `0.40` |
| `opacity-60` | `0.60` |
| `opacity-80` | `0.80` |
| `opacity-100` | `1` |

## Blur

| Token | Value |
|---|---:|
| `blur-0` | `0px` |
| `blur-1` | `4px` |
| `blur-2` | `8px` |
| `blur-3` | `16px` |
| `blur-4` | `24px` |

Blur is functional, not decorative. Do not use glassmorphism as the visual language.

## Shadow

```css
--shadow-0: none;

--shadow-1:
  0 1px 2px rgb(0 0 0 / 0.05),
  0 2px 8px rgb(0 0 0 / 0.04);

--shadow-2:
  0 4px 12px rgb(0 0 0 / 0.08),
  0 2px 4px rgb(0 0 0 / 0.04);

--shadow-3:
  0 10px 30px rgb(0 0 0 / 0.12),
  0 4px 12px rgb(0 0 0 / 0.06);

--shadow-4:
  0 20px 60px rgb(0 0 0 / 0.16),
  0 8px 24px rgb(0 0 0 / 0.08);
```

Shadows are neutral, layered and soft. No colored glow.

## Elevation

| Token | Shadow | Surface |
|---|---|---|
| `elevation-0` | `shadow-0` | `surface-0` |
| `elevation-1` | `shadow-1` | `surface-1` |
| `elevation-2` | `shadow-2` | `surface-2` |
| `elevation-3` | `shadow-3` | `surface-3` |
| `elevation-4` | `shadow-4` | `surface-3` |

Elevation is not z-index.
