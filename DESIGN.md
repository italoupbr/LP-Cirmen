---
name: Dra. Cirmen Leal
description: Fonoaudióloga home page — Belo Horizonte, Brazil
colors:
  terracotta-dark: "#894c3b"
  terracotta-light: "#b57e6f"
  cream: "#ebddd1"
  salmon: "#ebb2a4"
  brown: "#905444"
  ink: "#545454"
typography:
  display:
    fontFamily: "Comfortaa, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  hero-display:
    fontFamily: "Comfortaa, sans-serif"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "12px"
    fontWeight: 900
    letterSpacing: "8.88px"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.25
rounded:
  pill: "9999px"
  card: "20px"
  panel: "40-50px"
  card-corner-sharp: "5px"
  card-corner-round: "25px"
spacing:
  section-y: "64-80px"
  container-max: "1280px"
components:
  button-gradient:
    backgroundColor: "linear-gradient({colors.terracotta-dark}, {colors.terracotta-light})"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0px 24px"
  button-outline-brown:
    backgroundColor: "{colors.white}"
    textColor: "{colors.brown}"
    rounded: "{rounded.pill}"
  button-outline-white:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
---

# Design System: Dra. Cirmen Leal

## Overview

**Creative North Star: "The Warm Clinical Confidant"**

This is a marketing home page for a speech-language therapy practice, built as a **pixel-faithful reproduction of a client-supplied Figma comp** (node `2:2` of file `WzgaTbRj26QwVhnP6sdSpN`), not an original visual direction. Every token below was extracted directly from that comp — this file exists so future sections or pages built on this codebase stay visually consistent with it.

The system balances two things a fonoaudióloga's site has to hold at once: clinical credibility (25 years, international certification, named schools) and emotional warmth for parents making a sensitive decision about a child's development. That balance is carried almost entirely by two choices — a rounded, friendly display face (Comfortaa) paired with a plain, legible body face (Inter), and a warm terracotta-to-cream palette instead of a clinical blue/white. Nothing about the system reads as a generic "medical" site.

**Key Characteristics:**
- Alternates cream/white grounds with full-bleed terracotta-gradient grounds section by section — never two saturated sections back to back.
- Every button is a full pill with a distinct circular icon badge inset on its leading edge (not an inline icon) — the badge's fill/icon color flips per button variant, but the badge-as-separate-object language never does.
- Treatment/photo cards use a diagonal asymmetric corner radius (one corner sharp, the opposite corner large-round) rather than uniform rounding — this is a deliberate signature, not an accident, and it must stay diagonal (top-left+bottom-right paired, or top-right+bottom-left paired), never adjacent corners.
- A single reusable cursive "Cirmen" watermark asset appears, at low opacity, behind photography in two places (hero, About section) — brand signature, not decoration to be duplicated elsewhere.

## Colors

Warm and low-saturation; only two named hues (terracotta family, salmon accent) carry the whole system.

### Primary
- **Terracotta Gradient** (`#894c3b → #b57e6f`): every primary CTA, and the two full-bleed section backgrounds (Sobre, FAQ). Always a top-to-bottom or left-to-right gradient between these two stops, never a flat fill.

### Secondary
- **Salmon** (`#ebb2a4`): eyebrow/label text exclusively when it sits on a terracotta-gradient background.
- **Brown** (`#905444`): eyebrow/label text and outline-button color exclusively on white/cream backgrounds; also the checklist checkbox fill.

### Neutral
- **Cream** (`#ebddd1`): the hero card background — the only large cream surface on the page.
- **Ink** (`#545454`): the hero headline color (the one heading that sits on cream, not white).
- **Black** (at ~40-60% opacity for body copy, full black for the "Conheça o Consultório" heading): all body text on white/cream grounds.
- **White** (at ~40-80% opacity for body copy on color): all text on terracotta-gradient grounds.

### Named Rules
**The Two-Ground Rule.** No two consecutive sections share the same background treatment (cream → white → terracotta → white → terracotta). This is what keeps six sections of similar content from reading as one long scroll.

## Typography

**Display Font:** Comfortaa (700 weight for all headings except the hero, which uses 400; fallback: sans-serif)
**Body Font:** Inter (400 body copy, 700-900 for bold highlights and eyebrow labels; fallback: sans-serif)

**Character:** Comfortaa's rounded terminals do the emotional work (approachable, unthreatening) while Inter keeps paragraphs and credentials legible and neutral — the pairing itself is the brand voice, more than any single color.

