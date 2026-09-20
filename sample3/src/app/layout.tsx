import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { Nunito_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

const sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3002";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${site.shortName} — ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.summary,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: site.shortName,
    description: site.summary,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-ivory text-ink font-sans">
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
