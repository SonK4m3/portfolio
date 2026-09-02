# Portfolio Website — Agent Handoff

**Document status:** v0.1 — Foundation / implementation handoff  
**Owner:** Product Engineer portfolio  
**Primary implementation agent:** Website Agent  
**Content owner:** ChatGPT + portfolio owner  
**Date:** 2026-09-02

---

## 0. Read this first

This document is the implementation source of truth for the **first technical foundation** of the portfolio.

The immediate goal is **NOT** to finish the visual design or invent final copy.

The Website Agent should:

1. Create the repository.
2. Bootstrap the Astro project.
3. Establish a clean, production-ready architecture.
4. Build the design foundation and reusable layout primitives.
5. Create the initial page routes and content model.
6. Add placeholder sections so future content can be dropped in without restructuring the application.
7. Keep the implementation deliberately flexible because portfolio research, final copy, project narratives, visual references, and NoteX case-study content are still being developed.

The Website Agent must **not**:

- invent achievements, metrics, employers, job titles, product claims, dates, or user numbers;
- invent final NoteX product copy;
- lock the website into a visual direction that is expensive to change;
- create excessive animations before the content hierarchy is finalized;
- turn the portfolio into a generic developer-template site;
- add unnecessary framework/runtime complexity.

---

# 1. Product goal

Build a high-quality personal portfolio for a:

> **Product Engineer focused on AI products**

The portfolio should communicate that the owner works across:

- product thinking;
- interface / UX;
- frontend architecture;
- AI product experiences;
- web applications;
- browser extensions;
- desktop applications;
- system design and technical trade-offs.

The website should feel like the portfolio of someone who can take a product from:

> ambiguity → product decision → architecture → interface → production

The portfolio is **not** primarily a resume website.

Its strongest proof should come from:

- selected work;
- case studies;
- engineering decisions;
- product reasoning;
- experiments;
- writing.

---

# 2. Current positioning

Use this as temporary positioning until final copy is delivered.

## Primary role

**Product Engineer**

## Working positioning

> Building thoughtful AI-powered products from idea to production.

Alternative working line:

> I build AI products where product thinking, interface craft, and engineering meet.

Alternative thematic line:

> Turning complex systems into simple products.

These are **working strings**, not final approved copy.

Store them in a centralized data/config file instead of hardcoding them across components.

---

# 3. Flagship project

The flagship portfolio project is:

# NoteX

NoteX should eventually be the deepest case study on the website.

Current high-level framing:

> An AI product exploring how meetings, recordings, documents, and information can become structured, useful knowledge.

This wording is provisional.

The owner / ChatGPT will later provide:

- final NoteX product story;
- problem framing;
- intended users;
- product vision;
- screenshots;
- architecture diagrams;
- feature hierarchy;
- engineering challenges;
- design decisions;
- AI workflow details;
- outcomes / public metrics if available;
- lessons learned;
- what can and cannot be publicly disclosed.

Do **not** fabricate these details.

---

# 4. Initial project surfaces

The architecture should make room for the following bodies of work.

## 4.1 NoteX — Flagship case study

Potential areas later covered:

- AI meeting / knowledge experience;
- recording and transcript UX;
- frontend architecture;
- React Server Components decisions;
- loading / Suspense strategy;
- caching;
- IndexedDB;
- AI generation flows;
- quota experience;
- payment / subscription UX;
- authentication;
- cross-platform decisions.

## 4.2 NoteX × Google Meet

Potential areas:

- Chrome Extension;
- authentication flow;
- background/session state;
- side panel;
- meeting capture;
- transcript flow;
- browser platform constraints.

This may become either:

- a dedicated project;
- or a chapter inside the primary NoteX case study.

Keep the content architecture capable of supporting either.

## 4.3 NoteX Desktop

Potential areas:

- Tauri;
- desktop/web boundaries;
- local files;
- filesystem integration;
- file watching;
- desktop product strategy.

This may also become either a dedicated project or NoteX sub-case-study.

## 4.4 AI / LaTeX generation experiments

Potential areas:

- prompt engineering;
- context engineering;
- retrieval;
- few-shot selection;
- workflow orchestration;
- evaluation;
- compile / repair loop.

This is likely better positioned as an **experiment / lab entry** rather than a flagship project.

---

# 5. Information architecture

Create a structure that can support:

