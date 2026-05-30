"use server";

import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST ?? "smtpout.secureserver.net";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_SECURE = (process.env.SMTP_SECURE ?? "true") === "true";
const CONTACT_INBOX =
  process.env.CONTACT_INBOX ?? "info@ashfaqbuttfitnesszone.com";
const CONTACT_FROM = process.env.CONTACT_FROM ?? CONTACT_INBOX;

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactInquiry(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot — bots fill arbitrary fields; humans leave hidden ones blank.
  const honeypot = String(formData.get("company") ?? "");

  if (honeypot) {
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) {
    fieldErrors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "That email doesn't look right.";
  }
  if (!message || message.length < 10) {
    fieldErrors.message = "Tell us a bit more (10+ characters).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  if (!smtpUser || !smtpPassword) {
    console.error(
      "[contact] SMTP_USER / SMTP_PASSWORD not set. Inquiry was not delivered:",
      { name, email, phone, message },
    );
    return {
      status: "error",
      message:
        "We couldn't send your message right now. Please call or email us directly.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: { user: smtpUser, pass: smtpPassword },
  });

  const subject = `New inquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New inquiry from the website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `.trim();

  try {
    await transporter.sendMail({
      from: CONTACT_FROM,
      to: CONTACT_INBOX,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("[contact] SMTP send failed:", err);
    return {
      status: "error",
      message:
        "We couldn't send your message right now. Please try again in a moment.",
    };
  }

  return {
    status: "success",
    message: "Thanks — we'll be in touch shortly.",
  };
}
