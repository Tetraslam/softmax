const principles = [
  {
    title: "be kind",
    description:
      "we believe in creating a supportive, empathetic environment at all costs.",
    color: "border-l-[#A67C52]", // warm brown
  },
  {
    title: "do great work",
    description:
      "we're here to build things that matter and make people happier. push boundaries, learn constantly, and create things that make the world better.",
    color: "border-l-[#C49A6C]", // sandy tan
  },
  {
    title: "spend time with friends",
    description:
      "life's too short to not enjoy it with people you care about :)",
    color: "border-l-[#8B6F47]", // deep caramel
  },
  {
    title: "low ego",
    description:
      "leave the ego at the door. we're all here to learn from each other and have fun together! the best idea wins, not the loudest voice.",
    color: "border-l-[#D4A574]", // light ochre
  },
];

export default function EthosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="space-y-12 sm:space-y-16">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">ethos</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            the principles that guide us
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className={`border-l-[3px] pl-4 sm:pl-6 space-y-2 ${principle.color}`}
            >
              <h2 className="text-lg sm:text-xl font-medium">{principle.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

