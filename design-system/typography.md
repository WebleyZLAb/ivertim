# Typography

## Font Family

Primary Typeface

Instrument Sans Variable

Fallback

Instrument Sans,
system-ui,
sans-serif

Rules

- One font family only.
- Use the Variable Font version.
- Typography hierarchy is created through:
  - size
  - weight
  - line-height
  - letter-spacing
- Never introduce a second font family without explicit approval.

## Scale

| Token | Desktop size | Line height | Weight | Letter spacing |
|---|---:|---:|---:|---:|
| `display-lg` | 80px | 88px | 700 | -2% |
| `display-md` | 64px | 72px | 700 | -2% |
| `display-sm` | 56px | 64px | 700 | -2% |
| `h1` | 48px | 56px | 700 | -2% |
| `h2` | 40px | 48px | 700 | -1.5% |
| `h3` | 32px | 40px | 700 | -1% |
| `h4` | 28px | 36px | 600 | 0 |
| `h5` | 24px | 32px | 600 | 0 |
| `h6` | 20px | 28px | 600 | 0 |
| `body-lg` | 18px | 32px | 400 | 0 |
| `body-md` | 16px | 28px | 400 | 0 |
| `body-sm` | 14px | 24px | 400 | 0 |
| `label-lg` | 16px | 24px | 500 | 0.5% |
| `label-md` | 14px | 20px | 500 | 0.5% |
| `label-sm` | 12px | 16px | 500 | 0.5% |
| `caption` | 12px | 16px | 400 | 0 |
| `overline` | 12px | 16px | 600 | 8% |

`overline` is uppercase.

## Fluid behavior

- Display and H1–H3 use centrally defined `clamp()` formulas.
- H4–H6 are fixed unless a proven responsive issue exists.
- Body remains stable; `body-lg` may scale subtly if required.
- Labels, captions and overline remain fixed.

## Rules

- Do not choose heading levels based on visual size. Preserve semantic document hierarchy.
- Map semantic HTML to visual tokens intentionally.
- Avoid text blocks wider than `content-max`.
- Do not reduce body text below `body-sm`.
