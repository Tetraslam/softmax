import Link from "next/link";
import { ResidentPhoto } from "@/components/resident-photo";
import { linkify } from "@/lib/linkify";

const residents = [
  {
    name: "shresht bhowmick",
    photo: "shresht.webp",
    roles: [
      "founding engineer @ natural.co",
      "2nd year @ northeastern cs & linguistics",
      "ml research @ mit media lab",
    ],
    hobbies: [
      "worldbuilding",
      "shoegaze rock",
      "scuba diving",
      "kpop",
      "anime",
      "roguelike videogames",
    ],
    links: [
      { label: "x.com/tetraslam", href: "https://x.com/tetraslam" },
      {
        label: "linkedin.com/in/shreshtbhowmick",
        href: "https://linkedin.com/in/shreshtbhowmick",
      },
      { label: "tetraslam.world", href: "https://tetraslam.world" },
    ],
  },
  {
    name: "william feng",
    photo: "william.png",
    roles: [
      "research resident @ openai",
      "2nd year @ mit ee",
      "mit video game orchestra",
    ],
    hobbies: ["electronics", "machining", "game dev", "kpop", "violin"],
    links: [
      {
        label: "x.com/_womogenes",
        href: "https://x.com/_womogenes",
      },
      {
        label: "linkedin.com/in/womogenes",
        href: "https://www.linkedin.com/in/womogenes/",
      },
      { label: "wfeng.dev", href: "https://wfeng.dev" },
    ],
  },
  {
    name: "xiaole su",
    photo: "xiaole.png",
    roles: [
      "swe intern @ osmosis (yc w25)",
      "3rd year @ northeastern cs & math",
      "prev platform eng @ bain & co"
    ],
    hobbies: [
      "volleyball",
      "hip-hop/kpop dance",
      "socializing",
      "matcha",
      "side quest",
    ],
    links: [
      { label: "x.com/suxls_", href: "https://x.com/suxls_" },
      { label: "linkedin.com/in/xiaolesu", href: " https://www.linkedin.com/in/xiaolesu/" },
    ],
  },
  {
    name: "vivian zou",
    photo: "vivian.png",
    roles: [
      "swe intern @ notability",
      "3rd year @ northeastern cs & math",
      "prev aws, priceline"
    ],
    hobbies: [
      "dance",
      "pilates",
      "blind boxes"
    ],
    links: [
      { label: "linkedin.com/in/vivianzou1", href: " https://www.linkedin.com/in/vivianzou1/" },
    ],
  },
  {
    name: "shinnosuke uesaka",
    photo: "shinnosuke.png",
    roles: [
      "3rd year @ minerva",
      "prev research intern @ sakana ai"
    ],
    hobbies: [
      "sci-fi/horror movies",
      "hiking",
      "badminton",
      "cooking"
    ],
    links: [
      { label: "linkedin.com/in/shinnosuke-u", href: "https://www.linkedin.com/in/shinnosuke-u/" },
      { label: "x.com/Shinn_Uesaka", href: "https://x.com/Shinn_Uesaka" },
    ],
  }
];

export default function ResidentsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="space-y-12 sm:space-y-16">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            residents
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            the people making things happen
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12 lg:space-y-0">
          {/* Mobile: stack with dividers */}
          <div className="lg:hidden space-y-10 sm:space-y-12">
            {residents.map((resident, index) => (
              <div key={resident.name}>
                {index > 0 && <div className="border-t border-border mb-10 sm:mb-12" />}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    {resident.photo && (
                      <ResidentPhoto
                        src={`/residents/${resident.photo}`}
                        alt={resident.name}
                      />
                    )}
                    <div className="space-y-1">
                      <h2 className="text-xl sm:text-2xl font-semibold">
                        {resident.name}
                      </h2>
                      <div className="space-y-0.5">
                        {resident.roles.map((role) => (
                          <p
                            key={role}
                            className="text-xs sm:text-sm text-muted-foreground"
                          >
                            {linkify(role)}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {resident.hobbies.join(", ")}
                    </p>
                  </div>

                  {resident.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {resident.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-foreground underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: grid with dividers */}
          <div className="hidden lg:grid grid-cols-2 gap-12">
            {residents.map((resident, index) => {
              const isLeftColumn = index % 2 === 0;
              const row = Math.floor(index / 2);
              const hasTopRow = row > 0;
              
              return (
                <div key={resident.name} className="relative">
                  {/* Vertical divider on right side of left column items */}
                  {isLeftColumn && (
                    <>
                      <div className="absolute top-0 bottom-0 -right-6 border-r border-border" />
                      {/* Gap in vertical divider at top intersection */}
                      {hasTopRow && (
                        <div className="absolute -top-12 -right-6 w-px h-6 bg-background" />
                      )}
                      {/* Gap in vertical divider at bottom intersection */}
                      {index < residents.length - 2 && (
                        <div className="absolute -bottom-12 -right-6 w-px h-6 bg-background" />
                      )}
                    </>
                  )}
                  
                  {/* Horizontal divider above items in rows after the first */}
                  {hasTopRow && (
                    <>
                      {isLeftColumn ? (
                        <div className="absolute -top-6 left-0 right-6 border-t border-border" />
                      ) : (
                        <div className="absolute -top-6 left-6 right-0 border-t border-border" />
                      )}
                    </>
                  )}
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                      {resident.photo && (
                        <ResidentPhoto
                          src={`/residents/${resident.photo}`}
                          alt={resident.name}
                        />
                      )}
                      <div className="space-y-1">
                        <h2 className="text-xl sm:text-2xl font-semibold">
                          {resident.name}
                        </h2>
                        <div className="space-y-0.5">
                          {resident.roles.map((role) => (
                            <p
                              key={role}
                              className="text-xs sm:text-sm text-muted-foreground"
                            >
                              {linkify(role)}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {resident.hobbies.join(", ")}
                      </p>
                    </div>

                    {resident.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {resident.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm text-foreground underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
