"use client";

import Image from "next/image";
import { useState } from "react";

interface VibesGalleryProps {
  photos: string[];
  photoLabels: Record<string, string>;
}

export function VibesGallery({ photos, photoLabels }: VibesGalleryProps) {
  const [loadedPhotos, setLoadedPhotos] = useState<Set<string>>(new Set());

  const handlePhotoLoad = (photo: string) => {
    setLoadedPhotos((prev) => new Set(prev).add(photo));
  };

  // Distribute photos into columns row-first so visual order matches array order
  const distributeIntoColumns = (items: string[], numCols: number) => {
    const cols: string[][] = Array.from({ length: numCols }, () => []);
    for (let i = 0; i < items.length; i++) {
      cols[i % numCols].push(items[i]);
    }
    return cols;
  };

  const cols1 = distributeIntoColumns(photos, 1);
  const cols2 = distributeIntoColumns(photos, 2);
  const cols3 = distributeIntoColumns(photos, 3);

  const renderPhoto = (photo: string) => (
    <div key={photo} className="mb-4">
      <div className="rounded-lg border border-border overflow-hidden bg-card">
        <div className="relative w-full">
          {!loadedPhotos.has(photo) && (
            <div className="absolute inset-0 bg-muted/30 animate-pulse" />
          )}
          <Image
            src={`/vibes/${photo}`}
            alt={photoLabels[photo] || ""}
            width={600}
            height={600}
            className={`w-full h-auto transition-opacity duration-300 ${
              loadedPhotos.has(photo) ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => handlePhotoLoad(photo)}
          />
        </div>
        {photoLabels[photo] && (
          <div className="px-3 py-2 border-t border-border">
            <p className="text-xs text-muted-foreground">
              {photoLabels[photo]}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile: 1 column */}
      <div className="md:hidden">{cols1[0].map(renderPhoto)}</div>

      {/* Tablet: 2 columns */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 items-start">
        {cols2.map((col, i) => (
          <div key={i}>{col.map(renderPhoto)}</div>
        ))}
      </div>

      {/* Desktop: 3 columns */}
      <div className="hidden lg:grid grid-cols-3 gap-4 items-start">
        {cols3.map((col, i) => (
          <div key={i}>{col.map(renderPhoto)}</div>
        ))}
      </div>
    </>
  );
}
