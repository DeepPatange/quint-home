import { FadeUp } from "@/components/motion/fade-up";
import { EditorialCarousel, type Slide } from "@/components/ui/editorial-carousel";

/**
 * A drag-scroll moodboard — what the brand looks like at the edges of vision.
 * Uses the brand vibe library as a curated visual library.
 */
const slides: Slide[] = [
  { src: "/images/vibe/vibe-01.jpg", alt: "Soft morning light through a curtain", eyebrow: "Morning", caption: "Before the day has made up its mind." },
  { src: "/images/vibe/vibe-14.jpg", alt: "A hillside at sunset", eyebrow: "Last Light", caption: "The last warmth before the hills turn blue." },
  { src: "/images/vibe/vibe-17.jpg", alt: "Sun through a canopy of trees", eyebrow: "Daybreak", caption: "The trees letting the morning through." },
  { src: "/images/vibe/vibe-16.jpg", alt: "Late sun scattered across water", eyebrow: "Surface", caption: "Afternoon, broken up on the water." },
  { src: "/images/vibe/vibe-20.jpg", alt: "A figure running through a golden field", eyebrow: "Golden Hour", caption: "Outrunning the last of the gold." },
  { src: "/images/vibe/vibe-22.jpg", alt: "A study in late afternoon light", eyebrow: "The Study", caption: "Afternoon, in no hurry to leave." },
  { src: "/images/vibe/vibe-13.jpg", alt: "An interior in thin winter light", eyebrow: "Winter Light", caption: "Thin winter light, through old glass." },
  { src: "/images/vibe/vibe-21.jpg", alt: "A still, quiet room", eyebrow: "Stillness", caption: "The hour that asks nothing of you." },
];

export function Atmosphere() {
  return (
    <section className="bg-[color:var(--color-white)] py-[var(--spacing-section)]">
      <div className="mx-auto max-w-[var(--container-full)] px-6 md:px-10">
        <FadeUp>
          <div className="mb-12 flex flex-col gap-6 border-b border-[color:var(--color-rule)] pb-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[color:var(--color-charcoal-soft)]">
                § Four · Atmosphere
              </p>
              <h2
                className="mt-5 max-w-[18ch] text-balance"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--text-3xl)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.016em",
                  fontWeight: 400,
                }}
              >
                A room is mostly light —{" "}
                <em className="text-[color:var(--color-aerial-deep)]">
                  and the hour you catch it.
                </em>
              </h2>
            </div>
            <p className="max-w-[32ch] text-[0.88rem] leading-[1.65] text-[color:var(--color-charcoal-soft)] md:text-right">
              Years of references — the light, the texture, the quiet we kept
              returning to.
              <br />
              <span className="text-[0.62rem] uppercase tracking-[0.32em]">
                Drag to browse →
              </span>
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <EditorialCarousel
            slides={slides}
            slideWidth={360}
            slideWidthMobile={280}
            withPlateNumbers={false}
          />
        </FadeUp>
      </div>
    </section>
  );
}