```txt
/
├── Work
│   ├── NoteX
│   ├── NoteX Meet (optional)
│   └── NoteX Desktop (optional)
├── Playground
├── Notes
└── About
```

Recommended public routes:

```txt
/
 /work
 /work/[slug]
 /playground
 /notes
 /notes/[slug]
 /about
```

The initial release may only expose:

```txt
/
 /work/notex
 /about
```

Other routes can exist but remain hidden from navigation until content is ready.

Do not create empty public pages purely to fill the nav.

---

# 6. Homepage structure

Build the homepage composition around these sections.

## 6.1 Navigation

Temporary structure:

```txt
Name / Mark

Work
About
Notes
```

Potential later additions:

- Playground
- GitHub
- LinkedIn

Do not add every destination to the first version.

Navigation should remain visually quiet.

---

## 6.2 Hero

Purpose:

Within 5–15 seconds, the visitor should understand:

1. who this person is;
2. what kind of products they build;
3. where to see proof.

Working content:

```txt
Product Engineer

Turning complex systems
into simple products.

I work across product, interface,
architecture and AI to bring ideas
from ambiguity to production.

Explore selected work
```

All copy is provisional.

Hero requirements:

- strong typography;
- generous whitespace;
- no generic developer illustration;
- no terminal gimmick;
- no skill-progress bars;
- no floating technology logo cloud;
- no huge 3D object merely for decoration.

---

## 6.3 Selected Work

This should be the strongest homepage section.

Initial data model should support:

```ts
type ProjectSummary = {
  slug: string
  index?: string
  title: string
  eyebrow?: string
  description: string
  role?: string
  disciplines?: string[]
  technologies?: string[]
  cover?: ImageMetadata | string
  featured: boolean
  status?: 'draft' | 'published' | 'private'
  href?: string
}
```

Initial featured entry:

```txt
01
NoteX

AI-powered knowledge workspace
[temporary description]
```

Do not overemphasize technology badges.

The visual hierarchy should be:

1. product / problem;
2. outcome or idea;
3. role / scope;
4. technologies.

---

## 6.4 How I Build

Working title:

> How I build.

Temporary principles:

### Start with the problem.
Technology comes second.

### Make complexity invisible.
Good products feel simpler than the systems behind them.

### Architecture is UX.
Loading, latency, errors, and state are part of the experience.

### AI needs systems, not prompts.
Context, evaluation, and recovery matter.

### Ship, learn, refine.
A product is not finished when the code merges.

These are provisional but sufficiently mature to use as temporary content.

Build this section from data rather than repeated markup.

---

## 6.5 Experiments / Playground Preview

Working categories:

- AI
- RAG
- Agents
- React architecture
- Browser APIs
- Recording
- Desktop
- Prompt engineering
- Context engineering

The homepage only needs a restrained preview.

Do not build a dense tag wall.

---

## 6.6 Writing Preview

Eventually supports articles such as:

- Rethinking Loading UI in React Server Components
- Where Should Suspense Boundaries Live?
- Building Authentication for a Chrome Extension
- Designing AI Quota Without Ruining UX
- Web vs Desktop: Deciding What Belongs Where
- What Building NoteX Taught Me About AI Products

These titles are topic candidates, not guaranteed final article titles.

The architecture should support MDX notes without requiring a CMS.

---

## 6.7 About Preview

Working copy:

> I'm a Product Engineer interested in the space where software engineering, product thinking, and AI meet.
>
> I enjoy taking ambiguous problems and turning them into products that feel simple, fast, and intentional.
>
> Recently, I've been building NoteX — exploring how AI can transform meetings, documents, and everyday information into useful knowledge.
>
> I care deeply about interface details, system architecture, and the decisions that connect the two.

Provisional.

---

## 6.8 Footer

Keep minimal.

Possible direction:

```txt
Let's build something useful.

GitHub
LinkedIn
Email

© 2026
```

Actual URLs and email must be supplied by the owner.

Never invent them.

---

# 7. Case-study architecture

The `/work/[slug]` layout must be able to handle long-form case studies.

The flagship NoteX narrative is expected to follow approximately:

```txt
01 — The Problem
02 — The Idea
03 — The Product
04 — My Role
05 — Building the Experience
06 — Engineering Decisions
07 — Beyond the Web
08 — Challenges & Trade-offs
09 — What I Learned
10 — What's Next
```

This structure is **not final copy**.

Design the case-study system from modular content blocks so chapters can be reordered later.

