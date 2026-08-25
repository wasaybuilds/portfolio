/**
 * Site content.
 *
 * Mirrors ABOUT.md, which is the source of truth. Anything marked
 * [NEEDS INPUT] there is absent here rather than approximated — a section
 * renders only the fields it actually has, so a missing fact leaves a smaller
 * page instead of an invented one.
 */

export const profile = {
  name: 'Abdul Wasay',
  role: 'Full Stack Engineer',
  roleLine: 'Full Stack Engineer — TypeScript · Node.js · React · AWS',
  /** One line under the name. Everything else in the hero is a link. */
  intro:
    'I build SaaS and CRM platforms end to end, from Postgres and Node.js APIs through to the interfaces on top.',
  availability: 'Open to remote roles and contract work — available worldwide',
  location: 'Lahore, Pakistan',
  email: 'wasaya670@gmail.com',
  github: 'https://github.com/wasaybuilds',
  linkedin: 'https://www.linkedin.com/in/abdul-wasay01/',
  resumeUrl: '/Abdul_Wasay_Full_Stack_Engineer.pdf',
  metaDescription:
    'Abdul Wasay — Full Stack Engineer in Lahore, Pakistan. I build SaaS and CRM platforms end to end with TypeScript, Node.js, React, PostgreSQL and AWS. Open to remote roles and contract work worldwide.',
} as const;

export const about = [
  'Most of my work is the unglamorous middle: data migrations that have to not lose rows, pipelines that have to resume where they failed, and interfaces that stay fast once the table has a hundred thousand records in it. Correct under load beats clever.',
  "I've been shipping professionally since June 2023, and I'm finishing a CS degree alongside it — which mostly means I've written a lot of production code between lectures.",
];

export const education = {
  school: 'Lahore Garrison University',
  degree: 'BS Computer Science — in progress',
  period: 'Expected June 2026',
};

export type Job = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  current?: boolean;
};

/**
 * Exact titles and dates, to match LinkedIn field for field. Befer and the
 * DealerIQ entity are absent until their dates are confirmed — a row with a
 * guessed date is worse than no row, because it is the one thing a recruiter
 * actually cross-checks.
 */
export const jobs: Job[] = [
  {
    role: 'Lead of Product Operations',
    company: 'Hatzs Dimensions',
    companyUrl: 'https://www.linkedin.com/company/hatzsdimensions',
    period: 'Feb 2025 — Present',
    current: true,
  },
  {
    role: 'Software Engineer',
    company: 'Hatzs Dimensions',
    companyUrl: 'https://www.linkedin.com/company/hatzsdimensions',
    period: 'Oct 2023 — Jan 2025',
  },
  {
    role: 'Frontend Engineer',
    company: 'Hatzs Dimensions',
    companyUrl: 'https://www.linkedin.com/company/hatzsdimensions',
    period: 'Jun 2023 — Sep 2023',
  },
];

export type Project = {
  name: string;
  /** Eight-to-twelve words, for the list view. */
  blurb: string;
  summary: string;
  /** The hard part, stated concretely. Omitted until the real text exists. */
  problem?: string;
  /** Architecture-level account of what was built. Same rule. */
  built?: string;
  role: string;
  stack: string[];
  scale?: string;
  url: string;
  urlLabel: string;
};

export const work: Project[] = [
  {
    name: 'DealerIQ',
    blurb: 'AI sales assistant and CRM for car dealerships',
    summary:
      'Calls, texts and shared customer memory in one live-agent workflow, with pre-built agent roles for reception, sales, service and buying.',
    role: 'Full stack engineering',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AI agents'],
    scale: '1,000+ calls processed per day',
    url: 'https://www.dealeriq.ai',
    urlLabel: 'dealeriq.ai',
  },
  {
    name: 'Befer',
    blurb: 'CRM for blue-collar service businesses',
    summary:
      'Scheduling, invoicing and customer follow-up for plumbers, electricians and cleaners.',
    role: 'Founding engineer — schema and API through to web and mobile',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'QuickBooks API', 'Zapier'],
    url: 'https://befer.co',
    urlLabel: 'befer.co',
  },
];

export type SideProject = {
  name: string;
  /** Eight-to-twelve words, for the list view. */
  blurb: string;
  summary: string;
  /** Pipeline stages, only where they are confirmed fact. */
  stages?: string[];
  stagesNote?: string;
  stack: string[];
  url: string;
  urlLabel: string;
  status?: string;
};

export const sideProjects: SideProject[] = [
  {
    name: 'intent-engine',
    blurb: 'Niche and city in, enriched lead list out',
    summary:
      'Scrapes Google Maps, enriches decision makers with an LLM, drafts outreach. The interesting part is the job layer: scrapes run on Celery workers with per-user history, so closing a tab does not lose the run.',
    stages: ['Maps scrape', 'LLM enrich', 'Outreach draft'],
    stagesNote: 'Stages run as background jobs on Celery + Redis, with per-user history.',
    stack: ['FastAPI', 'Next.js', 'Playwright', 'Celery', 'Redis'],
    url: 'https://github.com/wasaybuilds/intent-engine',
    urlLabel: 'View repository',
    status: 'Work in progress',
  },
  {
    name: 'horology-api',
    blurb: 'Any GitHub profile as an interactive 3D mechanical watch',
    summary:
      'Commits, languages and stars drive the complications. The work was holding 60fps on a mid-range phone with every complication fed by live data.',
    stack: ['Next.js', 'React Three Fiber', 'Three.js', 'Zustand', 'GitHub API'],
    url: 'https://horology-api.vercel.app',
    urlLabel: 'View live demo',
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  {
    group: 'Backend',
    items: ['Node.js', 'NestJS', 'REST API design', 'Background job queues'],
  },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  {
    group: 'Data',
    items: ['PostgreSQL', 'Redis', 'Schema design & migrations'],
  },
  {
    group: 'Infra',
    items: ['AWS (Lambda, S3, Step Functions)', 'Docker', 'Linux', 'CI/CD'],
  },
];

export type ClientSite = {
  name: string;
  sector: string;
  platform: string;
  url: string;
};

export const clientSites: ClientSite[] = [
  { name: 'AmityVet', sector: 'Veterinary clinic', platform: 'WordPress', url: 'https://amityvet.com' },
  { name: 'Die By Fashion Italy', sector: 'Fashion & apparel', platform: 'Shopify', url: 'https://diebyfashionitaly.com' },
  { name: 'Right On Detail', sector: 'Auto detailing', platform: 'Webflow', url: 'https://www.rightondetail.com' },
  { name: 'DJ Cutt Entertainment', sector: 'Entertainment & events', platform: 'Webflow', url: 'https://www.djcuttentertainment.com' },
  { name: 'The Car Trackers', sector: 'Automotive services', platform: 'WordPress', url: 'https://thecartrackers.com' },
  { name: 'Ohh.me', sector: 'Creative portfolio', platform: 'Webflow', url: 'https://ohh.me' },
  { name: 'The True Driven', sector: 'Automotive lifestyle', platform: 'WordPress', url: 'https://www.thetruedriven.com' },
  { name: 'Outback Accounting', sector: 'Accounting', platform: 'Webflow', url: 'https://outbackaccounting.com.au' },
];

export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
