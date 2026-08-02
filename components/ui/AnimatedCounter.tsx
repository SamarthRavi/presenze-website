"use client";

import { useCounter } from "@/hooks/useCounter";
import { memo } from "react";

export const AnimatedCounter = memo(function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const { ref, value: current } = useCounter(value, 1600, decimals);

  return (
    <div ref={ref} className="font-display text-4xl font-semibold tabular-nums text-deep-900 dark:text-white md:text-5xl" style={{ willChange: 'contents' }}>
      {current.toFixed(decimals)}
      <span className="text-signal-500">{suffix}</span>
    </div>
  );
});
