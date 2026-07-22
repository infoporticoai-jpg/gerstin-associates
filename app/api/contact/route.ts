import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 * Validates the submission and returns success. To deliver messages,
 * wire this up to an email service (e.g. Resend/SendGrid) or the firm's
 * CRM — the validated payload is ready to forward.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, email, message } = data ?? {};

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    // TODO: forward `data` to the firm's inbox/CRM.
    // e.g. await sendEmail({ to: firm.email, subject: `New inquiry from ${firstName}`, ... })
    console.info("[contact] New inquiry received:", {
      firstName,
      email,
      matter: data.matter,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
