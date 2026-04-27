import Image from "next/image";

type Coach = {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image?: string;
  initials: string;
};

const COACHES: Coach[] = [
  {
    name: "Mr. Ashfaq Ahmad Butt",
    role: "Founder & Head Coach",
    bio: "A decorated bodybuilder turned coach. Mr. Ashfaq has spent over a decade building champions and serious lifters out of Pak Arab Housing Society — including Mr. Lahore titleholders.",
    credentials: [
      "Mr. Pakistan",
      "South Asian Games Gold · Bhutan",
      "MM Universe Gold · USA",
      "12+ years coaching",
    ],
    image: "/gallery/1.jpeg",
    initials: "AB",
  },
  {
    name: "Coach Tehreem",
    role: "Head Trainer & Nutritionist",
    bio: "Leads our female-only sessions and nutrition programs. Tehreem combines academic training in dietetics with internationally accredited personal-training credentials.",
    credentials: [
      "BS Human Nutrition & Dietetics, GCUF",
      "Certified Personal Trainer · Leaders Fitness Academy, UAE",
      "Accredited by PD: Approval",
      "iCREPS-affiliated",
    ],
    initials: "T",
  },
];

export default function Coaches() {
  return (
    <section
      id="training"
      className="relative border-t border-zinc-900 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                Meet the Coaches
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Certified. Credentialed.
              <br />
              <span className="text-red-600">Champion-built.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-zinc-400">
            Every program is delivered by a coach who has earned the title.
            Internationally accredited, academically grounded, and on the floor
            with you.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {COACHES.map((coach) => (
            <article
              key={coach.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950 transition-colors hover:border-red-600/50"
            >
              {/* Top: photo or typographic plate */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-900 bg-zinc-900">
                {coach.image ? (
                  <>
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,rgba(220,38,38,0.18),transparent_60%)]">
                    <span className="font-display text-[10rem] font-bold leading-none tracking-tight text-white/[0.04]">
                      {coach.initials}
                    </span>
                    <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      Female Coach
                    </div>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                  {coach.role}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white">
                  {coach.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {coach.bio}
                </p>

                {/* Credential list */}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {coach.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="rounded-full border border-zinc-800 bg-background px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-300"
                    >
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
