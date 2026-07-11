# Project Rules

This file intentionally defines guardrails rather than a rigid implementation architecture.

## Goal

Allow Claude Code to make strong technical decisions while preventing unnecessary complexity and protecting the locked product and design decisions.

## Claude Code may decide

- framework and build tool;
- JavaScript or TypeScript;
- routing approach;
- component folder structure;
- styling implementation;
- testing tools;
- image tooling;
- deployment configuration;
- CMS or content approach;
- animation library where justified.

## Conditions

Every major decision must be:

- appropriate for the real project size;
- compatible with SEO and performance goals;
- maintainable by a small team;
- easy to understand in future sessions;
- compatible with the Design System;
- documented briefly.

## Claude Code must ask or propose before

- changing the agreed information architecture;
- adding a CMS;
- adding authentication;
- adding a database;
- adding analytics or tracking vendors;
- introducing a major UI library;
- replacing locked typography or color values;
- changing token architecture;
- adding a new runtime or deployment platform;
- creating a complex state-management layer.

## Engineering preferences

- semantic HTML;
- mobile-first CSS;
- progressive enhancement;
- accessible components;
- optimized media;
- explicit data flow;
- small cohesive modules;
- minimal dependencies;
- no premature abstraction;
- no hidden magic;
- no duplicated design values.

## Styling

The implementation may use CSS Modules, scoped CSS, Tailwind or another suitable approach.

Regardless of tooling:

- all design values originate from tokens;
- semantic classes or variables should be preferred;
- components must not carry isolated visual constants;
- responsive behavior follows the documented system.

## Tailwind

Tailwind is optional, not mandatory.

If selected, it is an implementation layer that maps the Design System into the Tailwind theme. It must not become a second, conflicting token system.

## Source folder

No `/src` structure is prescribed in this documentation package. Claude Code should create it only after selecting and explaining the technical architecture.
