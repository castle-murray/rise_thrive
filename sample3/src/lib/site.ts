export const site = {
  name: "Rise & Thrive Support Services, LLC",
  shortName: "Rise & Thrive",
  legalName: "Rise & Thrive Support Services, LLC",
  tagline: "Nurturing Growth. Inspiring Hope.",
  descriptor: "Residential Group Home for Youth Ages 10–17",
  ages: "10–17",
  region: "Portsmouth, Virginia",
  summary:
    "A nurturing residential group home for youth ages 10–17. A safe place to grow, heal, and build confidence — through structure, compassion, and genuine care.",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/staff", label: "Our people" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const faqs = [
  {
    q: "Who do you serve?",
    a: "Youth ages 10–17 who need a safe, structured residential home — including young people facing housing instability, family crisis, or a need for 24-hour support. Exact eligibility will match Virginia licensing and referral partners.",
  },
  {
    q: "Is this a shelter or a group home?",
    a: "Rise & Thrive is a residential group home: a live-in, family-style setting. Shelter is what a home provides. We are not a drop-in or overnight-only program.",
  },
  {
    q: "How does a young person get placed?",
    a: "Families, case workers, and partner agencies start with the contact form or a phone call. We follow up about openings, required documents, and whether we are the right fit. We will never pretend we can take someone we cannot keep safe.",
  },
  {
    q: "Can I visit?",
    a: "Yes — by appointment. This is a residential home, not a storefront. We do not run drop-in tours.",
  },
  {
    q: "Where is the home?",
    a: "We serve youth in the Portsmouth, Virginia area. The street address is not published. A group home is still someone's house. We share the location when a visit is scheduled.",
  },
  {
    q: "Are you licensed?",
    a: "We are a new program preparing for full operation and state licensing in Virginia. Capacity, ages, and referral pathways will be published in full once licensing is complete.",
  },
  {
    q: "What about a crisis right now?",
    a: "This is not a crisis line. If someone is in immediate danger, call 911. For a mental health crisis, call or text 988.",
  },
  {
    q: "How can I help if I am not a clinician?",
    a: "Write to us. Meals, mentoring, school supplies, and consistent volunteers all keep a house kind. We will tell you what we actually need.",
  },
] as const;

export const mission =
  "Our mission is to provide a safe, stable, and nurturing home where youth ages 10–17 can grow, heal, and build confidence. We are committed to creating a structured, supportive environment that empowers each young person to rise above challenges, develop positive life skills, and thrive in their future. Through compassion, consistency, and respect, we guide youth toward emotional well-being, personal development, and long-term success.";

export const overview =
  "Rise & Thrive Support Services, LLC is a nurturing residential group home for youth ages 10–17. We provide a safe place where young people can grow, heal, and build confidence. Our home is built on structure, compassion, and genuine care. We partner with families, agencies, and professionals who share our passion for helping young people succeed.";

export const values = [
  { title: "Safety First", body: "Physical, emotional, and psychological safety in every aspect of care." },
  { title: "Compassionate Care", body: "We lead with empathy, kindness, and understanding." },
  { title: "Consistency & Structure", body: "Predictable routines and clear expectations a young person can trust." },
  { title: "Respect for Every Youth", body: "We honor each young person’s individuality and voice." },
  { title: "Positive Youth Development", body: "We focus on strengths and encourage growth." },
  { title: "Trauma-Informed Approach", body: "We respond with patience, understanding, and supportive strategies." },
] as const;

export const staff = [
  {
    name: "Imani Brooks",
    role: "Executive Director",
    image: "/images/staff/imani.jpg",
    bio: "Placeholder. Imani will hold the vision, the license, and the front door.",
  },
  {
    name: "Marcus Hale",
    role: "Residential Manager",
    image: "/images/staff/marcus.jpg",
    bio: "Placeholder. The adult who keeps the house on time and the nights quiet.",
  },
  {
    name: "Keisha Grant",
    role: "Counselor",
    image: "/images/staff/keisha.jpg",
    bio: "Placeholder. Trauma-informed listening, one conversation at a time.",
  },
  {
    name: "Jordan Ellis",
    role: "Youth Development Specialist",
    image: "/images/staff/jordan.jpg",
    bio: "Placeholder. Life skills, school runs, and the person who shows up for the game.",
  },
  {
    name: "Dorothy Gaines",
    role: "Home Life & Kitchen",
    image: "/images/staff/dorothy.jpg",
    bio: "Placeholder. Meals, birthdays, and the knowledge that somebody cooked on purpose.",
  },
  {
    name: "Priya Shah",
    role: "Education Liaison",
    image: "/images/staff/priya.jpg",
    bio: "Placeholder. School advocacy, tutors, and a desk of one’s own.",
  },
] as const;

export const programs = [
  {
    title: "Residential care",
    image: "/images/youth-porch.jpg",
    body: "A live-in, family-style home for youth ages 10–17. A bedroom of their own, a shared table, and 24-hour care.",
  },
  {
    title: "Daily structure",
    image: "/images/youth-living.jpg",
    body: "School mornings. Afternoon downtime. Shared dinner. A bedtime they can count on.",
  },
  {
    title: "Emotional support",
    image: "/images/youth-homework.jpg",
    body: "Trauma-informed adults and room for a young person to name feelings without being punished for having them.",
  },
  {
    title: "Life skills",
    image: "/images/youth-cooking.jpg",
    body: "Cooking, laundry, calendars, asking for help. Practice now for the next home.",
  },
] as const;

export function publicContact() {
  return {
    phone: process.env.NEXT_PUBLIC_PHONE ?? "(555) 014-7743",
    email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@riseandthrive.example",
    hours: process.env.NEXT_PUBLIC_HOURS ?? "By appointment",
    region: process.env.NEXT_PUBLIC_REGION ?? "Portsmouth, Virginia",
  };
}
