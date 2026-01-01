import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tropic Rides",
  description: "Scooter rentals, airport drop and pickup, surf lessons, and tours in Sri Lanka.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Tropic Rides",
    description: "Scooter rentals, airport drop and pickup, surf lessons, and tours in Sri Lanka.",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Tropic Rides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tropic Rides",
    description: "Scooter rentals, airport drop and pickup, surf lessons, and tours in Sri Lanka.",
    images: ["/og-cover.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
