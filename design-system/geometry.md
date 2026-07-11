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
- `radius-2`: buttons, inputs, compact cards;
- `radius-3`: standard cards and panels;
- `radius-4`: large media blocks and prominent surfaces;
- `radius-full`: pill, avatar and status dot.

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