Required block types should eventually support:

- rich text;
- lead paragraph;
- full-width image;
- contained image;
- image pair;
- video / demo;
- quote / key insight;
- technical diagram;
- architecture diagram;
- code excerpt;
- decision / trade-off block;
- metrics / facts row;
- timeline;
- comparison;
- before / after;
- callout;
- next-project navigation.

Do not implement every advanced block in phase 1.

Establish the primitives and typing so they can be added cleanly.

---

# 8. Visual direction

## Theme

**Editorial × Product × Technical**

The site should feel:

- precise;
- calm;
- modern;
- intentional;
- mature;
- technically credible;
- editorial rather than dashboard-like.

Reference qualities, not clones:

- Linear — restraint and clarity;
- Vercel — typography / technical confidence;
- Emil Kowalski — interface craft;
- Rauno Freiberg — personal design perspective;
- Paco Coursey — restraint;
- Brittany Chiang — immediate role clarity.

Do not copy layouts, interactions, source code, or exact visual assets from these references.

---

# 9. Visual principles

## 9.1 Typography first

The composition should work even with all decorative graphics removed.

Use:

- large editorial display type;
- strong typographic hierarchy;
- comfortable reading width;
- compact metadata;
- generous whitespace.

Avoid:

- oversized gradient text;
- novelty monospace everywhere;
- generic "Hello World" identity;
- excessive tiny labels.

---

## 9.2 Color

Start neutral.

Create semantic tokens rather than final hardcoded brand colors.

Suggested token categories:

```css
--color-bg
--color-surface
--color-surface-elevated
--color-text
--color-text-muted
--color-border
--color-accent
--color-accent-contrast
```

The final accent color is not yet approved.

Base should work in monochrome.

---

## 9.3 Layout

Use a responsive max-width system.

Recommended conceptual tokens:

```txt
page gutter
content max width
reading max width
wide-media max width
section spacing
block spacing
```

Do not scatter arbitrary `max-w-*` values through pages.

Create layout primitives.

Suggested components:

```txt
Container
Section
Stack
Cluster
Prose
SectionHeading
Eyebrow
Divider
```

Components may be `.astro` components or semantic utility classes where appropriate.

---

## 9.4 Borders / surfaces

Use subtle surfaces and borders.

Avoid turning every section into a card.

Cards should represent actual grouped objects, not become the default layout primitive.

---

## 9.5 Dark mode

Architecture should support dark mode.

Phase 1 options:

- build both themes immediately using tokens;
- or ship one polished theme while keeping tokens compatible with a later second theme.

Do not duplicate component styles per theme.

Prefer CSS custom properties.

---

# 10. Motion principles

Motion is supportive, not the portfolio's main feature.

Allowed directions:

- subtle text reveal;
- project image hover;
- restrained page transition;
- diagram progression;
- section reveal;
- expanding case-study details;
- small cursor / pointer interactions where meaningful.

Avoid:

- scroll hijacking;
- long splash/loading intros;
- global parallax;
- random floating elements;
- animation on every heading;
- motion that blocks reading;
- animation that causes layout shift.

Honor:

```css
@media (prefers-reduced-motion: reduce)
```

Phase 1 should rely primarily on:

- CSS;
- browser APIs;
- Astro-native capabilities.

Do not add a heavy animation dependency before a real use case exists.

---

# 11. Technical baseline

Use the current stable Astro major.

At handoff time:

- Astro 7.x is current;
- Astro 7.2 has been released.

Initialize using the latest stable version and commit the resulting lockfile.

## Core

```txt
Astro 7.x
TypeScript
pnpm
Tailwind CSS 4
MDX
Astro Content Collections
```

## TypeScript

Use a strict Astro configuration.

Preferred:

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

Use `strictest` only if it does not create noise that harms productivity.

No `any` for core content models without an explicit reason.

---

# 12. Styling

Use Tailwind CSS 4 through Astro's current recommended Vite-plugin setup.

Do not use the deprecated Tailwind 3 Astro integration.

The base should also define CSS variables for design tokens.

Recommended strategy:

```txt
Tailwind = layout / utilities / responsive implementation
CSS variables = design system tokens
component styles = scoped Astro CSS where local behavior is clearer
```

Avoid building an enormous custom utility abstraction layer.

---

# 13. Framework islands

Do **not** add React automatically.

Astro should remain the default rendering model.

Use framework islands only when a component genuinely needs richer client state.

