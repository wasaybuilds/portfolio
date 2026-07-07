export const profile = {
  name: "Abdul Wasay",
  role: "Senior Full Stack Engineer",
  tagline: "React · Node.js · Python · TypeScript — Performance-Focused Full Stack & API Architecture",
  location: "Lahore, Punjab, Pakistan",
  email: "wasaya670@gmail.com",
  github: "https://github.com/wasayhatzs",
  linkedin: "https://www.linkedin.com/in/abdul-wasay01/",
  resumeUrl: "https://www.linkedin.com/in/abdul-wasay01/",
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
  {
    value: "3+",
    label: "Years in production",
    note: "Writing and shipping real code for real users",
  },
  {
    value: "4+",
    label: "Products built & live",
    note: "DealerIQ, Befer, and more — end to end",
  },
  {
    value: "370%",
    label: "ROI on Befer",
    note: "Documented results from clients using the product",
  },
  {
    value: "1,000+",
    label: "AI calls / day",
    note: "DealerIQ's AI agents processed at peak",
  },
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
      "Leading product operations across squads — bridging strategy and execution so processes, data, and tooling support faster decisions and better outcomes across the entire product lifecycle. Partner closely with cross-functional teams to make sure we're building the right things, the right way.",
  },
  {
    role: "Full Stack Engineer",
    company: "Hatzs Dimensions",
    companyUrl: "https://www.linkedin.com/company/hatzsdimensions",
    period: "Sep 2023 — Jun 2025",
    location: "Lahore, Pakistan",
    description:
      "Shipped production web and SaaS products end to end — from React/Next.js frontends and Node.js/AWS backends to CMS builds across Webflow, WordPress, Shopify, Framer, and Bubble.io. Pioneered the frontend architecture for Befer, an AI CRM product, building it from the ground up as its founding engineer.",
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
  image: string;
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
    category: "Languages & Frameworks",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "GraphQL",
      "Python",
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Prisma",
      "Firebase",
      "Supabase",
    ],
  },
  {
    category: "DevOps & Architecture",
    items: [
      "AWS",
      "Linux",
      "Docker",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Turborepo",
      "Monorepos",
      "Microservices",
      "Vercel",
      "SaaS Architecture",
    ],
  },
  {
    category: "Styling & UI",
    items: [
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Radix UI",
      "Sass / CSS3",
      "Responsive Design",
      "Design Systems",
      "Accessibility",
    ],
  },
  {
    category: "Platforms & CMS",
    items: ["Webflow", "WordPress", "Shopify", "Framer", "Bubble.io", "Headless CMS"],
  },
  {
    category: "Product & Leadership",
    items: [
      "Product Strategy",
      "API Architecture",
      "Code Reviews",
      "Mentoring Engineers",
      "Agile / Scrum",
      "GitHub Copilot",
      "AI-Assisted Development",
      "Cross-functional Leadership",
    ],
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
