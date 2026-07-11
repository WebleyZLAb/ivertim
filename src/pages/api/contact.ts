import type { APIRoute } from "astro";
import { sendContactEmail } from "../../lib/email";

export const prerender = false;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

function redirect(url: string) {
  return new Response(null, { status: 303, headers: { Location: url } });
}

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect("/kontakt?status=error");
  }

  // Honeypot: real users never fill this hidden field in.
  if (String(form.get("company") ?? "").trim() !== "") {
    return redirect("/kontakt?status=success");
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return redirect("/kontakt?status=missing");
  }
  if (!EMAIL_PATTERN.test(email)) {
    return redirect("/kontakt?status=invalid-email");
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return redirect("/kontakt?status=too-long");
  }

  try {
    await sendContactEmail({ name, email, phone: phone || undefined, message });
  } catch {
    return redirect("/kontakt?status=error");
  }

  return redirect("/kontakt?status=success");
};
