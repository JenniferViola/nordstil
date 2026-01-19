import * as React from "react";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type StarRatingProps = {
  value?: number;
  defaultValue?: number;
  size?: number;
  max?: number;
  readOnly?: boolean;
  onChange?: (value: number) => void;
  className?: string;
};

export function StarRating({
  value: controlledValue,
  defaultValue = 3,
  max = 5,
  readOnly = false,
  onChange,
  className,
  size = 15,
}: StarRatingProps) {
  const [value, setValue] = React.useState(defaultValue);
  const [hover, setHover] = React.useState<number | null>(null);

  const isControlled = controlledValue !== undefined;
  const current = isControlled ? controlledValue : value;

  const updateValue = (newValue: number) => {
    if (readOnly) return;
    if (!isControlled) setValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (readOnly) return;

    if (event.key === "ArrowRight") {
      updateValue(Math.min(max, index + 2));
    }

    if (event.key === "ArrowLeft") {
      updateValue(Math.max(1, index));
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Rating"
      className={cn("inline-flex gap-0.5 cursor-pointer", className)}
      onMouseLeave={() => setHover(null)}
    >
      {Array.from({ length: max }).map((_, index) => {
        const active = index < (hover ?? current);

        return (
          <button
            key={index}
            type="button"
            role="radio"
            aria-checked={index + 1 === current}
            disabled={readOnly}
            onClick={() => updateValue(index + 1)}
            onMouseEnter={() => !readOnly && setHover(index + 1)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              `rounded-full p-0.5 focus-visible:ring-2 focus-visible:ring-ring
              cursor-pointer`,
              readOnly && "cursor-default",
            )}
          >
            <StarIcon
              size={size}
              className={cn(
                "transition-colors stroke-current",
                active ? "fill-current" : "fill-none",
              )}
              aria-hidden="true"
            />
          </button>
        );
      })}
    </div>
  );
}
