import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { site, staff } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our people",
  description: `Meet the people behind ${site.shortName}.`,
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="The adults in the doorway."
        lede="House leadership who stay — for the meals, the hard talks, and the ordinary Tuesdays."
        image="/images/youth-living.jpg"
        imageAlt="Youth spending time together in the living room"
      />
      <Section>
        <Reveal>
          <p className="eyebrow text-gold-deep">Leadership</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl text-emerald max-w-2xl">
            Names you can put with the house.
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {staff.map((person) => (
            <StaggerItem key={person.name}>
              <div className="relative aspect-[3/4] overflow-hidden bg-champagne">
                <Image
                  src={person.image}
                  alt={`Portrait of ${person.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <h2 className="font-display mt-4 text-2xl sm:text-3xl text-emerald">
                {person.name}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                {person.role}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="pt-0">
        <Reveal className="bg-emerald text-champagne p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="eyebrow text-gold-bright">Join the house</p>
            <h2 className="font-display mt-2 text-3xl max-w-lg">
              Building a team takes more than two.
            </h2>
            <p className="mt-3 text-champagne/80 max-w-md leading-relaxed">
              If you might belong here — house parents, clinicians, mentors — we want to hear from
              you.
            </p>
          </div>
          <div className="shrink-0" >
            <Button href="/contact" size="lg">
              Talk with us
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
