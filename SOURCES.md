# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Product UI context only |
| [seizure-safe animations](https://github.com/pixel-journey/wax-seizure-safe-animations) | Flash count clamp (different product) |
| [pack-opening canvas](https://github.com/pixel-journey/wax-seizure-safe-pack-opening-canvas) | Excess reveals → shown 1 |
| [3D NFT explorer](https://github.com/pixel-journey/wax-immersive-3d-nft-explorer) | CSS ring that should honor this flag |

## Product facts locked by tests

- `motionFrames(12, true) === 1`; `motionDurationMs(400, true) === 0`.
- Policy bundle under reduced: frames 1, duration 0, parallax false, autoplay false.
- Frames must be integer 1..60; duration 0..5000.
- Boolean is an **argument** — unit tests do not read `prefers-reduced-motion`.
- **Not** a medical claim and **not** a full accessibility audit.
