"use client";

import { RefObject, useState } from "react";

export function useRelativeMouse(ref: RefObject<HTMLElement>) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  const onMouseLeave = () => setPos({ x: 0, y: 0 });

  return { pos, onMouseMove, onMouseLeave };
}
