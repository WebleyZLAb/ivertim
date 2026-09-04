import { test, expect } from "@playwright/test";

const NAV_LINKS = [
  { label: "Usluge", href: "/usluge" },
  { label: "Projekti", href: "/projekti" },
  { label: "Proces saradnje", href: "/proces-saradnje" },
  { label: "Blog", href: "/blog" },
];

test.describe("Header navigation", () => {
  test("logo links to home", async ({ page }) => {
    await page.goto("/usluge");
    await page.getByRole("link", { name: "Ivertim — početna" }).click();
    await expect(page).toHaveURL("/");
  });

  test("primary CTA links to kontakt", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("link", { name: "Razgovarajmo" }).first();
    await expect(cta).toHaveAttribute("href", "/kontakt");
  });

  for (const link of NAV_LINKS) {
    test(`"${link.label}" nav link goes to ${link.href}`, async ({ page }, testInfo) => {
      await page.goto("/");
      if (testInfo.project.name === "mobile") {
        await page.locator(".nav-disclosure summary").click();
      }
      await page
        .locator("nav[aria-label='Glavna navigacija']")
        .getByRole("link", { name: link.label, exact: true })
        .click();
      await expect(page).toHaveURL(link.href);
    });
  }
});

test.describe("Mobile menu disclosure", () => {
  test("nav panel is closed by default and opens/closes via the toggle", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "mobile-only behavior");

    await page.goto("/");
    const disclosure = page.locator(".nav-disclosure");
    const summary = disclosure.locator("summary");
    // nav is a sibling of .nav-disclosure, not a child of it — see
    // Header.astro's comment on .nav-disclosure for why.
    const nav = page.locator("nav[aria-label='Glavna navigacija']");

    await expect(disclosure).not.toHaveAttribute("open", "");
    await expect(summary).toHaveAttribute("aria-label", "Otvori meni");

    await summary.click();
    await expect(disclosure).toHaveAttribute("open", "");
    await expect(summary).toHaveAttribute("aria-label", "Zatvori meni");
    await expect(nav).toBeVisible();

    await summary.click();
    await expect(disclosure).not.toHaveAttribute("open", "");
    await expect(summary).toHaveAttribute("aria-label", "Otvori meni");
  });
});

test.describe("Footer navigation", () => {
  test("footer links to all main pages", async ({ page }) => {
    await page.goto("/");
    const footerNav = page.locator('nav[aria-label="Footer navigacija"]');
    for (const href of ["/usluge", "/projekti", "/proces-saradnje", "/blog", "/kontakt"]) {
      await expect(footerNav.locator(`a[href="${href}"]`)).toBeVisible();
    }
  });
});
