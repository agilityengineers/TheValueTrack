import { NextResponse } from 'next/server';

// Mirrors the client-side rules (see components/ContactForm.tsx / handoff README).
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  const raw = (body ?? {}) as Partial<Record<keyof ContactPayload, unknown>>;
  const submission: ContactPayload = {
    name: typeof raw.name === 'string' ? raw.name.trim() : '',
    email: typeof raw.email === 'string' ? raw.email.trim() : '',
    phone: typeof raw.phone === 'string' ? raw.phone.trim() : '',
    message: typeof raw.message === 'string' ? raw.message.trim() : '',
  };

  const errors: Partial<Record<keyof ContactPayload, string>> = {};
  if (!submission.name) errors.name = 'Please enter your name.';
  if (!submission.email) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(submission.email)) errors.email = 'Please enter a valid email address.';
  if (!submission.message) errors.message = 'Please tell us a bit about your business.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // ==========================================================================
  // TODO: Connect a real email / form service before go-live.
  // Replace the console.log below with delivery to e.g.:
  //   - a transactional email API (Resend, SendGrid, Postmark) sending to the
  //     Value Track inbox,
  //   - a form service (Formspree, Basin) or CRM webhook (HubSpot),
  // and add spam protection (honeypot / rate limit / turnstile) as needed.
  // ==========================================================================
  console.log('[contact] New submission:', {
    ...submission,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
