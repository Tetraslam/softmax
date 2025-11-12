"use client";

import Image from "next/image";
import { useState } from "react";

interface LoadingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  unoptimized?: boolean;
}

export function LoadingImage({
  src,
  alt,
  width,
  height,
  className = "",
  unoptimized = false,
}: LoadingImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div
          className="absolute inset-0 bg-muted/30 animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={unoptimized}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
