# SmartMove Landing Page

A lightweight React landing page served via CDN (no build tools). Designed with a dark gradient aesthetic inspired by `bendingspoons.com`.

## Run locally

Open `index.html` directly in your browser, or serve the folder with any static server:

```bash
python3 -m http.server 5173
# then visit http://localhost:5173
```

## Replace the hero placeholder with a video

Edit `app.jsx` and replace the `.video-placeholder` div in the `Hero` component with your video element, for example:

```jsx
<video className="video" src="./assets/intro.mp4" autoPlay muted loop playsInline />
```

Place your media under `assets/`. 

# SmartMove Demo (Next.js)

Two features demo:
- Videos with overlay (full-viewport hero)
- Frames on scroll (80 PNG frames in public/assets/...)

## Develop

```bash
npm run dev
# http://localhost:3000
```

## Deploy to Vercel

- Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
- Import the repo in Vercel and select the framework as Next.js.
- Build command: `next build` (default)
- Output: `.vercel/output` handled automatically by Vercel for Next.js.
- Static assets are under `public/`.

No environment variables required. 