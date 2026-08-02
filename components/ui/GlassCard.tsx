import { HTMLAttributes, memo } from "react";
import { cn } from "@/lib/utils";

export const GlassCard = memo(function GlassCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("glass-panel p-6", className)} 
      style={{ willChange: 'auto' }}
      {...props}
    >
      {children}
    </div>
  );
});
