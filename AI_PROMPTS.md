# AI handoff — reduced-motion policy

## Non-negotiables

1. `motionFrames(12, true) === 1`. `motionDurationMs(400, true) === 0`.
2. Under reduced motion: frames 1, duration 0, parallax false, autoplay false.
3. Frames are an integer 1..60. Duration is 0..5000.
4. The boolean is an **argument**. Unit tests do not read `prefers-reduced-motion`.
5. **Not** a medical claim and **not** a full accessibility audit.
6. Flash clamp (seizure-safe animations) and pack-canvas collapse-to-1 are different products.

## Prompt seeds

- "12 frames with reduced true — how many frames and what duration?"
- "Refuse reading the OS media query inside the unit test."
- "Contrast this flag with the flash-budget clamp."

## Do not

- Claim WCAG conformance from these integers.
- Animate inside the pure tests.
