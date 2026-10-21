/**
 * How many frames to show. The reduced flag is an argument.
 * The browser is not asked.
 */

export function motionFrames(requested: number, reduced: boolean): number {
  if (!Number.isInteger(requested) || requested < 1 || requested > 60) throw new Error("requested must be an integer from 1 to 60");
  return reduced ? 1 : requested;
}
