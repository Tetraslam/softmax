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

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {photos.map((photo) => (
        <div key={photo} className="break-inside-avoid mb-4">
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
      ))}
    </div>
  );
}
