import Link from "next/link";
import { Container } from "./Container";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-ocean-500 to-sun-500 text-white shadow-soft">
                ST
              </div>
              <p className="text-sm font-semibold">ST Scooter Rentals</p>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Scooter rentals, airport transfers, and tours for travelers in Sri
              Lanka. Clean vehicles, friendly service, and simple booking.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-ocean-700" />
                <span>+94 76 987 6543</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-ocean-700" />
                <span>agstmadushanka1997@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ocean-700" />
                <span>Down South, Sri Lanka</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Links</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/contact-us"
                className="rounded-xl bg-sand-100 px-3 py-2 text-sm text-slate-700 hover:bg-sand-200"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="rounded-xl bg-sand-100 px-3 py-2 text-sm text-slate-700 hover:bg-sand-200"
              >
                About
              </Link>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-sand-100 px-3 py-2 text-sm text-slate-700 hover:bg-sand-200"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-sand-100 px-3 py-2 text-sm text-slate-700 hover:bg-sand-200"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} ST Scooter Rentals. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
