# Abdul Wasay

Source of truth for every fact that appears on the site. Nothing goes on a page
unless it is in this file, and nothing goes in this file unless it is true and
defensible in a technical interview.

Items marked **[NEEDS INPUT]** are gaps. They are deliberately left empty rather
than filled with something plausible.

---

## Identity

| | |
|---|---|
| Name | Abdul Wasay |
| Title | Full Stack Engineer |
| Location | Lahore, Punjab, Pakistan |
| Email | wasaya670@gmail.com |
| GitHub | https://github.com/wasaybuilds |
| LinkedIn | https://www.linkedin.com/in/abdul-wasay01/ — confirmed live |
| Availability | Open to remote roles and contract work, worldwide. No relocation or sponsorship required. |

**Never use "Senior."** Three years of experience. In the US/UK market "senior"
signals 6–8+ years; claiming it reads as inflation and gets the application
filtered out rather than levelled down.

---

## Positioning

Target reader: engineering managers and startup founders in the US, UK, EU and
the Gulf who hire remote contractors internationally. They are already carrying
the risk of someone they cannot easily reference-check.

The governing principle: **an unverifiable claim raises perceived risk instead
of lowering it.** Understated and provable beats impressive and unprovable.
Granular, unglamorous engineering detail is credible precisely because it is too
specific to have been invented.

Tone: calm, specific, technical. One dry line of personality maximum, in About.

---

## One-liners

- **Role line:** Full Stack Engineer — TypeScript · Node.js · React · AWS
- **What I build:** I build SaaS and CRM platforms end to end — APIs, data
  pipelines, and the interfaces on top of them.
- **Status:** Open to remote roles and contract work — available worldwide

---

## Experience

Reproduce exactly. A recruiter cross-checks this against LinkedIn, and a row
that matches on every field is worth more than a row with a paragraph that
doesn't. No "Senior" or "Lead" framing on anything before February 2025.

| Role | Employer | Period | Location |
|---|---|---|---|
| Frontend Engineer | Hatzs Dimensions | Jun 2023 – Sep 2023 | Lahore |
| Software Engineer | Hatzs Dimensions | Oct 2023 – Jan 2025 | Lahore |
| Founding Engineer | Befer | Aug 2024 – Aug 2026 | Lahore |
| Lead of Product Operations / Full Stack Engineer | Hatzs Dimensions | Feb 2025 – present | Lahore |
| Team Lead | DealerIQ AI | Jan 2026 – Aug 2026 | Anaheim, CA (remote) |

First engineering role: June 2023. Hatzs total tenure: 3 years 3 months.

Befer's LinkedIn title reads "Pioneer & Product Owner"; the description beneath
it says "Founding Engineer at Befer". Use **Founding Engineer** — it is the
accurate one, and the other is not a real job title.

### Overlapping dates — decide before this goes out

Three roles run concurrently from January to August 2026: Befer, Hatzs and
DealerIQ AI. A recruiter cross-checking LinkedIn sees three simultaneous
full-time positions and reads it as padding unless it is explained.

Options, in order of preference:

1. Mark the concurrent ones as contract or part-time, on LinkedIn *and* here.
2. Present DealerIQ as a client engagement delivered through Hatzs rather than
   as its own employment row.
3. Leave as is, and expect the question in every first call.

**[NEEDS INPUT: which of these is true?]**

### Education

Lahore Garrison University — BS Computer Science, in progress, expected June 2026.

---

## Work

Two to three projects maximum. Each one gets: what the product is in a sentence
a non-engineer understands · the technical problem · what I built
(architecture-level, 2–3 sentences) · stack · scale if provable.

### Salesforce → DealerIQ migration pipeline — lead project

Moved an automotive vehicle-acquisition client's historic Salesforce estate
into DealerIQ. Covered Leads, Opportunities, Contacts, Accounts, Service
Appointments, Work Orders, SMS history and file attachments.

Three decoupled stages:

1. Extract-and-join, writing checkpoints as it goes, so a failed run resumes
   from the last good checkpoint instead of restarting a multi-gigabyte job.
2. Transformation into a single composite import schema.
3. Authenticated webhook-based loading into DealerIQ.

Step Functions orchestrates, Lambda executes, S3 holds intermediate state.

Stack: TypeScript, Node.js, AWS (Lambda, S3, Step Functions), PostgreSQL.
Scale: 350,000+ records, 500+ field mappings, and a regression suite covering
850 records end to end in 44 seconds.

### DealerIQ — AI sales assistant and CRM for car dealerships

Unifies AI-driven calls, texts and shared memory across a live-agent workflow,
with pre-built agent roles for reception, sales, service and buying.

- Live: https://www.dealeriq.ai
- Role: Team Lead, four engineers. Sales, Acquisition and Service modules.
- Problem: a vehicle deal crossed four manual handoffs between separate systems
  (lender approvals, service scheduling, inventory), each one a place for a
  deal to stall silently.
- Built: event-driven jobs wiring dealership workflows to external lender APIs,
  service-centre scheduling and inventory platforms, removing all four
  handoffs. Plus the voice and chat layer — Twilio and ElevenLabs with
  conversation memory shared across channels, so a call resumes where the
  previous chat ended. Low latency was the governing constraint.
- Stack: TypeScript, React, Node.js, PostgreSQL, AWS, Twilio, ElevenLabs

### Befer — CRM for blue-collar service businesses

Scheduling, invoicing and customer follow-up for plumbers, electricians and
cleaners. Founding engineer; built end to end from the Postgres schema and API
through to the web and mobile clients.

