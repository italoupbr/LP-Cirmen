# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + TypeScript + Tailwind CSS (same stack used on the sibling project, LP-Mais60, per user preference).

## Users

Primary: parents/family members in Belo Horizonte and Nova Lima researching a speech-language therapist (fonoaudióloga) for a child (e.g. autism/TEA evaluation, developmental delay) or, secondarily, adults/elderly needing rehabilitation, hearing training, or cognitive support. They are evaluating credentials, specialization, and practical logistics (location, insurance, family comfort during sessions) before booking.

## Product Purpose

Home page for Dra. Cirmen Leal, a fonoaudióloga (speech-language pathologist) in Belo Horizonte. The page must establish clinical authority (25 years, international certification, sub-specializations), make the four treatment tracks (child development, adult health, active aging, auditory training) legible, and drive one action: book an evaluation session ("Agende uma seção avaliativa").

## Positioning

Formed in 2001, blends intensive clinical practice with academic specialization: certified in Oral and Written Language, postgraduate in Autism from CBI of Miami, currently deepening study in Neuroscience. Recommended by top Belo Horizonte schools (Colégio Batista, Magnum, Santa Maria, Maple Bear). Positions family-centered, team-based care as the differentiator, not just individual clinical skill.

## Operating Context

- Treatment tracks shown: Desenvolvimento Infantil, Saúde do Adulto, Longevidade Ativa, Treinamento Auditivo.
- Consultório location: bairro Colégio Batista, Belo Horizonte. Family-oriented waiting area: dedicated workstation with Wi-Fi for accompanying family, children's space, climate control.
- FAQ covers: TEA (autism spectrum) treatment approach, PAC (Central Auditory Processing) exam in booth, minimum age for a first evaluation, insurance/convênio acceptance, whether a workspace exists for waiting family, and whether home-care visits are offered.

## Brand Commitments

- Name: "Dra. Cirmen Leal". A "CL" circular monogram logo appears on the consultório signage photo (real content asset, not something to recreate as a separate vector unless asked).
- Full visual identity is pinned by a supplied Figma file (source of truth) and a reference wireframe screenshot the user provided: `/Users/mmoreira4/Downloads/Home Page _ Wireframe_cirmem.png`. This is a **redesign-from-comp** job, same as the sibling Mais60 project — new-work's world-invention/concept-seed steps are skipped per its "approved comp" path.
- Palette: warm terracotta gradient `#894c3b → #b57e6f` (section backgrounds, primary buttons), cream/beige hero card, muted salmon `#ebb2a4` (eyebrow labels on colored backgrounds), brown `#905444` (eyebrow labels on white, outline-button color), near-black/dark-gray body text `#545454` and `black` for headings on white.
- Type: **Comfortaa** (Bold, occasionally Regular for the hero headline specifically) for all headings — a soft rounded display face matching the brand's warm, approachable register. **Inter** for body copy and eyebrow labels (eyebrow labels use Inter Black 12px with extreme tracking, ~8.88px / 0.55em).
- Distinctive shape language: buttons are full pills with a separate circular icon badge inset on the leading edge (not just an inline icon); treatment cards use an asymmetric corner radius (one sharp corner opposite one large rounded corner) rather than uniform rounding.

## Evidence on Hand

- Figma file (design authority): `https://www.figma.com/design/WzgaTbRj26QwVhnP6sdSpN/Untitled?node-id=2-2` — pulled in full via Figma MCP (`get_design_context`/`get_metadata`) for exact copy, colors, fonts, spacing, radii, shadows, and asset URLs. All 5 sections are live Figma layers (unlike Mais60, no flattened-screenshot sections here).
- Reference screenshot (visual authority, matches the Figma frame): `/Users/mmoreira4/Downloads/Home Page _ Wireframe_cirmem.png`.
- The Figma MCP connection for this account is capped at a very low monthly quota (6 calls/month on a View seat) — full context was pulled in a single batched call before the quota could re-trip; no further live Figma calls should be assumed available without the user upgrading their seat.
- Two literal typos exist in the source Figma copy and were corrected in the build (flagged to the user, same policy as the Mais60 project): "Conheça o **cosultório**" → "consultório" (button label, missing letter); "Conheça mais **sobe** mim" → "sobre" (button label, missing letter); the FAQ question "**A Dr.** Cirmen **realizam** atendimento..." had a gender/number agreement error → corrected to "A **Dra.** Cirmen **realiza** atendimento...".
- No logo vector file, no real booking/contact backend, no confirmed social handles were supplied — the CTA is static until a real scheduling link is provided.
- No navbar exists in the supplied design (same pattern as Mais60) — single scrolling page, no top nav.

## Product Principles

1. Fidelity to the supplied Figma comp is the top constraint — precise reproduction, not a fresh creative direction.
2. Warmth and credibility carried together: the rounded Comfortaa display face and terracotta palette read as approachable, while the "25 anos", certifications, and school recommendations carry the authority.
3. Desktop fidelity first (the only breakpoint the comp specifies), then responsible, same-vocabulary adaptation down to mobile.
4. Motion and interaction follow the same restrained standard set on the sibling Mais60 build: soft scroll reveals, gentle card hover, nothing extravagant.

## Accessibility & Inclusion

No explicit accessibility standard was specified. Audience includes parents evaluating care for children with autism/developmental needs and adult/elderly patients — keep body type sizes and contrast as specified in the comp (16px body minimum), and keep interactive targets (buttons, FAQ accordion rows) comfortably sized.
