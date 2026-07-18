'use client';

import { useState } from 'react';
import { phone } from '@/lib/site';
import { CheckIcon } from './icons';

// Validation rules from the handoff README: name/email/message required,
// email must match the regex, phone optional.
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type Fields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: '', email: '', phone: '', message: '' };

const LABEL_CLASS = 'mb-[7px] block font-display text-[13px] font-semibold text-ink';
const INPUT_CLASS =
  'w-full rounded-[3px] border border-line-input px-4 py-[14px] text-[15px] text-ink outline-none transition-[border-color,box-shadow] duration-200 focus:border-mint focus:shadow-[0_0_0_3px_rgba(67,195,160,0.15)]';
const ERROR_CLASS = 'mb-3 text-[12.5px] text-error';

function validate(form: Fields): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(form.email)) errors.email = 'Please enter a valid email address.';
  if (!form.message.trim()) errors.message = 'Please tell us a bit about your business.';
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const setField =
    (field: keyof Fields) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setSent(false);
    };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSent(false);
      return;
    }
    setSending(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setSent(true);
      setForm(EMPTY);
      setErrors({});
    } catch {
      setSubmitError(
        `Something went wrong sending your message. Please try again, or call us at ${phone.display}.`,
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {sent && (
        <div
          role="status"
          className="mb-6 flex items-center gap-2.5 rounded border border-success-border bg-mint-tint px-[18px] py-4 text-sm text-success"
        >
          <CheckIcon stroke="#2f8a72" />
          Thanks — your message is ready to send. We’ll be in touch shortly.
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="contact-name" className={LABEL_CLASS}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          value={form.name}
          onChange={setField('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={`${INPUT_CLASS} mb-1`}
        />
        {errors.name && (
          <div id="contact-name-error" role="alert" className={ERROR_CLASS}>
            {errors.name}
          </div>
        )}
        <div className="h-[14px]" aria-hidden />
        <label htmlFor="contact-email" className={LABEL_CLASS}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={setField('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={`${INPUT_CLASS} mb-1`}
        />
        {errors.email && (
          <div id="contact-email-error" role="alert" className={ERROR_CLASS}>
            {errors.email}
          </div>
        )}
        <div className="h-[14px]" aria-hidden />
        <label htmlFor="contact-phone" className={LABEL_CLASS}>
          Phone <span className="font-normal text-[#a7aeb4]">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(770) 000-0000"
          value={form.phone}
          onChange={setField('phone')}
          className={`${INPUT_CLASS} mb-[18px]`}
        />
        <label htmlFor="contact-message" className={LABEL_CLASS}>
          Tell us about your business
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Where are you in the process, and what are your goals?"
          value={form.message}
          onChange={setField('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${INPUT_CLASS} mb-1 resize-y`}
        />
        {errors.message && (
          <div id="contact-message-error" role="alert" className={ERROR_CLASS}>
            {errors.message}
          </div>
        )}
        {submitError && (
          <div role="alert" className="mt-2 text-[12.5px] text-error">
            {submitError}
          </div>
        )}
        <div className="h-5" aria-hidden />
        <button
          type="submit"
          disabled={sending}
          className="w-full cursor-pointer rounded-sm border-0 bg-mint p-[17px] font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-[250ms] hover:bg-mint-dark disabled:cursor-default disabled:opacity-60"
        >
          Schedule a Meeting
        </button>
      </form>
    </>
  );
}
