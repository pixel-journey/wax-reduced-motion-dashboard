"use client";

import { motionFrames } from "./motion";

export function Demo() {
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Twelve frames, or one</h1>
      <p className="lede">The reduced flag is passed in. This page does not ask the browser.</p>
      <p>
        Off {motionFrames(12, false)}. On {motionFrames(12, true)}.
      </p>
    </main>
  );
}
