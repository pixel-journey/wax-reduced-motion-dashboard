import { ATOMIC_ORIGIN } from "./api";
import { motionFrames } from "./motion";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

export const USE_CASES: UseCase[] = [
  {
    title: "An asset is not a motion setting",
    detail: `12 frames stay 12 when reduced is false, and become ${motionFrames(12, true)} when it is true. The asset request is not sent. The browser is not asked.`,
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
  {
    title: "A template is not a frame budget",
    detail: "No animation action is built.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/templates/pixeljourney/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (motionFrames(12, false) !== 12 || motionFrames(12, true) !== 1) throw new Error("frames");
}
