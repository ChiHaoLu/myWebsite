# chihaolu.me

Personal website for Chi-Hao Lu — blockchain developer, Taipei.

Built with **Next.js 15 (App Router) + TypeScript**. Single-page Ledger layout: sticky sidebar nav with scrollspy on desktop, drawer menu on mobile. Light/dark theme, JetBrains Mono throughout, warm-paper oklch palette.

## Stack

- Next.js 15 + React 19 + TypeScript
- CSS Modules + design tokens in `app/globals.css`
- `next/font/google` for JetBrains Mono (no external CSS)
- No CSS framework, no theme library — kept intentionally minimal
- Deployed on Vercel (native GitHub integration — no GitHub Actions, no secrets)

## Project layout

```
app/
  layout.tsx           Root layout, fonts, FOUC-prevention theme script
  page.tsx             The whole site (8 sections)
  globals.css          Design tokens + utility classes
  page.module.css      Page-level layout
  components/          Sidebar / MobileTopBar / Section / Reveal / ThemeToggle
lib/
  content.ts           All site content (typed) — edit here to update
public/                profile.jpg, favicon.ico, chihao-lu-resume.pdf
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint
```

## Updating content

All content lives in [`lib/content.ts`](lib/content.ts). Each section reads from a typed structure (`SITE.career`, `SITE.writing`, `SITE.talks`, `SITE.openSource`, `SITE.recognition`, etc.). Add or edit entries there — the page picks them up automatically.

To add a new section:
1. Add the data to `SITE` in `lib/content.ts`.
2. Add an entry to `SECTIONS`.
3. Add a `<Section ...>` block in `app/page.tsx` (with a matching `id`).

## Deployment

Vercel's GitHub integration auto-deploys: every push to `master` ships to production, every PR gets its own preview URL. No CI config in the repo, no secrets to manage.

### One-time setup (in the Vercel UI)

1. **Import the repo** — https://vercel.com/new → pick the GitHub repo. Vercel detects Next.js automatically; no overrides needed.
2. **Build settings** — leave defaults (`npm run build`, output `.next`, install `npm install`).
3. **Add the domain** — Project → Settings → Domains → add `chihaolu.me` and `www.chihaolu.me`. Vercel will show the DNS records you need.
4. **Update DNS at your registrar**:
   - `A` record `@` → `76.76.21.21`
   - `CNAME` record `www` → `cname.vercel-dns.com`
   - If the domain is currently pointed at Firebase Hosting, remove those A records first.

That's it — every `git push origin master` from now on deploys to production.

## Theme & accessibility

- `data-theme` attribute on `<html>`, switched by `ThemeToggle`. The inline script in `<head>` reads `localStorage` / `prefers-color-scheme` before paint to avoid FOUC.
- `prefers-reduced-motion` disables reveal animations.
- All external links use `target="_blank" rel="noopener noreferrer"`.

## License

MIT (or whatever you prefer — none currently set).
