import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { publicContact } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write, call, or visit Rise & Thrive Support Services.",
};

export default function ContactPage() {
  const contact = publicContact();
  return (
    <>
      <PageHero
        compact
        eyebrow="Contact"
        title="We're here. Start anywhere."
        lede="Office hours by appointment. The house stays a house — we don't do drop-in tours."
        image="/images/counselor.jpg"
        imageAlt="A counselor sitting in a sunlit office, listening"
        imagePosition="object-[center_20%]"
      />

      <Section className="grid lg:grid-cols-2 gap-12">
        <Reveal>
          <p className="eyebrow">Find us</p>
          <h2 className="font-display mt-3 text-3xl text-forest">The door is a phone call away.</h2>
          <address className="mt-8 not-italic space-y-6">
            <p>
              <span className="block text-sm text-muted">Phone</span>
              <a className="text-xl text-forest" href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>
                {contact.phone}
              </a>
            </p>
            <p>
              <span className="block text-sm text-muted">Email</span>
              <a className="text-xl text-forest break-all" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <p>
              <span className="block text-sm text-muted">Address</span>
              <span className="text-xl text-forest">
                {contact.addressLine1}
                <br />
                {contact.addressLine2}
              </span>
            </p>
            <p>
              <span className="block text-sm text-muted">Hours</span>
              <span className="text-xl text-forest">{contact.hours}</span>
            </p>
          </address>
          <div className="mt-10 overflow-hidden rounded-[1.6rem] border border-forest/10 bg-cream-deep min-h-52 grid place-items-center text-center p-8">
            <p className="text-muted max-w-xs">
              Map embed will go here once the address is confirmed. Pin a place that deserves a
              porch.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[2rem] border border-forest/10 bg-paper p-6 sm:p-8">
          <InquiryForm kind="contact" />
        </Reveal>
      </Section>
    </>
  );
}
