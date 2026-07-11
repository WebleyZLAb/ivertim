import { Resend } from "resend";

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * Sends the contact form submission by email. Isolated behind this module
 * so the provider (currently Resend) can be swapped without touching the
 * API route that calls it.
 */
export async function sendContactEmail(submission: ContactSubmission): Promise<void> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_EMAIL_TO;
  const from = import.meta.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    throw new Error(
      "Email service is not configured (missing RESEND_API_KEY, CONTACT_EMAIL_TO or CONTACT_EMAIL_FROM)."
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: submission.email,
    subject: `Novi upit sa sajta — ${submission.name}`,
    text: [
      `Ime: ${submission.name}`,
      `Email: ${submission.email}`,
      submission.phone ? `Telefon: ${submission.phone}` : null,
      "",
      submission.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    throw new Error(`Email service failed to send: ${error.message}`);
  }
}
