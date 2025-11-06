"use client";

import { useState } from "react";

export function CozyFace() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="inline-block transition-transform duration-200 cursor-default select-none"
      style={{
        transform: isHovered ? "rotate(180deg)" : "rotate(0deg)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      :3
    </span>
  );
}

