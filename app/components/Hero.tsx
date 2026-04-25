import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pb-24 pt-32 md:pb-32 md:pt-36 lg:pt-40">
      {/* Ambient red glow anchored behind the portrait column */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-[640px] w-[640px] rounded-full bg-red-600/20 blur-[140px]"
      />
      {/* Faint diagonal grid suggestion on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.12),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        {/* ───────────── Image column (5/12) ───────────── */}
        <div className="relative lg:col-span-5">
          {/* Offset red accent block — sits behind & right of the portrait */}
          <div
            aria-hidden
            className="absolute inset-y-6 -right-3 left-12 rounded-3xl bg-red-600 sm:-right-4 sm:left-16 lg:-right-6 lg:left-10"
          />

          {/* Portrait frame: aspect-ratio matches the source 642x960 (~3/4) */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
            <Image
              src="/ashfaq-personal-trainer-profile.jpg"
              alt="Ashfaq, head personal trainer at Ashfaq Butt Fitness Zone"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />

            {/* Bottom fade — blends portrait into the page background */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent"
            />

            {/* Eyebrow tag overlaid on the image */}
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Founder & Head Coach
            </div>

            {/* Coach name plate at the bottom of image */}
            <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
              <p className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-white">
                Ashfaq Butt
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-zinc-300">
                Mr. Pakistan · South Asian Gold Medalist
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-red-500">
                Mr. Universe Gold Medalist
              </p>
            </div>
          </div>

          {/* Floating stat card — overlaps bottom-left of portrait */}
          <div className="absolute -bottom-8 -left-2 hidden w-56 rounded-2xl border border-zinc-800 bg-zinc-950/95 p-5 shadow-2xl shadow-black/60 backdrop-blur sm:block">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              Avg. client progress
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-white">
                +38%
              </span>
              <span className="text-xs text-zinc-400">strength · 12 wks</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full w-[78%] rounded-full bg-red-600" />
            </div>
          </div>
        </div>

        {/* ───────────── Copy column (7/12) ───────────── */}
        <div className="relative flex flex-col justify-center lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-3 self-start">
            <span className="h-px w-10 bg-red-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Personal Training
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Train with
            <br />
            <span className="text-red-600">Ashfaq.</span>
            <br />
            Forge your edge.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            One-on-one coaching built around your body, your goals, and the way
            you actually live. Strength, conditioning, recovery — engineered for
            people who refuse to plateau.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-red-500 hover:shadow-[0_0_40px_-5px_rgba(220,38,38,0.6)]"
            >
              Start Training
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
            </Link>
            <Link
              href="#facilities"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white"
            >
              Explore the Gym
            </Link>
          </div>

          {/* Stat row */}
          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-zinc-900 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Clients coached
              </dt>
              <dd className="mt-2 font-display text-3xl font-bold text-white">
                400+
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Avg. intensity
              </dt>
              <dd className="mt-2 font-display text-3xl font-bold text-white">
                92<span className="text-red-600">%</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Years coaching
              </dt>
              <dd className="mt-2 font-display text-3xl font-bold text-white">
                12
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
