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
};

export default function Home() {
  const logos = getLogos();
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
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

        <div className="pt-8 sm:pt-12 space-y-4">
          <p className="text-sm text-muted-foreground">building from</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-start">
            {logos.map((logo) => {
              const isSvg = logo.endsWith(".svg");

              if (logoLinks[logo]) {
                return (
                  <Link
                    key={logo}
                    href={logoLinks[logo]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-8 opacity-60 grayscale dark:invert transition-opacity hover:opacity-80"
                  >
                    <Image
                      src={`/homelogos/${logo}`}
                      alt=""
                      width={96}
                      height={32}
                      unoptimized={isSvg}
                      className="h-full w-auto object-contain"
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={logo}
                  className="h-8 opacity-60 grayscale dark:invert"
                >
                  <Image
                    src={`/homelogos/${logo}`}
                    alt=""
                    width={96}
                    height={32}
                    unoptimized={isSvg}
                    className="h-full w-auto object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
