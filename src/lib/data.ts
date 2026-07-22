export const profile = {
  name: "Abdul Wasay",
  role: "Senior Full Stack Engineer",
  /**
   * Hero thesis — one sentence that states the story, not a stack dump.
   * Stack still shows in the ticker below so the first read stays emotional.
   */
  tagline:
    "I build AI products people actually feel — then stick around when the bugs try to ruin the vibe.",
  location: "Lahore, Punjab, Pakistan",
  email: "wasaya670@gmail.com",
  github: "https://github.com/wasaybuilds",
  linkedin: "https://www.linkedin.com/in/abdul-wasay01/",
  resumeUrl: "/Abdul_Wasay_Full_Stack_Engineer.pdf",
  resumeFilename: "Abdul_Wasay_Full_Stack_Engineer.pdf",
  about: [
    "Wasay is a Senior Full Stack Engineer who treats every product like it has his name on the door — 3+ years shipping production SaaS from React/Next.js frontends through Node.js APIs and AWS infrastructure. Tickets are fine. Ownership is the point. PowerPoints are… tolerated.",
    "He stays close to the code and closer to the outcome: using AI to move faster, reviewing architecture so standards hold, and mentoring so the whole team levels up. Passion without craft is noise — he insists on both. Also coffee. Mostly coffee.",
    "Obsessed with performance and correctness — tight render cycles, efficient pipelines, Linux deployments that don't blink at 2am. Whether it's a fast-moving SaaS or a system that has to be right at 1,000 AI calls a day, he ships work that feels extraordinary because the results refuse to be average.",
  ],
};

export const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Client Sites Built", value: "8+" },
  { label: "Products Built", value: "4+" },
  { label: "Certifications", value: "10+" },
];

/**
 * Proof metrics — large, headline-worthy numbers shown in the Proof section.
 * Each item includes a value (displayed huge), a label, and an optional note.
 */
export const proof = [
  { value: "3+", label: "Years shipping", note: "Still not bored" },
  { value: "4+", label: "Products live", note: "None are 'almost done'" },
  { value: "370%", label: "ROI on Befer", note: "Math did the flexing" },
  { value: "1,000+", label: "AI calls / day", note: "DealerIQ peak hour" },
];

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  current?: boolean;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Lead of Product Operations",
    company: "Hatzs Dimensions",
    companyUrl: "https://www.linkedin.com/company/hatzsdimensions",
    period: "Jun 2025 — Present",
    location: "Lahore, Pakistan",
    current: true,
    description:
      "Leading product operations across squads — strategy, tooling, and delivery — with the same ownership that built the products.",
  },
  {
    role: "Full Stack Engineer",
    company: "Hatzs Dimensions",
    companyUrl: "https://www.linkedin.com/company/hatzsdimensions",
    period: "Sep 2023 — Jun 2025",
    location: "Lahore, Pakistan",
    description:
      "Founding engineer on Befer. Shipped SaaS and CMS products end to end when average wasn't an option.",
  },
];

export const education = {
  school: "Lahore Garrison University",
  degree: "Bachelor's Degree",
  period: "2022 — 2026",
  location: "Lahore, Punjab, Pakistan",
};

