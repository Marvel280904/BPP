import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Bahtera Prima Perkasa - Professional Ship Agency & Bulk Transportation",
  description: "Leading the way in professional ship agency and bulk transportation in Indonesia. We bridge the gap between global waters and your business goals with precision and safety.",
  keywords: ["Ship Agency", "Bulk Transportation", "Logistics", "Maritime", "Indonesia", "Supply Chain", "Freight Forwarding", "Cargo", "Vessel Management"],
  authors: [{ name: "PT Bahtera Prima Perkasa" }],
  openGraph: {
    title: "PT Bahtera Prima Perkasa - Professional Ship Agency & Bulk Transportation",
    description: "Leading the way in professional ship agency and bulk transportation in Indonesia.",
    type: "website",
    locale: "en_US",
    siteName: "PT Bahtera Prima Perkasa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
