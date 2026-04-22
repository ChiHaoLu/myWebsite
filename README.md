# chihaolu.me

Personal website for Chi-Hao Lu — blockchain developer, Taipei.

Built with **Next.js 15 (App Router) + TypeScript**. Single-page Ledger layout: sticky sidebar nav with scrollspy on desktop, drawer menu on mobile. Light/dark theme, JetBrains Mono throughout, warm-paper oklch palette.

## Stack

- Next.js 15 + React 19 + TypeScript
- CSS Modules + design tokens in `app/globals.css`
- `next/font/google` for JetBrains Mono (no external CSS)
- No CSS framework, no theme library — kept intentionally minimal
- Deployed on Vercel via GitHub Actions

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
.github/workflows/
  deploy.yml           CI: build + deploy to Vercel on push to master
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

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and deploys to Vercel as production. PRs deploy as preview.

### One-time setup

1. **Create the Vercel project**
   - `npm i -g vercel`
   - `vercel link` in this repo, follow prompts (creates `.vercel/project.json` locally — gitignored).
   - Then `cat .vercel/project.json` to read `orgId` and `projectId`.

2. **Create a Vercel access token**
   - https://vercel.com/account/tokens → create a token scoped to the project.

3. **Add three GitHub secrets** (Repo → Settings → Secrets and variables → Actions):
   - `VERCEL_TOKEN` — the token from step 2
   - `VERCEL_ORG_ID` — `orgId` from `.vercel/project.json`
   - `VERCEL_PROJECT_ID` — `projectId` from `.vercel/project.json`

4. **Wire `chihaolu.me` to Vercel**
   - Vercel dashboard → Project → Settings → Domains → add `chihaolu.me` and `www.chihaolu.me`
   - Update DNS at your registrar:
     - `A` record `@` → `76.76.21.21`
     - `CNAME` record `www` → `cname.vercel-dns.com`
   - (If currently on Firebase Hosting, remove the old A records first.)

After setup, `git push origin master` deploys to production automatically.

## Theme & accessibility

- `data-theme` attribute on `<html>`, switched by `ThemeToggle`. The inline script in `<head>` reads `localStorage` / `prefers-color-scheme` before paint to avoid FOUC.
- `prefers-reduced-motion` disables reveal animations.
- All external links use `target="_blank" rel="noopener noreferrer"`.

## License

MIT (or whatever you prefer — none currently set).
