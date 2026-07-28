---
name: Omar Bougma — Portfolio
description: The Honest Workshop — a warm, grounded developer's studio in pine green and honey amber on paper.
colors:
  pine: "#173A33"
  pine-deep: "#0E2A24"
  honey: "#D98A36"
  honey-soft: "#E9B567"
  sage: "#5E7A6E"
  paper: "#EEF0EA"
  paper-2: "#E4E8DF"
  card: "#FFFFFF"
  ink: "#1A241F"
  ink-soft: "#46554E"
  hairline: "#D8DDD4"
  stone: "#8A968F"
  paper-dim: "#CBD8D1"
  pine-muted: "#9FB3AB"
  pine-faint: "#7A9A90"
  pine-faintest: "#5A7068"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.1rem, 5.5vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.7rem, 3.5vw, 2.3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.7rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.22em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "6px"
  note: "8px"
  lg: "12px"
  xl: "14px"
  feature: "16px"
  pill: "20px"
  fab: "28px"
spacing:
  hairline: "2px"
  sm: "8px"
  md: "14px"
  btn-y: "13px"
  btn-x: "26px"
  section: "clamp(56px, 9vw, 88px)"
  gutter: "clamp(24px, 6vw, 72px)"
components:
  button-primary:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.card}"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.honey-soft}"
    textColor: "{colors.card}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  button-pine:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  button-pine-hover:
    backgroundColor: "{colors.pine-deep}"
    textColor: "{colors.paper}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "clamp(20px, 2.5vw, 28px)"
  eyebrow:
    textColor: "{colors.sage}"
    typography: "{typography.label}"
  lang-pill-active:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.card}"
    rounded: "{rounded.sm}"
    padding: "5px 8px"
---

# Design System: Omar Bougma — Portfolio

## Overview

**Creative North Star: "The Honest Workshop"**

This is the interface of a maker who has nothing to hide. Everything is warm, grounded, and built to be trusted at a glance: deep pine-green walls, honey-amber light, and the pale grain of paper. It reads the way a good craftsman talks — plainly, without flourish, letting the work carry the weight. The mood is warm, grounded, and trustworthy above all; polish is present but never the point. Calm confidence, no flash. The amber invites; the green steadies.

The system runs on two grounds and one light. Sections alternate between an inverted pine world (hero, services, contact) and a warm paper world (projects, process, experience), so scrolling feels like moving between rooms of the same workshop rather than down a flat page. Honey amber is the single warm accent across both — a struck match, used sparingly, always meaning "this matters" (a call to action, an active tab, one italic word, the line beside a real outcome). Type does the emotional work through contrast: Fraunces, an optical serif, carries soul in headings and human moments; Inter carries every piece of information cleanly beneath it.

Depth is almost entirely flat. Surfaces rest quiet, separated by color and hairline borders, not stacked shadows. Interaction is where the workshop comes alive: cards lift a few pixels on hover, the primary button glows amber, tabs and links warm up. A whisper of resting shadow is permitted on the most important cards, but flatness is the default and lift is a reward for intent. Nothing floats for decoration.

**Key Characteristics:**
- Two grounds, one flame: pine-green and paper sections, honey amber as the only warm accent.
- Fraunces for soul, Inter for information — an optical-serif / grotesque pairing.
- Flat by default; depth is earned on hover, with only a whisper of resting shadow allowed.
- Warm, grounded, trustworthy — restraint reads as honesty.
- Trilingual by construction: every rule survives French, English, and right-to-left Arabic (Cairo).

## Colors

A warm, earthy palette of Moroccan-Mediterranean greens and honeyed light on a paper ground — nothing pure-black, nothing neon.

### Primary
- **Pine Green** (`#173A33`): The signature ground. Fills inverted sections (hero, services), the pre-scroll nav logo, and `.btn-pine`. The color that steadies everything.
- **Pine Deep** (`#0E2A24`): The darkest room — the contact footer and hover state of pine surfaces and service tiles. Reads as depth without a shadow.

