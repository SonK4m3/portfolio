# Changelog

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
