import { Link } from "react-router";

function Logo() {
  return (
    <div className="flex">
      <Link to="/" className="relative block group">
        <p
          className="logo-text text-[1.6rem] md:text-[1.7rem] font-semibold
            tracking-tight text-primary leading-none pb-1 border-b"
        >
          NORDSTIL
        </p>
      </Link>
    </div>
  );
}

export default Logo;
