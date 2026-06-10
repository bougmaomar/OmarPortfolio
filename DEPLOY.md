# Deploying to Cloudflare Pages

This site is a **static** build (no server). `npm run generate` prerenders every
locale (`/`, `/fr/`, `/ar/`) into plain HTML under `.output/public`, which is what
Cloudflare Pages serves.

## Build settings (use these in the Cloudflare dashboard)

| Setting                  | Value              |
| ------------------------ | ------------------ |
| Framework preset         | None (or Nuxt)     |
| Build command            | `npm run generate` |
| Build output directory   | `.output/public`   |
| Node version             | `20` (from `.nvmrc`) |

If Cloudflare ignores `.nvmrc`, add an environment variable `NODE_VERSION = 20`.

---

## Option A — Connect a Git repo (recommended; auto-deploys on push)

1. Put the project on GitHub:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo, enter the build settings from the table above, **Save and Deploy**.
4. Every `git push` to `main` now rebuilds and redeploys automatically.

## Option B — Direct upload (no Git, deploy from your machine)

```bash
npm run generate
npx wrangler pages deploy .output/public --project-name=omar-portfolio
```
First run prompts `npx wrangler login` (opens the browser once). Re-run those two
lines any time you want to publish changes.

---

## Custom domain

Pages → your project → **Custom domains → Set up a domain** → enter e.g.
`omarbougma.com`. If the domain's DNS is on Cloudflare it's one click; otherwise
add the CNAME they show you. SSL is automatic and free.

## Local preview of the production build

```bash
npm run generate
npx serve .output/public
```

## Notes
- `public/_headers` sets long-cache for `/_nuxt/*` assets and basic security headers.
- `BRIEF.html` lives at the project root, **outside** `public/`, so it is never
  deployed with the site.
- The `[intlify] Detected HTML in '…'` lines during build are warnings, not errors —
  they're expected because some translations intentionally contain `<strong>`.
