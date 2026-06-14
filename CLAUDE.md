# Portfolio v4 — Pre-Deployment Checklist

These items must be completed before running `firebase deploy`.

## 1. Fill in project URLs

File: `src/components/Projects/Projects.jsx`

Replace every `YOUR_*_URL` placeholder with real links:

- `YOUR_YOUTUBE_URL` — Looksy demo video on YouTube
- `YOUR_LOOKSY_FRONTEND_GITHUB_URL` — Looksy frontend repo
- `YOUR_LOOKSY_RAILS_GITHUB_URL` — Looksy Rails API repo
- `YOUR_LOOKSY_NODE_GITHUB_URL` — Looksy Node/AWS API repo
- `YOUR_BEER_RUN_DEMO_URL` — Epic Beer Run live demo
- `YOUR_BEER_RUN_FRONTEND_GITHUB_URL` — Epic Beer Run frontend repo
- `YOUR_BEER_RUN_BACKEND_GITHUB_URL` — Epic Beer Run backend repo
- `YOUR_ABC_LOOM_URL` — ABC Data Logger demo on Loom
- `YOUR_ABC_FRONTEND_GITHUB_URL` — ABC Data Logger frontend repo
- `YOUR_ABC_BACKEND_GITHUB_URL` — ABC Data Logger backend repo

## 2. Set up Formspree and fill in the contact form URL

File: `src/components/Contact/Contact.jsx`

1. Go to https://formspree.io → create a free account → create a new form
2. Copy the endpoint URL (looks like `https://formspree.io/f/xyzabcde`)
3. Replace `YOUR_FORMSPREE_URL` in `Contact.jsx` with that URL

## 3. Run production build and verify

```bash
npm run build
npm run preview
```

Walk through the full site at the preview URL and confirm:
- Nav anchor links scroll to correct sections
- Sound toggle fires click.mp3 when unmuted
- "View my work ↓" scrolls to Work section
- "Download Resume" downloads the PDF
- Contact form submits successfully (check Formspree dashboard)
- No email address visible anywhere (Ctrl+F `gmail` in browser inspector)

## 4. Deploy to Firebase

```bash
firebase deploy
```

Confirm the live URL matches the preview.

## 5. Epic Beer Run revival (separate project)

Get the old Epic Beer Run backend running again so the live demo link works.
This is a separate effort — backend was on Heroku (free tier shutdown). Options:
- Redeploy backend to Railway or Render (free tier)
- Or link directly to the GitHub repo until the demo is back up
