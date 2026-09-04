import { defineConfig, devices } from "@playwright/test";

// Critical-path coverage only (nav, contact form) — per CLAUDE.md's stated
// testing plan. No visual/CSS regression testing here, and no test ever
// completes a real contact-form submission that would hit Resend — see
// tests/contact-form.spec.ts for how the honeypot path is used to exercise
// the success flow safely.
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:4321",
    trace: "retain-on-failure",
  },
  // No webServer block: Astro 7's dev server runs as a persistent background
  // daemon on this machine (`astro dev status`/`astro dev stop`), and having
  // Playwright also try to spawn+manage `astro dev` as a child process was
  // unreliable here — it would see the daemon's "already running" response,
  // treat that as its own process exiting early, and fail the run. Simpler
  // and more robust: start the dev server yourself (`npm run dev`, or the
  // Browser pane's preview_start) before running `npm run test:e2e`.
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
