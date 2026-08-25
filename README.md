# Personal site — Abdul Wasay

Portfolio for a full stack engineer. Built with [Astro](https://astro.build),
Tailwind v4, and no client-side framework.

**Live:** [wasay-one.vercel.app](https://wasay-one.vercel.app)

---

## Design constraints

The interesting decisions here were mostly about restraint.

**No JavaScript framework, and almost no JavaScript.** The page ships as static
HTML. The three scripts on it — theme toggle, scroll reveal, and the Approach
section's step tracking — are small enough that Astro inlines them, so the site
emits zero JS chunks.

**Progressive enhancement in the safe direction.** Every enhancement is opt-in
via a class the browser adds, never opt-out. The scroll-reveal elements are
visible by default and only hide once a `.js` class exists on `<html>`; the
scrollytelling section renders as a plain readable list until a script decides
the viewport can support more. A failure leaves a complete page rather than a
blank one.

**Self-hosted fonts.** Clash Display and Satoshi come from
[Fontshare](https://fontshare.com), JetBrains Mono from Google, all downloaded
and served from this origin at build time through Astro's Fonts API. No
third-party request on first paint.

**Fluid, not breakpoint-driven.** Type and spacing interpolate with `clamp()`
against the viewport, so there are few layout breakpoints and no jumps between
them.

**One accent colour.** A desaturated slate blue, used on roughly three elements
per screen. Headings are ink, never accent. No gradients.

---

## Running it

```sh
npm install
npm run dev      # localhost:4321
npm run build    # → dist/
npm run preview  # serve the build
```

Requires Node 22.12 or newer.

---

## Structure

```text
src/
├── assets/         product screenshots, optimised at build time
├── components/     one file per section, plus the SVG diagrams
├── data/site.ts    all site content, in one place
├── layouts/        document shell, metadata, structured data
├── pages/          index.astro
└── styles/         design tokens and base styles
```

`src/data/site.ts` holds every piece of content on the page. Components read
from it and never hardcode copy, so the site can be updated without touching
markup.

### Diagrams

The architecture diagrams are hand-written SVG rather than images: they inherit
the theme tokens, stay sharp at any size, cost a few hundred bytes, and remain
searchable text. The migration pipeline has two layouts — horizontal on wide
screens, vertical below `34rem` — because a horizontal scroller on a phone
hides half the diagram behind a gesture most people never make.

### Images

Screenshots live in `src/assets/`, not `public/`, so Astro resizes them and
converts to WebP. Files in `public/` are copied verbatim, which would mean
serving a multi-megabyte PNG to a phone.

---

## Licence

Code is MIT. The written content, screenshots and CV are not — please don't
reuse those.
