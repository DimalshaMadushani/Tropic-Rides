import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s plan your booking"
              subtitle="Message on WhatsApp for the fastest response. You can also call or email."
            />

            <div className="mt-8 grid gap-4">
              <Card className="p-5">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-ocean-700" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Phone
                    </p>
                    <p className="mt-1 text-sm text-slate-600">+94 75 535 0828</p>
                    <div className="mt-3">
                      <Button href="tel:+94755350828" variant="secondary">
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-5">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-ocean-700" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <p className="mt-1 text-sm text-slate-600">
                      your.email@example.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5" id="airport">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-ocean-700" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Airport drop and pickup
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Share your flight time and destination. We will coordinate
                      the pickup and confirm pricing.
                    </p>
                    <div className="mt-3">
                      <Button
                        href="https://wa.me/+94755350828"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Book on WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-200/60">
            <div className="relative h-[360px] w-full sm:h-[520px]">
              <Image
                src="/images/contactUs_image.webp"
                alt="Contact ST Scooter Rentals"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent" />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-slate-900">
                Quick message template
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Dates, pickup location, service type (scooter, car, tour, airport),
                number of people, and any special requests.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
