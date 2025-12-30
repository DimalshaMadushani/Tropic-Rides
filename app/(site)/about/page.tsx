import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Easy, reliable travel along Sri Lanka’s south coast"
              subtitle="Tropic Rides helps travelers move around Sri Lanka with ease, comfort, and local knowledge."
            />

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                Tropic Rides is a locally focused travel service based in Sri
                Lanka, offering scooter rentals, airport transfers, private
                tours, and surf lessons. We mainly operate along the south coast,
                where most travelers come to enjoy beaches, surf spots, and
                relaxed coastal towns.
              </p>

              <p>
                Whether you need a scooter delivered to your hotel, a quick
                pickup from the airport, or a custom tour with a friendly driver,
                we keep things simple and flexible. Our goal is to help you spend
                less time worrying about transport and more time enjoying your
                trip.
              </p>

              <p>
                We work with trusted local drivers and instructors who know the
                area well. From short rides to multi-day journeys, we arrange
                transport and experiences that fit your plans, not the other way
                around.
              </p>

              <p>
                If you are traveling down south and want an easy, reliable way to
                get around, Tropic Rides is here to help.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-200/60">
            <div className="relative h-[320px] w-full sm:h-[420px]">
              <Image
                src="/images/aboutUs_image.jpg"
                alt="Traveling in Sri Lanka with Tropic Rides"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}