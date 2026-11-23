// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';
import { isHiddenRoute } from './src/lib/site.ts';

// Vercel's stable project alias — update once a custom domain is connected
// (see CLAUDE.md Open Questions: deliberately deferred, not urgent yet).
const SITE_URL = 'https://ivertim.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  adapter: vercel(),
  // Landing mode: hidden full-site pages stay out of the sitemap too.
  integrations: [sitemap({ filter: (page) => !isHiddenRoute(new URL(page).pathname) }), mdx()]
});