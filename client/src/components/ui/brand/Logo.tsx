import { Link } from "react-router";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <div className={"flex"}>
      <Link to="/" className="relative block group">
        <p
          className={`logo-text tracking-tight leading-none pb-1 border-b
            ${className ? ` ${className}` : "text-[1.6rem] md:text-[1.7rem]"} ${
              variant === "light"
                ? "font-light text-secondary-300/90 "
                : "font-semibold text-primary"
            } `}
        >
          NORDSTIL
        </p>
      </Link>
    </div>
  );
}

export default Logo;
