type Coach = {
  name: string;
  role: string;
  rank: "head" | "senior" | "junior";
  bio?: string;
  credentials?: string[];
  initials: string;
};

type CoachGroup = {
  id: string;
  label: string;
  heading: string;
  coaches: Coach[];
};

const GROUPS: CoachGroup[] = [
  {
    id: "male",
    label: "Male Coaches",
    heading: "The men on the floor.",
    coaches: [
      {
        name: "Mr. Ashfaq Ahmad Butt",
        role: "Founder & Head Coach",
        rank: "head",
        bio: "Professional bodybuilder turned coach. Over a decade building champions and serious lifters out of his gym — including Mr. Lahore titleholders.",
        credentials: [
          "Mr. Pakistan",
          "South Asian Games Gold · Bhutan",
          "MM Universe Gold · USA",
          "12+ years coaching",
        ],
        initials: "AB",
      },
      {
        name: "Nouman",
        role: "Senior Trainer",
        rank: "senior",
        bio: "Runs strength and hypertrophy programming for the co-ed sessions.",
        initials: "N",
      },
      {
        name: "Muhammad Raheem",
        role: "Junior Trainer",
        rank: "junior",
        bio: "Assists across the floor and supports new members through onboarding and form work.",
        initials: "MR",
      },
    ],
  },
  {
    id: "female",
    label: "Female Coaches",
    heading: "Female-only coaching team.",
    coaches: [
      {
        name: "Ma'am Shumaila",
        role: "Senior Trainer",
        rank: "senior",
        bio: "Over a decade transforming women's health — she's coached clients through major weight loss, helped members manage chronic illness, and built lasting strength and confidence in the female-only sessions.",
        credentials: [
          "10+ years coaching",
          "Weight-loss specialist",
          "Chronic illness management",
          "Women's strength & conditioning",
        ],
        initials: "S",
      },
      {
        name: "Coach Tehreem",
        role: "Junior Trainer & Nutritionist",
        rank: "junior",
        bio: "Combines academic training in dietetics with internationally accredited personal-training credentials.",
        credentials: [
          "BS Human Nutrition & Dietetics, GCUF",
          "Certified Personal Trainer · Leaders Fitness Academy, UAE",
          "Accredited by PD: Approval",
          "iCREPS-affiliated",
        ],
        initials: "T",
      },
    ],
  },
];

const RANK_ACCENT: Record<Coach["rank"], string> = {
  head: "bg-red-600 text-white",
  senior: "bg-zinc-800 text-white",
  junior: "bg-zinc-900 text-zinc-300",
};

function CoachCard({ coach, featured }: { coach: Coach; featured?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950 transition-colors hover:border-red-600/50 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Decorative initials wall */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[12rem] font-bold leading-none tracking-tight text-white/[0.035] sm:text-[14rem]"
      >
        {coach.initials}
      </div>
      {/* Soft red glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-red-600/10 blur-3xl"
      />

      <div className="relative flex flex-1 flex-col p-8 lg:p-10">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${RANK_ACCENT[coach.rank]}`}
          >
            {coach.rank === "head"
              ? "Head Coach"
              : coach.rank === "senior"
                ? "Senior"
                : "Junior"}
          </span>
          <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            {coach.role}
          </span>
        </div>

        <h3
          className={`mt-4 font-display font-bold uppercase leading-tight tracking-tight text-white ${
            featured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {coach.name}
        </h3>

        {coach.bio && (
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
            {coach.bio}
          </p>
        )}

        {coach.credentials && coach.credentials.length > 0 && (
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
        )}
      </div>
    </article>
  );
}

export default function Coaches() {
  return (
    <section
      id="training"
      className="relative border-t border-zinc-900 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
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
            Separate male and female-only coaching teams, so every member trains
            in a space designed for them.
          </p>
        </div>

        {/* Groups */}
        <div className="mt-20 space-y-20">
          {GROUPS.map((group) => (
            <div key={group.id}>
              <div className="flex flex-col gap-3 border-b border-zinc-900 pb-6 md:flex-row md:items-end md:justify-between">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-red-600" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-500">
                    {group.label}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                  {group.heading}
                </h3>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {group.coaches.map((coach) => (
                  <CoachCard
                    key={coach.name}
                    coach={coach}
                    featured={coach.rank === "head"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
