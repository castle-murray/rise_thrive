import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { site, staff } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Staff",
  description: `Meet the people behind ${site.shortName}.`,
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="The adults in the doorway."
        lede="House leadership who stay — for the meals, the hard talks, and the ordinary Tuesdays."
        image="/images/living-room.jpg"
        imageAlt="A warm living room with afternoon light"
        compact
      />

      <Section>
        <Reveal>
          <p className="eyebrow">Leadership</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl text-forest max-w-2xl">
            Names you can put with the house.
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-10">
          {staff.map((person) => (
            <StaggerItem
              key={person.name}
              className="rounded-[1.8rem] border border-forest/10 bg-paper overflow-hidden"
            >
              <div className="relative aspect-[4/5] bg-cream-deep">
                <Image
                  src={person.photo}
                  alt={person.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl sm:text-3xl text-forest">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                  {person.roles}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="pt-0">
        <Reveal className="rounded-[2rem] bg-forest text-cream p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="eyebrow text-gold">Join the house</p>
            <h2 className="font-display mt-2 text-3xl max-w-lg">
              Building a team takes more than two.
            </h2>
            <p className="mt-3 text-cream/80 max-w-md leading-relaxed">
              If you might belong here — house parents, clinicians, mentors —
              we want to hear from you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button href="/contact" variant="cream">
              Talk with us
            </Button>
            <Button href="/get-involved" variant="ghost" className="text-cream border-cream/30">
              Get involved
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
