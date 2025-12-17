// Hero.tsx

import useHero from "../../hooks/useHero";
import type { Hero as HeroType } from "../../types/hero";

export default function Hero() {
  const hero: HeroType | null = useHero();
  if (!hero) return null;

  return (
    <section className="hero">
      <div className="hero-inner">
        <img src={hero.img_url} alt={hero.title} className="hero-image" />

        <div className="hero-overlay" />

        <div className="hero-content flex flex-col gap-2">
          <p className="hero-tagline">{hero.tagline} · from 499 SEK</p>
          <h1 className="hero-title">{hero.title}</h1>
          <div className="divider-l w-full opacity-80"></div>
          <p className="hero-text">{hero.text}</p>
        </div>
      </div>
    </section>
  );
}
