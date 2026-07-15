export const profile = {
  name: "Abdul Wasay",
  role: "Senior Full Stack Engineer",
  tagline: "React · Node.js · Python · TypeScript — Performance-Focused Full Stack & API Architecture",
  location: "Lahore, Punjab, Pakistan",
  email: "wasaya670@gmail.com",
  github: "https://github.com/wasayhatzs",
  linkedin: "https://www.linkedin.com/in/abdul-wasay01/",
  resumeUrl: "/Abdul_Wasay_Full_Stack_Engineer.pdf",
  resumeFilename: "Abdul_Wasay_Full_Stack_Engineer.pdf",
  about: [
    "Wasay is a Senior Full Stack Engineer with 3+ years building and shipping production-grade web and SaaS products — from complex React/Next.js frontends through to Node.js backends, REST and GraphQL APIs, and cloud infrastructure on AWS. He takes complete ownership of product lifecycles, not just individual tickets.",
    "He's the kind of engineer who stays close to the code while keeping the bigger picture in mind — leveraging AI tools like GitHub Copilot to accelerate delivery, conducting structured code reviews to enforce architectural standards, and mentoring junior engineers to grow the team's overall capability.",
    "Wasay is obsessed with performance and correctness: optimising render cycles on the frontend, designing efficient data pipelines on the backend, and deploying on Linux-based infrastructure. Whether it's a fast-moving SaaS startup or a product that demands real-time reliability, he ships things that actually work.",
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
  { value: "3+", label: "Years shipping", note: "Production code" },
  { value: "4+", label: "Products live", note: "End to end" },
  { value: "370%", label: "ROI on Befer", note: "Client results" },
  { value: "1,000+", label: "AI calls / day", note: "DealerIQ peak" },
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
      "Leading product operations — strategy, tooling, and delivery across squads at Hatzs Dimensions.",
  },
  {
    role: "Full Stack Engineer",
    company: "Hatzs Dimensions",
    companyUrl: "https://www.linkedin.com/company/hatzsdimensions",
    period: "Sep 2023 — Jun 2025",
    location: "Lahore, Pakistan",
    description:
      "Full-stack engineer shipping SaaS and CMS products. Pioneered Befer from zero as founding engineer.",
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
  /** Live products use a screenshot; open-source repos use a code-card preview instead. */
  kind?: "live" | "repo";
  image?: string;
  /** Shown in the repo preview (e.g. wasaybuilds/intent-engine). */
  repoFullName?: string;
  /** Language breakdown for the repo card (percentages should sum ~100). */
  languages?: { name: string; percent: number; color: string }[];
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
    tagline: "Open-Source B2B Lead Generation by Niche & Location",
    description:
      "Intent Engine is a self-hosted B2B lead generation tool for sales teams, agencies, and founders — scraping Google Maps by niche and city, extracting decision makers from company sites with LLM enrichment, and generating 3-step AI cold email sequences with Hunter.io/Apollo fallbacks, CSV export, and CRM webhooks.",
    role: "Creator & Maintainer — open source",
    kind: "repo",
    repoFullName: "wasaybuilds/intent-engine",
    languages: [
      { name: "Python", percent: 65, color: "#3572A5" },
      { name: "TypeScript", percent: 32, color: "#3178C6" },
      { name: "CSS", percent: 3, color: "#563D7C" },
    ],
    tags: ["FastAPI", "Next.js", "Playwright", "Celery", "LLM"],
    highlights: [
      { label: "License", value: "MIT" },
      { label: "Stack", value: "Full stack" },
      { label: "Outreach", value: "3-step AI emails" },
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
    tagline: "Your GitHub Activity, Wound into a 3D Mechanical Watch",
    description:
      "The Horology API turns any public GitHub profile into a fully interactive 3D luxury timepiece — mapping commits, languages, stars, and activity into living watch complications. Enter a handle, wind the mainspring, and inspect a mechanical movement built with React Three Fiber.",
    role: "Creator — open source",
    image: "/projects/horology-api.png",
    tags: ["Next.js", "React Three Fiber", "Three.js", "Zustand", "GitHub API"],
    highlights: [
      { label: "Visual", value: "3D mechanical" },
      { label: "Data source", value: "GitHub API" },
      { label: "Live demo", value: "Vercel" },
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
