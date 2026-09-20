import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";

const display = Cinzel({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
  weight: ["400", "500", "600"],
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${site.shortName} — ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.summary,
  applicationName: site.shortName,
  keywords: [
    "youth group home",
    "Portsmouth VA",
    "residential care",
    "ages 10-17",
    "Rise and Thrive",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: site.shortName,
    description: site.summary,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  slogan: site.tagline,
  description: site.summary,
  url,
  telephone: process.env.NEXT_PUBLIC_PHONE,
  email: process.env.NEXT_PUBLIC_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2114 Nashville Ave",
    addressLocality: "Portsmouth",
    addressRegion: "VA",
    postalCode: "23704",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-ivory text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
