import type { ReactNode } from "react";

type Facility = {
  title: string;
  description: string;
  icon: ReactNode;
};

const FACILITIES: Facility[] = [
  {
    title: "Strength Training Zone",
    description:
      "Heavy plates, calibrated bars, and rigs built for serious compound work — squat, pull, press without compromise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-7 w-7">
        <path
          d="M2 12h2M22 12h-2M6 7v10M18 7v10M9 5v14M15 5v14M6 12h12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Cardiovascular Zone",
    description:
      "A full line-up of cardio machines — treadmills, bikes, ellipticals — programmed for fat loss, endurance, and conditioning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-7 w-7">
        <path
          d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 1.4-.3 2.7-.9 3.9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 14h4l2-3 3 6 2-4h7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Certified Personal Coaching",
    description:
      "1-on-1 programming with certified trainers. Goal-led plans, weekly check-ins, and the accountability that gets results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-7 w-7">
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 21c1-4.5 4.5-7 8-7s7 2.5 8 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Nutrition & Diet Plans",
    description:
      "Certified dietitians design your plan around your goals — fat loss, muscle gain, performance — so the gym work actually compounds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-7 w-7">
        <path
          d="M12 3c4 0 7 3 7 7 0 5-4 11-7 11s-7-6-7-11c0-4 3-7 7-7Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 3c-1.5 1.5-2 3-2 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Female-Only Hours",
    description:
      "Dedicated women-only timing 10 AM – 5 PM, coached by certified female trainers. Comfortable, focused, no compromises.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-7 w-7">
        <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 14v8M9 19h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Co-Ed Hours",
    description:
      "Open to all members — mornings 6 AM – 9:30 AM and evenings 5 PM – 11:30 PM. Train before work or after.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-7 w-7">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="relative border-t border-zinc-900 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                The Facility
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Built for serious work.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-zinc-400">
            A full-service gym in Pak Arab Housing Society — strength, cardio,
            nutrition, and certified coaching, with separate timings for women
            and a co-ed floor in morning and evening.
          </p>
        </div>

        {/* Grid */}
        <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-900 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility) => (
            <li
              key={facility.title}
              className="group relative bg-background p-8 transition-colors duration-300 hover:bg-zinc-950 lg:p-10"
            >
              {/* Icon */}
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-300 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600/10 group-hover:text-red-500">
                {facility.icon}
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-tight text-white">
                {facility.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {facility.description}
              </p>

              {/* Animated red underline */}
              <span
                aria-hidden
                className="mt-6 block h-px w-12 bg-zinc-800 transition-all duration-300 group-hover:w-full group-hover:bg-red-600"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
