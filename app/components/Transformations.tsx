type Testimonial = {
  quote: string;
  name: string;
  result: string;
};

const FEATURED: Testimonial[] = [
  {
    quote:
      "The best gym, the best trainer. Mr. Ashfaq trained my brother Faisal Sadiq — who won the title of Mr. Lahore in 2021. Credit goes to Mr. Ashfaq Butt.",
    name: "Asher Sadiq",
    result: "Mr. Lahore · 2021",
  },
  {
    quote:
      "I joined three months ago at 64 kg. With Ma'am Shumaila's guidance, I'm now at 54 kg. The environment is friendly, supportive, and easy to keep showing up to.",
    name: "Abi",
    result: "−10 kg · 3 months",
  },
];

const COMPACT: Testimonial[] = [
  {
    quote:
      "This gym feels like a second home. The moment you walk in, you're part of the fam. It's not just fitness — it's a squad that pushes you to be your best, and the trainers treat you like family.",
    name: "Touqeer Abdul Joiya",
    result: "Member",
  },
  {
    quote:
      "I've been a member here for four years. The atmosphere is consistently welcoming and motivating. Mr. Ashfaq Butt is professional, approachable, and always ready to help. The team takes real pride in the facility.",
    name: "Ahmad Zia",
    result: "4-year member",
  },
  {
    quote:
      "This gym is my stress-free place where I feel motivated and strong. The environment is positive, clean, and very encouraging. Special thanks to Trainer Tehreem for her professional guidance.",
    name: "Rabia Ameen",
    result: "Coached by Tehreem",
  },
];

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="h-6 w-6 text-red-600"
    >
      <path d="M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0 0 0Zm10 0h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0 0 0Z" />
    </svg>
  );
}

export default function Transformations() {
  return (
    <section
      id="results"
      className="relative border-t border-zinc-900 bg-zinc-950 bg-noise py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top stats banner */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800 md:grid-cols-3">
          {[
            { value: "12+ yrs", label: "Coaching tenure" },
            { value: "10 AM – 5 PM", label: "Female-only hours" },
            { value: "5 PM – 11:30", label: "Co-ed evening" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-950 px-6 py-8 text-center md:px-8 md:py-10"
            >
              <p className="font-display text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="mt-20 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-red-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Real Results
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold uppercase leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Members.
            <br />
            <span className="text-red-600">Not just numbers.</span>
          </h2>
        </div>

        {/* Featured row — 2 large cards */}
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {FEATURED.map((t) => (
            <li
              key={t.name}
              className="group relative flex flex-col rounded-3xl border border-zinc-800 bg-background p-8 transition-colors hover:border-red-600/60 lg:p-10"
            >
              <QuoteMark />
              <p className="mt-6 flex-1 text-lg leading-relaxed text-zinc-200 lg:text-xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-end justify-between border-t border-zinc-800 pt-6">
                <div>
                  <p className="font-display text-xl font-semibold uppercase tracking-tight text-white">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Verified Google review
                  </p>
                </div>
                <span className="rounded-full border border-red-600/40 bg-red-600/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-400">
                  {t.result}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Compact row — 3 smaller cards */}
        <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {COMPACT.map((t) => (
            <li
              key={t.name}
              className="group relative flex flex-col rounded-2xl border border-zinc-800 bg-background p-6 transition-colors hover:border-red-600/60"
            >
              <QuoteMark />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-zinc-800 pt-4">
                <p className="font-display text-base font-semibold uppercase tracking-tight text-white">
                  {t.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-red-500">
                  {t.result}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Review CTA */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-zinc-800 bg-background p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/15 blur-3xl"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="mb-3 flex items-center gap-1 text-red-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                    className="h-5 w-5"
                  >
                    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
                  </svg>
                ))}
              </div>
              <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                Training with us?
                <br />
                <span className="text-red-500">Tell us how it went.</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                A two-minute review on Google helps us reach more people who
                are serious about getting in shape.
              </p>
            </div>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJCyn1cgAHGTkRid3S98N7_s0"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-red-500 hover:shadow-[0_0_40px_-5px_rgba(220,38,38,0.6)]"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
                className="h-4 w-4"
              >
                <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
              </svg>
              Leave a Google Review
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
