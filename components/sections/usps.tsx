import Image from "next/image";
import { FadeUp } from "@/components/motion/fade-up";
import { Monogram } from "@/components/brand/logo";
import {
  Wind,
  Smartphone,
  Droplets,
  Sparkles,
  BatteryCharging,
  type LucideIcon,
} from "lucide-react";

/**
 * USPs — the brand's selling points, from the brief. Editorial masonry: every
 * photograph is shown in full at its own native aspect ratio (no cropping or
 * cover-zoom), with the number, lead and stat as a caption beneath it.
 */
type Usp = {
  n: string;
  lead: string;
  image: string;
  /** Intrinsic dimensions so the photo renders un-cropped at its native ratio. */
  w: number;
  h: number;
  stat: { icon: LucideIcon; value: string };
};

const usps: Usp[] = [
  {
    n: "01",
    lead: "Waterless cold-air nebulization",
    image: "/images/usp/usp-1.webp",
    w: 1400,
    h: 737,
    stat: { icon: Wind, value: "200–500+ sq ft coverage" },
  },
  {
    n: "02",
    lead: "App-controlled, smart-home ready",
    image: "/images/usp/usp-2.webp",
    w: 1400,
    h: 722,
    stat: { icon: Smartphone, value: "Apple · Alexa · Google" },
  },
  {
    n: "03",
    lead: "Luxury hotel scents, for the home",
    image: "/images/usp/usp-3.webp",
    w: 1400,
    h: 934,
    stat: { icon: Droplets, value: "70–90% concentration" },
  },
  {
    n: "04",
    lead: "A decor object, not an appliance",
    image: "/images/usp/usp-4.webp",
    w: 1400,
    h: 934,
    stat: { icon: Sparkles, value: "Made to be seen" },
  },
  {
    n: "05",
    lead: "Wireless and rechargeable",
    image: "/images/usp/usp-5.webp",
    w: 1400,
    h: 1109,
    stat: { icon: BatteryCharging, value: "Cord-free, runs for weeks" },
  },
];

export function USPs() {
  return (
    <section className="border-y border-[color:var(--color-rule)] bg-[color:var(--color-stardust-soft)] py-[var(--spacing-section-sm)]">
      <div className="mx-auto max-w-[var(--container-full)] px-6 md:px-10">
        {/* Header */}
        <FadeUp>
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.42em] text-[color:var(--color-charcoal-soft)]">
                <Monogram className="h-4 w-4 shrink-0" />
                Why Quint
              </p>
              <h2
                className="mt-4 max-w-[18ch] text-balance"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--text-3xl)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                }}
              >
                Five things that{" "}
                <em className="not-italic text-[color:var(--color-aerial-deep)]">
                  set it apart.
                </em>
              </h2>
            </div>
            <p className="max-w-[26ch] text-[0.86rem] leading-[1.6] text-[color:var(--color-charcoal-soft)] md:text-right">
              Engineering, design and fragrance, in one object.
            </p>
          </div>
        </FadeUp>

        {/* Editorial masonry — images shown in full, never cropped */}
        <div className="[column-gap:0.75rem] columns-1 sm:columns-2 sm:[column-gap:1rem] lg:columns-3">
          {usps.map((u, i) => {
            const Icon = u.stat.icon;
            return (
              <FadeUp
                key={u.n}
                delay={(i % 3) * 0.05}
                className="mb-3 break-inside-avoid sm:mb-4"
              >
                <figure className="group overflow-hidden border border-[color:var(--color-rule)] bg-[color:var(--color-white)]">
                  <div className="overflow-hidden">
                    <Image
                      src={u.image}
                      alt={u.lead}
                      width={u.w}
                      height={u.h}
                      sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 90vw"
                      className="h-auto w-[100%] transition-transform duration-[1600ms] ease-[var(--ease-quint)] group-hover:scale-[1.03]"
                    />
                  </div>

                  <figcaption className="flex items-start gap-4 p-4 md:p-5">
                    <span className="mt-1 text-[0.6rem] tabular-nums tracking-[0.2em] text-[color:var(--color-clay)]">
                      {u.n}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-balance"
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.1rem",
                          lineHeight: 1.16,
                          letterSpacing: "-0.012em",
                          fontWeight: 400,
                        }}
                      >
                        {u.lead}
                      </h3>
                      <div className="mt-2.5 flex items-center gap-2.5">
                        <Icon
                          className="h-4 w-4 shrink-0 text-[color:var(--color-aerial-deep)]"
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                        <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[color:var(--color-charcoal-soft)]">
                          {u.stat.value}
                        </span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
