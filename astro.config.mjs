// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';
import { isHiddenRoute } from './src/lib/site.ts';

// Real domain, connected 2026-11-23 (landing mode, see src/lib/site.ts).
const SITE_URL = 'https://www.ivertim.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  adapter: vercel(),
  // Landing mode: hidden full-site pages stay out of the sitemap too.
  integrations: [sitemap({ filter: (page) => !isHiddenRoute(new URL(page).pathname) }), mdx()]
});