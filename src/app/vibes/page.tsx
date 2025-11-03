import fs from "fs";
import Image from "next/image";
import path from "path";

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
  "godfather.webp": "prom"
  // add more captions by mapping filename to caption text
};

export default function VibesPage() {
  const photos = getPhotos();

  if (photos.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight">vibes</h1>
            <p className="text-muted-foreground">moments from the house</p>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            no photos yet — add some to public/vibes/
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">vibes</h1>
          <p className="text-muted-foreground">moments from the house (will be filled with those once we move in!)</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div key={photo} className="break-inside-avoid mb-4">
              <div className="rounded-lg border border-border overflow-hidden bg-card">
                <div className="relative w-full">
                  <Image
                    src={`/vibes/${photo}`}
                    alt={photoLabels[photo] || ""}
                    width={600}
                    height={600}
                    className="w-full h-auto"
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
      </div>
    </div>
  );
}
