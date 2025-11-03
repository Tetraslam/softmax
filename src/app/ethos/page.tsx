const principles = [
  {
    title: "be kind",
    description:
      "we believe in creating a supportive, empathetic environment at all costs.",
  },
  {
    title: "do great work",
    description:
      "we're here to build things that matter and make people happier. push boundaries, learn constantly, and create things that make the world better.",
  },
  {
    title: "spend time with friends",
    description:
      "life's too short to not enjoy it with people you care about :)",
  },
  {
    title: "low ego",
    description:
      "leave the ego at the door. we're all here to learn from each other and have fun together! the best idea wins, not the loudest voice.",
  },
];

export default function EthosPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <div className="space-y-16">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">ethos</h1>
          <p className="text-muted-foreground">
            the principles that guide us
          </p>
        </div>

        <div className="space-y-12">
          {principles.map((principle) => (
            <div key={principle.title} className="space-y-2">
              <h2 className="text-xl font-medium">{principle.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