### Hierarchy
- **Hero Display** (400, 40px, 1.15 line-height, -0.03em tracking): the one headline that breaks the "headings are bold" rule — intentional, do not bold it.
- **Display** (700, 28-36px, 1.15 line-height, -0.04em tracking): every other section headline.
- **Body** (400, 16px, 1.25 line-height): paragraphs; bold inline spans (700, higher-opacity color) mark credentials/claims worth skimming.
- **Label** (900, 12px, uppercase, 8.88px letter-spacing ≈ 0.74em): section eyebrows only — this tracking value is extreme by normal standards and is exactly the point.

## Layout

Content is bounded by a **1280px max-width container** (the comp's native content width at its 1920px canvas, used directly with no scaling), centered with responsive horizontal padding. Section vertical rhythm is **64-80px**.

Two-column sections (Hero, Sobre, Consultório) use a text-column + photo-column grid that **stacks to a single column below `lg` (1024px)**, photo reordered appropriately for mobile reading order. The treatment-card grid collapses 4→2→1 columns at `lg`/`sm`. The FAQ grid is 2 columns desktop, 1 column mobile — **column pairing must survive the collapse**: the comp pairs rows so that reading down the left column then the right column groups related questions (TEA+PAC+idade / convênios+espaço+home-care); on mobile this same source order reads correctly top-to-bottom, so the desktop grid must fill row-major from that exact source order, never column-major.

## Elevation & Depth

Photography always sits above a soft, warm-toned, multi-layer shadow (never a flat default box-shadow) — shadow color is tinted toward the terracotta family, not neutral gray, so elevated photos never look cold. Buttons get a lighter version of the same warm-toned shadow. Flat sections (FAQ rows, checklist) use no shadow at all — depth is reserved for photography and CTAs.

### Shadow Vocabulary
- **`shadow-photo`**: hero portrait — soft, wide, warm-gray.
- **`shadow-portrait`**: About-section portrait — larger spread, slightly darker.
- **`shadow-office`**: Consultório photo — matches `shadow-photo` weight.
- **`shadow-btn`**: gradient CTA buttons — small, tight, low-opacity.
- **`shadow-card-hover`**: treatment/photo cards on hover — the only elevation state that responds to interaction rather than being static.

## Shapes

**The Diagonal-Asymmetry Rule.** Photo/treatment cards never use uniform or adjacent-corner rounding. One corner (25px) is always diagonally opposite its sharp partner (5px) — confirmed pixel-for-pixel against the comp as top-left-round/bottom-right-round, top-right-sharp/bottom-left-sharp. Buttons are always full pills (9999px). Large panels (hero card, FAQ panel) use very large radii (40-50px) — bigger surface, bigger radius.

## Components

### Buttons
- **Shape:** full pill, 35px tall, with an inset circular icon badge (29px) on the leading edge — the badge is a distinct visual object (its own fill color), not a plain inline icon.
- **Icon:** a right-pointing chevron/arrow, always achieved via a -90° rotation of the same base asset (the source glyph points down) — never swap in a different arrow glyph.
- **Gradient (primary):** terracotta-gradient fill, white text, white/10%-opacity badge with a white arrow. Used for the single most important action per section (hero, Consultório).
- **Outline-brown:** white fill, brown border + text, solid brown badge with a white arrow. Used on white backgrounds for secondary actions (Tratamentos CTA).
- **Outline-white:** transparent fill, white border + text, solid white badge with a brown arrow. Used only on terracotta-gradient backgrounds (Sobre CTA).

### Tags (eyebrow labels)
- **Style:** no background/border — just extreme-tracked, tiny, black-weight uppercase text. Salmon on color grounds, brown on light grounds.

### Cards
- **Treatment/photo card:** diagonal-asymmetric radius (see Shapes), photo fills the card, a terracotta-gradient label bar overlays the bottom ~35% with centered white Comfortaa text — the label is never a separate element below the image.
- **FAQ row:** no card chrome at all — just a bottom hairline divider (white/25%) per row, question text + a rotating "+"/"×" icon.

### Checklist
- **Style:** filled brown rounded-square checkbox icon (not an outline checkbox) + Inter body text at reduced opacity.

## Do's and Don'ts

### Do:
- **Do** alternate section backgrounds per the Two-Ground Rule when adding new sections.
- **Do** keep the diagonal corner-asymmetry on any new photo card — verify against a real screenshot, not assumptions, since this exact detail was initially built mirrored and caught only in visual QA.
- **Do** reuse the existing circular icon-badge button pattern for any new CTA rather than inventing an inline-icon button.

### Don't:
- **Don't** bold the hero headline — it's the one intentionally-regular display heading on the page.
- **Don't** introduce a third accent hue; the palette is deliberately terracotta + salmon/brown only.
- **Don't** let the "Cirmen" watermark asset appear more than very subtly (≤0.2 opacity) — it's a signature, not a pattern.
