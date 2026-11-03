# Architecture

```
requested frames/ms + reduced flag
        │
        ▼
motionFrames / motionDurationMs
        │
        └── motionPolicy → frames, duration, parallax, autoplay
```

Honesty boundary: no matchMedia inside pure helpers; no network.
