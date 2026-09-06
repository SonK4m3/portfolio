---
name: Technical Wallpaper Editorial
description: An image-led technical publication for a Product Engineer.
colors:
  chalk: "#f5f4f0"
  paper: "#ecebe5"
  ink: "#242520"
  muted: "#63645e"
  rule: "#cfcec6"
  rust: "#8b4035"
  dark-ground: "#171815"
  dark-surface: "#20211d"
  dark-text: "#f1f0e9"
  dark-muted: "#aaa99f"
  dark-rule: "#42433b"
  dark-rust: "#e7a18c"
typography:
  display:
    fontFamily: "Geist Variable, Geist, sans-serif"
    fontSize: "clamp(4rem, 8vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist Variable, Geist, sans-serif"
    fontSize: "1.125rem"
  label:
    fontFamily: "Geist Mono Variable, Geist Mono, monospace"
    fontSize: "0.75rem"
  reflection:
    fontFamily: "IBM Plex Serif, serif"
    fontWeight: 400
spacing:
  small: "0.5rem"
  base: "1rem"
  medium: "1.5rem"
  large: "2rem"
  spread: "4rem"
  gutter: "clamp(1.25rem, 3.8vw, 4rem)"
components:
  editorial-link:
    textColor: "{colors.ink}"
    height: "2.75rem"
  theme-control:
    textColor: "{colors.muted}"
    padding: "0.5rem"
  technical-label:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
---

# Design System: Technical Wallpaper Editorial

## Overview

**Creative North Star: "Technical Wallpaper Editorial"**

An art-directed technical publication: atmospheric imagery introduces a clear professional narrative. Swiss typography supplies structure; architecture and abstract images supply emotion. The system is restrained, intelligent, and exploratory, not a lifestyle magazine.

**Key Characteristics:**

- Image-led asymmetry.
- Clear professional substance.
- Quiet technical annotations.
- Native, lightweight interactions.

Captured from the implemented `style-experiment` source after visual review. CSS remains executable authority; this document describes reusable decisions, not a fixed template for every page.

## Colors

### Primary

Muted rust is the sole chromatic interface accent: punctuation, selected states, and restrained interaction signals. Dark mode uses the lighter rust counterpart for legibility.

### Neutral

Chalk is the light page field, paper is the technical spread, ink is primary copy, muted is secondary copy, and rule separates content. The dark counterparts preserve these roles without changing imagery.

**The One Accent Rule.** Use one restrained interface accent; image palettes may be richer without becoming additional UI token families.

## Typography

Geist Variable carries display and prose. Geist Mono Variable carries captions and system metadata. IBM Plex Serif is a sparse reflective accent, never the dominant editorial voice. Fonts are self-hosted. Caveat remains available to existing component/type demonstrations; it does not define the new home.

The homepage display is distinct from the larger inherited component-documentation display scale. Mobile cover lettering uses `clamp(3.4rem,12.3vw,5rem)` below 700px. Body text and readable descriptions take priority over decorative annotations. Do not use wrapping hacks to turn a long heading into unreadable fragments.

**The Type Authority Rule.** Use grotesk type for authority, mono for metadata, and serif for reflection.

## Layout

The shared container caps at 100rem with fluid gutters. The homepage uses twelve shrinkable columns and intentional offsets; below 700px it uses four columns and sequential spreads. Shared navigation reflows into two rows on mobile. Component documentation has separate 640/900px breakpoints suited to its denser content.

Image ratios vary by role: wide architecture, near-square abstract work, and a square About plate. The reading sequence stays logical in DOM order. Mobile lifecycle diagrams are one sequential column; never imply parallel flows by combining row-major steps with vertical connectors.

**The Fit Rule.** Fix intrinsic grid sizing and allow code blocks to scroll internally; never hide page overflow to disguise a layout defect.

## Elevation & Depth

The editorial surface is flat. Depth comes from real raster imagery, scale, spacing, and tonal fields, not card shadows or fake material effects. The sticky header is opaque, with a hairline boundary.

## Shapes

Editorial plates and links are square-edged. Fine rules separate content. Existing small radius tokens remain available to legacy component controls, but rounded cards are not the new page's organizing device.

## Components

### Editorial links

Text plus a consistent inline SVG arrow and a fine underline. Keep a minimum 44px interaction height, visible focus, and destination-specific labels. Arrow direction reflects forward, outward, or downward movement.

### Theme control and navigation

The theme button combines a split-circle SVG with the current Light/Dark label. It updates `aria-pressed`, persists when storage is available, and works when storage is denied. Without scripting it is hidden. Navigation remains native links with visible focus.

### Image annotation

Use a native `details`/`summary` disclosure. Explain the connection to the work and disclose AI-generated concepts. Images are not portraits, verified buildings, or product screenshots. Keep captions visible outside the disclosure as well.

### Technical evidence

Architecture Layers, Lifecycle Flow, and System Grid use production Astro components. Their metadata describes the actual figure rather than functioning as an ornamental heading eyebrow. A single rust selection distinguishes the active layer or recovery step.

### Archives

Empty Notes and Playground collections show honest publication status and useful links to existing work. Do not invent entries, links, metrics, or contact facts to fill the composition.

Motion is limited to state feedback and a slight work-image hover scale. Honor reduced motion; all content and essential navigation remain usable without JavaScript.

## Do's and Don'ts

### Do

- Do connect images to professional substance.
- Do keep AI imagery and unknown facts explicitly labeled.
- Do preserve logical reading order at every width.
- Do use actual production components for technical evidence.

### Don't

- Don't add ornamental heading kickers.
- Don't introduce fake physicality or decorative card shadows.
- Don't clip horizontal overflow to conceal broken layout.
- Don't turn this into a lifestyle magazine or invent commercial claims.
