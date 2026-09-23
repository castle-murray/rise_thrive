import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { mission, overview, values, vision } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Mission, vision, values, and leadership for Rise & Thrive Support Services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built on structure, compassion, and genuine care."
        lede="A new residential group home for youth ages 10–17, preparing for full operation and Virginia licensing."
        image="/images/about-hero-erdx1.webp"
        imageAlt="A teenager with a backpack leaving for school"
      />

      <Section className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="eyebrow text-gold-deep">Overview</p>
          <h2 className="font-display mt-3 text-3xl text-emerald">Who we are</h2>
          <div className="mt-4 h-px w-20 bg-gold" />
          <p className="mt-6 text-lg text-ink/80 leading-relaxed">{overview}</p>
        </Reveal>
        <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/who-we-are-icgug.webp"
            alt="Youth and a house parent preparing a snack together at home"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </Reveal>
      </Section>

      <section className="bg-emerald text-champagne">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10">
          <Reveal>
            <p className="eyebrow">Mission</p>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl">Why we exist</h2>
            <p className="mt-4 text-champagne/80 leading-relaxed">{mission}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow">Vision</p>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl">Where we are headed</h2>
            <p className="mt-4 text-champagne/80 leading-relaxed">{vision}</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <p className="eyebrow text-gold-deep">Values</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl text-emerald">Nine things we will not trade away.</h2>
        </Reveal>
        <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <StaggerItem key={v.title} className="border-t border-gold pt-4">
              <p className="text-xs tracking-[0.2em] uppercase text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-2 text-xl text-emerald">{v.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{v.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <section className="bg-champagne">
        <Section className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-gold-deep">Leadership</p>
            <h2 className="font-display mt-3 text-3xl text-emerald">Leadership is on Our people.</h2>
            <p className="mt-5 text-lg text-ink/80 leading-relaxed">
              Meet Latrecia Russell and Randall Jones — the owners who keep the house running —
              with roles and photos on Our people. House parents, clinicians, and partners will
              join them as the team grows.
            </p>
            <Button href="/staff" className="mt-8">
              Meet our people
            </Button>
          </Reveal>
        </Section>
      </section>
    </>
  );
}
