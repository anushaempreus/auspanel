import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "info@auspanel.com.au";
// Use a verified sender domain in Resend for production; onboarding@resend.dev works for testing.
const FROM = process.env.CONTACT_FROM || "Auspanel Website <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cap = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
    }

    // Honeypot: real users never fill this hidden field. Silently accept + drop.
    if (cap(body.company, 1)) {
      return NextResponse.json({ ok: true, delivered: false });
    }

    const name = cap(body.name, 120);
    const email = cap(body.email, 160);
    const subject = cap(body.subject, 160);
    const message = cap(body.message, 5000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // No key configured yet — log and succeed so the form works in dev.
    if (!apiKey) {
      console.log("[contact] (no RESEND_API_KEY) submission:", { name, email, subject });
      return NextResponse.json({ ok: true, delivered: false });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: subject ? `Website enquiry: ${subject}` : `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    if (error) {
      console.error("[contact] resend error:", error);
      return NextResponse.json({ ok: false, error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
