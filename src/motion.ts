/**
 * How many frames to show / how long to animate.
 * The reduced flag is an argument. The browser is not asked.
 */

export function motionFrames(requested: number, reduced: boolean): number {
  if (!Number.isInteger(requested) || requested < 1 || requested > 60) {
    throw new Error("requested must be an integer from 1 to 60");
  }
  return reduced ? 1 : requested;
}

/** Duration in ms: 0 when reduced, else requested (0–5000). */
export function motionDurationMs(requestedMs: number, reduced: boolean): number {
  if (!Number.isInteger(requestedMs) || requestedMs < 0 || requestedMs > 5_000) {
    throw new Error("requestedMs must be an integer from 0 to 5000");
  }
  return reduced ? 0 : requestedMs;
}

export type MotionPolicy = {
  frames: number;
  durationMs: number;
  allowParallax: boolean;
  allowAutoplay: boolean;
};

/** Bundle of common reduced-motion product decisions (still pure). */
export function motionPolicy(
  framesRequested: number,
  durationRequestedMs: number,
  reduced: boolean
): MotionPolicy {
  return {
    frames: motionFrames(framesRequested, reduced),
    durationMs: motionDurationMs(durationRequestedMs, reduced),
    allowParallax: !reduced,
    allowAutoplay: !reduced,
  };
}

/** Compare two reduced flags for the same request. */
export function compareMotion(
  requested: number,
  reducedA: boolean,
  reducedB: boolean
): { a: number; b: number; delta: number } {
  const a = motionFrames(requested, reducedA);
  const b = motionFrames(requested, reducedB);
  return { a, b, delta: a - b };
}

export const SAMPLE_REQUESTS = [
  { id: "spin", label: "12-frame spin", frames: 12, ms: 400 },
  { id: "burst", label: "30-frame burst", frames: 30, ms: 800 },
  { id: "long", label: "60-frame loop", frames: 60, ms: 1200 },
] as const;
