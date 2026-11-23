import type { APIRoute } from "astro";
import { sendContactEmail } from "../../lib/email";

export const prerender = false;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

// Where the visitor is sent back to after submitting. The landing page
// (src/pages/index.astro, landing mode since 2026-11-23) posts a hidden
// `return_to=landing` field; everything else falls back to /kontakt.
// Allowlisted on purpose — never redirect to a value taken from the form.
type ReturnTarget = "kontakt" | "landing";

function statusUrl(target: ReturnTarget, status: string) {
  return target === "landing" ? `/?status=${status}#kontakt` : `/kontakt?status=${status}`;
}

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return new Response(null, { status: 303, headers: { Location: statusUrl("kontakt", "error") } });
  }

  const target: ReturnTarget = form.get("return_to") === "landing" ? "landing" : "kontakt";
  const redirect = (status: string) =>
    new Response(null, { status: 303, headers: { Location: statusUrl(target, status) } });

  // Honeypot: real users never fill this hidden field in.
  if (String(form.get("company") ?? "").trim() !== "") {
    return redirect("success");
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return redirect("missing");
  }
  if (!EMAIL_PATTERN.test(email)) {
    return redirect("invalid-email");
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return redirect("too-long");
  }

  try {
    await sendContactEmail({ name, email, phone: phone || undefined, message });
  } catch (err) {
    // Logged so a real failure is diagnosable from Vercel function logs, not just a silent redirect.
    console.error("Contact form email send failed:", err);
    return redirect("error");
  }

  return redirect("success");
};