Potential future interactive islands:

- project exploration interaction;
- complex animated diagrams;
- theme control;
- rich playground demo;
- live interactive product mock.

If React becomes necessary later:

```txt
@astrojs/react
React
```

should be added intentionally and isolated.

Do not turn the entire website into a React SPA.

---

# 14. Rendering strategy

Default to static generation.

The site is predominantly content-driven.

No database is required for the base.

No server API is required for the base.

No authentication is required.

No CMS is required.

Potential future deployment should remain straightforward on:

- Cloudflare;
- Vercel;
- Netlify;
- static hosting.

Avoid adapter-specific code until a deployment target is selected.

---

# 15. Content architecture

Use Astro Content Collections.

Recommended:

```txt
src/content.config.ts

src/content/
  work/
    notex.mdx

  notes/
    ...

  experiments/
    ...
```

Possible schemas:

## Work

```ts
{
  title: string
  description: string
  published: boolean
  featured: boolean
  order: number
  role?: string
  period?: string
  disciplines?: string[]
  technologies?: string[]
  cover?: image()
  ogImage?: image()
  externalUrl?: string
  repositoryUrl?: string
}
```

## Notes

```ts
{
  title: string
  description: string
  pubDate: Date
  updatedDate?: Date
  published: boolean
  tags?: string[]
}
```

## Experiments

```ts
{
  title: string
  description: string
  published: boolean
  order?: number
  tags?: string[]
  cover?: image()
  externalUrl?: string
}
```

Use Astro/Zod schema validation.

Do not put the entire site copy into a single giant JSON file.

Use:

- site-level strings in config/data;
- long-form content in MDX;
- repeated structured entries in collections.

---

# 16. Proposed folder structure

Use this as a direction, not an absolute constraint.

```txt
portfolio/
├── public/
│   ├── favicon.svg
│   ├── og/
│   └── media/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Container.astro
│   │   │   ├── Section.astro
│   │   │   ├── SectionHeading.astro
│   │   │   └── Divider.astro
│   │   │
│   │   ├── navigation/
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── SelectedWork.astro
│   │   │   ├── Principles.astro
│   │   │   ├── ExperimentsPreview.astro
│   │   │   ├── WritingPreview.astro
│   │   │   └── AboutPreview.astro
│   │   │
│   │   ├── work/
│   │   │   ├── ProjectCard.astro
│   │   │   ├── ProjectHero.astro
│   │   │   ├── ProjectMeta.astro
│   │   │   └── CaseStudyNav.astro
│   │   │
│   │   └── content/
│   │       ├── Callout.astro
│   │       ├── MediaBlock.astro
│   │       └── DecisionBlock.astro
│   │
│   ├── content/
│   │   ├── work/
│   │   │   └── notex.mdx
│   │   ├── notes/
│   │   └── experiments/
│   │
│   ├── data/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   └── principles.ts
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── WorkLayout.astro
│   │   └── NoteLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── playground.astro
│   │   ├── work/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── notes/
│   │       ├── index.astro
│   │       └── [slug].astro
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── tokens.css
│   │   └── prose.css
│   │
│   ├── content.config.ts
│   └── env.d.ts
│
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── README.md
└── PORTFOLIO_HANDOFF.md
```

Do not create folders with no expected near-term purpose.

A slightly smaller initial tree is acceptable.

---

# 17. Site configuration

Centralize basic identity:

```ts
export const siteConfig = {
  name: 'TBD',
  role: 'Product Engineer',
  title: 'TBD — Product Engineer',
  description:
    'Product Engineer focused on AI products, interface craft, and modern software architecture.',
  email: null,
  github: null,
  linkedin: null,
  location: null,
}
```

Unknown values must remain `null` / omitted.

Never invent personal URLs or contact information.

---

# 18. SEO foundation

Phase 1 must establish:

- semantic `<title>`;
- description;
- canonical support;
- Open Graph metadata;
- Twitter/X card metadata where relevant;
- favicon;
- sitemap readiness;
- robots.txt readiness;
- per-project metadata;
- per-note metadata.

Do not keyword-stuff.

Content and project clarity matter more than SEO tricks.

---

# 19. Accessibility

Minimum expectations:

- semantic document landmarks;
- correct heading hierarchy;
- keyboard navigation;
- visible focus state;
- skip-to-content link;
- sufficient contrast;
- useful alt text;
- decorative media marked appropriately;
- motion-reduction support;
- target sizes suitable for pointer/touch;
- no meaning conveyed through color alone.

