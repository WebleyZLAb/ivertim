import { test, expect } from "@playwright/test";

test("homepage service links and process paths lead to real content", async ({ page }) => {
  await page.goto("/");
  const services = page.locator(".service-band");
  await expect(services).toHaveCount(2);
  await expect(services.first().getByRole("link")).toHaveAttribute("href", "/usluge/usluzno-rezanje-kantovanje-busenje");
  await services.first().getByRole("link").click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Precizno rezanje");
  await page.goto("/");
  await expect(page.locator(".process-steps > li")).toHaveCount(3);
  await page.locator(".furniture-process a").click();
  await expect(page).toHaveURL(/proces-saradnje#namjestaj$/);
  await expect(page.locator("#namjestaj")).toBeVisible();
});

test("hero can be paused and resumed", async ({ page }) => {
  await page.goto("/");
  const toggle = page.locator(".carousel-toggle");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  expect(await page.locator(".hero-slide").first().evaluate(el => getComputedStyle(el).animationPlayState)).toBe("paused");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
  expect(await page.locator(".hero-slide").first().evaluate(el => getComputedStyle(el).animationPlayState)).toBe("running");
});

test("reduced motion shows a static photo and final business values", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".carousel-toggle")).toBeHidden();
  await expect(page.locator(".hero-slide").first()).toHaveCSS("opacity", "1");
  await expect(page.locator(".hero-slide").first()).toHaveCSS("animation-name", "none");
  await expect(page.locator("[data-counter]").first()).toHaveText("16+");
});

test("content and mobile menu work without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("http://localhost:4321/");
  await expect(page.locator(".hero")).toHaveCSS("opacity", "1");
  await expect(page.locator(".about")).toHaveCSS("opacity", "1");
  await expect(page.locator(".closing-wrap")).toHaveCSS("opacity", "1");
  await expect(page.locator(".carousel-toggle")).toBeHidden();
  await page.locator(".nav-disclosure summary").click();
  await page.locator("#primary-navigation").getByRole("link", { name: "Usluge", exact: true }).click();
  await expect(page).toHaveURL(/\/usluge$/);
  await context.close();
});

test("homepage fits mobile, tablet and desktop widths", async ({ page }) => {
  await page.goto("/");
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(1);
    const headerOverflow = await page.locator(".site-header").evaluate(el => el.scrollWidth - el.clientWidth);
    expect(headerOverflow, `header overflow at ${width}px`).toBeLessThanOrEqual(1);
  }
});

test("mobile menu closes with Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const summary = page.locator(".nav-disclosure summary");
  await summary.click();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Escape");
  await expect(page.locator(".nav-disclosure")).not.toHaveAttribute("open", "");
  await expect(summary).toBeFocused();
});
