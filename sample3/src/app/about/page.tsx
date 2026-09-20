import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { mission, overview, values } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Structure, compassion, and genuine care."
        lede="A new residential group home for youth ages 10–17, preparing for full operation and Virginia licensing."
        image="/images/youth-school.jpg"
        imageAlt="A teenager with a backpack leaving for school"
      />
      <Section className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="eyebrow">Overview</p>
          <h2 className="font-display mt-3 text-3xl text-espresso">Who we are</h2>
          <p className="mt-5 text-lg text-ink/80 leading-relaxed">{overview}</p>
        </Reveal>
        <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem]">
          <Image src="/images/youth-garden.jpg" alt="Youth and a staff member planting flowers together" fill className="object-cover" sizes="50vw" />
        </Reveal>
      </Section>
      <section className="bg-champagne">
        <Section>
          <Reveal>
            <p className="eyebrow">Mission</p>
            <h2 className="font-display mt-3 text-3xl text-espresso">Why we exist</h2>
            <p className="mt-5 max-w-3xl text-lg text-ink/80 leading-relaxed">{mission}</p>
          </Reveal>
        </Section>
      </section>
      <Section>
        <Reveal>
          <p className="eyebrow">Values</p>
          <h2 className="font-display mt-3 text-3xl text-espresso">What we will not trade away.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          {values.map((v) => (
            <div key={v.title} className="border-t border-gold pt-4">
              <h3 className="font-display text-xl text-espresso">{v.title}</h3>
              <p className="mt-2 text-muted">{v.body}</p>
            </div>
          ))}
        </div>
        <Button href="/staff" className="mt-10">
          Meet our people
        </Button>
      </Section>
    </>
  );
}