The website must remain usable without animations.

---

# 20. Performance

This portfolio should feel exceptionally fast.

General targets:

- mostly static HTML;
- minimal JavaScript;
- optimized media;
- no hydration without a reason;
- no unnecessary analytics during foundation phase;
- no third-party widget bundles;
- avoid layout shifts;
- lazy-load below-the-fold media;
- preload only truly critical assets.

Prefer Astro's native image pipeline for local images.

The homepage should not become a product demo bundle.

---

# 21. Responsive behavior

Design mobile and desktop together.

Suggested breakpoints may follow Tailwind defaults initially, but layouts should be content-driven rather than breakpoint-driven.

Critical testing widths:

```txt
320
375
430
768
1024
1280
1440+
```

Long case studies need particularly strong mobile reading behavior.

Do not make mobile a compressed desktop layout.

---

# 22. Design tokens

Establish tokens early.

Example conceptual system:

```css
:root {
  /* colors */
  --bg: ...;
  --surface: ...;
  --text: ...;
  --muted: ...;
  --border: ...;
  --accent: ...;

  /* type */
  --font-sans: ...;
  --font-mono: ...;

  /* layout */
  --page-gutter: ...;
  --content-width: ...;
  --reading-width: ...;
  --wide-width: ...;

  /* spacing */
  --space-section: ...;

  /* radius */
  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  /* motion */
  --ease-out: ...;
  --duration-fast: ...;
  --duration-base: ...;
}
```

Exact values are a design decision and may change.

Do not spread magic values across components.

---

# 23. Fonts

Do not choose a distinctive paid font without approval.

The foundation can use:

- a strong system sans stack;
- or an open / locally hosted temporary font.

Font architecture should allow replacement later.

Prioritize:

- legibility;
- editorial character;
- strong display sizes;
- good technical text support.

A monospace font may be used sparingly for metadata / code.

---

# 24. Images and media

Create conventions now.

Suggested asset strategy:

```txt
src/assets/images/work/notex/...
src/assets/images/experiments/...
```

Use descriptive filenames.

Avoid:

```txt
image1.png
final-final-2.png
Screenshot 2026...
```

Project screenshots will be supplied later.

For placeholders:

- use neutral layout blocks;
- or simple abstract SVG placeholders.

Do not use fake NoteX UI screenshots.

---

# 25. Diagrams

The portfolio will likely rely on technical diagrams.

Expected future diagrams include concepts such as:

```txt
Meeting
→ Recording / Transcript
→ AI Processing
→ Summary
→ Knowledge
```

and:

```txt
                NoteX Core
                    |
        -------------------------
        |           |           |
       Web      Extension    Desktop
```

and server/client architecture diagrams.

Build diagram styling as reusable visual language later.

Phase 1 only needs to ensure wide media / SVG diagrams render elegantly in case studies.

---

# 26. Content ownership contract

This distinction is important.

## Website Agent owns

- repository setup;
- project structure;
- Astro architecture;
- reusable components;
- content schemas;
- responsive behavior;
- accessibility;
- performance;
- visual implementation;
- page composition;
- animation implementation once approved;
- deployment setup once selected.

## ChatGPT + owner own

- positioning refinement;
- final hero copy;
- biography;
- NoteX product narrative;
- project descriptions;
- case-study writing;
- technical storytelling;
- engineering-decision narratives;
- project selection;
- article topics and writing;
- screenshot selection;
- portfolio research;
- reference analysis;
- final visual/content hierarchy decisions.

When content is missing, the Website Agent should use clearly labeled placeholders.

Example:

```txt
[CONTENT: NoteX problem statement]
```

not invented prose.

---

# 27. Placeholder policy

Acceptable:

```txt
[CONTENT TBD]
[PROJECT SCREENSHOT TBD]
[DIAGRAM TBD]
[METRIC TBD]
```

Not acceptable:

```txt
"Used by 50,000+ users"
"Improved productivity by 80%"
"Built for leading companies"
```

unless those claims are explicitly supplied later.

---

# 28. First implementation milestone

The first Agent delivery should focus on **foundation**, not final polish.

## Milestone 0 — Repository

Create repository / project.

Suggested repo name:

```txt
portfolio
```

or:

```txt
product-engineer-portfolio
```

Do not embed NoteX into the repository name.

