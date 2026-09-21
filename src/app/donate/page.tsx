import { DonateForm } from "@/components/forms/DonateForm";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
  description: "Support a residential group home where youth can grow in safety and hope.",
};

const uses = [
  { title: "The table", body: "Groceries, yeast, a birthday cake that wasn't an afterthought." },
  { title: "The room", body: "A bed, a lamp, a lock that works, a quilt that feels like someone chose it." },
  { title: "The grown-ups", body: "Staff who are paid enough to stay — the rarest gift in this work." },
  { title: "The next step", body: "IDs, bus passes, application fees, a first month when a youth leaves ready." },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Hope with a grocery list."
        lede="A monthly gift keeps the lights warm. A one-time gift stocks the pantry. Either one says: you are not doing this alone."
        image="/images/kitchen.jpg"
        imageAlt="A caregiver cooking in a sunlit community kitchen"
      />

      <Section className="grid lg:grid-cols-[1fr_1fr] gap-12">
        <Reveal>
          <p className="eyebrow">Where it goes</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl text-forest">
            Not overhead. A household.
          </h2>
          <ul className="mt-8 space-y-6">
            {uses.map((u) => (
              <li key={u.title}>
                <h3 className="font-display text-xl text-forest">{u.title}</h3>
                <p className="mt-1 text-muted">{u.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Tax receipts, EIN, and a formal giving page will be published when registration is
            complete. Dummy processor for now — your intent is recorded.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[2rem] border border-forest/10 bg-paper p-6 sm:p-8">
          <DonateForm />
        </Reveal>
      </Section>
    </>
  );
}
