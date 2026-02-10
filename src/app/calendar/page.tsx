import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "calendar — softmax",
  description: "upcoming events at softmax house",
};

export default function CalendarPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            calendar
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            upcoming events and hangouts
          </p>
        </div>

        <div className="w-full">
          <iframe
            src="https://luma.com/embed/calendar/cal-MIQpFDZwaWmvv5L/events"
            title="softmax events calendar"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            className="w-full border border-border rounded min-h-[500px] sm:min-h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
