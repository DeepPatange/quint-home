import { FadeUp } from "@/components/motion/fade-up";
import { Monogram } from "@/components/brand/logo";

export function SmartHome() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-verdant)] py-[var(--spacing-section)] text-[color:var(--color-stardust)]">
      {/* Atmospheric radial bloom — soft sage light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(119,145,141,0.30) 0%, rgba(41,51,41,0) 55%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "linear-gradient(180deg, rgba(41,51,41,0) 0%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[var(--container-content)] px-6 text-center md:px-10">
        <FadeUp>
          <div className="mx-auto flex items-center justify-center gap-4 text-[0.6rem] uppercase tracking-[0.42em] text-[color:var(--color-stardust)]/65">
            <span className="h-px w-12 bg-[color:var(--color-stardust)]/25" />
            <span className="inline-flex items-center gap-2">
              <Monogram className="h-[0.9em] w-[0.9em]" />
              The Range
            </span>
            <span className="h-px w-12 bg-[color:var(--color-stardust)]/25" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="mx-auto mt-12 max-w-[20ch] text-balance"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-4xl)",
              lineHeight: 1.08,
              letterSpacing: "-0.022em",
              fontWeight: 400,
              color: "var(--color-stardust)",
            }}
          >
            Objects that elevate your home.
            <br />
            <em className="not-italic text-[color:var(--color-aerial-soft)]">
              Fragrances that stay with you.
            </em>
          </h2>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="mt-16 border-t border-[color:var(--color-stardust)]/15 pt-12">
            <div className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.86rem] uppercase tracking-[0.2em] text-[color:var(--color-stardust)]/90">
              <span>Waterless Diffusers</span>
              <span className="text-[color:var(--color-stardust)]/35">·</span>
              <span>Reed Diffusers &amp; Candles</span>
              <span className="text-[color:var(--color-stardust)]/35">·</span>
              <span>Fragrance Oils</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
