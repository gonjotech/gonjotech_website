import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
      privacyConsent,
      honeypot,
    } = body;

    // 1. Honeypot check for automated bot spam
    if (honeypot && honeypot.length > 0) {
      // Silently accept bots without doing work
      return NextResponse.json({ success: true, message: "Inquiry received" });
    }

    // 2. Validate mandatory fields
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a project description of at least 10 characters.",
        },
        { status: 400 }
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        {
          success: false,
          error: "You must agree to the privacy policy to submit an inquiry.",
        },
        { status: 400 }
      );
    }

    // 3. Sanitized payload ready for backend delivery (e.g. SMTP / Resend / Webhook / DB)
    const sanitizedPayload = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      phone: phone ? String(phone).trim().slice(0, 40) : null,
      company: company ? String(company).trim().slice(0, 100) : null,
      service: service || "General Software Inquiry",
      budget: budget || "Not specified",
      message: message.trim().slice(0, 3000),
      receivedAt: new Date().toISOString(),
    };

    console.log("[GonjoTech Lead Received]:", {
      name: sanitizedPayload.name,
      email: sanitizedPayload.email,
      service: sanitizedPayload.service,
      timestamp: sanitizedPayload.receivedAt,
    });

    // In a configured environment with SMTP or Resend:
    // if (process.env.RESEND_API_KEY) { await resend.emails.send(...) }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your project inquiry has been securely received by GonjoTech engineering. A technical lead will review your requirements and reach out within 24 hours.",
        data: {
          referenceId: `GT-${Date.now().toString(36).toUpperCase()}`,
        },
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[Contact API Error]:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
