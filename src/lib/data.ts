export const profile = {
  name: "Abdul Wasay",
  role: "Full Stack Engineer",
  /** Role + primary stack, shown as the single line under the name. */
  headline: "Full Stack Engineer — TypeScript · Node.js · React · AWS",
  /** Hero thesis — one plain sentence about what gets built. */
  tagline:
    "I build SaaS and CRM platforms end to end — APIs, data pipelines, and the interfaces on top of them.",
  /** Stated explicitly: international employers need to know the terms up front. */
  availability: "Open to remote roles and contract work — available worldwide",
  /** Used verbatim as the meta description / search + LinkedIn preview text. */
  metaDescription:
    "Abdul Wasay — Full Stack Engineer in Lahore, Pakistan. I build SaaS and CRM platforms end to end with TypeScript, Node.js, React, PostgreSQL and AWS. Open to remote roles and contract work worldwide.",
  location: "Lahore, Punjab, Pakistan",
  email: "wasaya670@gmail.com",
  github: "https://github.com/wasaybuilds",
  linkedin: "https://www.linkedin.com/in/abdul-wasay01/",
  resumeUrl: "/Abdul_Wasay_Full_Stack_Engineer.pdf",
  resumeFilename: "Abdul_Wasay_Full_Stack_Engineer.pdf",
  about: [
    "I'm a full stack engineer in Lahore, Pakistan, working across the whole path of a product: Postgres schema and Node.js APIs at the back, React and Next.js at the front, and AWS in between. I started professionally in June 2023 and have spent that time on SaaS and CRM platforms that real businesses run their day on.",
    "Most of my work is the unglamorous middle: data migrations that have to not lose rows, background pipelines that have to resume where they failed, and interfaces that stay fast once the table has a hundred thousand records in it. I care more about a system being correct under load than about it being clever.",
    "I'm also finishing a CS degree at Lahore Garrison University, expected June 2026 — which mostly means I've written a lot of production code between lectures.",
  ],
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  current?: boolean;
  description?: string;
};

export const experiences: Experience[] = [
  {
    role: "Lead of Product Operations",
    company: "Hatzs Dimensions",
    companyUrl: "https://www.linkedin.com/company/hatzsdimensions",
    period: "Feb 2025 — Present",
    location: "Lahore, Pakistan",
    current: true,
  },
  {
    role: "Software Engineer",
    company: "Hatzs Dimensions",
    companyUrl: "https://www.linkedin.com/company/hatzsdimensions",
    period: "Oct 2023 — Jan 2025",
    location: "Lahore, Pakistan",
  },
  {
    role: "Frontend Engineer",
    company: "Hatzs Dimensions",
    companyUrl: "https://www.linkedin.com/company/hatzsdimensions",
    period: "Jun 2023 — Sep 2023",
    location: "Lahore, Pakistan",
  },
];

export const education = {
  school: "Lahore Garrison University",
  degree: "BS Computer Science — in progress",
  period: "Expected June 2026",
  location: "Lahore, Punjab, Pakistan",
};

export type Project = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  /**
   * The hard part, stated concretely. Optional so a project is never padded
   * with a plausible-sounding problem it didn't actually have — a card simply
   * omits the block until the real text exists.
   */
  problem?: string;
  /** Architecture-level account of what was built. Same rule as `problem`. */
  built?: string;
  role: string;
  /**
   * saas — production platforms shipped for a business.
   * side — projects I own and built myself.
   */
  category: "saas" | "side";
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
    highlights: [{ label: "Calls processed", value: "1,000+ / day" }],
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
      "Befer is a CRM for blue-collar service businesses — plumbers, electricians, cleaners — covering scheduling, invoicing, and customer follow-up. I was the founding engineer and built the product end to end, from the Postgres schema and API through to the web and mobile clients.",
    role: "Founding Engineer",
    category: "saas",
    kind: "live",
    image: "/projects/befer.png",
    tags: ["Next.js", "TypeScript", "AI Calling", "QuickBooks API", "Zapier"],
    highlights: [],
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
    tagline: "Turns a niche and a city into an enriched lead list",
    description:
      "Scrapes Google Maps by niche and city, enriches the decision makers behind each listing with an LLM, and drafts a three-step outreach sequence. The interesting part was the job layer — long scrapes run on Celery workers with per-user history, so a browser tab closing doesn't lose the run.",
    role: "Side project",
    category: "side",
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
      { label: "Status", value: "Work in progress" },
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
    tagline: "Renders any GitHub profile as a mechanical watch",
    description:
      "Maps commits, languages, and stars from the GitHub API onto an interactive 3D mechanical watch. Built with React Three Fiber; the work was mostly in keeping the scene at 60fps on a mid-range phone while every complication is driven by live data.",
    role: "Side project",
    category: "side",
    kind: "live",
    image: "/projects/horology-api.png",
    playSteps: ["Enter handle", "Wind spring", "Inspect 3D"],
    tags: ["Next.js", "React Three Fiber", "Three.js", "Zustand", "GitHub API"],
    highlights: [
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

/** Production platforms featured in the Work section. */
export const saasProjects = projects.filter((p) => p.category === "saas");

/** Projects I own and shipped myself. */
export const sideProjects = projects.filter((p) => p.category === "side");

/**
 * Stack — grouped by layer, listed plainly. No proficiency labels: a
 * self-assigned "Expert" badge tells a reader nothing they can verify, and
 * every item here is one I'm willing to be interviewed on.
 */
export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "REST API design", "Background job queues"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "Redis", "Schema design & migrations"],
  },
  {
    category: "Infra",
    items: ["AWS (Lambda, S3, Step Functions)", "Docker", "Linux", "CI/CD"],
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
