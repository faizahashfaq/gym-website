import Link from "next/link";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/Ashfaqbuttofficial/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ashfaq_butt_official/",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-zinc-900 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* CTA strip */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-zinc-900 pb-16 md:flex-row md:items-center">
          <h3 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to train?
            <br />
            <span className="text-red-600">Walk in. Get to work.</span>
          </h3>
          <Link
            href="tel:+923215815566"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-red-500 hover:shadow-[0_0_40px_-5px_rgba(220,38,38,0.6)]"
          >
            Call +92 321 5815566
            <svg
              className="h-4 w-4"
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
          </Link>
        </div>

        {/* Contact grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-xl font-bold uppercase leading-none tracking-[0.12em] text-white sm:text-2xl"
            >
              Ashfaq Butt <span className="text-red-600">Fitness Zone</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">
              A premier strength &amp; fitness facility in Pak Arab Housing
              Society, Lahore. Built and run by Mr. Pakistan, Ashfaq Ahmad
              Butt.
            </p>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
              Visit
            </h4>
            <address className="mt-5 not-italic text-sm leading-relaxed text-zinc-400">
              37-A Main Boulevard
              <br />
              Pak Arab Housing Society
              <br />
              UBL Bank Basement, Ferozepur Road
              <br />
              Lahore, Punjab, Pakistan 54000
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
              Hours
            </h4>
            <dl className="mt-5 space-y-3 text-sm text-zinc-400">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Co-ed (morning)
                </dt>
                <dd className="mt-1 text-white">6:00 AM – 9:30 AM</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Female only
                </dt>
                <dd className="mt-1 text-white">10:00 AM – 5:00 PM</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Co-ed (evening)
                </dt>
                <dd className="mt-1 text-white">5:00 PM – 11:30 PM</dd>
              </div>
            </dl>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Mobile
                </p>
                <Link
                  href="tel:+923215815566"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  +92 321 5815566
                </Link>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Landline
                </p>
                <Link
                  href="tel:+924235463739"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  042-35463739
                </Link>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Email
                </p>
                <Link
                  href="mailto:ashfaqbuttfitnesszone@gmail.com"
                  className="break-all text-zinc-300 transition-colors hover:text-white"
                >
                  ashfaqbuttfitnesszone@gmail.com
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-800 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300 transition-colors hover:border-red-600 hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-zinc-900 pt-8 md:flex-row md:items-center">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            © {new Date().getFullYear()} Ashfaq Butt Fitness Zone. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-600">
            Pak Arab Housing Society · Lahore
          </p>
        </div>
      </div>
    </footer>
  );
}
