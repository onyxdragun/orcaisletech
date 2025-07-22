import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const fromEmail = `Contact Form <${process.env.CONTACT_EMAIL}>`;
  const toEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !domain || !fromEmail || !toEmail) {
    return NextResponse.json({ error: "Mailgun environment variables not set." }, { status: 500 });
  }

  const mg = new Mailgun(formData);
  const client = mg.client({ username: "api", key: apiKey });

  try {
    await client.messages.create(domain, {
      from: fromEmail,
      to: [toEmail],
      subject: `Contact Form OrcaIsleTech`,
      text: message,
      "h:Reply-To": email,
    });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    return NextResponse.json({ error: (error as any)?.message || "Failed to send message." }, { status: 500 });
  }
}
