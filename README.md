# Reduced motion as a pure flag — not a browser call

> **Trust:** `educational-reference`  
> **Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

**One-sentence goal:** Teach that a reduced-motion flag collapses frames to 1, duration to 0, and turns parallax and autoplay off — without asking the browser or claiming a full accessibility audit.

**Real code:** `npm test`. **Does not** call `matchMedia` or render flashing content.

The course is [EDUCATION.md](EDUCATION.md).

## What is true (executed)

| Rule | Result |
| --- | --- |
| `motionFrames(12, false)` | 12 |
| `motionFrames(12, true)` | 1 |
| `motionFrames(0 or 61, …)` | throws |
| `motionDurationMs(400, true)` | 0 |
| `motionPolicy(12, 400, true)` | frames 1, duration 0, parallax false, autoplay false |
| `compareMotion(12, false, true)` | `{ a: 12, b: 1, delta: 11 }` |

## What is in the repo

| Piece | Role |
| --- | --- |
| `src/motion.ts` | frames, duration, policy, compare |
| `src/motion.test.ts` | the executed rule |
| `src/Demo.tsx` | interactive counts |
| Docs | EDUCATION · POLICY · SECURITY |

## Run

```bash
npm install
npm test
npm run dev
```

## Best practice and the opposite

**Do** pass the reduced flag in from the host.  
**Do** keep the helper pure so CI does not need a window.  
**Do** leave a static pose (1 frame), not a blank.

**Do not** call this a WCAG certificate.  
**Do not** leave parallax running because the animation helper returned 1. The policy turns it off; a product still has to read that boolean.  
**Do not** treat this as the flash-rate lab. That is `wax-seizure-safe-animations`.

## Related

- `wax-seizure-safe-animations`
- `wax-seizure-safe-pack-opening-canvas`

MIT — Pixel Journey
