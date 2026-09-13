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

/**
 * Adds an email as a global Resend Contact for the footer newsletter
 * signup. Isolated the same way as sendContactEmail above — same
 * provider, separate function, so the two can fail/be reconfigured
 * independently.
 *
 * Corrected 2026-09-13: Resend deprecated the old Audiences model in
 * favor of global Contacts + Segments (contacts.create no longer takes
 * an audienceId — see resend.com/docs/dashboard/segments/migrating-from-
 * audiences-to-segments). The first version of this function used the
 * old `audienceId` shape and asked the owner to create an Audience in the
 * dashboard just to get an ID; that's no longer how the API works, and
 * isn't necessary — a Contact can be created with just an email. Only
 * `RESEND_API_KEY` is needed, the same key the contact form already uses.
 * A Segment ID would only matter later, if/when sending an actual
 * broadcast to this list — not for collecting signups.
 */
export async function subscribeToNewsletter(email: string): Promise<void> {
  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Newsletter signup is not configured (missing RESEND_API_KEY).");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.contacts.create({ email, unsubscribed: false });

  if (error) {
    throw new Error(`Newsletter signup failed: ${error.message}`);
  }
}