Initialize:

```bash
pnpm create astro@latest
```

Choose:

- TypeScript;
- strict typing;
- Git;
- minimal starter.

Add Tailwind using current Astro tooling.

Add MDX.

Commit lockfile.

---

# 29. Milestone 1 — Foundation

Deliver:

- Astro project runs locally;
- production build succeeds;
- TypeScript checks succeed;
- global design tokens;
- base layout;
- header;
- footer;
- responsive container;
- typography baseline;
- metadata component / helpers;
- content collections configured;
- draft project schema;
- draft note schema;
- one placeholder NoteX entry.

No elaborate visual effects yet.

---

# 30. Milestone 2 — Homepage skeleton

Implement:

```txt
Header
Hero
Selected Work
How I Build
Experiments Preview
Writing Preview
About Preview
Footer
```

All sections should be production-quality structurally but use provisional copy.

Focus on:

- rhythm;
- whitespace;
- hierarchy;
- typography;
- responsive behavior.

Avoid premature polish.

---

# 31. Milestone 3 — Work / Case-study system

Implement:

```txt
/work
/work/[slug]
```

Build a flexible long-form layout.

Create NoteX draft page using placeholder chapters.

Example:

```md
# NoteX

[CONTENT: Product summary]

## The problem

[CONTENT TBD]

## The idea

[CONTENT TBD]

## My role

[CONTENT TBD]

## Engineering decisions

[CONTENT TBD]
```

Do not write the content for these placeholders.

---

# 32. Milestone 4 — Notes / Playground base

Only after homepage + case-study system are stable.

Implement content collections and list/detail routes.

No need to populate them deeply.

---

# 33. Milestone 5 — Visual refinement

Only after real content arrives.

This milestone can include:

- final type scale;
- color system;
- project art direction;
- screenshots;
- diagrams;
- motion;
- hover behavior;
- page transitions;
- mobile refinements.

Content should drive the final visual decisions.

---

# 34. Commands / quality gates

Package scripts should provide an obvious development workflow.

Recommended:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

Additional formatting / lint commands are acceptable if the Agent configures them cleanly.

Before every milestone is considered complete:

```txt
pnpm check
pnpm build
```

must pass.

No knowingly broken routes.

No console errors in normal use.

---

# 35. README requirements

Create a clean repository README with:

- project purpose;
- stack;
- local setup;
- commands;
- content structure;
- where projects are authored;
- where notes are authored;
- image conventions;
- current deployment status;
- link to this handoff file.

Do not make README marketing copy.

---

# 36. Git conventions

Keep commits readable.

Suggested examples:

```txt
chore: bootstrap astro portfolio
feat: add portfolio design tokens
feat: add base page layout
feat: add work content collection
feat: scaffold homepage sections
feat: add case study layout
```

Do not commit generated build directories.

---

# 37. Dependency policy

Before adding a dependency, ask:

> Can Astro / CSS / the browser already solve this?

Avoid unnecessary dependencies for:

- simple class composition;
- basic transitions;
- icons;
- formatting;
- basic theme switching;
- small utilities.

Dependencies are justified when they materially improve maintainability or capability.

---

# 38. What not to build yet

Do NOT prioritize:

- CMS;
- database;
- authentication;
- comments;
- newsletter backend;
- contact backend;
- full analytics platform;
- advanced search;
- complex command palette;
- 3D graphics;
- WebGL;
- custom cursor system;
- music / sound;
- theme editor;
- multi-language architecture;
- page-builder abstraction.

These can be revisited if a real portfolio need emerges.

---

# 39. Anti-patterns

Do not make this site look like a generic junior developer template.

Avoid:

```txt
Hi 👋 I'm ...
<Developer />
React 95%
Node 90%
10 technology icons
terminal animation
purple/blue gradient blobs
floating laptop mockup
GitHub contribution graph as hero proof
every section inside glassmorphism cards
```

Skills should be demonstrated through work.

---

# 40. Product-engineer proof model

Every meaningful case study should eventually answer:

```txt
What was the problem?

Why did it matter?

What constraints existed?

What was my role?

What decisions did I make?

Why did I choose this architecture?

What alternatives were considered?

What trade-offs were made?

What did the experience look like?

What happened after shipping?

What did I learn?
```

The technical implementation must support this storytelling model.

---

# 41. NoteX content areas expected later

The Agent should expect future content around topics such as:

## Product

