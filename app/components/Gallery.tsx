"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

const AUTOSCROLL_INTERVAL_MS = 3500;

// ──────────────────────────────────────────────────────────────────
// Edit these paths after dropping your media files in /public/gallery/
// File naming is just a convention — pick anything you like and update here.
// ──────────────────────────────────────────────────────────────────
const VIDEO = {
  src: "/gallery/video.mp4",
  // Shown while the video loads / on devices that block autoplay.
  poster: "/ashfaq-personal-trainer-profile.jpg",
};

// Drop the photos in /public/gallery/ named 1.jpeg, 2.jpeg, … up to PHOTO_COUNT.
// (Change the extension below if you're using .jpg / .png / .webp.)
const PHOTO_COUNT = 30;
const PHOTO_EXT = "jpeg";
const PHOTO_ALT = "Mr. Ashfaq Butt — competition and photoshoot";

const PHOTOS = Array.from(
  { length: PHOTO_COUNT },
  (_, i) => `/gallery/${String(i + 1)}.${PHOTO_EXT}`,
);

// Fisher–Yates shuffle (returns a new array, doesn't mutate input).
function shuffle<T>(input: readonly T[]): T[] {
  const out = [...input];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Lazy, module-level cache so the shuffle is computed once per page load on
// the client and stays stable across re-renders.
let cachedShuffle: readonly string[] | null = null;
const getClientPhotos = (): readonly string[] => {
  if (cachedShuffle === null) cachedShuffle = shuffle(PHOTOS);
  return cachedShuffle;
};
const getServerPhotos = (): readonly string[] => PHOTOS;
const noopSubscribe = () => () => {};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-5 w-5">
      <path
        d={
          direction === "left"
            ? "M16 10H4m0 0 4-4m-4 4 4 4"
            : "M4 10h12m0 0-4-4m4 4-4 4"
        }
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Gallery() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  // SSR + hydration render in original order; after hydration the snapshot
  // switches to the cached shuffled order. No hydration mismatch.
  const photos = useSyncExternalStore(
    noopSubscribe,
    getClientPhotos,
    getServerPhotos,
  );

  // Scroll by ~2 cards in the requested direction.
  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstSlide = el.querySelector<HTMLElement>("li");
    const slideWidth = firstSlide ? firstSlide.offsetWidth : 280;
    const gap = 16; // matches `gap-4`
    el.scrollBy({ left: dir * (slideWidth + gap) * 2, behavior: "smooth" });
  };

  // Autoscroll — advance one card every few seconds.
  // Pauses on hover, touch, hidden tab, and respects prefers-reduced-motion.
  useEffect(() => {
    if (paused) return;
    const el = scrollerRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (reducedMotion.matches) return;

    const tick = () => {
      const firstSlide = el.querySelector<HTMLElement>("li");
      const slideWidth = firstSlide ? firstSlide.offsetWidth : 280;
      const step = slideWidth + 16; // gap-4
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    };

    const id = window.setInterval(tick, AUTOSCROLL_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  // Pause autoscroll when the tab isn't visible.
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () =>
      document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <section
      id="gallery"
      className="relative border-t border-zinc-900 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-red-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
                Get to know your Trainer
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Coach Ashfaq.
              <br />
              <span className="text-red-600">In motion.</span>
            </h2>
          </div>

          {/* Desktop carousel controls — hidden on mobile (swipe instead) */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              aria-label="Previous photos"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-white transition-colors hover:border-red-600 hover:bg-red-600"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              aria-label="Next photos"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 text-white transition-colors hover:border-red-600 hover:bg-red-600"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        {/* Featured video */}
        <figure className="group relative mt-16 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
          <video
            className="aspect-video w-full object-cover"
            src={VIDEO.src}
            poster={VIDEO.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          {/* Top-left tag */}
          <figcaption className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            In a competition
          </figcaption>
          {/* Subtle bottom gradient for polish */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent"
          />
        </figure>

        {/* Photo carousel */}
        <div className="relative mt-8">
          <ul
            ref={scrollerRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {photos.map((src) => (
              <li
                key={src}
                className="group relative aspect-[4/5] w-60 shrink-0 snap-start overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900 sm:w-72 lg:w-80"
              >
                <Image
                  src={src}
                  alt={PHOTO_ALT}
                  fill
                  sizes="(max-width: 640px) 15rem, (max-width: 1024px) 18rem, 20rem"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-80"
                />
              </li>
            ))}
          </ul>

          {/* Edge fades — hint there's more on either side */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent"
          />

          {/* Mobile swipe hint */}
          <p className="mt-2 text-center text-[11px] uppercase tracking-[0.22em] text-zinc-600 md:hidden">
            Swipe to browse →
          </p>
        </div>
      </div>
    </section>
  );
}