### Secondary
- **Honey Amber** (`#D98A36`): The single warm accent and the only true call-to-action color. Primary buttons, active language pill, project tags, link text, the accent border beside outcomes, the dot markers. Its scarcity is the whole point.
- **Honey Soft** (`#E9B567`): The lighter amber for text-on-dark (eyebrows over pine, headline italics, direct-contact links) and the glow of the primary button on hover.

### Tertiary
- **Sage** (`#5E7A6E`): The muted green-grey for eyebrow labels on light grounds and secondary technical copy. A quiet, resolved accent, never loud.

### Neutral
- **Paper** (`#EEF0EA`): The warm off-white page ground and the light text color on pine.
- **Paper 2** (`#E4E8DF`): The slightly cooler tint behind media wells and placeholders — a subtle step down from Paper.
- **Card White** (`#FFFFFF`): Reserved for lifted content cards on the paper ground, so they read as clean surfaces sitting on warm paper.
- **Ink** (`#1A241F`): Primary body text on light grounds — a near-black with green in it, never `#000`.
- **Ink Soft** (`#46554E`): Secondary body copy and muted labels on light grounds.
- **Hairline** (`#D8DDD4`): The 1px green-grey borders and section dividers that separate surfaces instead of shadow. (Kin: `#DCE1D7`, `#E8EDE4` for warmer/cooler dividers.)

