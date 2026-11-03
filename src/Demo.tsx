"use client";

import { useMemo, useState } from "react";
import {
  compareMotion,
  motionPolicy,
  SAMPLE_REQUESTS,
} from "./motion";
import { GLOSSARY, MOTION_MYTHS } from "./myths";

export function Demo() {
  const [frames, setFrames] = useState("12");
  const [ms, setMs] = useState("400");
  const [reduced, setReduced] = useState(false);

  const policy = useMemo(() => {
    try {
      return {
        ok: true as const,
        value: motionPolicy(Number(frames), Number(ms), reduced),
        compare: compareMotion(Number(frames), false, true),
      };
    } catch (e) {
      return {
        ok: false as const,
        reason: e instanceof Error ? e.message : "Invalid input",
      };
    }
  }, [frames, ms, reduced]);

  return (
    <main className="wrap">
      <p className="kicker">Educational reference · Pixel Journey</p>
      <h1>Reduced-motion policy lab</h1>
      <p className="lede">
        Pure helpers for frames and duration when a reduced-motion flag is set. The
        browser is not asked here.
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

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
        {SAMPLE_REQUESTS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              setFrames(String(s.frames));
              setMs(String(s.ms));
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <label style={{ display: "block", marginBottom: "0.75rem" }}>
        Requested frames (1–60)
        <input
          value={frames}
          onChange={(e) => setFrames(e.target.value)}
          style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "0.75rem" }}>
        Requested duration ms (0–5000)
        <input
          value={ms}
          onChange={(e) => setMs(e.target.value)}
          style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
        />
      </label>
      <label style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem" }}>
        <input
          type="checkbox"
          checked={reduced}
          onChange={(e) => setReduced(e.target.checked)}
        />
        reduced flag (argument)
      </label>

      {policy.ok ? (
        <>
          <p>
            frames <strong>{policy.value.frames}</strong> · duration{" "}
            <strong>{policy.value.durationMs}</strong> ms · parallax{" "}
            <strong>{policy.value.allowParallax ? "yes" : "no"}</strong> · autoplay{" "}
            <strong>{policy.value.allowAutoplay ? "yes" : "no"}</strong>
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            full vs reduced frames: {policy.compare.a} → {policy.compare.b} (Δ{" "}
            {policy.compare.delta})
          </p>
        </>
      ) : (
        <p>{policy.reason}</p>
      )}

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1rem" }}>Runbook</h2>
        <ol style={{ fontSize: "0.9rem" }}>
          <li>In the host, read prefers-reduced-motion (or a user toggle).</li>
          <li>Pass that boolean into motionPolicy / motionFrames.</li>
          <li>Unit-test pure outcomes here without a browser.</li>
          <li>Pair with seizure-safe / CRT policy labs for broader a11y.</li>
        </ol>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem" }}>Glossary</h2>
        <dl>
          {GLOSSARY.map((g) => (
            <div key={g.term} style={{ marginBottom: "0.5rem" }}>
              <dt>
                <strong>{g.term}</strong>
              </dt>
              <dd style={{ margin: 0 }}>{g.meaning}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.75 }}>
        See EDUCATION.md · POLICY.md · SECURITY.md · companion: seizure-safe-animation-policy
      </p>
    </main>
  );
}
