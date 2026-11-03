# Education — reduced motion

## Pattern

```text
motionFrames(requested, reduced)     → reduced ? 1 : requested
motionDurationMs(requestedMs, reduced) → reduced ? 0 : requestedMs
```

## Teaching points

1. **Pure flag.** Unit tests pass `reduced` explicitly; hosts wire `matchMedia('(prefers-reduced-motion: reduce)')`.
2. **1 frame, not 0.** A static final pose can still render.
3. **Policy bundle.** Parallax/autoplay flags flip off when reduced — still educational, not a full a11y audit.
4. Pair with `wax-seizure-safe-animation-policy` for flash/intensity rules.

## Related

- `wax-seizure-safe-animation-policy`
- CRT / scanline UI guidance in Pixel Journey product docs
