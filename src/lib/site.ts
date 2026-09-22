export const site = {
  name: "Rise & Thrive Support Services, LLC",
  shortName: "Rise & Thrive",
  legalName: "Rise & Thrive Support Services, LLC",
  tagline: "Nurturing Growth. Inspiring Hope.",
  descriptor: "Residential Group Home for Youth Ages 10–17",
  ages: "10–17",
  city: "Portsmouth, Virginia",
  summary:
    "A nurturing residential group home for youth ages 10–17. A safe place to grow, heal, and build confidence — through structure, compassion, and genuine care.",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/staff", label: "Our people" },
  { href: "/faq", label: "FAQ" },
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
    a: "We are at 2114 Nashville Ave., Portsmouth, VA 23701. Visits are by appointment — this is a residential home, not a walk-in storefront. Start on the Contact page to schedule.",
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

export const staff = [
  {
    name: "Latrecia Russell",
    role: "Owner / Executive Director · Youth Services Supervisor · Direct Care Staff",
    image: "/staff/latrecia-russell.jpeg",
  },
  {
    name: "Randall Jones",
    role: "Co-Owner / Food Manager · Direct Care Staff",
    image: "/staff/randall-jones-pvg8b.jpeg",
  },
  {
    name: "Bryce Russell",
    role: "Counselor",
    image: "/staff/bryce-russell.jpeg",
  },
  {
    name: "Kenneth Trotter",
    role: "Program Development Consultant",
    image: "/staff/kenneth-trotter.jpeg",
  },
] as const;

export const mission =
  "Our mission is to provide a safe, stable, and nurturing home where youth ages 10–17 can grow, heal, and build confidence. We are committed to creating a structured, supportive environment that empowers each young person to rise above challenges, develop positive life skills, and thrive in their future. Through compassion, consistency, and respect, we guide youth toward emotional well-being, personal development, and long-term success.";

export const vision =
  "A home in Portsmouth where every young person is safe enough to grow — and believed in enough to thrive.";

export const overview =
  "Rise & Thrive Support Services, LLC is a nurturing residential group home for youth ages 10–17. We provide a safe place where young people can grow, heal, and build confidence. Our home is built on structure, compassion, and genuine care — giving youth the stability they need to rise above challenges and thrive in their future. We are committed to a warm, welcoming environment that supports emotional well-being, personal development, and positive life skills. Our approach centers on respect, safety, and empowerment. We partner with families, agencies, and professionals who share our passion for helping young people succeed.";

export const values = [
  {
    title: "Safety First",
    body: "Physical, emotional, and psychological safety in every aspect of care.",
  },
  {
    title: "Compassionate Care",
    body: "We lead with empathy, kindness, and understanding.",
  },
  {
    title: "Consistency & Structure",
    body: "Predictable routines and clear expectations a young person can trust.",
  },
  {
    title: "Respect for Every Youth",
    body: "We honor each young person’s individuality and voice.",
  },
  {
    title: "Positive Youth Development",
    body: "We focus on strengths and encourage growth.",
  },
  {
    title: "Trauma-Informed Approach",
    body: "We respond with patience, understanding, and supportive strategies.",
  },
  {
    title: "Family & Community Collaboration",
    body: "We work alongside families and agencies.",
  },
  {
    title: "Integrity & Accountability",
    body: "We operate with honesty and professionalism.",
  },
  {
    title: "Empowerment & Hope",
    body: "We help youth believe in their potential and their future.",
  },
] as const;

export const goals = [
  "Emotional stability and healthy coping",
  "Academic support and school engagement",
  "Life skills and daily living",
  "Positive behavior and accountability",
  "Healthy social connections",
  "Safety and a predictable environment",
  "Future readiness and goal-setting",
  "Family and community collaboration",
  "Healing, strengths, and confidence",
] as const;

export const programs = [
  {
    slug: "residential",
    title: "Residential care",
    image: "/images/youth-porch.jpg",
    body: "A live-in, family-style home for youth ages 10–17. A bedroom of their own, a shared table, and 24-hour care.",
  },
  {
    slug: "daily",
    title: "Daily structure",
    image: "/images/youth-living.jpg",
    body: "School mornings. Afternoon downtime. Shared dinner. A bedtime they can count on.",
  },
  {
    slug: "emotional",
    title: "Emotional support",
    image: "/images/youth-homework.jpg",
    body: "Trauma-informed adults and room for a young person to name feelings without being punished for having them.",
  },
  {
    slug: "academic",
    title: "Life skills",
    image: "/images/youth-cooking.jpg",
    body: "Cooking, laundry, calendars, asking for help. Practice now for the next home.",
  },
] as const;

export const daily = [
  { time: "Morning", body: "Wake, hygiene, breakfast, backpacks, a calm send-off to school." },
  { time: "School day", body: "Attendance, advocacy, and check-ins. Tutoring when it is needed." },
  { time: "Afternoon", body: "Snack, chores, recreation, and skill-building — cooking, communication, community." },
  { time: "Evening", body: "Family-style dinner, homework, downtime, and a predictable bedtime." },
] as const;


export const houseSkills = [
  {
    title: "Cooking & meal prep",
    body: "Chopping, following a recipe, setting a table — and eating together when the work is done.",
  },
  {
    title: "Laundry & household care",
    body: "Sorting loads, making a bed, wiping a counter. The ordinary work of keeping a house kind.",
  },
  {
    title: "School & homework habits",
    body: "A quiet desk, a backpack ready by the door, and adults who check in when school gets hard.",
  },
  {
    title: "Calendars & time",
    body: "Planning a morning, catching a bus, knowing what comes next without surprise.",
  },
  {
    title: "Communication & asking for help",
    body: "Saying what you need out loud — and practicing until it is not shameful.",
  },
  {
    title: "Recreation & healthy downtime",
    body: "A backyard game, a walk, a quiet corner. Rest that is not a void.",
  },
] as const;


export const admission = [
  {
    title: "Ages served",
    body: "Youth ages 10–17 who need a safe, structured residential home.",
  },
  {
    title: "How placement starts",
    body: "Referrals from families, case workers, and partner agencies. We follow up honestly about openings and fit.",
  },
  {
    title: "Licensing",
    body: "We are a new program preparing for full operation and state licensing in Virginia. Criteria will be published in full once licensing is complete.",
  },
  {
    title: "What we look for",
    body: "A young person who can be kept safe in a group-home setting, with a plan we can honor. We will never pretend we can take someone we cannot keep safe.",
  },
] as const;

export const safety = [
  "24-hour awake or on-site supervision according to licensing standards",
  "Trauma-informed de-escalation — no humiliation, no fear as a tool",
  "Medication, visitors, and off-site movement logged and supervised",
  "Fire, emergency, and missing-from-care protocols posted and practiced",
  "Confidentiality for every young person’s story",
] as const;

export function publicContact() {
  return {
    phone: process.env.NEXT_PUBLIC_PHONE ?? "757.581.9665",
    email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@riseandthrivegh.info",
    addressLine1: process.env.NEXT_PUBLIC_ADDRESS_LINE1 ?? "2114 Nashville Ave.",
    addressLine2: process.env.NEXT_PUBLIC_ADDRESS_LINE2 ?? "Portsmouth, VA 23701",
    hours: process.env.NEXT_PUBLIC_HOURS ?? "Office hours by appointment",
  };
}

export const mapQuery = encodeURIComponent("2114 Nashville Ave., Portsmouth, VA 23701");
