// Spots.jsx

import useSpots from "../hooks/useSpots";

export default function Spots() {
  const spots = useSpots();

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
            className="w-full h-[315px] aspect-3/2 object-cover rounded-sm"
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
/*   .spot-item img {
    width: 100%;
    height: 315px;
    aspect-ratio: 10 / 7;
    object-fit: cover;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
    display: block; 
  } */
