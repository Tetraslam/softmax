# softmax

**a cozy hacker home in sf where good people build great things**

## quick start

```sh
pnpm i
pnpm dev
```

for the aesthetics, make it minimal as fuck but keep the softmax aura.

we don't want a one page site. instead, have pages for:
- the homepage (what softmax house is)
- residents
- ethos (be kind, do great work, spend time with friends, low ego)
- join us (<iframe src="https://tetraslam.notion.site/ebd/2942133a075780c5ae65f9925c2fd7da" width="100%" height="600" frameborder="0" allowfullscreen /> )
- vibes (photo gallery)
- calendar (<iframe src="https://luma.com/embed/calendar/cal-MIQpFDZwaWmvv5L/events" width="600" height="450" frameborder="0" style="border: 1px solid #bfcbda88; border-radius: 4px;" allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe> )

### technical stack
- next.js 16 (app router)
- react 19
- typescript
- tailwind css v4
- shadcn/ui components
- biome for linting




## the residents

2 confirmed so far (imply more but don't make anything saying like "2 now, more later" or anything just make it easy to change)

### shresht bhowmick
- founding engineer @ natural.co (payments for ai agents)
- 2nd year @ northeastern cs & linguistics
- ml research @ mit media lab
- hobbies: worldbuilding, shoegaze rock, scuba diving, kpop, anime, roguelike videogames
- links: [x.com/tetraslam](https://x.com/tetraslam), [linkedin.com/in/shreshtbhowmick](https://linkedin.com/in/shreshtbhowmick), [tetraslam.world](https://tetraslam.world)

### william feng
- research resident @ openai
- 2nd year @ mit ee
- hobbies: electronics/hardware projects, machining, kpop, violin
- first chair on mit video game orchestra

---

## implementation notes

### completed features
- homepage with softmax introduction and naming explanation
- personalized time-based greeting with random endearing adjectives and nicknames
- interactive :3 emoticon with hover effect
- residents page with detailed profiles (easily extensible for more residents)
- ethos page with core principles and color-coded accent bars
- vibes page with photo gallery (automatically reads from public/vibes/)
- calendar page with luma embed
- join page with notion form embed
- navigation bar with active state indication, smooth underline hover effects, and mobile hamburger menu (slides from top)
- custom S-curve logo inspired by softmax function
- custom favicon
- subtle footer with contact email
- custom 404 page
- custom scrollbar styling (light and dark mode)
- custom text selection colors matching warm theme
- refined link styles with subtle underlines that intensify on hover
- custom focus states for better keyboard navigation
- smooth theme transitions (300ms color breathing effect)
- subtle loading states for photos (residents and vibes pages)
- open graph and twitter card metadata for social sharing
- vercel analytics for traffic insights
- meta theme-color for mobile browser chrome
- warm/cozy color theme using oklch color space
- fully responsive design (mobile-first approach)
- consistent max-width across pages (max-w-4xl, except vibes which is max-w-6xl)
- all shadcn/ui components utilized throughout
- automatic logo and photo loading from public directories

### theme customization
- colors shifted to warm tones (beige/cream background with earth tones)
- dark mode with warm browns/tans instead of pure black for coziness
- theme toggle in nav bar (respects system preference by default)
- smooth transitions between themes
- reduced border radius for cleaner look
- subtle color variations for cozy feel
- maintained high readability with proper contrast in both modes

### adding residents
edit `src/app/residents/page.tsx` and add to the `residents` array. add resident photos to `public/residents/` directory (e.g., `shresht.png`) and update the `photo` field in the resident object to match the filename.

### adding vibes photos
add photos to `public/vibes/` and they'll automatically appear. optionally add captions by editing the `photoLabels` object in `src/app/vibes/page.tsx` to map filename to caption.

### adding logo links
add logos to `public/homelogos/` and they'll automatically appear. optionally add links by editing the `logoLinks` object in `src/app/page.tsx` to map filename to URL.

### social sharing
the site includes Open Graph tags for better sharing on social media. to create the OG image:
1. convert `public/og-image.svg` to PNG (1200x630px)
2. save as `public/og-image.png`
3. the metadata in `src/app/layout.tsx` is already configured

---

