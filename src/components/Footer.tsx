import { LogoMark } from "@/components/Logo";
import { nav, publicContact, site } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  const contact = publicContact();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-cream mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid place-items-center size-12 rounded-full border border-cream/25">
              <LogoMark className="size-9" tone="cream" />
            </span>
            <span>
              <span className="font-display block text-xl">{site.shortName}</span>
              <span className="text-[0.65rem] tracking-[0.18em] uppercase text-cream/60">
                Support Services, LLC
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-cream/75 leading-relaxed">
            {site.tagline} {site.descriptor}.
          </p>
        </div>

        <div>
          <p className="eyebrow text-sage">Visit</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-sage">Talk with us</p>
          <address className="mt-3 not-italic text-sm text-cream/80 space-y-2">
            <p>
              <a className="hover:text-cream" href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>
                {contact.phone}
              </a>
            </p>
            <p>
              <a className="hover:text-cream" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <p>
              {contact.addressLine1}
              <br />
              {contact.addressLine2}
            </p>
            <p>{contact.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-cream/55">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-cream">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
