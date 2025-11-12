import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-24 min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-semibold tracking-tight">404</h1>
          <p className="text-xl text-muted-foreground">
            this page doesn't exist
          </p>
        </div>
        <div className="pt-4">
          <Button asChild>
            <Link href="/">back home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
