import Image from "next/image";
import Link from "next/link";

const residents = [
  {
    name: "shresht bhowmick",
    photo: "shresht.webp",
    roles: [
      "founding engineer @ natural.co (payments for ai agents)",
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
      "first chair on mit video game orchestra",
    ],
    hobbies: ["electronics/hardware projects", "machining", "kpop", "violin"],
    links: [
      { label: "x.com/_womogenes", href: "https://x.com/_womogenes" },
      {
        label: "linkedin.com/in/womogenes",
        href: "https://www.linkedin.com/in/womogenes/",
      },
      { label: "wfeng.dev", href: "https://wfeng.dev" },
    ],
  },
];

export default function ResidentsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="space-y-12 sm:space-y-16">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">residents</h1>
          <p className="text-sm sm:text-base text-muted-foreground">the people making things happen</p>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {residents.map((resident, index) => (
            <div key={resident.name}>
              {index > 0 && <div className="border-t border-border mb-10 sm:mb-12" />}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  {resident.photo && (
                    <div className="shrink-0">
                      <Image
                        src={`/residents/${resident.photo}`}
                        alt={resident.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover sm:w-24 sm:h-24"
                      />
                    </div>
                  )}
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-semibold">{resident.name}</h2>
                    <div className="space-y-0.5">
                      {resident.roles.map((role) => (
                        <p key={role} className="text-xs sm:text-sm text-muted-foreground">
                          {role}
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
      </div>
    </div>
  );
}
