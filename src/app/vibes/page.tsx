import fs from "fs";
import path from "path";
import { VibesGallery } from "@/components/vibes-gallery";

function getPhotos() {
  const vibesDir = path.join(process.cwd(), "public", "vibes");
  try {
    const files = fs.readdirSync(vibesDir);
    return files.filter((file) => /\.(png|jpg|jpeg|webp|gif)$/i.test(file));
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
  // add more captions by mapping filename to caption text
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
            moments from the house (will be filled with those once we move in!)
          </p>
        </div>

        <VibesGallery photos={photos} photoLabels={photoLabels} />
      </div>
    </div>
  );
}
