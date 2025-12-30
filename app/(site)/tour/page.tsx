import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { tours } from "@/lib/data";
import { ItemCard } from "@/components/ItemCard";
import { WHATSAPP_NUMBER, WHATSAPP_TOUR_TEXT } from "@/lib/constants";

export default function TourPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Tours"
          title="Private tours across Sri Lanka, planned your way"
          subtitle="Tell us where you want to go. We arrange the route, a tourist driver, and a comfortable ride."
        />

        {/* Info block (match the other CTA containers) */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Accent line */}
          <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500" />

          <div className="relative p-4 sm:p-5">
            {/* Match home background treatment */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-sand-50 via-sand-50 to-white" />
              <div className="absolute -top-20 right-[-120px] h-[320px] w-[320px] rounded-full bg-ocean-200/60 blur-3xl" />
              <div className="absolute -bottom-24 left-[-110px] h-[360px] w-[360px] rounded-full bg-sun-400/25 blur-3xl" />
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.35fr_0.65fr] sm:items-center">
              <div>

                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  Flexible tours with a dedicated driver
                </h3>

                <p className="mt-1 text-sm text-slate-700">
                  We arrange tours exactly as you wish. Your tourist driver is
                  available 24 hours during your full journey.
                </p>

                <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-2 w-2 rounded-full bg-ocean-500"
                      aria-hidden
                    />
                    Custom route planning for your days
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-2 w-2 rounded-full bg-ocean-500"
                      aria-hidden
                    />
                    Pickup from your hotel or location
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-2 w-2 rounded-full bg-ocean-500"
                      aria-hidden
                    />
                    Stops for viewpoints, food, and photos
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-2 w-2 rounded-full bg-ocean-500"
                      aria-hidden
                    />
                    Friendly local guidance along the way
                  </li>
                </ul>

                <p className="mt-3 text-xs text-slate-700">
                  Tell us your dates and places, and we will suggest a smooth
                  plan with a clear quote.
                </p>
              </div>

              <div className="sm:flex sm:justify-end">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TOUR_TEXT}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ocean-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ocean-600/15 transition hover:bg-ocean-700 sm:w-auto"
                >
                  <span aria-hidden>📅</span>
                  Book your tour
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => (
            <ItemCard
              key={t.id}
              title={t.title}
              subtitle={`${t.subtitle}. ${t.description}`}
              imageSrc={t.imageUrl.startsWith("/") ? t.imageUrl : t.imageUrl}
              meta="Tour"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
