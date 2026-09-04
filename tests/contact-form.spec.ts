import { test, expect } from "@playwright/test";

// IMPORTANT: no test in this file ever completes a real, deliverable contact
// submission — that would hit Resend and send a real email (see CLAUDE.md
// Known Issues history for why that's not something to trigger casually).
// The success path is instead exercised via the honeypot field, which
// src/pages/api/contact.ts short-circuits to `status=success` *before* ever
// calling sendContactEmail — a real bot fills it, a real visitor never does,
// and it's a safe, repeatable way to test the full success UI/redirect.

test.describe("Contact form — rendering", () => {
  test("renders all expected fields", async ({ page }) => {
    await page.goto("/kontakt");
    await expect(page.getByLabel("Ime i prezime")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Telefon (opciono)")).toBeVisible();
    await expect(page.getByLabel("Poruka")).toBeVisible();
    await expect(page.getByRole("button", { name: "Razgovarajmo" })).toBeVisible();
  });

  test("honeypot field is hidden from real users", async ({ page }) => {
    await page.goto("/kontakt");
    const honeypotWrap = page.locator(".field.honeypot");
    await expect(honeypotWrap).toHaveAttribute("aria-hidden", "true");
    await expect(page.locator("#company")).toHaveAttribute("tabindex", "-1");
  });
});

test.describe("Contact form — client-side validation", () => {
  test("blocks submit when required fields are empty", async ({ page }) => {
    await page.goto("/kontakt");
    await page.getByRole("button", { name: "Razgovarajmo" }).click();
    // Native `required` validation should block the POST entirely — still on
    // /kontakt with no ?status= param, meaning the server was never reached.
    await expect(page).toHaveURL(/\/kontakt$/);
  });

  test("blocks submit when the email is obviously malformed", async ({ page }) => {
    await page.goto("/kontakt");
    await page.getByLabel("Ime i prezime").fill("Test Test");
    await page.getByLabel("Email").fill("not-an-email");
    await page.getByLabel("Poruka").fill("Test poruka.");
    await page.getByRole("button", { name: "Razgovarajmo" }).click();
    await expect(page).toHaveURL(/\/kontakt$/);
  });
});

test.describe("Contact form — server-side behavior (direct requests)", () => {
  const endpoint = "/api/contact";
  const headers = {
    origin: "http://localhost:4321",
    referer: "http://localhost:4321/kontakt",
    "content-type": "application/x-www-form-urlencoded",
  };

  test("rejects missing required fields", async ({ request }) => {
    const response = await request.post(endpoint, {
      headers,
      form: { name: "", email: "", message: "", company: "", phone: "" },
    });
    expect(response.url()).toContain("status=missing");
  });

  test("rejects a malformed email the server itself catches", async ({ request }) => {
    const response = await request.post(endpoint, {
      headers,
      form: { name: "Test", email: "bez-tacke@bezdomena", message: "Test poruka.", company: "", phone: "" },
    });
    expect(response.url()).toContain("status=invalid-email");
  });

  test("honeypot-filled submission redirects to success without emailing", async ({ request }) => {
    const response = await request.post(endpoint, {
      headers,
      form: {
        name: "Bot",
        email: "bot@example.com",
        message: "Automated honeypot check.",
        company: "Definitely a bot",
        phone: "",
      },
    });
    expect(response.url()).toContain("status=success");
  });
});

test.describe("Contact form — success UI", () => {
  test("shows the confirmation message after a honeypot-short-circuited success", async ({ page }) => {
    // Same safe path as above, driven through the real page so the rendered
    // confirmation copy is verified too, not just the redirect target.
    await page.goto("/kontakt");
    await page.locator("#company").fill("Bot Co", { force: true });
    await page.getByLabel("Ime i prezime").fill("Bot");
    await page.getByLabel("Email").fill("bot@example.com");
    await page.getByLabel("Poruka").fill("Automated honeypot check.");
    await page.getByRole("button", { name: "Razgovarajmo" }).click();

    await expect(page).toHaveURL(/status=success/);
    await expect(page.getByRole("status")).toHaveText("Hvala! Upit je poslat, javićemo se uskoro.");
  });
});
