import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

import type { HTMLMotionProps } from "motion/react";

type RippleButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
};

export function RippleButton({
  children,
  className,
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, ripple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600);

    onClick?.(event);
  };

  return (
    <motion.button
      ref={ref}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden rounded-lg px-4 py-2 text-sm font-medium",
        "bg-black text-white cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}

      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 12, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute h-5 w-5 rounded-full bg-white pointer-events-none"
          style={{
            top: ripple.y - 10,
            left: ripple.x - 10,
          }}
        />
      ))}
    </motion.button>
  );
}
