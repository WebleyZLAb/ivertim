import type { APIRoute } from "astro";
import { subscribeToNewsletter } from "../../lib/email";

export const prerender = false;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The footer newsletter form lives on every page (most of them static,
 * per this project's output:"static" default), so unlike /api/contact
 * (which redirects back to /kontakt specifically, a page that opts out
 * of prerendering to read the resulting ?status= param) there's no one
 * static page that can dynamically render a "thanks for subscribing"
 * state from a query param. Footer.astro's own inline script handles the
 * real UX (fetch + inline message, progressively enhanced); this redirect
 * is only the no-JS fallback — it still subscribes the email correctly,
 * it just can't show a styled confirmation on a static page.
 */
function redirect(url: string) {
  return new Response(null, { status: 303, headers: { Location: url } });
}

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonOrRedirect(request, false, "invalid-form");
  }

  // Honeypot — same technique/field name as /api/contact, for consistency.
  if (String(form.get("company") ?? "").trim() !== "") {
    return jsonOrRedirect(request, true, null);
  }

  const email = String(form.get("email") ?? "").trim();
  const referer = form.get("referer") ? String(form.get("referer")) : "/";

  if (!email || !EMAIL_PATTERN.test(email)) {
    return jsonOrRedirect(request, false, "invalid-email", referer);
  }

  try {
    await subscribeToNewsletter(email);
  } catch (err) {
    console.error("Newsletter signup failed:", err);
    return jsonOrRedirect(request, false, "error", referer);
  }

  return jsonOrRedirect(request, true, null, referer);
};

function jsonOrRedirect(request: Request, ok: boolean, reason: string | null, referer = "/") {
  // Footer.astro's script sends this header so it gets a JSON response it
  // can read without a full navigation; a plain (no-JS) form POST doesn't
  // send it, so it gets the redirect-based fallback instead.
  const wantsJson = request.headers.get("accept")?.includes("application/json");
  if (wantsJson) {
    return new Response(JSON.stringify({ ok, reason }), {
      status: ok ? 200 : 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const status = ok ? "newsletter-success" : `newsletter-${reason}`;
  const separator = referer.includes("?") ? "&" : "?";
  return redirect(`${referer}${separator}status=${status}`);
}
