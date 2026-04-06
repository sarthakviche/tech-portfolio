# Design System Strategy: Modern Technical Architect

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Digital Architect."** It envisions the interface not as a flat webpage, but as a cinematic, multi-layered blueprint of Sarthak Viche’s creative mind.

To move beyond the "template" look, this design system rejects rigid symmetry in favor of **intentional imbalance**. High-impact portfolio layouts must feel like a film’s title sequence: dramatic, high-contrast, and spatially aware. We achieve this by utilizing deep black voids (`#0e0e0e`) and punctuated "hero" visuals that break the container, overlapping typography, and technical accents that ground the expressive nature of the work.

## 2. Colors: Depth and Tonal Logic
The color palette is built on a "True Black" foundation to maximize OLED contrast and create a premium, cinematic backdrop.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be articulated through background color shifts or tonal transitions.
- Use `surface` (`#0e0e0e`) for the primary canvas.
- Transition to `surface-container-low` (`#131313`) to subtly group content.
- Use `surface-container-high` (`#201f1f`) only for interactive objects or nested depth.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. A project card is not just a box; it is a sheet of glass floating over a void.
- **Base Layer:** `surface`
- **Section Layer:** `surface-container-lowest` or `surface-container-low`
- **Interactive Layer:** `surface-variant` with a 10-20% opacity `outline-variant` "Ghost Border."

### The Glass & Gradient Rule
To achieve the "Modern Technical" aesthetic:
- **Glassmorphism:** Use `surface-bright` (`#2c2c2c`) with a `0.6` opacity and a `24px` backdrop-blur for floating navigation or tooltips.
- **Signature Textures:** Apply a subtle linear gradient from `primary` (`#94aaff`) to `primary_dim` (`#3367ff`) at a 45-degree angle for primary CTAs to give them a "machined" glow.

## 3. Typography: The Editorial Scale
The system employs a high-contrast pairing: **Manrope** for human-centric expression and **Space Grotesk** (Monospace) for technical precision.

- **Display (Manrope):** Huge, bold, and unapologetic. `display-lg` (3.5rem) should be used for hero statements, often overlapping image boundaries or using negative letter-spacing (-0.02em) to feel tightly engineered.
- **Labels (Space Grotesk):** All technical data, dates, and micro-copy must use the label tokens. This provides the "Architectural" feel—as if the work is being measured or audited.
- **Hierarchy Logic:** Large headings attract the eye, while technical labels provide the "professional polish." Never use the same weight for body and label; the contrast must be stark.

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "software-standard." We use **Ambient Atmosphere**.

- **The Layering Principle:** Place a `surface-container-highest` card on top of a `surface` background. The difference in hex value creates enough contrast to signify lift without a single line of code for shadows.
- **Ambient Glows:** For "High-Impact" visuals, instead of a black shadow, use a `primary_dim` shadow with a 60px blur and 5% opacity. This makes the element look like it’s emitting light onto a black table.
- **Ghost Borders:** If a boundary is needed for accessibility, use `outline-variant` at 15% opacity. It should be felt, not seen.
- **Motion Depth:** When scrolling, use the `full` roundedness scale for small accent elements to make them feel like fluid "blobs" moving beneath the technical glass layers.

## 5. Components: Precision Primitives

### Buttons & Interaction
- **Primary:** Gradient fill (`primary` to `primary_dim`). Roundedness: `full`. Text: `title-sm` (Inter, Bold).
- **Secondary (The Glow Button):** Background: `none`. Border: `outline-variant` (20% opacity). Hover state: Add a soft outer glow using the `primary` token.
- **Interactive Accents:** Use "Hover to Reveal" markers (bracket-style icons in monospace) to guide the user without cluttering the cinematic view.

### Cards & Content
- **Forbid Dividers:** Use `surface-container-low` background shifts or 80px vertical spacing (`spacing-scale-xl`) to separate content.
- **Project Cards:** Image-first. Typography overlaps the image base. Use `xl` (1.5rem) roundedness for a modern, handheld-device feel.

### Input Fields
- **Technical Inputs:** No background fill. Only a bottom border (`outline-variant` at 20%). On focus, the border transitions to `primary` with a 2px height.

### Custom Component: The "Architect Grid"
- A background pattern of 40px grid lines using `outline_variant` at 5% opacity. This should only appear behind project galleries or hero sections to reinforce the "Technical Architect" theme.

## 6. Do’s and Don'ts

### Do:
- **Embrace the Void:** Use massive amounts of black space to let the portfolio images "pop."
- **Mix Typefaces:** Use `label-md` (Monospace) directly next to `display-md` (Sans) for high-end editorial contrast.
- **Use High-Contrast Images:** Ensure photography has deep blacks and sharp highlights to match the system's "Cinematic" requirement.

### Don't:
- **Don't use Grey:** Avoid mid-tone greys. Stick to the `surface` tiers or the `primary` blue accents.
- **No 1px Lines:** Do not use dividers between list items. Use white space or subtle tonal shifts.
- **No Sharp Corners:** Avoid the `none` roundedness scale unless it is for a specific technical measurement line. Everything else should feel polished (`md` to `full`).
- **Don't Over-Glow:** Use "Glowing elements" sparingly. If everything glows, nothing is important. Reserve glows for the most critical Call to Action.