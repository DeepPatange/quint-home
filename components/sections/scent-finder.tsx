"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { oils } from "@/lib/data/oils";
import { formatINR } from "@/lib/utils";

/**
 * Scent Finder — a small two-question quiz that recommends one of the eight
 * signatures. Lives as a sub-section inside the oils library. Deterministic:
 * each oil carries a (mood, accord) profile; the closest match wins.
 */

type Mood = "calm" | "fresh" | "warm" | "grounded";
type Accord = "citrus" | "green" | "amber" | "salt";

const MOODS: { key: Mood; label: string; sub: string }[] = [
  { key: "calm", label: "Calm & still", sub: "Meditative, clean" },
  { key: "fresh", label: "Fresh & alive", sub: "Dewy, bright" },
  { key: "warm", label: "Warm & soft", sub: "Comforting, cosy" },
  { key: "grounded", label: "Grounded & deep", sub: "Mineral, woody" },
];

const ACCORDS: { key: Accord; label: string }[] = [
  { key: "citrus", label: "Citrus & white florals" },
  { key: "green", label: "Green & mineral" },
  { key: "amber", label: "Vanilla & amber" },
  { key: "salt", label: "Salt & leather" },
];

const PROFILE: Record<string, { mood: Mood; accord: Accord }> = {
  "blanc-ritual": { mood: "calm", accord: "citrus" },
  quietude: { mood: "grounded", accord: "green" },
  "first-rain": { mood: "fresh", accord: "citrus" },
  "soft-hour": { mood: "warm", accord: "amber" },
  solitude: { mood: "fresh", accord: "green" },
  shoreline: { mood: "warm", accord: "salt" },
  "grand-lobby": { mood: "warm", accord: "citrus" },
  "the-arrival": { mood: "calm", accord: "citrus" },
};

function recommend(mood: Mood, accord: Accord) {
  let best = oils[0];
  let bestScore = -1;
  for (const o of oils) {
    const p = PROFILE[o.slug];
    if (!p) continue;
    const score = (p.mood === mood ? 2 : 0) + (p.accord === accord ? 1 : 0);
    if (score > bestScore) {
      bestScore = score;
      best = o;
    }
  }
  return best;
}

const chip =
  "group flex flex-col items-start gap-1 border border-[color:var(--color-rule)] bg-[color:var(--color-white)] px-5 py-4 text-left transition-colors duration-300 hover:border-[color:var(--color-charcoal)] focus-visible:border-[color:var(--color-charcoal)] outline-none";

export function ScentFinder() {
  const [mood, setMood] = useState<Mood | null>(null);
  const [accord, setAccord] = useState<Accord | null>(null);

  const step = mood == null ? 1 : accord == null ? 2 : 3;
  const result = mood && accord ? recommend(mood, accord) : null;

  const reset = () => {
    setMood(null);
    setAccord(null);
  };

  return (
    <div className="mt-16 border border-[color:var(--color-rule)] bg-[color:var(--color-white)] p-7 md:p-10">
      {/* Heading row */}
      <div className="flex flex-col gap-3 border-b border-[color:var(--color-rule)] pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.42em] text-[color:var(--color-charcoal-soft)]">
            Scent Finder
          </p>
          <h3
            className="mt-3"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-2xl)",
              lineHeight: 1.05,
              letterSpacing: "-0.014em",
              fontWeight: 400,
            }}
          >
            Find your scent in two taps.
          </h3>
        </div>
        <span className="text-[0.6rem] uppercase tracking-[0.32em] text-[color:var(--color-charcoal-soft)]">
          {step < 3 ? `Step ${step} of 2` : "Your match"}
        </span>
      </div>

      {/* Step 1 — mood */}
      {step === 1 && (
        <div className="mt-7">
          <p className="mb-5 text-[0.95rem] text-[color:var(--color-charcoal-soft)]">
            What should the room feel like?
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {MOODS.map((m) => (
              <button
                key={m.key}
                type="button"
                className={chip}
                onClick={() => setMood(m.key)}
              >
                <span className="text-[0.95rem] text-[color:var(--color-charcoal)] transition-colors group-hover:text-[color:var(--color-clay)]">
                  {m.label}
                </span>
                <span className="text-[0.72rem] text-[color:var(--color-charcoal-soft)]">
                  {m.sub}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — accord */}
      {step === 2 && (
        <div className="mt-7">
          <p className="mb-5 text-[0.95rem] text-[color:var(--color-charcoal-soft)]">
            And the detail you love most?
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ACCORDS.map((a) => (
              <button
                key={a.key}
                type="button"
                className={chip}
                onClick={() => setAccord(a.key)}
              >
                <span className="text-[0.95rem] text-[color:var(--color-charcoal)] transition-colors group-hover:text-[color:var(--color-clay)]">
                  {a.label}
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMood(null)}
            className="mt-6 text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-charcoal-soft)] underline-offset-4 hover:text-[color:var(--color-charcoal)] hover:underline"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 3 — result */}
      {step === 3 && result && (
        <div className="mt-8 grid gap-7 md:grid-cols-[minmax(0,12rem)_1fr] md:items-center">
          <Link
            href={`/shop/${result.slug}`}
            className="group relative block aspect-[4/5] overflow-hidden bg-[color:var(--color-stardust-soft)]"
          >
            <Image
              src={result.image}
              alt={result.name}
              fill
              sizes="(min-width: 768px) 12rem, 60vw"
              className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-quint)] group-hover:scale-[1.04]"
            />
          </Link>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.42em] text-[color:var(--color-charcoal-soft)]">
              We&rsquo;d reach for
            </p>
            <h3
              className="mt-3"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-3xl)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              {result.name}
            </h3>
            <p className="mt-4 max-w-[44ch] text-[0.95rem] leading-[1.7] text-[color:var(--color-charcoal-soft)]">
              {result.tagline}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                href={`/shop/${result.slug}`}
                className="group inline-flex items-center gap-3 border-b border-[color:var(--color-charcoal)] pb-1.5 text-[0.72rem] uppercase tracking-[0.28em] transition-colors duration-300 hover:border-[color:var(--color-clay)] hover:text-[color:var(--color-clay)]"
              >
                View {result.name} · {formatINR(result.priceINR)}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <button
                type="button"
                onClick={reset}
                className="text-[0.72rem] uppercase tracking-[0.28em] text-[color:var(--color-charcoal-soft)] underline-offset-4 hover:text-[color:var(--color-charcoal)] hover:underline"
              >
                Start over
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
