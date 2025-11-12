"use client";

import Image from "next/image";
import { useState } from "react";

interface ResidentPhotoProps {
  src: string;
  alt: string;
}

export function ResidentPhoto({ src, alt }: ResidentPhotoProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="shrink-0 relative">
      {isLoading && (
        <div className="absolute inset-0 bg-muted/30 animate-pulse rounded-lg w-20 h-20 sm:w-24 sm:h-24" />
      )}
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        className={`rounded-lg object-cover w-20 h-20 sm:w-24 sm:h-24 transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
