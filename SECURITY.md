# Security — reduced motion flag

## Closed in tests

| Issue | Behavior |
| --- | --- |
| `reduced: true` | frames → **1**, duration → **0**, parallax/autoplay off |
| Frame bounds | 1..60; 0 and 61 throw |
| Duration bounds | 0..5000 ms |

Reduced motion is **1 frame**, not 0 — a static final pose can still render.

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Media query | Host reads `prefers-reduced-motion`; pure API takes a boolean |
| WCAG / medical | Not a conformance or clinical claim |
| Full product motion | Only returns numbers + two booleans |

## Attack angles

1. Calling `matchMedia` inside the pure helper (breaks CI determinism).  
2. Marketing "accessible" solely because this flag exists.  
3. Collapsing to 0 frames so nothing paints (lab keeps 1 for a final pose).  
4. Leaving parallax/autoplay on under reduced.  
5. Confusing this with [seizure-safe](https://github.com/pixel-journey/wax-seizure-safe-animations) flash-count clamp (different rule).

## Honesty limits

No browser read in unit tests. No keys or signing.

| Sibling | Distinction |
| --- | --- |
| [seizure-safe animations](https://github.com/pixel-journey/wax-seizure-safe-animations) | Flash count clamp-to-3 |
| [3D explorer](https://github.com/pixel-journey/wax-immersive-3d-nft-explorer) | CSS ring; pair with this flag |

[WCAG understanding](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html) is about flashes, not this flag.