- Live: https://befer.co
- Role: Founding Engineer. Built the platform end to end.
- Problem: technicians write jobs up from memory at the end of a shift, so
  parts, labour hours and follow-ups are lost between the van and the invoice.
- Built: an intake assistant turning a technician's voice note into a
  structured job record — parts, labour hours, customer details and
  recommended follow-ups — on top of the full platform (Postgres schema,
  backend APIs, frontend workflows).
- Stack: React, TypeScript, Node.js, PostgreSQL, OpenAI API, AWS
- Scale: 9 businesses onboarded, 4,000+ service jobs processed in production

---

## Metrics

### Approved — keep

Specific, technical, and self-evidently real. Credible *because* they are
granular and unglamorous.

| Figure | Belongs to |
|---|---|
| 350,000+ records migrated | Salesforce → DealerIQ pipeline |
| 500+ field mappings | Salesforce → DealerIQ pipeline |
| 850 records end to end in 44 seconds | Salesforce → DealerIQ pipeline |
| Initial page load 4.1s → 1.6s | Frontend Engineer, Hatzs (2023) |
| 28-component shared library | Frontend Engineer, Hatzs (2023) |
| Deployment time 38min → 11min | Software Engineer, Hatzs (2023–25) |
| Release cycle 3 weeks → 5 days, 2 to 8 releases/month | Lead Product Ops, Hatzs |
| ~15 hrs/week of manual work eliminated | Insurance CRM, Hatzs |
| 20+ production screens | Frontend Engineer, Hatzs |
| 9 businesses, 4,000+ jobs | Befer |

The last two rows are usage counts from systems Abdul built and can query.
They are weaker than the engineering figures — drop them if challenged.

### Banned — never restore

Client-side business outcomes with no supporting artifact:

- ~~370% ROI~~
- ~~+42% appointments lift~~
- ~~1,000+ support agents deployed~~
- ~~2x orders~~
- ~~+40% revenue increase~~
- ~~Release failure rates cut 35%~~

---

## Side Projects

Called **Side Projects** — never "Open Source Contributions." Nothing here
claims a merged patch to anyone else's repository. Every link points at the
specific repo, never at a profile page. Unfinished work says so; "work in
progress" is credible, silence looks like padding.

### intent-engine

Turns a niche and a city into an enriched lead list: scrapes Google Maps,
enriches decision makers with an LLM, drafts a three-step outreach sequence. The
interesting part is the job layer — long scrapes run on Celery workers with
per-user history, so closing a browser tab doesn't lose the run.

FastAPI · Next.js · Playwright · Celery · Redis. Work in progress.
https://github.com/wasaybuilds/intent-engine

### horology-api

Renders any GitHub profile as an interactive 3D mechanical watch — commits,
languages and stars drive the complications. The work was keeping the scene at
60fps on a mid-range phone while every complication is driven by live data.

Next.js · React Three Fiber · Three.js · Zustand · GitHub API.
https://horology-api.vercel.app

### CareerPulse

Job application tracker: applications, job descriptions, resumes and interview
stages in one place. React · TypeScript · MongoDB. Work in progress.
https://career-pulse-three.vercel.app

_Dropped: appointly. The repo exists but was never written up, and three side
projects with nothing to say about them is worse than two with something._

---

## Stack

Grouped, plain, no proficiency labels. Self-assigned "Expert"/"Advanced" ratings
are a junior signal. Only what I would be comfortable being interviewed on. Cut
anything that fails that test.

- **Languages** — TypeScript, JavaScript, Python, SQL
- **Backend** — Node.js, NestJS, REST API design, background job queues
- **Frontend** — React, Next.js, Tailwind CSS
- **Data** — PostgreSQL, Redis, schema design and migrations
- **Infra** — AWS (Lambda, S3, Step Functions), Docker, Linux, CI/CD

---

## Client builds

Live client sites, all verifiable — the links go to the running site.

| Site | Sector | Platform |
|---|---|---|
| AmityVet | Veterinary clinic | WordPress |
| Die By Fashion Italy | Fashion & apparel | Shopify |
| Right On Detail | Auto detailing | Webflow |
| DJ Cutt Entertainment | Entertainment & events | Webflow |
| The Car Trackers | Automotive services | WordPress |
| Ohh.me | Creative portfolio | Webflow |
| The True Driven | Automotive lifestyle | WordPress |
| Outback Accounting | Accounting | Webflow |

---

## Contact

Email, LinkedIn, GitHub, CV download. One line on what I'm looking for and that
I work with international teams remotely. Nothing else.

---

## Do not put on the site

- The word "Senior," anywhere — title, meta, hero, footer, OG tags
- Any banned metric above
- Certifications. They are "Version Control" and "Problem Solving
  (Intermediate)"; listing them signals I think they count
- Simulated or faked interactive demos of a system. Link a real recording or a
  live demo, or let the architecture description do the work
- Counters that animate from zero and render as `0` without JavaScript
- Swagger: "PowerPoints are… tolerated" · "Ego optional" · "Math did the
  flexing" · "when the bugs try to ruin the vibe" · "Battle Scars" · "Zero
  templates used" · "No corporate runaround"
- Anything invented to fill a gap. Use **[NEEDS INPUT]** and leave it empty

## Watch for

- Typos: "zero tech debt debt" → "zero tech debt"
- "SaaS and CMS products" → **CRM**, wherever the old GitHub bio phrasing appears
- OG image URL must point at the production domain, never a Vercel preview
  deployment. Currently `https://wasay-one.vercel.app`; update before launch
  if the Astro rebuild deploys elsewhere.