- meeting knowledge;
- note workflows;
- AI-assisted knowledge;
- product surfaces.

## Web architecture

- Next.js;
- React Server Components;
- server/client boundaries;
- Suspense;
- loading architecture;
- URL state;
- server actions;
- caching.

## Runtime / data

- IndexedDB;
- client cache;
- recording state;
- transcript experience;
- virtualization.

## AI

- Vercel AI SDK;
- workflow / orchestration;
- RAG;
- context;
- evaluation;
- repair loops.

## Platform extensions

- Chrome Extension;
- Google Meet;
- side panel;
- Tauri desktop;
- filesystem.

## Product infrastructure

- auth;
- quota;
- subscription;
- payment flow.

These are possible storytelling ingredients, not a mandatory list to display.

---

# 42. Tone of the website

Writing should eventually feel:

- confident;
- precise;
- curious;
- technical but understandable;
- product-minded;
- low-ego;
- concise.

Avoid:

- "passionate developer";
- "coding ninja";
- exaggerated seniority;
- corporate filler;
- artificial startup jargon;
- excessive AI buzzwords.

---

# 43. Future research loop

The implementation should assume continuous content iteration.

Workflow:

```txt
Portfolio research
      ↓
Content discovery
      ↓
Draft narrative
      ↓
Real screenshots / diagrams
      ↓
Content inserted into Astro
      ↓
Visual refinement
      ↓
Review
      ↺
```

The codebase should make this loop cheap.

A content change should generally not require redesigning the entire component tree.

---

# 44. Definition of a successful base

The first technical base is successful when:

1. a new developer / agent can clone and run it immediately;
2. the architecture is understandable without explanation;
3. pages render fast with minimal client JS;
4. content is separated cleanly from presentation;
5. adding a new project is straightforward;
6. adding a new MDX note is straightforward;
7. real screenshots can replace placeholders without layout rewrites;
8. design tokens can change without touching dozens of files;
9. the NoteX case study can grow substantially;
10. the website already feels intentional even before final art direction.

---

# 45. Immediate Agent task

Execute the following now:

```txt
1. Bootstrap the Astro repository.
2. Use current stable Astro 7.x.
3. Configure TypeScript strict.
4. Add Tailwind CSS 4 using the current Astro-recommended setup.
5. Add MDX / Astro Content Collections.
6. Establish global design tokens.
7. Create BaseLayout, Header, Footer, Container, Section.
8. Configure site metadata.
9. Create content schemas for Work, Notes, Experiments.
10. Create a draft NoteX content entry.
11. Scaffold homepage sections.
12. Scaffold /work/[slug].
13. Add placeholder content only where final content is unknown.
14. Ensure `pnpm check` passes.
15. Ensure `pnpm build` passes.
16. Update README with the project architecture.
```

Stop before adding elaborate animation or committing to a final visual theme.

---

# 46. Handoff status

## Approved direction

- Role: **Product Engineer**
- Focus: **AI Product**
- Framework: **Astro**
- Flagship: **NoteX**
- Style direction: **Editorial × Product × Technical**
- Content model: **MDX + Content Collections**
- Rendering principle: **static-first / minimal JavaScript**
- Priority: **foundation before animation**

## Still in discovery

- final name presentation;
- final hero copy;
- final visual identity;
- final accent color;
- typography selection;
- final project grouping;
- exact NoteX positioning;
- NoteX screenshots;
- NoteX metrics / outcomes;
- full NoteX case-study copy;
- final About content;
- actual Notes content;
- deployment target;
- analytics;
- domain;
- contact links.

---

# 47. Technical notes verified for this handoff

At the time of this handoff (2026-09-02):

- Astro 7 is the current major line.
- Astro 7.2 was published in August 2026.
- Tailwind CSS 4 is supported in modern Astro through the Tailwind Vite plugin workflow.
- Astro Content Collections use `src/content.config.ts` and support typed schemas and local MD/MDX content.

The implementation Agent should still use current package-manager resolution (`@latest`) when initializing, then rely on the committed lockfile for reproducibility.

---

# 48. Final instruction to implementation Agent

**Build the system before decorating the system.**

The portfolio content is actively being researched and written.

Your responsibility is to make the eventual content feel native to the codebase, not force future content to fit decisions made from placeholders.

Prioritize:

> clarity → structure → typography → responsiveness → accessibility → performance → craft → motion

in that order for the first implementation pass.
