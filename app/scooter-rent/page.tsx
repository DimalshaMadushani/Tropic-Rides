import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { scooters } from "@/lib/data";
import { ItemCard } from "@/components/ItemCard";

const WHATSAPP_NUMBER = "94751234567";
const WHATSAPP_TEXT_DELIVERY = encodeURIComponent(
  "Hi Tropic Rides! I want scooter delivery."
);
const WHATSAPP_LINK_DELIVERY = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT_DELIVERY}`;

function formatPrice(price: number) {
  return Number.isInteger(price) ? price.toString() : price.toFixed(1);
}

export default function ScooterRentPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Scooter Rentals"
          title="Scooters delivered to you in Sri Lanka’s down south"
          subtitle="Choose a scooter and message us on WhatsApp. Delivery includes essentials so you can ride with peace of mind."
        />

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
          {/* Top accent line */}
          <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500" />

          <div className="p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  What's included with delivery
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Message us on WhatsApp for dates, availability, and the best
                  rate.
                </div>
              </div>

              <a
                href={WHATSAPP_LINK_DELIVERY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ocean-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ocean-600/15 transition hover:bg-ocean-700 sm:w-auto"
              >
                <span aria-hidden>💬</span>
                WhatsApp to book delivery
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <span className="text-base leading-none">🛵</span> Down south
                delivery
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <span className="text-base leading-none">🪖</span> 2 Helmets
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <span className="text-base leading-none">📄</span> Bike revenue
                report
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <span className="text-base leading-none">🛡️</span> Insurance
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <span className="text-base leading-none">🌬️</span> Air pollution
                report
              </span>
            </div>

            <div className="mt-3 text-xs text-slate-500">
              Prices shown are “from” rates and may vary by dates and
              availability.
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {scooters.map((s) => (
            <ItemCard
              key={s.id}
              title={s.name}
              subtitle={s.description}
              imageSrc={s.image}
              meta={`$${formatPrice(s.pricePerDayUSD)} onwards`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
