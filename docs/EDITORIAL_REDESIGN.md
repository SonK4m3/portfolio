# Technical Wallpaper Editorial

The supplied art-direction brief is the source of truth for the `style-experiment` branch. Build direction A (Technical Wallpaper) with atmospheric imagery from C and the explicit system structure of B. This is a professional Product Engineer publication, with Son Nguyen and NoteX as its subjects.

## Surface contract

- Visitor mode: experience, followed immediately by readable engineering evidence.
- Audience: hiring managers, product and engineering leads, designers, and technical peers.
- First viewport: oversized Swiss headline at the left, concise professional introduction to the right, an offset architectural photograph spanning ten of twelve columns, and a margin caption. Primary action: selected work.
- Reading sequence: visual point of view → the person → NoteX → engineering decisions → reusable components and experiments → contact/profile.
- Signature interaction: an expandable image annotation connects the architecture to the engineering argument. Native links and theme controls do the rest; there is no scroll-jacking or mandatory entrance animation.
- Images are conceptual, AI-generated editorial works, explicitly labeled. They are neither verified buildings nor NoteX screenshots. Use actual components for system diagrams.
- Typography: existing self-hosted Geist; Geist Mono only for technical metadata; IBM Plex Serif restricted to short reflective passages. No handwritten display voice on the redesigned home.
- Responsive: 12-column desktop composition; controlled offsets, differing image sizes, and sequential mobile reading. No horizontal clipping as a substitute for fitting content.
- Accessibility: visible keyboard focus, semantic headings, useful alt text, 44px controls, native disclosure, reduced motion, persistent light/dark preference, content available without JavaScript.
- Preserve all existing public routes, NoteX chapters, component demos, metadata, and unverified claims/contact placeholders.

## Direction resolution

The skill seed `37c053ec` was run. The supplied, specific Technical Wallpaper direction takes precedence over the random assignment and its unrelated visual worlds. The brief already resolves the direction; implementation proceeds directly from it. No unapproved generated page comp is treated as an approved design.

## Asset inventory

| Asset | Role | Production | Dimensions | Status |
| --- | --- | --- | --- | --- |
| `src/assets/editorial/structure.png` | Opening architectural plate; contextual About image | Built-in image generation, exact prompt embedded | 1536 × 1024, opaque PNG | Visually accepted |
| `src/assets/editorial/collected-thought.png` | NoteX conceptual cover; selected-work index | Built-in image generation, exact prompt embedded | 1536 × 1024, opaque PNG | Visually accepted |
| Architecture Layers | Six actual ownership layers | Semantic production Astro component | Responsive | Browser verified |
| Lifecycle Flow | AI intent through recovery and return | Semantic production Astro component | Responsive | Browser verified, single mobile sequence |
| System Grid | Component laboratory specimen | Semantic production Astro component | Responsive | Browser verified |

Astro serves responsive WebP derivatives; source images and embedded prompts remain in the repository. No real portrait or product screenshot was supplied.

## Completion evidence

- Final `pnpm exec astro check`: 103 files; zero errors, warnings, or hints.
- Final `pnpm exec astro build`: 17 static pages and eight optimized image derivatives.
- Ten final capture configurations cover Home light/dark desktop, tablet, mobile; About and Work desktop/mobile; Notes desktop; Playground mobile. All images loaded, no page errors or horizontal overflow in these captures.
- Independent Luna worker fixed component documentation intrinsic sizing, preserving internal code scrolling. Seven component routes passed at 320, 390, 768, 1024, and 1440px on its isolated dev server, which was stopped afterward.
- Independent Astra visual/code review initially returned `fix`: the mobile lifecycle implied two parallel sequences, and two heading kickers violated the visual floor. Both were corrected. The same screenshots were recaptured; the verdict returned `ship` for the two scored fixes, with no observed regressions. The initial review accepted the remaining visual/material/truth contract.
- The initial scoped design detector returned `[]`; it was not repeatedly run as a substitute for visual review. AI-image provenance scan found both source rasters with embedded prompts.
- Independent production regression: `pnpm exec playwright test --workers=4 --reporter=line` passed 70/70. A 13-route sweep at five widths passed 65/65 with no page errors or horizontal overflow. Two transient responses during the build refresh were rerun successfully against final output. The final mobile lifecycle was separately verified as a single column at 320, 390, and 700px with the correct six-step order.
- Permanent lifecycle order and single-column mobile assertions were added to the existing homepage test; the updated desktop/mobile test passed 2/2 afterward.

Review evidence stays in the ignored `.impeccable/review/` directory. Production preview uses port 4322. Existing personal/contact/product evidence placeholders remain unresolved intentionally; this is a tested local redesign, not a claim of content-complete public deployment.
