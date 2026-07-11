# Spacing

## Base scale

| Token | Value |
|---|---:|
| `space-0` | `0px` |
| `space-1` | `4px` |
| `space-2` | `8px` |
| `space-3` | `12px` |
| `space-4` | `16px` |
| `space-5` | `20px` |
| `space-6` | `24px` |
| `space-7` | `32px` |
| `space-8` | `48px` |
| `space-9` | `64px` |
| `space-10` | `80px` |
| `space-11` | `96px` |
| `space-12` | `128px` |

## Semantic scale

| Token | Maps to |
|---|---|
| `space-xs` | `space-2` |
| `space-sm` | `space-3` |
| `space-md` | `space-4` |
| `space-lg` | `space-6` |
| `space-xl` | `space-7` |
| `space-2xl` | `space-8` |
| `space-3xl` | `space-10` |
| `space-4xl` | `space-12` |

## Rules

- Padding, margin and gap use this scale.
- No component-specific spacing token unless a repeated semantic need is proven.
- `4px` is reserved for micro spacing.
- Major layout spacing may use a fluid semantic token mapped with `clamp()`.
- Do not introduce values between existing tokens without approval.

## Layout mapping

| Token | Mobile | Tablet | Desktop |
|---|---:|---:|---:|
| `page-padding` | `16px` | `24px` | `32px` |
| `container-padding` | `16px` | `24px` | `32px` |
| `grid-gap` | `16px` | `24px` | `24px` |
| `section-gap` | `clamp(64px, fluid, 128px)` | fluid | fluid |

Exact `clamp()` formulas should be generated centrally and documented in implementation.
