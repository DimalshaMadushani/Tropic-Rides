import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { categories } from "@/lib/data";
import { CheckCircle2, MapPinned, ShieldCheck, Timer } from "lucide-react";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";

const perks = [
  { icon: Timer, title: "Fast booking", text: "Confirm quickly on WhatsApp." },
  { icon: ShieldCheck, title: "Clean & safe", text: "Well-maintained vehicles." },
  { icon: MapPinned, title: "Local support", text: "Tips for routes and stops." },
  { icon: CheckCircle2, title: "Straightforward pricing", text: "Clear day rates." },
];

const testimonials = [
  {
    name: "Nimal",
    note: "Great service and quick delivery. The scooter was clean and smooth.",
  },
  {
    name: "Sarah",
    note: "Airport pickup was on time and super friendly. Easy communication.",
  },
  {
    name: "Ravi",
    note: "Tour suggestions were excellent. We saw amazing places without stress.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-sand-50 via-sand-50 to-white" />
          <div className="absolute -top-24 right-[-140px] h-[380px] w-[380px] rounded-full bg-ocean-200/60 blur-3xl" />
          <div className="absolute -bottom-32 left-[-120px] h-[420px] w-[420px] rounded-full bg-sun-400/25 blur-3xl" />
        </div>

        <Container className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-ocean-700 ring-1 ring-slate-200/70">
              Sri Lanka travel rentals
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Scooters, airport transfers, and tours for a smooth trip
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Book in minutes. Get a scooter delivered, arrange airport drop and
              pickup, or plan a tour with local guidance.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href="https://wa.me/94755350828"
                target="_blank"
                rel="noreferrer"
              >
                Book on WhatsApp
              </Button>
              <Button href="tel:+94755350828" variant="secondary">
                Call Now
              </Button>
              <Button href="#services" variant="ghost">
                View Services
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {perks.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <p.icon className="mt-0.5 h-5 w-5 text-ocean-700" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {p.title}
                    </p>
                    <p className="text-sm text-slate-600">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-ocean-100 to-sun-400/20 blur-xl" />
            <div className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-200/60">
              <div className="relative h-[340px] w-full sm:h-[420px]">
                <Image
                  src="/images/sigiriya_light.jpg"
                  alt="Sri Lanka scenic travel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Travel-ready support
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Message us your dates and location. We will confirm and guide
                  you.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="py-14">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Choose what you need"
            subtitle="Scooter rentals, airport drop and pickup, tours, and car rentals. Simple booking and clear options."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link key={c.key} href={c.href} className="group">
                <Card className="h-full overflow-hidden">
                  <div className="relative h-36 w-full">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-semibold text-slate-900">
                      {c.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {c.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-white to-sand-100 p-6 ring-1 ring-slate-200/60 md:p-10">
            <SectionHeading
              eyebrow="Why choose us"
              title="A simple, reliable travel setup"
              subtitle="We keep it practical: quick replies, clean vehicles, and support when you need it."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {perks.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl bg-white p-4 ring-1 ring-slate-200/60"
                >
                  <p.icon className="h-5 w-5 text-ocean-700" />
                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    {p.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What people say"
            subtitle="A few short notes from travelers. Replace these with your real feedback anytime."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-5">
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  “{t.note}”
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            subtitle="Quick answers for bookings, delivery, and requirements."
          />
          <div className="mt-6">
            <FAQ />
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="rounded-3xl bg-ocean-700 p-6 text-white shadow-card md:p-10">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Ready to book?
                </h3>
                <p className="mt-2 text-sm text-white/85">
                  Send your dates and location on WhatsApp. We will confirm
                  availability and help you choose the best option.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button
                  href="https://wa.me/94755350828"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-slate-900 hover:bg-sand-100"
                >
                  Book on WhatsApp
                </Button>
                <Button href="/contact-us" variant="secondary" className="bg-ocean-600 text-white ring-1 ring-white/20 hover:bg-ocean-500">
                  Contact page
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
