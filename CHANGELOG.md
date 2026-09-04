# Changelog

## 2026-09-04 — P2 public component laboratory

Turned the six production signature components into a public, self-documenting design engineering catalogue.

### Documentation system

- Added `/components` with an archive-style catalogue, primary-category filters, keyboard and pointer preview selection, scoped light/dark preview themes, and responsive production previews.
- Added six statically generated `/components/[slug]` pages covering design intent, anatomy, usage, variants, API, accessibility, performance, production usage, and status.
- Added a typed internal registry that fails the build when published metadata and production previews diverge.
- Migrated component metadata to MDX with structured status, category, capability, usage links, tags, ordering, publication state, and jump-navigation sections.
- Added reusable documentation primitives for preview canvases, status labels, responsive API records, anchored sections, copyable code, and the shared component document layout.
- Added dedicated demo-data wrappers that import the real production components without copying implementation markup or behavior.

### Product integration

- Added Components to primary and footer navigation.
- Preserved the established Astro and native-JavaScript architecture with no React runtime or whole-page hydration.
- Added semantic `FigureLabel` rendering for both figure captions and non-figure documentation contexts.
- Excluded internal `/dev/*` and `/type-proof` routes from the generated sitemap.
- Added a durable product record describing the portfolio's audiences, purpose, constraints, evidence, and accessibility commitments.

### Validation

- Astro check and static production build cover 99 source files and 17 generated pages.
- Playwright covers all public component routes on desktop and mobile, production preview wiring, filtering, keyboard focus, local preview themes, copy-code fallback, reduced motion, and responsive overflow.
- Component overflow coverage includes 390px, 430px, 768px, 1024px, 1440px, and 1600px widths.
- Visual QA exports cover the catalogue at desktop/mobile and the System Grid flagship documentation page.

## 2026-09-04 — P0/P1 signature system foundation

Converted the portfolio's visual language into a reusable Astro design system and applied the first six signature components to real product pages.

### Foundation

- Added canonical semantic color, typography, spacing, grid, surface, divider, and motion tokens with backward-compatible aliases.
- Added a responsive 12-column desktop, 8-column tablet, and 4-column mobile page grid.
- Added foundation primitives for page grids, grid items, hairlines, technical dividers, and hatch dividers.
- Added a variable Caveat annotation face while preserving Geist Sans, IBM Plex Serif, and Geist Mono as the primary voices.
- Added semantic motion classes and a complete reduced-motion fallback.
- Added internal `/dev/type`, `/dev/grid`, and `/dev/components` proof routes, all excluded from indexing.

### Signature components

- Added `FigureLabel` with FIG, SYS, CMP, EXP, and BLK taxonomy.
- Added `DossierMatrix` for structured product and profile metadata.
- Added `ArchitectureLayers` for system boundaries and active ownership states.
- Added `LifecycleFlow` with horizontal/vertical contracts and container-responsive fallback.
- Added `SystemMap` for four-axis positioning without invented scores.
- Added `SystemGrid` with restrained pointer proximity, touch fallback, and reduced-motion behavior.
- Added content collection metadata for status, ownership, framework, and usage of all six components.

### Production integration

- Applied `SystemGrid`, `ArchitectureLayers`, and `LifecycleFlow` to the homepage.
- Applied `FigureLabel` and `DossierMatrix` to the homepage NoteX evidence section.
- Applied `DossierMatrix`, `FigureLabel`, and `SystemMap` to `/about`.
- Applied `ArchitectureLayers`, `LifecycleFlow`, and `FigureLabel` to `/work/notex`.

### Validation

- Astro check — 0 errors, 0 warnings, 0 hints across 83 files.
- Static build — 10 pages generated.
- Playwright — route, metadata, navigation, theme, keyboard, reduced motion, signature integration, and overflow coverage on desktop and mobile.
- Responsive overflow coverage includes 390px, 430px, 1440px, 1600px, and 1920px widths.
- Impeccable detector — no findings after replacing heavy side accents with one-pixel signal rules.

## 2026-09-03 — Sprint B1 scroll and spatial rhythm

Turned the homepage from evenly spaced sections into a continuous, authored native-scroll sequence while preserving the locked Swiss Technical Editorial visual system.

### Changed

- Added five semantic density tokens: void, quiet, balanced, evidence, and technical.
- Added reusable media framing modes for establishing, fill, detail, and offset compositions.
- Reserved a clean Hero exit zone and reduced the engineering-instrument layer to supporting context.
- Rewrote the transition chapter as a quiet editorial reset before NoteX.
- Increased NoteX evidence scale with controlled canvas bleed while keeping the missing real product asset explicitly labelled.
- Reduced What I Own to three primary responsibilities plus a secondary collaboration layer.
- Enlarged and offset the Architecture system field to create the page's spatial peak.
- Added a 50svh Architecture-to-AI breathing reset using only a trace label and hairline.
- Rebuilt the AI lifecycle as a timestamped vertical event trace with a separate reflection column.
- Compressed Playground into a lateral archive-and-artifact interlude.
- Removed table-like separators from How I Build and increased the alternating typographic cadence.
- Shifted About toward a serif-led human texture and gave the final CTA a full void composition.
- Added mobile-specific density values and reduced technical-section voids for a deliberate 390px rhythm.

### Constraints

