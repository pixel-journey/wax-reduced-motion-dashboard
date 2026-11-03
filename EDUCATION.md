# Education — reduced motion as a pure flag

> **Rung:** `npm test` passes. `reduced` is an argument. The browser is not asked. This is not a medical claim and not a full accessibility audit.  
> **The test is the rule.**

Pair with `wax-seizure-safe-animations` for the flash-count gate. That lab is a different rule.

## What you should be able to do

| Level | After this file |
| --- | --- |
| Beginner | Show that 12 frames become 1 when reduced, and 400 ms become 0 |
| Intermediate | Read the policy bundle: parallax and autoplay flip off with the flag |
| Masterclass | Wire the flag from `matchMedia` without letting the pure API call the browser |

---

## Beginner — one scene

```ts
motionFrames(12, false)      // 12
motionFrames(12, true)       // 1
motionDurationMs(400, false) // 400
motionDurationMs(400, true)  // 0
```

Frames must be an integer from 1 to 60. `0` and `61` throw. Duration must be an integer from 0 to 5000 ms.

Reduced motion is **1 frame**, not 0. A static final pose can still render. Duration goes to 0 so the pose does not animate.

### Words

| Word | Meaning here |
| --- | --- |
| `reduced` | A boolean the caller passes. Not a media query |
| Frames | How many steps to show. Clamped to 1 under the flag |
| Duration | Milliseconds. Zero under the flag |
| Policy | Frames + duration + parallax + autoplay, still pure |

### Predict, then run

```bash
npm test
```

1. `motionPolicy(12, 400, true)` is frames 1, duration 0, parallax false, autoplay false.
2. `compareMotion(12, false, true)` is `{ a: 12, b: 1, delta: 11 }`.
3. The pure functions never read `window`.

---

## Intermediate — the bundle

```text
motionFrames(requested, reduced)      → reduced ? 1 : requested
motionDurationMs(requestedMs, reduced) → reduced ? 0 : requestedMs
allowParallax = allowAutoplay = !reduced
```

`compareMotion` runs the frame helper twice so a teaching UI can show the delta. It does not animate.

Sample requests in the file: 12 frames / 400 ms, 30 / 800, 60 / 1200. Those are examples, not tested as a set.

### Attack → test

| Attack | Naive code | This lab | Test |
| --- | --- | --- | --- |
| Keep spinning under reduced motion | Vestibular harm | frames become 1 | `keeps the request unless reduced is true` |
| Animate for 400 ms anyway | Same | duration 0 | `zeroes when reduced` |
| Leave parallax and autoplay on | Hidden motion | both false | `disables parallax/autoplay when reduced` |
| Accept 0 or 61 frames | Broken loop | throw | frame bounds in the first test |

---

## Masterclass — the flag is not the media query

A host that wants the real preference reads `window.matchMedia("(prefers-reduced-motion: reduce)")` and passes the boolean in. The unit tests pass `true` and `false` directly so CI does not need a browser.

This file does not:

- Claim WCAG conformance. The flash-count cousin is closer to WCAG 2.3.1 and still does not claim medical safety.
- Disable every motion in a product. It only returns the numbers and two booleans.
- Ask the browser. Calling `matchMedia` inside `motionFrames` would make the tests environment-dependent.

CRT / scanline themes in other Pixel Journey UI notes are separate. Reduced motion here is a flag, not a skin.

### Exercise

1. 12 frames, reduced true. Result? (1. Tested.)
2. Why 1 and not 0? (A final pose can still paint. Documented next to the helper; the test locks the 1.)
3. Does `npm test` read `prefers-reduced-motion`? (No. The flag is an argument.)

---

## What this course will not teach

- That the page is accessible because this helper exists
- A medical guarantee
- A browser media-query mock
