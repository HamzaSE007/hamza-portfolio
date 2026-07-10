# Muhammad Hamza — Portfolio

A dark, animated Next.js portfolio built around a "live system" visual language
(status badges, circuit-trace backdrop, monospace data labels) — fitting for
real-time / WebSocket-heavy project work.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Content** — everything (name, bio, skills, experience, project case studies)
  lives in `lib/data.js`. Edit that one file to update the whole site.
- **Resume** — replace `public/resume.pdf` with your latest PDF (same filename,
  or update `resumeUrl` in `lib/data.js`).
- **Photo** — no headshot is wired in yet; the design leans on the monogram/status
  motif instead. To add one, drop an image in `public/` and reference it from
  `components/Hero.js` or `components/About.js`.
- **Colors** — palette tokens (`base`, `surface`, `signal`, `amber`, etc.) are in
  `tailwind.config.js`.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero config
needed, it's a standard Next.js App Router project.
