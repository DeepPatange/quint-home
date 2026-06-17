"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { oils } from "@/lib/data/oils";
import { formatINR } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * Scent Finder — a two-question quiz that recommends one of the eight
 * signatures. Step one picks a mood from four atmospheric image tiles;
 * step two picks an accord. Deterministic: each oil carries a (mood, accord)
 * profile and the closest match wins.
 */

type Mood = "calm" | "fresh" | "warm" | "grounded";
type Accord = "citrus" | "green" | "amber" | "salt";

const MOODS: { key: Mood; label: string; sub: string; image: string }[] = [
  { key: "calm", label: "Calm & still", sub: "Meditative, clean", image: "/images/scent-finder/calm.webp" },
  { key: "fresh", label: "Fresh & alive", sub: "Dewy, bright", image: "/images/scent-finder/fresh.webp" },
  { key: "warm", label: "Warm & soft", sub: "Comforting, cosy", image: "/images/scent-finder/warm.webp" },
  { key: "grounded", label: "Grounded & deep", sub: "Mineral, woody", image: "/images/scent-finder/grounded.webp" },
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

export function ScentFinder() {
  const [mood, setMood] = useState<Mood | null>(null);
  const [accord, setAccord] = useState<Accord | null>(null);

  const step = mood == null ? 1 : accord == null ? 2 : 3;
  const result = mood && accord ? recommend(mood, accord) : null;

  const reset = () => {
    setMood(null);
    setAccord(null);
  };

  const trackRef = useRef<HTMLDivElement>(null);
  const scrollByTile = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <section className="bg-[color:var(--color-ivory)] py-[var(--spacing-section)]">
      <div className="mx-auto max-w-[var(--container-full)] px-6 md:px-10">
        <SectionHeader
          chapter="Scent Finder"
          chapterTitle="Choose your scent"
          headline={
            <>
              Tell us the mood.
              <br />
              <em className="not-italic text-[color:var(--color-aerial-deep)]">
                We&rsquo;ll find the scent.
              </em>
            </>
          }
          meta={
            <>
              Two taps — a feeling and a detail —
              <br />
              and we&rsquo;ll point you to one of the eight.
            </>
          }
        />

        {/* Step indicator */}
        <div className="mt-12 flex items-center justify-between border-b border-[color:var(--color-rule)] pb-4">
          <p className="text-[0.95rem] text-[color:var(--color-charcoal-soft)]">
            {step === 1
              ? "What should the room feel like?"
              : step === 2
                ? "And the detail you love most?"
                : "Your match"}
          </p>
          <span className="text-[0.6rem] uppercase tracking-[0.32em] text-[color:var(--color-charcoal-soft)]">
            {step < 3 ? `Step ${step} of 2` : "Done"}
          </span>
        </div>

        {/* Step 1 — mood as a small horizontal carousel */}
        {step === 1 && (
          <div className="relative mt-8">
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {MOODS.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  onClick={() => setMood(m.key)}
                  className="group relative block aspect-[4/5] w-[8.5rem] shrink-0 snap-start overflow-hidden text-left outline-none sm:w-[10rem]"
                >
                  <Image
                    src={m.image}
                    alt={m.label}
                    fill
                    sizes="10rem"
                    className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-quint)] group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(58,53,50,0) 38%, rgba(58,53,50,0.78) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-[color:var(--color-stardust)]">
                    <span
                      className="block"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "0.98rem",
                        lineHeight: 1.05,
                        letterSpacing: "-0.012em",
                        fontWeight: 400,
                      }}
                    >
                      {m.label}
                    </span>
                    <span className="mt-1 block text-[0.5rem] uppercase tracking-[0.22em] opacity-85">
                      {m.sub}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => scrollByTile(-1)}
              aria-label="Previous moods"
              className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-white)] p-2 text-[color:var(--color-charcoal)] transition-colors duration-300 hover:text-[color:var(--color-clay)] sm:block"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByTile(1)}
              aria-label="More moods"
              className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-[color:var(--color-rule)] bg-[color:var(--color-white)] p-2 text-[color:var(--color-charcoal)] transition-colors duration-300 hover:text-[color:var(--color-clay)] sm:block"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Step 2 — accord chips */}
        {step === 2 && (
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ACCORDS.map((a) => (
                <button
                  key={a.key}
                  type="button"
                  onClick={() => setAccord(a.key)}
                  className="group flex items-center justify-between border border-[color:var(--color-rule)] bg-[color:var(--color-white)] px-6 py-5 text-left transition-colors duration-300 hover:border-[color:var(--color-charcoal)] outline-none"
                >
                  <span className="text-[1.05rem] text-[color:var(--color-charcoal)] transition-colors group-hover:text-[color:var(--color-clay)]">
                    {a.label}
                  </span>
                  <span className="text-[color:var(--color-charcoal-soft)] transition-transform duration-300 group-hover:translate-x-1">
                    →
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
          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,16rem)_1fr] md:items-center">
            <Link
              href={`/shop/${result.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-[color:var(--color-stardust-soft)]"
            >
              <Image
                src={result.image}
                alt={result.name}
                fill
                sizes="(min-width: 768px) 16rem, 70vw"
                className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-quint)] group-hover:scale-[1.04]"
              />
            </Link>
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.42em] text-[color:var(--color-charcoal-soft)]">
                We&rsquo;d reach for
              </p>
              <h3
                className="mt-4"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--text-4xl)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.022em",
                  fontWeight: 400,
                }}
              >
                {result.name}
              </h3>
              <p className="mt-5 max-w-[46ch] text-[var(--text-base)] leading-[1.7] text-[color:var(--color-charcoal-soft)]">
                {result.tagline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
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
    </section>
  );
}
