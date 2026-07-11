# Component Rules

This document defines default token mappings. Component implementation may adapt only when a real use case requires it.

## Icon scale

| Token | Value |
|---|---:|
| `icon-xs` | `16px` |
| `icon-sm` | `20px` |
| `icon-md` | `24px` |
| `icon-lg` | `32px` |
| `icon-xl` | `48px` |

All icons must come from one coherent icon family or be custom-drawn to the same stroke language.

## Component size scale

- `xs`
- `sm`
- `md`
- `lg`
- `xl`

Concrete control heights should be finalized during implementation testing and mapped centrally. Do not create independent size vocabularies for every control.

## Default mappings

### Button

- radius: `radius-2`;
- transition: `motion-fast`;
- easing: `ease-out`;
- focus: `focus-default`;
- shadow: `shadow-0` by default;
- padding: spacing scale only;
- states: default, hover, active, focus, disabled, loading.

### Input / Select / Textarea

- radius: `radius-2`;
- border: `border-1`;
- transition: `motion-fast`;
- focus: `focus-default`;
- use semantic text, surface and border tokens.

### Card

- radius: `radius-3`;
- standard padding: `space-6`;
- standard elevation: `elevation-1` only when separation from background is needed;
- prefer border or surface contrast before stronger shadow.

### Modal

- radius: `radius-4`;
- elevation: `elevation-4`;
- overlay: semantic overlay token;
- must trap focus and support keyboard close where appropriate.

### Tooltip

- radius: `radius-1`;
- elevation: high visual layer;
- z-index: `z-tooltip`;
- short content only.

### Badge / Chip

- use smallest practical radius or `radius-full` depending on form;
- icon spacing may use `space-1`;
- never use as decoration without information.

## Z-index

| Token | Value |
|---|---:|
| `z-base` | `0` |
| `z-dropdown` | `100` |
| `z-sticky` | `200` |
| `z-overlay` | `300` |
| `z-modal` | `400` |
| `z-toast` | `500` |
| `z-tooltip` | `600` |

Never use arbitrary values such as `9999`.


## Color mappings

### Primary button

- background: `action-primary`
- text: `action-primary-text`
- hover background: `action-primary-hover`
- active background: `action-primary-active`
- focus ring: `focus-default`

### Secondary button

- background: `action-secondary`
- text: `action-secondary-text`
- border: `action-secondary-border`
- hover background: `action-secondary-hover`

### Text link

- default: `link-default`
- hover: `link-hover`
- active: `link-active`

### Input

- text: `text-primary`
- placeholder: `text-tertiary`
- background: `surface-1`
- border: `border-default`
- focus border: `border-accent`
- focus ring: `focus-default`
- disabled text: `text-disabled`
- disabled background: `bg-secondary`

### Card

- background: `surface-1`
- text: `text-primary`
- secondary text: `text-secondary`
- border when required: `border-subtle`

### Inverse surface

- background: `surface-inverse`
- primary text: `text-inverse`
- secondary content must use a dedicated accessible inverse semantic token if required.

## Prohibited component color usage

Do not place `accent-*`, `neutral-*` or raw HEX values directly inside components when a semantic token exists.
