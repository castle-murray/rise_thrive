import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${site.shortName} — ${site.tagline.replace(/\.$/, "")}`,
    template: `%s · ${site.shortName}`,
  },
  description: `${site.descriptor}. ${site.summary}`,
  applicationName: site.shortName,
  keywords: [
    "youth group home",
    "residential care",
    "Rise and Thrive",
    "support services",
    "youth housing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: site.shortName,
    description: site.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: site.shortName,
    description: site.summary,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: site.shortName,
  slogan: site.tagline,
  description: site.summary,
  url,
  telephone: process.env.NEXT_PUBLIC_PHONE,
  email: process.env.NEXT_PUBLIC_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: process.env.NEXT_PUBLIC_ADDRESS_LINE1,
    addressLocality: "Your City",
    addressRegion: "ST",
    postalCode: "00000",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-cream text-ink font-sans">
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
