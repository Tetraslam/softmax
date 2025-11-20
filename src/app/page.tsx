import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { CozyFace } from "@/components/cozy-face";
import { HomepageGreeting } from "@/components/homepage-greeting";
import { Button } from "@/components/ui/button";

function getLogos() {
  const logosDir = path.join(process.cwd(), "public", "homelogos");
  try {
    const files = fs.readdirSync(logosDir);
    return files.filter((file) => /\.(png|jpg|jpeg|svg|webp)$/i.test(file));
  } catch {
    return [];
  }
}

const logoLinks: Record<string, string> = {
  "openai.png": "https://openai.com",
  "mit.svg": "https://mit.edu",
  "northeastern.png": "https://northeastern.edu",
  "natural.svg": "https://natural.co",
  "sakana.webp": "https://sakana.ai",
  "medialab.png": "https://media.mit.edu",
  "osmosis.png": "https://osmosis.ai",
  "notability.png": "https://notability.com",
  "aws.png": "https://aws.amazon.com",
  "sakana.png": "https://sakana.ai",
  "bain.png": "https://bain.com",
};

export default function Home() {
  const logos = getLogos();
  
  // Calculate empty cells needed for each breakpoint
  const emptyCellsMobile = (3 - (logos.length % 3)) % 3;
  const emptyCellsTablet = (4 - (logos.length % 4)) % 4;
  const emptyCellsDesktop = (5 - (logos.length % 5)) % 5;
  
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            softmax
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            a cozy hacker home in sf where good people build great things{" "}
            <CozyFace />
          </p>
          <HomepageGreeting />
        </div>

        <div className="space-y-6 text-sm sm:text-base text-muted-foreground max-w-2xl">
          <p>
            we&apos;re a group of friends working on ai, fintech, art, music,
            robots, hardware, and everything in between. everyone here is
            exceptionally talented at what they do, but kind above all else!
          </p>
          <p>
            our name comes from the{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Softmax_function"
              className="text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-colors"
            >
              mathematical function
            </Link>
            , and also the fact that we&apos;re just soft and cozy people who
            like building hard things together :)
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/residents">meet the residents</Link>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/join">join us</Link>
          </Button>
        </div>

        <div className="pt-6 sm:pt-8 space-y-3">
          <p className="text-sm text-muted-foreground">building from</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 border border-border overflow-hidden">
            {logos.map((logo) => {
              const isSvg = logo.endsWith(".svg");

              if (logoLinks[logo]) {
                return (
                  <Link
                    key={logo}
                    href={logoLinks[logo]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center h-20 sm:h-24 border-r border-b border-border nth-[3n]:border-r-0 sm:nth-[3n]:border-r sm:nth-[4n]:border-r-0 lg:nth-[4n]:border-r lg:nth-[5n]:border-r-0 transition-colors hover:bg-accent/10"
                  >
                    <Image
                      src={`/homelogos/${logo}`}
                      alt=""
                      width={96}
                      height={32}
                      unoptimized={isSvg}
                      className="h-8 w-auto object-contain px-4 opacity-60 grayscale dark:invert transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={logo}
                  className="flex items-center justify-center h-20 sm:h-24 border-r border-b border-border nth-[3n]:border-r-0 sm:nth-[3n]:border-r sm:nth-[4n]:border-r-0 lg:nth-[4n]:border-r lg:nth-[5n]:border-r-0"
                >
                  <Image
                    src={`/homelogos/${logo}`}
                    alt=""
                    width={96}
                    height={32}
                    unoptimized={isSvg}
                    className="h-8 w-auto object-contain px-4 opacity-60 grayscale dark:invert"
                  />
                </div>
              );
            })}
            
            {/* Empty cells to fill incomplete rows - mobile (3 cols) */}
            {emptyCellsMobile > 0 && Array.from({ length: emptyCellsMobile }, (_, i) => (
              <div
                key={`empty-mobile-${logos.length}-${i}`}
                className="h-20 sm:h-24 border-r border-b border-border nth-[3n]:border-r-0 sm:hidden"
                aria-hidden="true"
              />
            ))}
            
            {/* Empty cells to fill incomplete rows - tablet (4 cols) */}
            {emptyCellsTablet > 0 && Array.from({ length: emptyCellsTablet }, (_, i) => (
              <div
                key={`empty-tablet-${logos.length}-${i}`}
                className="hidden sm:block lg:hidden h-20 sm:h-24 border-r border-b border-border sm:nth-[4n]:border-r-0"
                aria-hidden="true"
              />
            ))}
            
            {/* Empty cells to fill incomplete rows - desktop (5 cols) */}
            {emptyCellsDesktop > 0 && Array.from({ length: emptyCellsDesktop }, (_, i) => (
              <div
                key={`empty-desktop-${logos.length}-${i}`}
                className="hidden lg:block h-20 sm:h-24 border-r border-b border-border lg:nth-[5n]:border-r-0"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
