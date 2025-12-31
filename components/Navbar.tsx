"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { WHATSAPP_NUMBER, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barClass = useMemo(
    () =>
      clsx(
        "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-sand-50/70",
        scrolled ? "border-b border-slate-200/70" : "border-b border-transparent"
      ),
    [scrolled]
  );

  return (
    <header className={barClass}>
      <Container className="flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Tropic Rides Logo" className="h-24 w-24" />
          <span className="text-sm font-semibold tracking-tight">
            Tropic Rides
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-sand-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <Button
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="px-3"
            >
              WhatsApp
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-sand-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-200/70 bg-sand-50 md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-sand-100 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  Book on WhatsApp
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
