import { describe, expect, it } from "vitest";
import {
  compareMotion,
  motionDurationMs,
  motionFrames,
  motionPolicy,
} from "./motion";

describe("motionFrames", () => {
  it("keeps the request unless reduced is true", () => {
    expect(motionFrames(12, false)).toBe(12);
    expect(motionFrames(12, true)).toBe(1);
    expect(() => motionFrames(0, false)).toThrow(/requested/);
    expect(() => motionFrames(61, false)).toThrow(/requested/);
  });
});

describe("motionDurationMs", () => {
  it("zeroes when reduced", () => {
    expect(motionDurationMs(400, false)).toBe(400);
    expect(motionDurationMs(400, true)).toBe(0);
  });
});

describe("motionPolicy", () => {
  it("disables parallax/autoplay when reduced", () => {
    const reduced = motionPolicy(12, 400, true);
    expect(reduced.frames).toBe(1);
    expect(reduced.durationMs).toBe(0);
    expect(reduced.allowParallax).toBe(false);
    expect(reduced.allowAutoplay).toBe(false);
    const full = motionPolicy(12, 400, false);
    expect(full).toEqual({ frames: 12, durationMs: 400, allowParallax: true, allowAutoplay: true });
  });
});

describe("compareMotion", () => {
  it("delta is request-1 when only A is full", () => {
    const c = compareMotion(12, false, true);
    expect(c.a).toBe(12);
    expect(c.b).toBe(1);
    expect(c.delta).toBe(11);
  });
});
