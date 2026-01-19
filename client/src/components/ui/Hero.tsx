// Hero.tsx
import { Link } from "react-router";
import { Divider } from "@/components/ui/Divider";
import type { Hero as HeroType } from "@/types/hero";

interface HeroProps {
  hero: HeroType;
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative w-full">
      <div
        id="hero-container"
        className="relative mx-auto h-[80vh] w-full overflow-hidden"
      >
        <img
          src={hero.img_url}
          alt={hero.title}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        <div
          id="overlay"
          className="absolute inset-0 bg-linear-to-t from-black/55 via-black/20
            to-transparent"
        />

        <Link
          to="/"
          id="content"
          className="absolute inset-x-0 bottom-0 px-4 pb-5 sm:px-6 sm:pb-7
            lg:w-1/2 flex flex-col gap-2"
        >
          <p id="tagline" className="text-xs text-secondary-500/80 sm:text-sm">
            {hero.tagline}
          </p>
          <h1 id="title" className="text-2xl text-secondary-500 lg:text-3xl">
            {hero.title}
          </h1>
          <Divider variant="light" className="w-full opacity-50" />
          <p id="text" className="text-xs text-secondary-500/90 lg:text-sm">
            {hero.text}
          </p>
        </Link>
      </div>
    </section>
  );
}
