# Interaction States

## Standard states

Use when relevant:

- default;
- hover;
- active;
- focus;
- disabled;
- loading;
- success;
- error.

## Loading

User action must produce immediate visible feedback.

Preferred order:

1. determinate progress;
2. button progress / fill;
3. status text;
4. skeleton for content;
5. spinner only when progress cannot be determined.

Prevent duplicate submission during loading.

Do not show fake percentages unless they represent a truthful estimate.

## Hover

Hover enhances discoverability but must not be the only way to reveal essential information.

## Active

Active state confirms press or selection and is visually distinct from hover.

## Focus

Focus is always visible for keyboard interaction. Do not remove outline without an accessible replacement.

## Disabled

Disabled state must:

- remain readable;
- communicate unavailable interaction;
- avoid relying only on low opacity;
- preserve contrast where possible.

## Success and error

- communicate through text or icon as well as color;
- explain what happened;
- provide recovery when error is actionable;
- avoid disappearing before the user can read the message.
