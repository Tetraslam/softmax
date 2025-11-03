export default function JoinPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">join us</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            interested in living at softmax?
          </p>
        </div>

        <div className="w-full">
          <iframe
            src="https://tetraslam.notion.site/ebd/2942133a075780c5ae65f9925c2fd7da"
            title="softmax application form"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            className="w-full border border-border rounded min-h-[500px] sm:min-h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}

