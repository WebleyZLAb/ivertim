# Accessibility

## Minimum requirements

- semantic HTML;
- keyboard operation;
- visible focus;
- adequate text and UI contrast;
- meaningful alt text;
- form labels;
- error association;
- reduced-motion support;
- sufficiently large touch targets;
- no information conveyed by color alone.

## Touch targets

Interactive controls should normally provide at least a 44×44 CSS pixel hit area, even when the visible icon is smaller.

## Focus ring

- use `focus-default` on light surfaces;
- use `focus-inverse` on dark surfaces;
- do not repurpose border alone if it reduces clarity;
- focus must remain visible against every supported surface.

## Motion

Honor `prefers-reduced-motion`. Remove nonessential movement and keep state feedback immediate.

## Content

Clarity and readability have priority over visual novelty.
