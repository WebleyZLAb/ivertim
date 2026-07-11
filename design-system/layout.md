# Layout

## Breakpoints

| Token | Min width |
|---|---:|
| `mobile` | `0px` |
| `tablet` | `768px` |
| `laptop` | `1024px` |
| `desktop` | `1280px` |
| `wide` | `1536px` |

Mobile-first.

## Containers

| Token | Max width |
|---|---:|
| `container-sm` | `640px` |
| `container-md` | `768px` |
| `container-lg` | `1024px` |
| `container-xl` | `1280px` |
| `container-full` | `100%` |

## Content width

`content-max: 720px`

Used for long-form reading, blog, FAQ, legal and process text.

## Grid

| Range | Columns | Gutter |
|---|---:|---:|
| Mobile | 4 | 16px |
| Tablet | 8 | 24px |
| Desktop | 12 | 24px |

Grid margin uses `page-padding`.

## Responsive rule

Breakpoint decides **when structure changes**.

Responsive mapping decides **what changes**.

`clamp()` decides **how fluid values change between limits**.

### Use `clamp()` for

- display typography;
- H1–H3;
- large section spacing;
- hero spacing;
- container padding where defined;
- large layout relationships.

### Do not use `clamp()` by default for

- button height;
- input height;
- icon size;
- avatar;
- badge;
- chip;
- border;
- radius;
- shadow;
- internal component gaps.

Structural changes remain breakpoint-driven.
