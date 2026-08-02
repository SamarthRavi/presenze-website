import { cn } from "@/lib/utils";
import { memo } from "react";

export const SignalRings = memo(function SignalRings({
  className,
  size = 520,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("signal-rings", className)}
      style={{ width: size, height: size, willChange: 'transform' }}
      aria-hidden
    >
      <span
        className="h-24 w-24 animate-ring1"
        style={{ animationDelay: "0s", willChange: 'opacity, transform' }}
      />
      <span 
        className="h-24 w-24 animate-ring2"
        style={{ willChange: 'opacity, transform' }}
      />
      <span 
        className="h-24 w-24 animate-ring3"
        style={{ willChange: 'opacity, transform' }}
      />
      <div className="h-24 w-24 rounded-full bg-primary-500/10 dark:bg-secondary-500/10" />
    </div>
  );
});