export type Project = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  role: string;
  /**
   * saas — production AI products (DealerIQ, Befer).
   * lab — personal / for-fun experiments shown as interactive playgrounds.
   */
  category: "saas" | "lab";
  /** Live products use a screenshot; open-source repos use a code-card preview instead. */
  kind?: "live" | "repo";
  image?: string;
  /** Shown in the repo preview (e.g. wasaybuilds/intent-engine). */
  repoFullName?: string;
  /** Language breakdown for the repo card (percentages should sum ~100). */
  languages?: { name: string; percent: number; color: string }[];
  /** Short interactive-step labels for lab project playgrounds. */
  playSteps?: string[];
  tags: string[];
  highlights: { label: string; value: string }[];
  features: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "dealeriq",
    name: "DealerIQ",
    url: "https://www.dealeriq.ai",
    tagline: "AI Sales Assistant & CRM for Dealerships",
    description:
      "DealerIQ is an all-in-one AI CRM built for modern car dealerships — unifying AI-driven calls, texts, and shared memory across a live-agent workflow so no lead ever falls through the cracks. It ships with pre-built AI roles (Receptionist, Sales, Service, Buying Agent) that handle inbound and outbound conversations end-to-end.",
    role: "Full Stack Engineering",
    category: "saas",
    kind: "live",
    image: "/projects/dealeriq.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Agents", "CRM"],
    highlights: [
      { label: "Calls processed", value: "1,000+ / day" },
      { label: "Appointments lift", value: "+42%" },
      { label: "Support agents deployed", value: "1,000+" },
    ],
    features: [
      "Multilingual pre-built AI agents for sales, service, buying & reception",
      "Unified lead inbox consolidating every channel into one dashboard",
      "Automated SMS, email & voice follow-up marketing flows",
      "In-browser face-to-face video calls & smart eSign built into the CRM",
    ],
    accent: "from-sky-400 to-blue-600",
  },
  {
    slug: "befer",
    name: "Befer",
    url: "https://befer.co",
    tagline: "AI CRM for Blue-Collar Service Businesses",
    description:
      "Befer is a cutting-edge CRM built for blue-collar business owners — plumbers, electricians, cleaners, and more — featuring AI-driven insights, an AI calling agent that turns calls into sales, image recognition, and SMS automation. As the pioneer engineer, I designed and built the entire product end to end, from frontend to backend.",
    role: "Pioneer Full Stack Engineer — built the entire product",
    category: "saas",
    kind: "live",
    image: "/projects/befer.png",
    tags: ["Next.js", "TypeScript", "AI Calling", "QuickBooks API", "Zapier"],
    highlights: [
      { label: "Return on investment", value: "370%" },
      { label: "Orders", value: "2x" },
      { label: "Revenue increase reported", value: "+40%" },
    ],
    features: [
      "AI calling agent that qualifies leads and books jobs automatically",
      "Workforce management with live job tracking & productivity insights",
      "QuickBooks, Zapier & Google Business Profile integrations",
      "Native mobile app for scheduling, invoicing & instant payments",
    ],
    accent: "from-fuchsia-400 to-violet-600",
  },
  {
    slug: "intent-engine",
    name: "Intent Engine",
    url: "https://github.com/wasaybuilds/intent-engine",
    tagline: "Weekend experiment — niche + city → leads (sleep optional)",
    description:
      "A for-fun full-stack lab: scrape Google Maps by niche and city, enrich decision makers with an LLM, and spit out 3-step cold email sequences. Built to learn Playwright stealth, Celery jobs, and agentic outreach — not as a SaaS product.",
    role: "Side project — open source",
    category: "lab",
    kind: "repo",
    repoFullName: "wasaybuilds/intent-engine",
    languages: [
      { name: "Python", percent: 65, color: "#3572A5" },
      { name: "TypeScript", percent: 32, color: "#3178C6" },
      { name: "CSS", percent: 3, color: "#563D7C" },
    ],
    playSteps: ["Maps scrape", "LLM enrich", "AI emails"],
    tags: ["FastAPI", "Next.js", "Playwright", "Celery", "LLM"],
    highlights: [
      { label: "License", value: "MIT" },
      { label: "Vibe", value: "For fun" },
      { label: "Outreach", value: "3-step AI" },
    ],
    features: [
      "Google Maps discovery via Playwright with proxy rotation and stealth evasion",
      "LLM extraction of CEOs, titles, tech stack, and intent signals from public pages",
      "Background scrape jobs on Celery + Redis with Clerk auth and per-user history",
      "CSV export and CRM webhook delivery for Zapier, Make, and custom stacks",
    ],
    accent: "from-emerald-400 to-teal-600",
  },
  {
    slug: "horology-api",
    name: "Horology API",
    url: "https://horology-api.vercel.app",
    tagline: "Wind a 3D watch from any GitHub profile — because why not",
    description:
      "A pure craft project: map commits, languages, and stars onto a living mechanical watch in the browser. Drag to inspect, toggle lume, export a PNG — built with React Three Fiber just to see how far a weird idea could go.",
    role: "Side project — interactive demo",
    category: "lab",
    kind: "live",
    image: "/projects/horology-api.png",
    playSteps: ["Enter handle", "Wind spring", "Inspect 3D"],
    tags: ["Next.js", "React Three Fiber", "Three.js", "Zustand", "GitHub API"],
    highlights: [
      { label: "Visual", value: "3D mechanical" },
      { label: "Vibe", value: "For fun" },
      { label: "Demo", value: "Live" },
    ],
    features: [
      "GitHub stats mapped to balance beat, power reserve, caliber code, and rank",
      "Interactive 3D watch with drag-to-inspect, lume toggle, PNG export, and share",
      "Command bar UX with real-time winding animation and horologist rank system",
      "In-app docs covering the full pipeline from API fetch to complication mapping",
    ],
    accent: "from-amber-400 to-orange-600",
  },
];

