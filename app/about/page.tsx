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
              title="A simple rental experience for Sri Lanka travel"
              subtitle="Tropic Rides is a front-end website concept for scooter rentals, airport transfers, and tours. The focus is a clean and responsive UI that works well on any device."
            />
            <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
              <p>
                Use this site as a starting point for a real service. Replace the
                contact details, vehicle lists, and tour descriptions with your
                actual information.
              </p>
              <p>
                If you want to add a backend later, the layout and pages are already
                separated in a way that is easy to extend.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-200/60">
            <div className="relative h-[320px] w-full sm:h-[420px]">
              <Image
                src="/images/aboutUs_image.jpg"
                alt="About Tropic Rides"
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