- Native browser scrolling remains unchanged; no snap, wheel interception, sticky scenes, or scroll animation were added.
- NoteX and Playground evidence remain [ASSET REQUIRED] because no verified product screenshots are stored in the repository.

### Validation

- pnpm check — passed.
- Playwright suite — 32/32 passed across desktop and mobile, including B1 density-order assertions.
- Horizontal overflow checks — passed at 390x844, 1440x900, 1600x1000, and 1920x1080.
- Impeccable layout detector — no findings.
- Review exports: homepage-b1-1440-full.png, five 1440x900 viewport crops, desktop scroll recording, and 390px mobile scroll recording.

## 2026-09-03 — About technical dossier

Added the `/about` page as a Personal Technical Dossier that extends the homepage's Swiss Technical Editorial system with higher information density and clearer personal context.

### Changed

- Added profile hero with role identity and an honest optional portrait asset marker.
- Added quick-info metadata matrix for role, focus, current product, location, languages, and collaboration status.
- Added layered introduction using mono, sans, serif, and restrained handwritten voices.
- Added capability registry covering web, state/data, realtime, UI, content/media, platform, and AI.
- Added experience record with ownership-oriented responsibilities and verification labels for unknown company/date details.
- Added `NOW / 2026` temporal profile section for building, exploring, learning, and writing topics.
- Added compressed education record with explicit `[TBD]` fields.
- Added project/lab registry linking NoteX and experiments.
- Added personal system map showing the Product / Design / Engineering / AI positioning with frontend architecture as the strongest edge.
- Added contact/social placeholders and a closing CTA that loops back to selected work.
- Added responsive layouts for metadata tables, capability rows, experience, registry, and system map.

### Evidence status

- Portrait, university, email, GitHub, LinkedIn, company name, and exact dates remain intentionally unverified placeholders.
- Screenshot review export: `about-sprint-a5-1440.png` at a 1440px viewport width.

### Validation

- `pnpm check` — 0 errors, 0 warnings, 0 hints.
- `pnpm build` — passed; 7 static pages generated.
- Playwright suite — 30/30 passed on desktop and mobile.
- Impeccable detector — no findings.

## 2026-09-03 — Sprint A.5 personalization

Compared with `5236595`, this update makes the homepage more specific to NoteX and the Product Engineer role while preserving the locked Swiss Technical Editorial system.

### Changed

- Replaced the Hero's generic floating taxonomy with three restrained coordinate and crosshair references.
- Shortened generic copy and made the NoteX role, product scope, and platform ownership more explicit.
- Replaced the four generic Product Engineering pillars with a compact `WHAT I OWN` responsibility map.
- Rebuilt Architecture as a connected state-ownership diagram with explicit conceptual and verification labels.
- Replaced the generic AI lifecycle with a NoteX long-running generation event trace and three product questions.
- Turned the Playground preview into two evidence slots for a real generated PDF and compile/repair trace.
- Reduced How I Build from five principles to three decision-oriented working rules.
- Rewrote About and CTA copy to sound more personal and direct.
- Added evidence annotation vocabulary: `FIG`, `DECISION`, `TRACE`, `EXP`, and `NOTE`.
- Added text wrapping, selection, scrollbar, font-smoothing, and explicit interaction-state polish.

### Evidence status

- NoteX product screenshot: `[ASSET REQUIRED]`.
- AI LaTeX PDF and repair output: `[ASSETS REQUIRED]`.
- Architecture decision and AI task flow: `[VERIFY]` against production NoteX.
- Full-page review export: `homepage-sprint-a5-1440.png` at a 1440px viewport width.

### Validation

- `pnpm check` — 0 errors, 0 warnings, 0 hints.
- `pnpm build` — passed; 7 static pages generated.
- Playwright suite — passed on desktop and mobile.
- Impeccable detector — no findings.

## 2026-09-03 — Sprint A static composition

Compared with b7b0e6d (feat: implement locked portfolio visual system), commit 080f771 (feat: shape homepage sprint a static composition) prepares the homepage for visual review before motion work.

### Changed

- Made NoteX image-led: the product evidence area now carries the largest post-Hero visual weight.
- Added an explicit [ASSET REQUIRED] evidence state because no real NoteX screenshot is currently stored in the repository.
- Reworked the AI lifecycle from a compact stepper into a large 12-column typographic composition.
- Converted the homepage Architecture section into a static layered system map with a Vermilion active-state marker.
- Added a reserved Playground experiment-preview region.
- Changed How I Build toward an editorial manifesto with varied row compositions and serif reflections.
- Removed Hero pointer/scroll behavior, AI lifecycle scroll progression, and Architecture hover dimming for this static review build.
- Preserved the Swiss Technical Editorial direction, current content order, typography system, and existing responsive behavior.

### Validation

- pnpm check — 0 errors, 0 warnings, 0 hints.
- pnpm build — passed; 7 static pages generated.
- pnpm test:e2e — 30/30 tests passed on desktop and mobile.
- Full-page review export: homepage-sprint-a-1440.png at 1440px viewport width.

### Next

Sprint B remains intentionally paused until the static composition and real NoteX product evidence are reviewed. Planned motion includes Hero reveal, NoteX mask reveal, Architecture layer activation, AI lifecycle progression, and Playground preview interaction.
