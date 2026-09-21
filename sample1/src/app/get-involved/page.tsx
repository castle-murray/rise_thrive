import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get involved",
  description: "Volunteer, partner, or bring a skill to Rise & Thrive.",
};

const ways = [
  {
    title: "Volunteer",
    body: "Mentoring, tutoring, kitchen help, yard work, rides, and the quiet jobs that keep a house kind.",
  },
  {
    title: "In-kind gifts",
    body: "Linens, pantry staples, transit cards, backpacks, hygiene kits. We'll publish a live wish list once the house is furnished.",
  },
  {
    title: "Professional partners",
    body: "Clinicians, educators, attorneys, barbers, and tradespeople who can show up on a schedule a young person can trust.",
  },
  {
    title: "Congregations & neighbors",
    body: "Meal trains, birthday people, holiday tables. A home needs a zip code that cares.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="A house is built by people who keep coming back."
        lede="You don't need a clinical license to matter here. You need consistency, kindness, and a little time."
        image="/images/garden.jpg"
        imageAlt="Volunteers planting a garden together at sunset"
      >
        <Button href="/donate" variant="terracotta">
          Or give monthly
        </Button>
      </PageHero>

      <Section>
        <Stagger className="grid sm:grid-cols-2 gap-6">
          {ways.map((w) => (
            <StaggerItem
              key={w.title}
              className="rounded-[1.6rem] border border-forest/10 bg-paper p-6 sm:p-8"
            >
              <h2 className="font-display text-2xl text-forest">{w.title}</h2>
              <p className="mt-3 text-muted leading-relaxed">{w.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="grid lg:grid-cols-2 gap-10 items-center pt-0">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/picnic.jpg"
            alt="A picnic table set for a shared meal under trees"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.08} className="rounded-[2rem] border border-forest/10 bg-paper p-6 sm:p-8">
          <InquiryForm kind="volunteer" />
        </Reveal>
      </Section>
    </>
  );
}
