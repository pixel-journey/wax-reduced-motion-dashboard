# wax-reduced-motion-dashboard

> **Trust label:** `educational-reference`  
> **Status:** Full-thrust education pass (2026-11-03)

`motionFrames(requested, reduced)` → **1** when reduced, else the request (1–60). Browser is not asked in the pure API.

```bash
npm test && npm run dev
```

| Helper | Role |
|--------|------|
| `motionFrames` | clamp frames under reduced |
| `motionDurationMs` | zero duration when reduced |
| `motionPolicy` | frames + duration + parallax/autoplay |
| `compareMotion` | full vs reduced delta |

[EDUCATION.md](./EDUCATION.md) · [POLICY.md](./POLICY.md) · [SECURITY.md](./SECURITY.md)

MIT — Pixel Journey