*On pine grounds, muted text steps through a cool-green ramp, now tokenized: `--paper-dim` (#CBD8D1, bright), `--pine-muted` (#9FB3AB, standard), `--pine-faint` (#7A9A90, faint / the scroll cue), `--pine-faintest` (#5A7068, faintest). On light grounds, `--stone` (#8A968F) carries muted italic notes. Use these instead of grey for any secondary text.*

### Named Rules
**The Struck-Match Rule.** Honey amber appears on ≤10% of any screen. It is never a background wash and never a paragraph — only calls to action, active states, one italic accent word, and the marks beside real proof. Spend it and the whole page loses its meaning.

**The Two-Ground Rule.** Every section sits on exactly one of two grounds: pine (inverted) or paper (light). There is no third background family. Rhythm comes from alternating the two, not from inventing new surfaces.

**The No-Pure-Black Rule.** Text is Ink (`#1A241F`), a green-tinted near-black. Pure `#000` and pure neutral grey never appear; even the neutrals carry warmth.

## Typography

**Display Font:** Fraunces (with Georgia, serif fallback) — optical sizing on.
**Body / UI Font:** Inter (with system-ui, sans-serif).
**Arabic Font:** Cairo — in `[dir="rtl"]` it replaces *both* Fraunces and Inter across the whole document.

**Character:** An optical serif with genuine warmth and italic personality, set against a clean, neutral grotesque. Fraunces gives the headings and the human moments their soul; Inter keeps every fact legible and unfussy. The contrast between them is the type system's entire expressive range.

### Hierarchy
- **Display** (Fraunces, 400, `clamp(2.1rem, 5.5vw, 3.6rem)`, line-height 1.2, letter-spacing −0.02em): The hero headline only. One italic amber word (`<em>`) carries the emphasis.
- **Headline** (Fraunces, 400, `clamp(1.7rem, 3.5vw, 2.3rem)`, line-height 1.2): Section titles. Pine on paper grounds, paper on pine grounds. Contact runs slightly larger (up to 2.8rem).
- **Title** (Fraunces, 500, `clamp(1.3rem, 2.4vw, 1.7rem)`): Card and project names — the one place the serif goes semibold.
- **Body** (Inter, 400, 1rem, line-height 1.6–1.7): All paragraphs and descriptions, capped around 40–56ch. Ink on light, the cool-green ramp on dark.
- **Label / Eyebrow** (Inter, 600, 0.7rem, letter-spacing 0.22em, UPPERCASE): The section kicker above every headline. Sage on light, honey-soft on dark. In RTL the tracking drops to 0.04em so Arabic stays legible.

### Named Rules
**The Serif-for-Soul Rule.** Fraunces is for identity and feeling — headings, the hero's italic word, the discovery questions, the closing note. Inter is for information. Never set a paragraph in Fraunces; never set a headline in Inter.

**The One-Italic-Word Rule.** Emphasis in a heading is a single italic Fraunces word in honey-soft, not bold, not underline, not color-on-color.

**The Cairo Swap Rule.** In Arabic, Cairo replaces the entire pairing and italics become weight (600) — Fraunces italics do not survive translation, so RTL leans on weight and the eyebrow tracking relaxes.

**The Fluid-Type Rule.** Sizes are fluid `clamp()` expressions, not a fixed step ramp. The five roles above name the anchors; intermediate UI text (roughly 0.8rem–1.08rem) scales between them per component. A literal size off the anchor list is expected here, not drift.

## Layout

A single centered column, `max-width: 1100px`, with fluid side gutters of `clamp(24px, 6vw, 72px)` (the `.wrap` container). Vertical rhythm is fluid too: sections breathe with `clamp(56px, 9vw, 88px)` of top-and-bottom padding, dividing with a 1px hairline rather than a hard edge.

Content sections favor asymmetric two-column grids on desktop — a narrow intro column beside a wider content field (services runs 1fr / 2fr; contact and the top blocks run 1fr / 1fr; projects is a 2-up card grid). These collapse to a single stacked column at 900px (services), 768px (contact, nav), or 760px (projects). The hero is full-viewport (`min-height: 100svh`), vertically centered, with generous top padding to clear the fixed nav.

Spacing inside components is fluid-clamped, not stepped — padding and gaps scale with the viewport rather than snapping between fixed tokens. The rhythm is roomy and unhurried; whitespace is part of the "nothing to hide" posture.

## Elevation & Depth

**Flat by default; depth is earned.** Surfaces rest nearly flat and are separated by color (the two grounds) and 1px hairline borders — not by stacked shadows. Depth is primarily a *response to intent*: it appears on hover and focus, then settles back. A whisper of soft resting shadow is permitted on the most important content cards, but it stays barely perceptible; flatness remains the resting state.

### Shadow Vocabulary
- **Amber Lift** (`box-shadow: 0 6px 20px rgba(217, 138, 54, 0.38)`): The primary button on hover — the amber glows and the button rises 2px. The system's signature interaction.
- **Pine Lift** (`box-shadow: 0 6px 20px rgba(23, 58, 51, 0.28)`): The pine button's hover equivalent.
- **Card Lift** (`box-shadow: 0 12px 36px rgba(23, 58, 51, 0.1)`): Content cards on hover, paired with a −3px translate and a border-color warm-up.
- **Nav Hairline** (`box-shadow: 0 1px 0 rgba(26, 36, 31, 0.1)`): The scrolled nav's single hairline — a divider, not a drop shadow.

### Named Rules
**The Earn-Your-Lift Rule.** Meaningful shadow is a reward for interaction. Elements rest flat or with only a whisper of ambient shadow; hover and focus are what lift them. Never use a heavy resting drop-shadow to fake importance — importance comes from the ground it sits on and the amber it earns.

## Shapes

Soft, consistent, unfussy corners. A small radius family: 4px for tiny pills (language buttons), 6px for buttons and controls, 12px for grouped panels (the services grid, media placeholders), and 14px for content cards. Nothing is sharp-cornered; nothing is a full pill or circle except the small dot markers (`7px` amber circles beside discovery questions) and the ripple.

Separation is done with **1px hairline borders** in muted green-grey, not heavy strokes. The services grid is a signature move: cells separated by 2px gaps that let the container background show through as thin seams, framed by a single rounded border — tiles that read as one panel. Dashed borders appear only on asset placeholders (`1.5px dashed`), honestly signaling "real image pending."

## Components

### Buttons
- **Shape:** Softly rounded (6px), inline-flex with an 8px gap for trailing icons, `13px 26px` padding, weight 500, `line-height: 1`.
- **Primary (`.btn-primary`):** Honey amber background, white text. Hover → honey-soft, rises 2px, amber glow (Amber Lift). The one true CTA.
- **Outline (`.btn-outline`):** Transparent with a `1.5px` translucent-paper border, for use on pine grounds. Hover brightens the border and adds a faint paper wash.
- **Pine (`.btn-pine`):** Pine background, paper text, for CTAs on light grounds. Hover → pine-deep with Pine Lift.
- **Transition:** `all 0.22s` on the standard ease. Every button animates color, transform, and shadow together.

### Cards / Containers
- **Corner Style:** 14px (content/project cards).
- **Background:** Card White on the paper ground; a top media well in Paper 2 with a hairline beneath.
- **Border:** 1px hairline (`#D8DDD4`), warming to `#C8CFC4` on hover.
- **Shadow Strategy:** Flat at rest (whisper allowed); Card Lift + −3px translate on hover. See Elevation.
- **Internal Padding:** `clamp(20px, 2.5vw, 28px)`.

### Navigation
- **Style:** Fixed, transparent over the hero (paper-colored logo and links), transitioning on scroll to a translucent paper bar (`rgba(238,240,234,0.97)`) with a hairline shadow and ink-colored text.
- **Typography:** Inter 500, 0.9rem links; the "Omar" in the logo is Fraunces.
- **States:** Links fade from 75%-opacity paper to full on hover (dark), or ink-soft to ink (scrolled). Language pills sit in a translucent track; the active pill is a solid honey chip (4px radius).
- **Mobile (≤768px):** Burger toggles a pine-deep drawer sliding from the top; links become full-width rows divided by faint hairlines; the desktop CTA hides and the language switcher moves into the drawer.

### Eyebrow Label
- **Style:** The system's connective tissue — 0.7rem uppercase Inter 600 at 0.22em tracking, sage on light / honey-soft on dark. Sits above every section headline. In RTL, tracking relaxes to 0.04em.

### Outcome Accent (signature)
- **Style:** A left accent border (`3px solid honey`) with 12px inset padding, marking a real, verifiable outcome (project result, the audit callout). RTL mirrors it to a right border. This is the visual signature of "proof, stated plainly."

### Hero Ripple (signature)
- **Style:** Concentric honey-soft SVG rings at 42% opacity, top-right, breathing on a 7s stagger (disabled under reduced-motion). The one purely atmospheric flourish, and it stays quiet.

### Placeholders
- **Style:** A 45° hatched Paper-2 fill with a `1.5px` dashed border and uppercase micro-label. Honestly marks pending real assets (screenshots, photo) — never dressed up to look like content.

## Do's and Don'ts

### Do:
- **Do** build every section on one of the two grounds — pine (inverted) or paper (light) — and create rhythm by alternating them.
- **Do** keep honey amber to ≤10% of a screen: CTAs, active states, one italic word, and marks beside real proof.
- **Do** pair Fraunces (headings, human moments) with Inter (all information); emphasize with a single italic honey-soft word.
- **Do** separate surfaces with 1px green-grey hairlines and color, and let depth appear on hover (Amber Lift, Card Lift).
- **Do** verify every rule in French, English, and RTL Arabic — mirror accent borders, relax eyebrow tracking, and let Cairo replace the pairing.
- **Do** mark missing assets with the honest dashed placeholder rather than a fake image or a stock stand-in.

### Don't:
- **Don't** use pure black (`#000`) or neutral grey — text is green-tinted Ink; even neutrals carry warmth.
- **Don't** wash a background in honey amber or set body copy in it; it is an accent, never a field.
- **Don't** add heavy resting drop-shadows to fake importance — importance comes from the ground and the earned lift.
- **Don't** set paragraphs in Fraunces or headlines in Inter; keep soul and information in their lanes.
- **Don't** introduce a third background family, a second accent hue, or a full-pill button radius — the restraint is the brand.
- **Don't** rely on Fraunces italics in Arabic; use Cairo weight instead.
