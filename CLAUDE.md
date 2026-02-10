# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

softmax.house — a personal website for a hacker house in SF. Static-ish Next.js site with pages for residents, ethos, vibes (photo gallery), calendar (Luma embed), and join (Notion form embed).

## Commands

```sh
pnpm i          # install dependencies
pnpm dev        # dev server (next dev)
pnpm build      # production build (next build)
pnpm lint       # lint with biome (biome check)
pnpm format     # format with biome (biome format --write)
```

No test suite exists.

## Architecture

- **Next.js 16 App Router** with React 19, TypeScript, Tailwind CSS v4, shadcn/ui (new-york style)
- **Linting/formatting**: Biome (not ESLint/Prettier). Config in `biome.json`. 2-space indent, recommended rules with `noUnknownAtRules: off` for Tailwind.
- **Path alias**: `@/*` maps to `./src/*`
- **Package manager**: pnpm

### Layout & Routing

`src/app/layout.tsx` — root layout wrapping all pages with `<ThemeProvider>`, `<Nav>`, `<Footer>`, and Vercel Analytics. Pages are at `src/app/{page-name}/page.tsx`.

Pages: `/` (home), `/residents`, `/ethos`, `/vibes`, `/calendar`, `/join`, plus a custom `not-found.tsx`.

### Key Patterns

- **Auto-discovery from `public/` directories**: Homepage logos (`public/homelogos/`), vibes photos (`public/vibes/`), and resident photos (`public/residents/`) are read from the filesystem at build time using `fs.readdirSync`. Drop files in and they appear automatically.
- **Linkify system** (`src/lib/linkify.tsx`): Entity-to-URL mapping that auto-links company/university names in resident role descriptions. Add new entities to the `entityLinks` record.
- **Logo links** (`src/app/page.tsx`): `logoLinks` record maps logo filenames to URLs.
- **Photo captions** (`src/app/vibes/page.tsx`): `photoLabels` record maps filenames to caption strings.

### Adding Content

- **Residents**: Three sections in `src/app/residents/page.tsx`: `currentResidents`, `pastResidents`, `friends`. Add to the appropriate array. Put photo in `public/residents/`. Add any new companies/schools to `entityLinks` in `src/lib/linkify.tsx`. The `ResidentGrid` component handles layout for all sections — odd-count grids automatically show a `:)` in the empty cell on desktop.
- **Vibes photos**: Drop images in `public/vibes/`. Optionally add captions in `photoLabels` in `src/app/vibes/page.tsx`.
- **Homepage logos**: Drop images in `public/homelogos/`. Add URL mapping in `logoLinks` in `src/app/page.tsx`.

### Theming

Warm/cozy color palette using oklch color space, defined as CSS custom properties in `src/app/globals.css`. Light mode: beige/cream. Dark mode: warm browns (not pure black). Theme toggled via `next-themes` in the nav. All color transitions are 300ms ease.

### Components

- `src/components/` — custom components (nav, footer, greeting, photo loaders, cozy-face emoticon)
- `src/components/ui/` — shadcn/ui primitives (do not edit manually; managed by shadcn CLI)

### Style Guidelines

Keep it "minimal as fuck but keep the softmax aura." Consistent `max-w-4xl` across pages (vibes uses `max-w-6xl`). Mobile-first responsive design.