/** Production AI SaaS products featured in the Work section. */
export const saasProjects = projects.filter((p) => p.category === "saas");

/** For-fun / lab experiments with interactive playground cards. */
export const labProjects = projects.filter((p) => p.category === "lab");

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Sep 2024",
    url: "https://hackerrank.com/certificates/42d500161f94",
  },
  {
    name: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "May 2024",
    url: "https://hackerrank.com/certificates/e0fba9011a38",
  },
  { name: "Layouts Level 1 Certification", issuer: "Webflow", date: "May 2024" },
  {
    name: "React Basics",
    issuer: "Meta",
    date: "May 2024",
    url: "https://coursera.org/account/accomplishments/records/6BERY9M3RUWA",
  },
  {
    name: "Version Control",
    issuer: "Meta",
    date: "May 2024",
    url: "https://coursera.org/account/accomplishments/records/RY7UNM4GEQKT",
  },
  { name: "Webflow 101 Certification Exam", issuer: "Webflow", date: "May 2024" },
  {
    name: "Programming with JavaScript",
    issuer: "Meta",
    date: "Mar 2024",
    url: "https://coursera.org/account/accomplishments/records/SMAK7SLAL8VM",
  },
  { name: "CMS Certification Exam", issuer: "Webflow", date: "Feb 2024" },
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "Feb 2024",
    url: "https://coursera.org/account/accomplishments/records/2FNR4NMW5XNS",
  },
  {
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "2024",
    url: "https://hackerrank.com/certificates/8b4665b4453a",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Build",
    items: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
  },
  {
    category: "Ship",
    items: ["AWS", "Docker", "Linux", "CI/CD", "PostgreSQL"],
  },
  {
    category: "Polish",
    items: ["Tailwind", "Framer Motion", "Webflow", "Shopify", "WordPress"],
  },
  {
    category: "Lead",
    items: ["API design", "Code reviews", "Mentoring", "AI-assisted dev"],
  },
];

/**
 * CMS / client builds — sites shipped on WordPress, Shopify, or Webflow
 * as part of agency or freelance work.
 */
export type ClientSite = {
  name: string;
  url: string;
  category: string;
  platform: "WordPress" | "Shopify" | "Webflow";
};

export const clientWork: ClientSite[] = [
  {
    name: "AmityVet",
    url: "https://amityvet.com",
    category: "Veterinary Clinic",
    platform: "WordPress",
  },
  {
    name: "Die By Fashion Italy",
    url: "https://diebyfashionitaly.com",
    category: "Fashion & Apparel",
    platform: "Shopify",
  },
  {
    name: "Right On Detail",
    url: "https://www.rightondetail.com",
    category: "Auto Detailing",
    platform: "Webflow",
  },
  {
    name: "DJ Cutt Entertainment",
    url: "https://www.djcuttentertainment.com",
    category: "Entertainment & Events",
    platform: "Webflow",
  },
  {
    name: "The Car Trackers",
    url: "https://thecartrackers.com",
    category: "Automotive Services",
    platform: "WordPress",
  },
  {
    name: "Ohh.me",
    url: "https://ohh.me",
    category: "Creative Portfolio",
    platform: "Webflow",
  },
  {
    name: "The True Driven",
    url: "https://www.thetruedriven.com",
    category: "Automotive Lifestyle",
    platform: "WordPress",
  },
  {
    name: "Outback Accounting",
    url: "https://outbackaccounting.com.au",
    category: "Accounting Firm",
    platform: "Webflow",
  },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];
