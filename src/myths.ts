export const MOTION_MYTHS = [
  {
    myth: "This page reads prefers-reduced-motion automatically",
    reality:
      "The reduced flag is an explicit argument. Host apps wire matchMedia themselves.",
  },
  {
    myth: "Reduced motion means zero frames",
    reality:
      "This helper collapses to 1 frame so state is still visible without a sequence.",
  },
  {
    myth: "Any request count is allowed",
    reality:
      "Requested frames must be an integer from 1 to 60.",
  },
] as const;
