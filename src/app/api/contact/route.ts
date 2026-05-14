import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
// Note: You need to add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, subject, dates, travelers, message } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real production environment, you would use a verified domain.
    // For testing without a verified domain, Resend requires sending TO the email associated with the API key.
    // Replace 'delivered@resend.dev' with your verified email in production.
    const toEmail = process.env.CONTACT_EMAIL_TO || 'delivered@resend.dev';

    const { data, error } = await resend.emails.send({
      from: 'Hippo Adventures <onboarding@resend.dev>', // Update with your verified domain in production
      to: [toEmail],
      subject: `New Inquiry: ${subject || 'General'} from ${fullName}`,
      html: `
        <h2>New Contact Inquiry from Website</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
        <p><strong>Preferred Dates:</strong> ${dates || 'Not specified'}</p>
        <p><strong>Travelers:</strong> ${travelers || 'Not specified'}</p>
        <br />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
