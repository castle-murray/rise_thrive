import { LogoMark } from "@/components/Logo";
import { nav, publicContact, site } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  const contact = publicContact();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-champagne mt-auto">
      <div className="h-px gold-rule" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <LogoMark className="h-12 w-16" />
            <span>
              <span className="font-display block text-lg text-gold-bright">{site.shortName}</span>
              <span className="text-[0.62rem] tracking-[0.2em] uppercase text-champagne/60">
                Support Services, LLC
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-champagne/70 leading-relaxed">{site.tagline}</p>
          <p className="mt-1 text-sm text-champagne/55">{site.descriptor}</p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-champagne/75 hover:text-gold-bright">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Visit</p>
          <address className="mt-3 not-italic text-sm text-champagne/75 space-y-2">
            <p>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
            </p>
            <p>
              {contact.email ? (
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              ) : (
                <span>Email coming soon</span>
              )}
            </p>
            <p>
              {contact.addressLine1}
              <br />
              {contact.addressLine2}
            </p>
            <p className="text-champagne/50 text-xs pt-1">
              A residential home — visits by appointment.
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-2 sm:justify-between text-xs text-champagne/50">
          <p>
            © {year} {site.legalName}
          </p>
          <Link href="/privacy" className="hover:text-gold-bright">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
