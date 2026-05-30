"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import {
  initialContactState,
  sendContactInquiry,
} from "../actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-red-500 hover:shadow-[0_0_40px_-5px_rgba(220,38,38,0.6)] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send Inquiry"}
      <svg
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden
      >
        <path
          d="M4 10h12m0 0-4-4m4 4-4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

const inputClass =
  "w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4 text-sm text-white placeholder-zinc-600 transition-colors focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/30";

export default function Contact() {
  const [state, formAction] = useActionState(
    sendContactInquiry,
    initialContactState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section
      id="contact"
      className="relative border-t border-zinc-900 bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-[480px] w-[480px] rounded-full bg-red-600/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                Contact
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
              Get in touch.
              <br />
              <span className="text-red-600">We'll reply fast.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
              Send us a note about training, memberships, or anything else. We
              read every message and reply within a day.
            </p>
            <dl className="mt-10 space-y-5 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:info@ashfaqbuttfitnesszone.com"
                    className="break-all text-zinc-200 transition-colors hover:text-white"
                  >
                    info@ashfaqbuttfitnesszone.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+923215815566"
                    className="text-zinc-200 transition-colors hover:text-white"
                  >
                    +92 321 5815566
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <form
              ref={formRef}
              action={formAction}
              className="rounded-3xl border border-zinc-900 bg-zinc-950/60 p-6 backdrop-blur sm:p-10"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your full name"
                    className={`mt-2 ${inputClass}`}
                    aria-invalid={Boolean(state.fieldErrors?.name)}
                  />
                  {state.fieldErrors?.name && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {state.fieldErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className={`mt-2 ${inputClass}`}
                    aria-invalid={Boolean(state.fieldErrors?.email)}
                  />
                  {state.fieldErrors?.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {state.fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-phone"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
                >
                  Phone <span className="text-zinc-600">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+92 …"
                  className={`mt-2 ${inputClass}`}
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your goals…"
                  className={`mt-2 ${inputClass} resize-y`}
                  aria-invalid={Boolean(state.fieldErrors?.message)}
                />
                {state.fieldErrors?.message && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {state.fieldErrors.message}
                  </p>
                )}
              </div>

              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="hidden"
              />

              <div className="mt-8 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p
                  aria-live="polite"
                  className={
                    state.status === "success"
                      ? "text-sm text-emerald-400"
                      : state.status === "error"
                        ? "text-sm text-red-500"
                        : "text-xs uppercase tracking-[0.18em] text-zinc-600"
                  }
                >
                  {state.message || "We reply within one business day."}
                </p>
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
