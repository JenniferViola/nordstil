// Hero.tsx
import { Link } from "react-router";
import { Divider } from "@/components/ui/Divider";
import type { Hero as HeroType } from "@/types/hero";

interface HeroProps {
  hero: HeroType;
}

export default function Hero({ hero }: HeroProps) {
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
