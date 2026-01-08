type DividerProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Divider({ variant = "dark", className }: DividerProps) {
  return (
    <hr
      className={`border-b-0 ${
        variant === "light"
          ? "border-secondary-300/50"
          : "border-primary-600/50"
        }${className ? ` ${className}` : ""}`}
    />
  );
}
