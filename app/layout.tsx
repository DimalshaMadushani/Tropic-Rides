import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const metadata: Metadata = {
  title: "Tropic Rides",
  description:
    "Scooter rentals, airport drop and pickup, surf lessons, and tours in Sri Lanka. Responsive, simple booking and friendly service.",
  openGraph: {
    title: "Tropic Rides",
    description:
      "Scooter rentals, airport drop and pickup, surf lessons, and tours in Sri Lanka.",
    type: "website",
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
