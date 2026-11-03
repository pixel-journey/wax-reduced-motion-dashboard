export const MOTION_MYTHS = [
  {
    myth: "This reads prefers-reduced-motion from the browser",
    reality:
      "reduced is an argument. Wire matchMedia in the host app; unit-test pure functions here.",
  },
  {
    myth: "reduced always means zero frames",
    reality: "motionFrames returns 1 so a static end state can still render.",
  },
  {
    myth: "This certifies WCAG conformance for a whole product",
    reality:
      "It only encodes a small policy helper. Accessibility is broader than frame counts.",
  },
] as const;

export const GLOSSARY = [
  {
    term: "motionFrames",
    meaning: "1 when reduced, else requested (1–60).",
  },
  {
    term: "motionDurationMs",
    meaning: "0 when reduced, else requested ms (0–5000).",
  },
  {
    term: "motionPolicy",
    meaning: "frames + duration + parallax/autoplay flags.",
  },
] as const;
