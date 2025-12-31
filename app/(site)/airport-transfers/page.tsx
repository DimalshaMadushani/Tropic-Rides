// app/airport-transfers/page.tsx (or your page file)
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ItemCard } from "@/components/ItemCard";
import { airportTransfers } from "@/lib/data";
import { WHATSAPP_NUMBER, WHATSAPP_AIRPORT_TEXT } from "@/lib/constants";

export default function AirportTransfersPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Airport Transfers"
          title="Quick pickups and drops from the airport"
          subtitle="Cars, shuttles, and vans to any location in Sri Lanka."
        />

        {/* Eye-catching price + WhatsApp CTA (smaller + matching home gradient/blobs) */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Accent line (use your theme colors) */}
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
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-ocean-400"
                    aria-hidden
                  />
                  Fixed price route
                </div>

                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  Airport ↔ Ahangama{" "}
                  <span className="text-sm font-normal text-slate-600">
                    (Down South)
                  </span>
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-baseline gap-2 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-slate-200">
                    <span className="text-xs font-medium text-slate-700">
                      Pickup or drop
                    </span>
                    <span className="text-base font-semibold text-slate-900">
                      LKR 15,000
                    </span>
                    <span className="text-xs text-slate-500">(~$50)</span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-slate-200">
                    <span aria-hidden className="text-sm">
                      ⚡
                    </span>
                    <span className="text-xs font-medium text-slate-700">
                      Confirm within minutes
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-700">
                  For other locations, inquire via WhatsApp. Lower prices than
                  outside, with friendly drivers.
                </p>
              </div>

              <div className="sm:flex sm:justify-end">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_AIRPORT_TEXT}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ocean-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ocean-600/15 transition hover:bg-ocean-700 sm:w-auto"
                >
                  <span aria-hidden>💬</span>
                  Book your transfer
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cards (no route text in titles, only Ahangama ones show price) */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {airportTransfers.map((t) => (
            <ItemCard
              key={t.id}
              title={t.name}
              subtitle={`${t.passengers} passengers • ${t.description}`}
              imageSrc={t.image}
              meta={t.meta}
              incImgHeight={true}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
