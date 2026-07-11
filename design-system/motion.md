# Motion

## Duration

| Token | Value |
|---|---:|
| `motion-instant` | `0ms` |
| `motion-fast` | `120ms` |
| `motion-normal` | `200ms` |
| `motion-slow` | `320ms` |
| `motion-slower` | `480ms` |

## Easing

| Token | Value |
|---|---|
| `ease-linear` | `linear` |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.2, 0.8, 0.2, 1)` |

## Mapping

- hover, color, border and icon feedback: `motion-fast` + `ease-out`;
- buttons, inputs and small state changes: `motion-normal`;
- dropdown, popover and drawer: `motion-slow`;
- modal and major section entrances: `motion-slower`;
- exit: usually `ease-in`;
- state transformation: `ease-in-out`;
- strong but controlled entrance: `ease-emphasized`.

## Rules

- Animation must communicate state, hierarchy or progress.
- Respect `prefers-reduced-motion`.
- Avoid long decorative page transitions.
- Do not animate every element in a section independently without purpose.
- Transform and opacity are preferred for performance.
