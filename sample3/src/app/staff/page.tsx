import { PageHero, Section } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { staff } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our people",
  description: "Placeholder staff portraits for Rise & Thrive Support Services.",
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="The team around them."
        lede="Names and photos here are placeholders until the licensed team is confirmed. Staff exist so young people can have a house that holds."
        image="/images/youth-cooking.jpg"
        imageAlt="Youth cooking with a house parent in the kitchen"
      />
      <Section>
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((s) => (
            <StaggerItem key={s.name}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem]">
                <Image
                  src={s.image}
                  alt={`${s.name}, ${s.role} (placeholder)`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <h2 className="font-display mt-4 text-2xl text-espresso">{s.name}</h2>
              <p className="text-gold-deep text-sm tracking-wide uppercase">{s.role}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">{s.bio}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 max-w-2xl">
          <p className="text-sm text-muted">
            These portraits are generated stand-ins — not the real team. When hiring is complete we
            will replace every image and bio with consent and accuracy.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
