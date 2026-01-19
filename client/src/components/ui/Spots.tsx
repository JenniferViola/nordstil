// Spots.tsx
import { Link } from "react-router";
import type { Spot as SpotsType } from "@/types/spots";

interface SpotsProps {
  spots: SpotsType[];
}

export default function Spots({ spots }: SpotsProps) {
  return (
    <section id="spots-container" className="flex gap-2">
      {spots.map((spot) => (
        <Link
          key={spot.id}
          to={spot.link_url}
          className="flex-1 relative text-center shadow-md overflow-hidden"
        >
          <div id="aspect-ratio-wrapper" className="relative aspect-3/2 w-full">
            <img
              src={spot.img_url}
              alt={spot.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover rounded-sm"
            />
          </div>
          <div
            className="absolute inset-0 bg-linear-to-t from-black/55
              via-black/20 to-transparent"
          ></div>
          <div
            id="spot-content"
            className="flex flex-col gap-2 absolute top-50 w-full justify-center
              items-center"
          >
            <p className="text-3xl text-secondary-300">{spot.title}</p>
            <div className="divider-l"></div>
            <p className="text-base text-secondary-300">{spot.subtitle}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
