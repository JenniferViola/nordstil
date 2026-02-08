// Spots.tsx
import { Link } from "react-router";
import type { Spot as SpotsType } from "@/types/spots";
import { Divider } from "./Divider";

interface SpotsProps {
  spots: SpotsType[];
}

export default function Spots({ spots }: SpotsProps) {
  return (
    <section
      id="spots-container"
      className="hidden lg:flex lg:gap-2 box-border"
    >
      {spots.map((spot) => (
        <Link
          key={spot.id}
          to={spot.link_url}
          className="flex-1 relative aspect-3/2 text-center shadow-md
            overflow-hidden"
        >
          <div id="aspect-ratio-wrapper" className="relative aspect-3/2 w-full">
            <img
              src={spot.img_url}
              alt={spot.title}
              className="absolute inset-0 w-full object-cover rounded-sm"
            />
          </div>
          <div
            id="overlay"
            className="absolute inset-0 bg-linear-to-t from-black/70
              via-black/40 to-transparent"
          ></div>
          <div
            id="spot-content"
            className="absolute flex flex-col gap-1 inset-0 justify-center
              items-center"
          >
            <p className="text-3xl font-medium text-secondary-500">
              {spot.title}
            </p>
            <Divider variant="light" className="w-[80%] opacity-70" />
            <p className="text-base text-secondary-500/90">{spot.subtitle}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
