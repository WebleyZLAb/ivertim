# Implementation Tokens v1.0.1

`tokens.css` is the machine-ready source of truth.

## Fluid range

All `clamp()` values interpolate linearly between a viewport width of `375px` and `1440px`.

## Exact clamp formulas

| Token | Formula |
|---|---|
| `page-padding` | `clamp(1rem, 0.6479rem + 1.5023vw, 2rem)` |
| `container-padding` | `clamp(1rem, 0.6479rem + 1.5023vw, 2rem)` |
| `section-gap` | `clamp(4rem, 2.5915rem + 6.0094vw, 8rem)` |
| `hero-padding-block` | `clamp(5rem, 3.2394rem + 7.5117vw, 10rem)` |
| `display-lg` | `clamp(3.5rem, 2.9718rem + 2.2535vw, 5rem)` |
| `display-lg line-height` | `clamp(4rem, 3.4718rem + 2.2535vw, 5.5rem)` |
| `display-md` | `clamp(3rem, 2.6479rem + 1.5023vw, 4rem)` |
| `display-md line-height` | `clamp(3.5rem, 3.1479rem + 1.5023vw, 4.5rem)` |
| `display-sm` | `clamp(2.5rem, 2.1479rem + 1.5023vw, 3.5rem)` |
| `display-sm line-height` | `clamp(3rem, 2.6479rem + 1.5023vw, 4rem)` |
| `h1` | `clamp(2.25rem, 1.9859rem + 1.1268vw, 3rem)` |
| `h1 line-height` | `clamp(2.75rem, 2.4859rem + 1.1268vw, 3.5rem)` |
| `h2` | `clamp(2rem, 1.8239rem + 0.7512vw, 2.5rem)` |
| `h2 line-height` | `clamp(2.5rem, 2.3239rem + 0.7512vw, 3rem)` |
| `h3` | `clamp(1.75rem, 1.662rem + 0.3756vw, 2rem)` |
| `h3 line-height` | `clamp(2.25rem, 2.162rem + 0.3756vw, 2.5rem)` |

## Breakpoints

| Name | Value |
|---|---:|
| Mobile base | `0px` |
| Tablet | `768px / 48rem` |
| Laptop | `1024px / 64rem` |
| Desktop | `1280px / 80rem` |
| Wide | `1536px / 96rem` |

Media-query conditions must use these exact constants because CSS custom properties cannot be used reliably inside media query expressions.

## Values covered

The CSS file includes concrete values for:

- font family and weights;
- spacing and semantic spacing;
- all fluid spacing;
- radius, border, opacity and blur;
- motion, easing and reduced motion;
- shadow and z-index;
- containers and content width;
- complete typography sizing, line height and tracking;
- icons and stroke;
- button and control sizes;
- input, textarea and form spacing;
- cards, navbar, modal and drawer;
- tooltip, toast, badge, chip and avatar;
- accordion and focus ring;
- neutral, Srednji orah and functional palettes;
- semantic text, surface, border, icon and action colors;
- overlays, selection, skeleton and progress.

## Implementation rule

No component may introduce an isolated visual value when a token exists. A missing repeated need must first be proposed as a new token.
