import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { WHATSAPP_NUMBER, WHATSAPP_SURF_TEXT } from "@/lib/constants";

export default function SurfLessonsPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Surf Lessons"
          title="Surf lessons in the south coast"
          subtitle="From your very first wave to advanced coaching, we tailor each session to your level."
        />
        {/* Pricing panel */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
          {/* Background image + overlay */}
          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/80"
              aria-hidden="true"
            />

            <div className="relative z-10 grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              {/* Left: copy + prices */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white shadow-soft">
                    🏄
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Lesson pricing
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Pick a level. If you are unsure, we will guide you after a
                      quick chat.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {/* Beginner */}
                  <div className="group rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur-md transition hover:bg-white/85">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-700">
                        Beginner
                      </p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-teal-700/10 px-2.5 py-1 text-xs font-semibold text-teal-800">
                        🐣 Easy start
                      </span>
                    </div>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      $23
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      First wave basics and safety
                    </p>
                  </div>

                  {/* Intermediate */}
                  <div className="group rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur-md transition hover:bg-white/85">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-700">
                        Intermediate
                      </p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-teal-700/10 px-2.5 py-1 text-xs font-semibold text-teal-800">
                        🌊 Level up
                      </span>
                    </div>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      $44
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Control, timing, and turns
                    </p>
                  </div>

                  {/* Advanced */}
                  <div className="group rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur-md transition hover:bg-white/85">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-700">
                        Advanced
                      </p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-teal-700/10 px-2.5 py-1 text-xs font-semibold text-teal-800">
                        🔥 Pro focus
                      </span>
                    </div>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      $65
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Performance coaching
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-700">
                  <span className="rounded-full bg-slate-100 px-3 py-1 backdrop-blur">
                    Beginner friendly
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 backdrop-blur">
                    Safety first
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Spots chosen by conditions
                  </span>
                </div>
                  {/* NEW: locations line */}
<div className="mt-6 rounded-2xl border border-teal-200/60 bg-teal-50/40 p-3">
  <div className="flex flex-wrap items-center gap-2">

    <span className="rounded-full border border-teal-200 bg-white px-3 py-2 text-xs font-medium text-teal-900">
      📍Ahangama
    </span>
    <span className="rounded-full border border-teal-200 bg-white px-3 py-2 text-xs font-medium text-teal-900">
      📍Midigama
    </span>
    <span className="rounded-full border border-teal-200 bg-white px-3 py-2 text-xs font-medium text-teal-900">
      📍Weligama
    </span>
  </div>
</div>

</div>
      

              

              {/* Right: CTA panel (with background image) */}
              {/* Align the items at the center */}
              <div className="relative overflow-hidden border-t border-slate-200 lg:border-l lg:border-t-0 flex items-center justify-center">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/surf_lessons/book_surf.webp)" }}
                  aria-hidden="true"
                />

                {/* Overlay for readability */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-teal-900/75 to-teal-700/70"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8">
                  <h4 className="text-lg font-semibold text-white">
                    Ready to book?
                  </h4>
                  <p className="mt-2 text-sm text-white/90">
                    Tell us your dates and your level. We will confirm
                    availability and recommend the best time to go.
                  </p>

                  <div className="mt-6 grid gap-3">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_SURF_TEXT}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-900 shadow-soft hover:bg-teal-50"
                    >
                      Book your lesson
                    </a>

                    <p className="text-xs text-white/80">
                      Fast replies. We can often arrange a lesson on the same
                      day.
                    </p>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </div>

        {/* Small reassurance footer */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
          {/* Top accent line */}
          <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500" />

          <div className="p-6">
            <h4 className="text-base font-semibold text-slate-900">
              What you can expect
            </h4>

            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-600" />
                Easy explanations and patient coaching
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-600" />
                Safety tips before entering the water
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-600" />
                Practice time focused on your weak points
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-600" />
                Great spots chosen based on conditions
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
