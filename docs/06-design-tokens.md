# 06 — Design Tokens

Kompletna specifikacija se nalazi u folderu `/design-system`.

## Arhitektura

Svaka kategorija koristi:

1. **Base tokens** — fizičke vrijednosti;
2. **Semantic tokens** — značenje i namjena;
3. **Component mapping** — primjena postojećih tokena na komponentu.

## Pravila

- nema proizvoljnih vrijednosti;
- nema novih tokena bez ponovljive potrebe;
- semantic token ima prednost u komponentama;
- vrijednosti se mijenjaju na jednom mjestu;
- sistem mora ostati mali, jasan i dugotrajan;
- svi alati i developeri koriste isti izvor istine.

## Implementacija

Claude Code treba da iz specifikacije generiše:

- CSS custom properties;
- eventualni Tailwind theme ako Tailwind bude izabran;
- tipizirane tokene ako ih stack zahtijeva;
- dokumentovane component mappings.

Figma Variables i Style Dictionary nisu zahtjev trenutnog workflowa.


## Color System

The approved brand accent is **Srednji orah**.

- Brand accent base: `accent-500 = #805A3C`
- Primary action: `accent-600 = #6E4D33`
- Hover: `accent-700 = #5C402A`
- Active: `accent-800 = #493221`

Green is not a brand accent. It is used only for functional success states.

All component colors must use semantic roles defined in `design-system/colors.md`.
