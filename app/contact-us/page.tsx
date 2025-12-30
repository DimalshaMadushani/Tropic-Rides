import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Mail, Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "94755350828";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi Tropic Rides! I’d like to book. My dates are __, pickup location is __, and I’m interested in __ (scooter / car / tour / airport)."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function ContactPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s plan your booking"
              subtitle="WhatsApp is the fastest way to reach us. You can also call or email."
            />

            <div className="mt-8 grid gap-4">
              {/* WhatsApp */}
              <Card className="relative overflow-hidden p-5">
                {/* subtle accent */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-16 right-[-90px] h-[220px] w-[220px] rounded-full bg-ocean-200/55 blur-3xl" />
                  <div className="absolute -bottom-20 left-[-110px] h-[260px] w-[260px] rounded-full bg-sun-400/25 blur-3xl" />
                </div>

                <div className="relative flex items-start gap-3">
                  <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-ocean-500 to-sun-500 text-white shadow-soft">
                    <MessageCircle className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Message us with your dates and what you need. We usually
                      reply quickly.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Chat on WhatsApp
                      </Button>
                      <Button
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                      >
                        Open WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Phone */}
              <Card className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-ocean-700">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Phone
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        +94 75 535 0828
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Button href="tel:+94755350828" variant="secondary">
                      Call now
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-ocean-700">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900">
                        Email
                      </p>
                      <p className="mt-1 text-sm text-slate-600 break-all">
                        your.email@example.com
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Button
                      href="mailto:your.email@example.com"
                      variant="secondary"
                    >
                      Email us
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right: image panel */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-200/60">
            <div className="relative h-[360px] w-full sm:h-[520px]">
              <Image
                src="/images/contactUs_image.webp"
                alt="Contact Tropic Rides"
                fill
                className="object-cover"
                priority
              />

              {/* image overlay + soft blobs like home */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 right-[-140px] h-[380px] w-[380px] rounded-full bg-ocean-200/40 blur-3xl" />
                <div className="absolute -bottom-28 left-[-140px] h-[420px] w-[420px] rounded-full bg-sun-400/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
