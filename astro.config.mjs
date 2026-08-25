// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/**
 * Fonts come from Fontshare rather than Google Fonts.
 *
 * That is the whole point: Google's catalogue is what every generated site
 * reaches for, so Inter, Geist and Plus Jakarta now read as "default modern"
 * however well drawn they are. Fontshare's families are free for commercial
 * use, professionally drawn by the Indian Type Foundry, and are what the
 * portfolios that look designed are actually set in.
 *
 *   Clash Display — hero and section headings. Tight, high-impact, with real
 *                   character in the letterforms at large sizes.
 *   Satoshi       — body and UI. A modern neutral grotesque that stays
 *                   invisible at reading size, which is its job.
 *   JetBrains Mono — labels, metadata, diagrams.
 *
 * Astro still downloads and self-hosts all of it at build time, so nothing is
 * requested from a third-party CDN at runtime.
 *
 * https://astro.build/config
 */
export default defineConfig({
  /* Absolute URL resolution for social previews and canonical links.
     Point this at the final domain before launch. */
  site: "https://wasay-one.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: 'Clash Display',
      cssVariable: '--font-display',
      weights: [500, 600],
    },
    {
      provider: fontProviders.fontshare(),
      name: 'Satoshi',
      cssVariable: '--font-sans',
      weights: [400, 500, 700],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      subsets: ['latin'],
    },
  ],
});
