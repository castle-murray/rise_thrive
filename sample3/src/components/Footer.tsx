import { LogoMark } from "@/components/Logo";
import { nav, publicContact, site } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  const contact = publicContact();
  return (
    <footer className="bg-espresso text-ivory mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <LogoMark className="h-10 w-14" />
            <span className="font-display text-lg">{site.shortName}</span>
          </Link>
          <p className="mt-3 text-sm text-ivory/65 max-w-xs">{site.tagline}</p>
        </div>
        <div>
          <p className="eyebrow text-gold-bright">Visit</p>
          <ul className="mt-3 space-y-2 text-sm text-ivory/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-bright">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold-bright">Talk with us</p>
          <address className="mt-3 not-italic text-sm text-ivory/75 space-y-1">
            <p>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>{contact.region}</p>
            <p className="text-ivory/50 text-xs pt-2">
              This is a residential home. We do not operate a public storefront.
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-ivory/10 px-4 sm:px-6 py-4 text-xs text-ivory/45 flex flex-col sm:flex-row gap-2 sm:justify-between max-w-6xl mx-auto">
        <p>
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <Link href="/privacy" className="hover:text-gold-bright">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
