import Link from "next/link";

const NAV_LINKS = [
  { label: "Facilities", href: "#facilities" },
  { label: "Coaches", href: "#training" },
  { label: "Gallery", href: "#gallery" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link
          href="/"
          className="font-display text-xl font-bold uppercase leading-none tracking-[0.12em] text-white sm:text-2xl"
        >
          Ashfaq Butt <span className="text-red-600">Fitness Zone</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-full border border-zinc-700 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-red-600 hover:bg-red-600 md:inline-block"
        >
          Book Session
        </Link>
      </div>
    </header>
  );
}
