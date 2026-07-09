# Abdul Wasay —  Portfolio    
 
A modern, fluid, and fully responsive  personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Showcases experience,  skills, certifications, and two flagship AI products ([DealerIQ](https://www.dealeriq.ai) and [Befer](https://befer.co)).
 
## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** lucide-react + custom brand SVGs

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
  app/            # App Router entry (layout, page, icon, global styles)
  components/     # Section & UI components (Hero, About, Experience, Projects, ...)
  lib/data.ts     # All portfolio content (profile, experience, projects, skills, certs)
public/
  projects/       # Screenshots used on the Projects section
```

To update the content shown on the site (name, experience, projects, skills, certifications), edit `src/lib/data.ts` — every section pulls from that single source of truth.

## Available Scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint

## Deployment

This app is ready to deploy on [Vercel](https://vercel.com/new) or any Node.js hosting platform that supports Next.js.
