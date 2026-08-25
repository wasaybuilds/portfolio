// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/**
 * Fonts are declared through Astro's built-in Fonts API, which downloads and
 * self-hosts them at build time. No request ever leaves for fonts.googleapis.com,
 * so there is no third-party round trip on first paint and no layout shift while
 * a CDN stylesheet resolves.
 *
 * Three families, each with one job:
 *   Newsreader    — display serif for headings. Editorial, well-drawn, and
 *                   unremarkable in the way a good serif should be.
 *   Inter         — UI and body. The most legible neutral sans at small sizes.
 *   JetBrains Mono — metadata, labels, code. Signals "engineer" without the
 *                   whole page having to shout it.
 *
 * https://astro.build/config
 */
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Newsreader',
      cssVariable: '--font-display',
      weights: [400, 500],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: [400, 500, 600],
      subsets: ['latin'],
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
