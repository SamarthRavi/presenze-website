import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          size === "md" ? "px-6 py-3 text-sm" : "px-8 py-4 text-base",
          variant === "primary" &&
            "bg-primary-600 text-white shadow-button-primary hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-button-hover active:translate-y-0 dark:bg-primary-500 dark:hover:bg-primary-600",
          variant === "secondary" &&
            "glass text-slate-900 shadow-card hover:-translate-y-0.5 hover:bg-white hover:shadow-card-hover dark:text-white dark:hover:bg-white/15",
          variant === "ghost" &&
            "text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-400",
          className
        )}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";
