# Architecture — reduced motion as a pure flag

## Pure core

```
requested frames (1..60) + reduced: boolean
        │
        ▼
motionFrames → reduced ? 1 : requested

requested ms (0..5000) + reduced
        │
        ▼
motionDurationMs → reduced ? 0 : requested

motionPolicy(frames, ms, reduced)
        → { frames, durationMs, allowParallax, allowAutoplay }
```

Reduced motion is **1 frame**, not 0 — a static final pose can still render. Duration goes to 0 so the pose does not animate. Parallax and autoplay flip off with the flag.

## Host wiring

```
window.matchMedia("(prefers-reduced-motion: reduce)")
        → boolean
        → pass into motionFrames / motionPolicy
```

Pure helpers never call `matchMedia`. Unit tests pass `true` / `false` directly so CI needs no browser.

## What is not in the tree

- WCAG conformance claims
- Medical guarantees
- Flash-rate clamping (see `wax-seizure-safe-animations`)
- Pack reveal collapse (see `wax-seizure-safe-pack-opening-canvas`)

## UI

`Demo.tsx` exercises the pure helpers offline.

## Verification

`npm test` locks frames→1, duration→0, policy bundle, compare delta, and input bounds.
