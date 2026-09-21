export const site = {
  name: "Rise & Thrive Support Services, LLC",
  shortName: "Rise & Thrive",
  legalName: "Rise & Thrive Support Services, LLC",
  tagline: "Nurturing Growth, Inspiring Hope.",
  descriptor: "A Residential Group Home for Youth",
  summary:
    "A warm, family-style home where youth can feel safe, grow at their own pace, and practice the skills of a thriving life.",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/get-support", label: "Get support" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/donate", label: "Give" },
  { href: "/contact", label: "Contact" },
] as const;

export const values = [
  {
    title: "Safety first",
    body: "A predictable home, kind adults, and clear boundaries. Safety is the soil everything else grows in.",
  },
  {
    title: "Dignity always",
    body: "Every young person is more than a circumstance. We speak with respect, and we listen before we advise.",
  },
  {
    title: "Belonging",
    body: "Family-style meals, shared chores, quiet corners, and the ordinary rhythms of a real home.",
  },
  {
    title: "Growth",
    body: "Life skills, school support, and room to try, fail, and try again — with someone in the doorway.",
  },
  {
    title: "Hope you can hold",
    body: "Not slogans. Small, repeatable proofs that tomorrow can be different from yesterday.",
  },
] as const;

export const programs = [
  {
    slug: "residential",
    title: "Residential living",
    image: "/images/bedroom.jpg",
    summary:
      "A real bedroom. A shared table. Adults who stay. Overnight care in a home, not an institution.",
    details:
      "Youth live in a family-style group home with 24-hour supervision, nutritious meals, and a daily rhythm that feels like life — not a program. House rules are clear, fair, and taught with patience.",
  },
  {
    slug: "life-skills",
    title: "Daily life & life skills",
    image: "/images/kitchen.jpg",
    summary:
      "Cooking, laundry, budgets, calendars, and the unglamorous work of becoming independent.",
    details:
      "We practice the skills that make adulthood possible: planning a meal, keeping a room, catching a bus, filling out a form, asking for help without shame.",
  },
  {
    slug: "education",
    title: "Education support",
    image: "/images/living-room.jpg",
    summary:
      "Homework help, school advocacy, and a quiet place to think.",
    details:
      "We partner with schools and case workers so education doesn't fall through the cracks. Tutoring, transportation coordination, and a desk of one's own.",
  },
  {
    slug: "wellness",
    title: "Wellness & counseling",
    image: "/images/counselor.jpg",
    summary:
      "A calm room, a listening adult, and care that meets a young person where they are.",
    details:
      "Emotional wellness is part of the home, not an add-on. We connect youth with counseling, teach regulation skills, and keep the house itself as a therapeutic environment.",
  },
  {
    slug: "family",
    title: "Family engagement",
    image: "/images/dining.jpg",
    summary:
      "When it is safe and wanted, we help keep the thread between a young person and their people.",
    details:
      "Reunification is not always possible. Connection often is. We work with families, mentors, and natural supports at a pace that protects the youth first.",
  },
  {
    slug: "transition",
    title: "Transition to independence",
    image: "/images/path-sunrise.jpg",
    summary:
      "A plan for the next home, the next school, the next job — written together, practiced here.",
    details:
      "Aging out should not mean falling off a cliff. We build step-down plans, document IDs and records, and stay in the picture through the first stretch of independence.",
  },
] as const;

export const faqs = [
  {
    q: "Who do you serve?",
    a: "Youth who need a safe, stable residential home — including young people experiencing housing instability, family crisis, or a need for structured, supportive care. Exact eligibility will be confirmed with licensing and referral partners.",
  },
  {
    q: "Is this a shelter or a group home?",
    a: "Rise & Thrive is a residential group home: a live-in, family-style setting with 24-hour care. It is a home first. Shelter is what a home provides.",
  },
  {
    q: "How do referrals work?",
    a: "Families, case workers, and partner agencies can start with the Get Support form. We'll follow up with next steps, required documents, and whether we have an opening.",
  },
  {
    q: "Can I visit?",
    a: "Yes — by appointment. A home has to stay a home, so we don't run drop-in tours. Reach out and we'll find a time.",
  },
  {
    q: "How can I help if I'm not a clinician?",
    a: "Meals, mentorship, yard work, school supplies, and monthly giving all keep the lights warm. Start on Get Involved.",
  },
] as const;

export function publicContact() {
  return {
    phone: process.env.NEXT_PUBLIC_PHONE ?? "(555) 014-7743",
    email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@riseandthrive.example",
    addressLine1: process.env.NEXT_PUBLIC_ADDRESS_LINE1 ?? "123 Hope Lane",
    addressLine2: process.env.NEXT_PUBLIC_ADDRESS_LINE2 ?? "Your City, ST 00000",
    hours: process.env.NEXT_PUBLIC_HOURS ?? "Office hours by appointment",
  };
}
