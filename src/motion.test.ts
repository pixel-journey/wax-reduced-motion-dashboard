import { describe, expect, it } from "vitest";
import { motionFrames } from "./motion";

describe("motion frames", () => {
  it("keeps the request unless reduced is true", () => {
    expect(motionFrames(12, false)).toBe(12);
    expect(motionFrames(12, true)).toBe(1);
    expect(() => motionFrames(0, false)).toThrow(/requested/);
  });
});
