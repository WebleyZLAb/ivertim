// Landing-page mode (owner's decision, 2026-11-23): ivertim.com goes live
// as a single landing page first, so a handful of stolari can start using
// online cutting-list orders this week. The full multi-page site
// (Usluge, Projekti, Proces saradnje, Blog, Kontakt) stays in the repo
// and keeps working by direct URL, but is out of the navigation and out
// of the search index until it is finished. To bring it back: restore
// FULL_SITE_NAV below in Header/Footer, and empty HIDDEN_ROUTES.

// Portal for online orders, Lupa and Optimizator (Vercel project
// ivertim-optimizator; the old ivertim-optimizator.vercel.app 308s here).
export const PORTAL_URL = "https://portal.ivertim.com";

// Navigation while in landing mode: anchors on the home page. Absolute
// ("/#...") so they also work from the legal pages and hidden pages.
export const LANDING_NAV = [
  { href: "/#usluge", label: "Usluge" },
  { href: "/#online-narudzbe", label: "Online narudžbe" },
  { href: "/#o-nama", label: "O nama" },
  { href: "/#kontakt", label: "Kontakt" },
];

// Full-site navigation, kept for when the multi-page site goes live.
export const FULL_SITE_NAV = [
  { href: "/usluge", label: "Usluge" },
  { href: "/projekti", label: "Projekti" },
  { href: "/proces-saradnje", label: "Proces saradnje" },
  { href: "/blog", label: "Blog" },
];

// Route prefixes that get <meta name="robots" content="noindex"> and are
// filtered out of the sitemap (astro.config.mjs) while in landing mode.
export const HIDDEN_ROUTES = ["/usluge", "/projekti", "/proces-saradnje", "/blog", "/kontakt"];

export function isHiddenRoute(pathname: string): boolean {
  const path = pathname.replace(/\/+$/, "") || "/";
  return HIDDEN_ROUTES.some((route) => path === route || path.startsWith(`${route}/`));
}

// Newsletter is hidden until it is properly set up and tested live.
export const SHOW_NEWSLETTER = false;

// Instagram/Facebook/LinkedIn links are "#" placeholders until the
// profiles exist — hidden on the live site until then.
export const SHOW_SOCIAL_PLACEHOLDERS = false;
