# SafetyStudio Brand Pack

## The mark: the barrier stack

Three staggered barriers, drawn from James Reason's defense-in-depth model —
the foundational idea of modern safety engineering. The gaps in the barriers
are deliberately misaligned so that no straight path leads through the stack:
a hazard stopped is a hazard that met a barrier that held. The signal-orange
bar is that barrier.

The mark also echoes the site's hazard-stripe motif and reads cleanly at
favicon size (16 px).

## Files

| File | Use |
|------|-----|
| `mark-on-light.svg` | Mark alone, for white/paper backgrounds |
| `mark-on-dark.svg` | Mark alone, for dark/graphite backgrounds |
| `lockup-on-light.svg` | Mark + wordmark, light backgrounds |
| `lockup-on-dark.svg` | Mark + wordmark, dark backgrounds |
| `app-icon.svg` | Self-contained tile (graphite square) — favicons, app icons, avatars; works on any background |

In the website codebase the mark lives as `components/ui/BrandMark.tsx`
(theme-aware via CSS variables) and the favicon as `app/icon.svg`.

## Colors

| Role | On light | On dark |
|------|----------|---------|
| Bars (ink) | `#161D26` | `#E9E6DE` |
| Held barrier (signal) | `#B8401D` | `#FF6A3D` |
| Background reference | `#F4F2EC` paper | `#14181D` graphite |

The two signal values are not interchangeable: `#B8401D` is darkened
specifically to pass WCAG AA (4.5:1+) on light backgrounds; `#FF6A3D` is
tuned for dark. Always pair the variant with its intended background.

## Typography

Wordmark: **Big Shoulders Display**, weight 800, uppercase, tight tracking
(−0.5). "SAFETY" in ink, "STUDIO" in signal. The lockup SVGs declare the
font by name — install Big Shoulders Display (Google Fonts, free) before
opening them in design tools, or the wordmark falls back to a condensed
system font.

Supporting faces used on the site: IBM Plex Sans (body), IBM Plex Mono (data).

## Usage rules

- **Clearspace**: keep a margin of at least the height of one bar (⅓ of the
  mark) free on all sides.
- **Minimum sizes**: mark 16 px, lockup 120 px wide. Below that, use the mark alone.
- **Do not** recolor the bars, realign the gaps, add more bars, rotate the
  mark, or place either single-background variant on a mid-tone or busy
  photographic background — use `app-icon.svg` (the tile) there instead.
- **Do not** separate the orange bar from the stack; it only means something
  as part of the system of barriers.
