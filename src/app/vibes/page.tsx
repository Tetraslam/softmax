import fs from "fs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "vibes — softmax",
  description: "moments from the house",
};

import path from "path";
import { VibesGallery } from "@/components/vibes-gallery";

function getPhotos() {
  const vibesDir = path.join(process.cwd(), "public", "vibes");
  try {
    const files = fs.readdirSync(vibesDir);
    const photos = files.filter((file) =>
      /\.(png|jpg|jpeg|webp|gif)$/i.test(file),
    );
    // Sort by modification time, newest first
    photos.sort((a, b) => {
      const statA = fs.statSync(path.join(vibesDir, a));
      const statB = fs.statSync(path.join(vibesDir, b));
      return statB.mtimeMs - statA.mtimeMs;
    });
    return photos;
  } catch {
    return [];
  }
}

const photoLabels: Record<string, string> = {
  "goa.webp": "beach day in goa",
  "beans.webp": "friendly beans in boston!",
  "charles.webp": "the charles river",
  "dorm.webp": "shresht with parents",
  "meinmydorm.webp": "shresht in his dorm right after moving in",
  "hackbrown.webp": "shresht and friends going to Hack Brown 2025",
  "godfather.webp": "prom",
  "bill-hiking.jpg": "bill and the boys find themselves in the woods",
  "bill-ma-statehouse.jpg": "delivering petitions to ma. state house",
  "billmitfriendsandshreshtdinner.webp": "squad dinner in the city",
  "67.webp": "SIX SEVEN SIX SEVEN SIX SEVE-",
  "heseesyou.webp": "he sees you",
  "art_gallery.webp":
    "shresht, xiaole, and bill go to the intersection of art and technology gallery",
  "brunch.webp": "house brunch: salmon, pasta, and anime",
  "bill_whoa.webp": "bill has a moment in the kitchen",
  "dinner_2.webp": "late night kitchen hangs",
  "reading.webp": "the full squad assembles",
  "bill_stare.webp": "bill vs the candle",
  "dinner.webp": "shresht serves pasta night",
  "woodlands.webp": "grocery run at the market",
};

export default function VibesPage() {
  const photos = getPhotos();

  if (photos.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              vibes
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              moments from the house
            </p>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            no photos yet — add some to public/vibes/
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            vibes
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            moments from the house
          </p>
        </div>

        <VibesGallery photos={photos} photoLabels={photoLabels} />
      </div>
    </div>
  );
}
