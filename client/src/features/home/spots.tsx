// Spots.tsx
import type { Spot } from "../../types/spots";
import useSpots from "../../hooks/useSpots";

export default function Spots() {
  const spots: Spot[] = useSpots();
  return (
    <section id="spots-container" className="hidden lg:flex gap-2">
      {spots.map((spot) => (
        <a
          key={spot.id}
          href={spot.link_url}
          className="flex-1 relative text-center shadow-md"
        >
          <img
            src={spot.img_url}
            alt={spot.title}
            className="w-full h-78.75 aspect-3/2 object-cover rounded-sm"
          />
          <div className="spot-overlay"></div>
          <div
            id="spot-content"
            className="flex flex-col gap-2 absolute top-50 w-full justify-center
              items-center"
          >
            <p className="text-3xl text-secondary-300">{spot.title}</p>
            <div className="divider-l"></div>
            <p className="text-base text-secondary-300">{spot.subtitle}</p>
          </div>
        </a>
      ))}
    </section>
  );
}
