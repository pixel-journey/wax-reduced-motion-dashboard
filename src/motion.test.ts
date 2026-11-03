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
    const p = motionPolicy(12, 400, true);
    expect(p.frames).toBe(1);
    expect(p.durationMs).toBe(0);
    expect(p.allowParallax).toBe(false);
    expect(p.allowAutoplay).toBe(false);
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
