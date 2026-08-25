/**
 * Site content.
 *
 * Mirrors ABOUT.md, which is the source of truth. Every figure here is either
 * a system property Abdul can walk through in an interview (record counts,
 * field mappings, timings) or a fact that appears verbatim on his LinkedIn.
 * Nothing is a client-reported business outcome.
 */

export const profile = {
  name: 'Abdul Wasay',
  role: 'Full Stack Engineer',
  roleLine: 'Full Stack Engineer — TypeScript · Node.js · React · AWS',
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
  'Most of my work is the unglamorous middle: migrations that have to not lose rows, pipelines that resume where they failed, and interfaces that stay fast once the table has a hundred thousand records in it.',
  "Shipping professionally since June 2023, and finishing a CS degree alongside it — which mostly means I've written a lot of production code between lectures.",
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
  location?: string;
  current?: boolean;
  /** One factual line. Nothing here that cannot be walked through. */
  note?: string;
};

/** Titles, employers and dates exactly as they appear on LinkedIn. */
export const jobs: Job[] = [
  {
    role: 'Lead of Product Operations / Full Stack Engineer',
    company: 'Hatzs Dimensions',
    companyUrl: 'https://www.linkedin.com/company/hatzsdimensions',
    period: 'Feb 2025 — Present',
    location: 'Lahore',
    current: true,
    note: 'Player-coach across three SaaS products. Release cycle 3 weeks to 5 days via parallel CI and per-branch previews.',
  },
  {
    role: 'Team Lead',
    company: 'DealerIQ AI',
    period: 'Jan 2026 — Aug 2026',
    location: 'Anaheim, CA — remote',
    note: 'Led four engineers. Built the Salesforce migration pipeline and the voice and chat layer.',
  },
  {
    role: 'Founding Engineer',
    company: 'Befer',
    period: 'Aug 2024 — Aug 2026',
    location: 'Lahore',
    note: 'Built the platform end to end — scheduling, dispatch, quoting, invoicing.',
  },
  {
    role: 'Software Engineer',
    company: 'Hatzs Dimensions',
    companyUrl: 'https://www.linkedin.com/company/hatzsdimensions',
    period: 'Oct 2023 — Jan 2025',
    location: 'Lahore',
    note: 'REST APIs across three SaaS products. OAuth 2.0 SSO. Deployment time 38min to 11min.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Hatzs Dimensions',
    companyUrl: 'https://www.linkedin.com/company/hatzsdimensions',
    period: 'Jun 2023 — Sep 2023',
    location: 'Lahore',
    note: 'First engineering role. 20+ production screens, page load 4.1s to 1.6s, a 28-component shared library.',
  },
];

export type Project = {
  name: string;
  /** Eight-to-twelve words, for the list view. */
  blurb: string;
  summary: string;
  /** The hard part, stated concretely. */
  problem?: string;
  /** Architecture-level account of what was built. */
  built?: string;
  role: string;
  stack: string[];
  /** Headline figures, rendered large. Value carries, label explains. */
  scale?: { value: string; label: string }[];
  /** Pipeline stages, drawn as a generic diagram. Only where they are fact. */
  stages?: string[];
  /** Opt into a bespoke diagram component instead of the generic one. */
  diagram?: 'migration';
  /** Key into the image map in Work.astro. Astro needs a static import per
      image to optimise it, so the file itself cannot live in this data. */
  image?: 'dealeriq' | 'befer';
  url?: string;
  urlLabel?: string;
};

export const work: Project[] = [
  {
    name: 'Salesforce → DealerIQ migration',
    diagram: 'migration',
    blurb: 'Serverless ETL that moved a dealership’s entire Salesforce estate',
    summary:
      'Lifted a vehicle-acquisition client’s historic Salesforce estate into DealerIQ — leads, opportunities, contacts, accounts, work orders, SMS history and attachments.',
    problem:
      'Multi-gigabyte migrations fail partway through, and restarting from zero is not an option when the source is a live customer CRM.',
    built:
      'Extract-and-join writes checkpoints as it goes, so a failed run resumes from the last good one. Step Functions orchestrates, Lambda executes, S3 holds intermediate state.',
    role: 'Designed and built the pipeline',
    stack: ['TypeScript', 'AWS Lambda', 'Step Functions', 'S3', 'Node.js', 'PostgreSQL'],
    scale: [
      { value: '350k+', label: 'records migrated' },
      { value: '500+', label: 'field mappings' },
      { value: '44s', label: 'regression suite, 850 records' },
    ],
  },
  {
    name: 'DealerIQ',
    image: 'dealeriq',
    blurb: 'Dealership platform automating the full customer lifecycle',
    summary:
      'A dealership platform covering acquisition, sales, finance and after-sales service in one system. I led the Sales, Acquisition and Service modules.',
    problem:
      'A vehicle deal crossed four manual handoffs between separate systems. Every handoff was a place for it to stall silently.',
    built:
      'Event-driven jobs wiring the workflow to lender APIs, service scheduling and inventory. Plus voice and chat on Twilio and ElevenLabs, sharing conversation memory so a call resumes where the chat ended.',
    stages: ['Acquisition', 'Sales', 'Finance', 'Service'],
    role: 'Team lead — four engineers',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Twilio', 'ElevenLabs'],
    scale: [
      { value: '4', label: 'manual handoffs removed' },
      { value: '3', label: 'modules led' },
    ],
    url: 'https://www.dealeriq.ai',
    urlLabel: 'dealeriq.ai',
  },
  {
    name: 'Befer',
    image: 'befer',
    blurb: 'AI-assisted CRM for field service businesses',
    summary:
      'A CRM for HVAC, plumbing, electrical and cleaning firms: scheduling, dispatch, quoting, invoicing and customer communication.',
    problem:
      'Technicians write jobs up from memory at the end of a shift, so parts, hours and follow-ups are lost between the van and the invoice.',
    built:
      'An intake assistant that turns a voice note into a structured job record — parts, labour hours, customer details, recommended follow-ups.',
    stages: ['Voice note', 'LLM extract', 'Job record'],
    role: 'Founding engineer — built the platform end to end',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI API', 'AWS'],
    scale: [
      { value: '9', label: 'businesses onboarded' },
      { value: '4,000+', label: 'service jobs in production' },
    ],
    url: 'https://befer.co',
    urlLabel: 'befer.co',
  },
];

