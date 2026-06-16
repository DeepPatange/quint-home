import type { Metadata } from "next";
import { FadeUp } from "@/components/motion/fade-up";

export const metadata: Metadata = {
  title: "For Businesses",
  description:
    "Scent your space — commercial diffusers, bulk orders, and personalized scent development for hotels, restaurants, retail, and workspaces.",
};

const offerings = [
  {
    no: "01",
    title: "Commercial Machines",
    body: "Lobby, restaurant, retail, and workspace-scale diffusers — sized for large areas and built to run continuously.",
  },
  {
    no: "02",
    title: "Bulk Orders",
    body: "Volume pricing on devices and fragrance oils, for multi-site rollouts and ongoing supply.",
  },
  {
    no: "03",
    title: "Personalized Scent Development",
    body: "A signature scent composed for your brand — the invisible layer your customers remember.",
  },
];

// TODO: replace with real, approved client testimonials.
const testimonials = [
  {
    quote:
      "The scent became part of how guests describe us. People stop at the front desk just to ask what it is.",
    name: "General Manager",
    role: "A boutique hotel",
  },
  {
    quote:
      "We rolled it out across eleven stores in a single quarter. Consistent, low-maintenance, and unmistakably ours.",
    name: "Retail Operations",
    role: "A lifestyle brand",
  },
  {
    quote:
      "Our café finally smells like a decision, not an accident. Guests stay longer.",
    name: "Founder",
    role: "A Mumbai restaurant group",
  },
];

export default function BusinessesPage() {
  return (
    <article className="bg-[color:var(--color-white)]">
      {/* ===== HERO ===== */}
      <section className="border-b border-[color:var(--color-rule)] pt-10 md:pt-14">
        <div className="mx-auto max-w-[var(--container-full)] px-6 md:px-10">
          <div className="grid items-end gap-10 pb-12 md:grid-cols-12 md:gap-16">
            <FadeUp delay={0.05} className="md:col-span-7">
              <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[color:var(--color-charcoal-soft)]">
                For Businesses
              </p>
              <h1
                className="mt-7 text-balance"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--text-5xl)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.024em",
                  fontWeight: 400,
                }}
              >
                Scent your{" "}
                <em className="text-[color:var(--color-aerial-deep)]">space.</em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.1} className="md:col-span-5">
              <p className="max-w-[42ch] text-[var(--text-base)] leading-[1.85] text-[color:var(--color-charcoal-soft)]">
                Commercial scenting for hotels, restaurants, retail, and
                workspaces — machines built for scale, bulk supply, and a
                signature scent of your own.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ===== OFFERINGS ===== */}
      <section className="bg-[color:var(--color-stardust-soft)] py-[var(--spacing-section-sm)]">
        <div className="mx-auto max-w-[var(--container-full)] px-6 md:px-10">
          <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-14">
            {offerings.map((o, i) => (
              <FadeUp key={o.no} delay={i * 0.06}>
                <div className="border-t border-[color:var(--color-rule)] pt-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.42em] text-[color:var(--color-charcoal-soft)]">
                    № {o.no}
                  </p>
                  <h2
                    className="mt-4"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "var(--text-2xl)",
                      lineHeight: 1.12,
                      letterSpacing: "-0.014em",
                      fontWeight: 400,
                    }}
                  >
                    {o.title}
                  </h2>
                  <p className="mt-4 max-w-[40ch] text-[0.95rem] leading-[1.75] text-[color:var(--color-charcoal-soft)]">
                    {o.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-[var(--spacing-section-sm)]">
        <div className="mx-auto max-w-[var(--container-full)] px-6 md:px-10">
          <FadeUp>
            <p className="mb-12 text-[0.62rem] uppercase tracking-[0.42em] text-[color:var(--color-charcoal-soft)]">
              From our clients
            </p>
          </FadeUp>
          <div className="grid gap-10 md:grid-cols-3 md:gap-x-14">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <figure className="border-t border-[color:var(--color-rule)] pt-6">
                  <blockquote
                    className="text-balance"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "var(--text-lg)",
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-[0.62rem] uppercase tracking-[0.28em] text-[color:var(--color-charcoal-soft)]">
                    {t.name} · {t.role}
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY FORM ===== */}
      <section className="bg-[color:var(--color-verdant)] py-[var(--spacing-section-sm)] text-[color:var(--color-stardust)]">
        <div className="mx-auto max-w-[var(--container-content)] px-6 md:px-10">
          <FadeUp>
            <h2
              className="max-w-[24ch] text-balance text-[color:var(--color-stardust)]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-3xl)",
                lineHeight: 1.1,
                letterSpacing: "-0.016em",
                fontWeight: 400,
              }}
            >
              Tell us about your space.{" "}
              <em className="not-italic text-[color:var(--color-aerial-soft)]">
                We&rsquo;ll get back within 48 hours.
              </em>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form className="mt-10 grid gap-7 md:grid-cols-2 md:gap-x-10">
              <Field label="Company" placeholder="Business or brand name" />
              <Field label="Your name" placeholder="First and last" />
              <Field label="Email" placeholder="you@company.com" type="email" />
              <Field
                label="Type of space"
                placeholder="Hotel · Restaurant · Retail · Office · Other"
              />
              <div className="md:col-span-2">
                <Field
                  label="A note"
                  placeholder="Tell us about the space, area, number of sites, or anything specific."
                  textarea
                />
              </div>

              <div className="md:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-4">
                <p className="text-[0.62rem] uppercase tracking-[0.32em] text-[color:var(--color-stardust)]/55">
                  Or write directly: business@quinthome.in
                </p>
                <button
                  type="button"
                  className="group inline-flex h-12 items-center justify-center gap-3 bg-[color:var(--color-clay)] px-8 text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--color-ivory)] transition-colors duration-500 hover:bg-[color:var(--color-clay-deep)]"
                >
                  Submit enquiry
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </FadeUp>
        </div>
      </section>
    </article>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  textarea = false,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[0.6rem] uppercase tracking-[0.32em] text-[color:var(--color-stardust)]/60">
        {label}
      </span>
      {textarea ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          className="mt-2 w-full resize-none border-b border-[color:var(--color-stardust)]/25 bg-transparent py-2.5 text-[0.96rem] text-[color:var(--color-stardust)] placeholder:text-[color:var(--color-stardust)]/40 outline-none focus:border-[color:var(--color-stardust)]"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="mt-2 w-full border-b border-[color:var(--color-stardust)]/25 bg-transparent py-2.5 text-[0.96rem] text-[color:var(--color-stardust)] placeholder:text-[color:var(--color-stardust)]/40 outline-none focus:border-[color:var(--color-stardust)]"
        />
      )}
    </label>
  );
}
