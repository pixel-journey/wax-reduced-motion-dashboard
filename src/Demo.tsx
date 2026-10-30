"use client";

import { useMemo, useState } from "react";
import { motionFrames } from "./motion";
import { MOTION_MYTHS } from "./myths";

export function Demo() {
  const [requested, setRequested] = useState(12);
  const [reduced, setReduced] = useState(false);
  const frames = useMemo(() => {
    try {
      return motionFrames(requested, reduced);
    } catch (e) {
      return e instanceof Error ? e.message : "invalid";
    }
  }, [requested, reduced]);

  return (
    <main className="wrap">
      <p className="kicker">Educational reference · Pixel Journey</p>
      <h1>Twelve frames, or one</h1>
      <p className="lede">
        The reduced flag is passed in. This page does not ask the browser.
      </p>

      <section
        style={{
          marginBottom: "1.5rem",
          padding: "1rem",
          border: "1px solid #a855f744",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ fontSize: "1rem", marginTop: 0 }}>Myths vs reality</h2>
        {MOTION_MYTHS.map((m) => (
          <div key={m.myth} style={{ marginBottom: "0.75rem", fontSize: "0.9rem" }}>
            <p style={{ margin: 0 }}>
              <strong>Myth:</strong> {m.myth}
            </p>
            <p style={{ margin: "0.25rem 0 0" }}>
              <strong>Reality:</strong> {m.reality}
            </p>
          </div>
        ))}
      </section>

      <label style={{ display: "block", marginBottom: "0.75rem" }}>
        Requested frames (1–60)
        <input
          type="number"
          min={1}
          max={60}
          value={requested}
          onChange={(e) => setRequested(Number(e.target.value))}
          style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
        />
      </label>
      <label style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
        <input
          type="checkbox"
          checked={reduced}
          onChange={(e) => setReduced(e.target.checked)}
        />
        Reduced motion flag
      </label>

      <p>
        Result frames: <strong>{String(frames)}</strong>
      </p>

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.75 }}>
        See POLICY.md · companions: seizure-safe-animations, haptic-feedback-simulator.
      </p>
    </main>
  );
}
