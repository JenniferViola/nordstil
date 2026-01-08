// Hero.tsx
import { Divider } from "@/components/ui/Divider";
import useHero from "@/hooks/useHero";
import type { Hero as HeroType } from "@/types/hero";
import { Link } from "react-router";

export default function Hero() {
  const hero: HeroType | null = useHero();
  if (!hero) return null;

  return (
    <section className="hero">
      <div className="hero-inner">
        <img src={hero.img_url} alt={hero.title} className="hero-image" />

        <div className="hero-overlay" />

        <Link to="/" className="hero-content flex flex-col gap-2">
          <p className="hero-tagline">{hero.tagline} · from 499 SEK</p>
          <h1 className="hero-title">{hero.title}</h1>
          <Divider variant="light" className="w-full opacity-50" />
          <p className="hero-text">{hero.text}</p>
        </Link>
      </div>
    </section>
  );
}
