// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Vercel's stable project alias — update once a custom domain is connected
// (see CLAUDE.md Open Questions: deliberately deferred, not urgent yet).
const SITE_URL = 'https://ivertim.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  adapter: vercel(),
  integrations: [sitemap()]
});