"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    q: "How do I book?",
    a: "Message us on WhatsApp or call. Share your location, dates, and service type. We will confirm availability and pricing.",
  },
  {
    q: "Do you deliver scooters to my location?",
    a: "Yes. Delivery is available in down-south Sri Lanka. Tell us where you are staying and we will arrange a quick handover.",
  },
  {
    q: "What documents do I need?",
    a: "Bring your passport or NIC and a valid driving license. If you are unsure about license requirements, ask us on WhatsApp first.",
  },
  {
    q: "Can I book airport pickup and a scooter together?",
    a: "Yes. Many travelers do both. We can coordinate timing so everything is smooth on arrival.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <button
            key={item.q}
            type="button"
            className="w-full rounded-2xl bg-white p-4 text-left shadow-soft ring-1 ring-slate-200/60"
            onClick={() => setOpen((v) => (v === idx ? null : idx))}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-slate-900">
                {item.q}
              </span>
              <ChevronDown
                className={clsx(
                  "h-4 w-4 text-slate-600 transition",
                  isOpen ? "rotate-180" : "rotate-0"
                )}
              />
            </div>
            {isOpen ? (
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.a}
              </p>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
