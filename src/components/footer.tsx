import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-foreground transition-colors">
              softmax
            </Link>
            {/*
            <span className="text-xs opacity-50">·</span>
            <a
              href="mailto:hello@softmax.house"
              className="hover:text-foreground transition-colors"
            >
              hello@softmax.house
            </a>
            */}
          </div>
          <div className="text-xs opacity-70">
            © {new Date().getFullYear()} softmax
          </div>
        </div>
      </div>
    </footer>
  );
}