export type Contribution = {
  repo: string;
  repoUrl: string;
  stars: string;
  title: string;
  detail: string;
  prUrl: string;
  merged: string;
};

/**
 * Merged pull requests to repositories Abdul does not own.
 *
 * One entry, and it stays one entry until there is a second. The value of this
 * section is that every line survives a click; padding it with anything less
 * than a merged external PR would destroy that in the only way that matters.
 */
export const contributions: Contribution[] = [
  {
    repo: 'TanStack/query',
    repoUrl: 'https://github.com/TanStack/query',
    stars: '50k',
    title: 'Fixed prototype-property false positives in no-unstable-deps',
    detail:
      'The eslint-plugin-query rule flagged inherited Object.prototype members as unstable dependencies, so valid code failed lint. +57/-3 across three files.',
    prUrl: 'https://github.com/TanStack/query/pull/11188',
    merged: 'Merged Aug 2026',
  },
];

export type SideProject = {
  name: string;
  blurb: string;
  summary: string;
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
    name: 'CareerPulse',
    blurb: 'Job application tracker, minus the spreadsheet',
    stack: ['React', 'TypeScript', 'MongoDB'],
    url: 'https://career-pulse-three.vercel.app',
    urlLabel: 'View live demo',
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

export type Principle = {
  /** Where in a system's life this happens. The section reads as a sequence. */
  phase: string;
  title: string;
  body: string;
  /** The thing that turns the principle into a claim someone can check. */
  proof: string;
  /** Key for the inline mark drawn on the card. */
  mark: 'plan' | 'pulse' | 'root' | 'read';
};

/**
 * Four principles ordered as the life of a system: before it is written, while
 * it runs, when it breaks, and after whoever wrote it has moved on.
 *
 * Ordering them this way is what makes the section a sequence rather than a
 * list — each card is a later moment in the same story. Every principle is
 * paired with something that actually happened, because a principle alone is a
 * slogan and the proof line is what makes it an argument.
 */
export const principles: Principle[] = [
  {
    phase: 'Before the code',
    title: 'Design first',
    body: 'Write the design document, review the architecture, then open the editor. Large features rarely need rewriting when the disagreement happens on paper.',
    proof: 'Made design docs and architecture reviews standard practice at Hatzs.',
    mark: 'plan',
  },
  {
    phase: 'While it runs',
    title: 'Build something you can watch',
    body: 'A background job that fails silently is worse than one that crashes loudly. Logs, dashboards and alerts ship with the feature, not after the first incident.',
    proof: 'Alerting that caught webhook failures and stalled jobs before customers noticed.',
    mark: 'pulse',
  },
  {
    phase: 'When it breaks',
    title: 'Fix the cause',
    body: 'A retry around a flaky call buys a week. Finding out why it is flaky buys the rest of the year.',
    proof: 'Deploys went 38min to 11min by fixing Docker layer caching, not by adding machines.',
    mark: 'root',
  },
  {
    phase: 'After you leave',
    title: 'Write for the next engineer',
    body: 'Code is read far more often than written, usually by someone with less context than the author had. That person is frequently me, six months later.',
    proof: 'PR standards still in use across the team; three engineers mentored to first deploy.',
    mark: 'read',
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  {
    group: 'Backend',
    items: ['Node.js', 'REST APIs', 'Event-driven architecture', 'Job queues', 'LLM & voice AI'],
  },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { group: 'Data', items: ['PostgreSQL', 'Schema design & migrations'] },
  {
    group: 'Infra',
    items: ['AWS (Lambda, S3, Step Functions)', 'Docker', 'CI/CD', 'Logging & alerting'],
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
  { id: 'approach', label: 'Approach' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
