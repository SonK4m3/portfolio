# Product Engineer Portfolio

Static-first portfolio foundation for a Product Engineer focused on AI products, interface craft, and modern software architecture.

## Stack

- Astro 7 with static rendering
- TypeScript strict mode
- Tailwind CSS 4 via the Vite plugin
- MDX and Astro Content Collections

## Local setup

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

## Content architecture

- `src/content/work/` — MDX case studies
- `src/content/notes/` — future writing collection
- `src/content/experiments/` — future lab entries
- `src/content.config.ts` — typed schemas
- `src/data/site.ts` — identity, navigation, temporary principles
- `src/styles/tokens.css` — semantic design tokens

Unknown personal, product, metric, and contact details are explicit placeholders or `null`; replace them only when supplied by the owner. Descriptive images belong under `src/assets/images/` when they arrive.

## Routes

`/`, `/work`, `/work/[slug]`, `/about`, `/playground`, and `/notes` are scaffolded. Detail note and experiment routes can be added when content exists.

## Deployment

No deployment target has been selected. The site remains static-first and host-agnostic.

## Handoff

This foundation follows `PORTFOLIO_AGENT_HANDOFF.md` supplied by the owner.
