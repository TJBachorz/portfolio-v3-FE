# tjbachorz.live

This is version 4.0 of my portfolio site — a full rebuild with a handcrafted Cyber Grid aesthetic.

<!-- <img src=portfolio.gif height="344" width="640"/> -->

Live: [https://tjbachorz.live](https://tjbachorz.live)

## About

A single-page portfolio built from scratch with Vite + React 18. The design draws from cyberpunk aesthetics — dark background, 40px CSS grid overlay, cyan accents, and Orbitron display font. No UI frameworks, no component libraries — just CSS Modules and Framer Motion.

## Features

- **Cyber Grid design system** — CSS custom properties, Orbitron + Inter fonts, cyan accent palette
- **Scroll animations** — Framer Motion entrance animations triggered on viewport entry
- **Project cards** — gif/image previews with portrait and landscape layout variants, hover zoom
- **Lightbox** — click any project image to open a full-screen modal; dismiss with Escape or click outside. Built with Framer Motion and a React portal to avoid transform stacking issues
- **Contact form** — Formspree-backed, no backend required, no email address exposed in the DOM
- **Resume download** — PDF served from Firebase Hosting
- **Smoke test suite** — Vitest + @testing-library/react covering all nav links, hero CTAs, all 4 project cards, contact form fields, and email privacy

## Run Locally

1. Fork and clone this repository
2. In terminal run:
   - `npm install`
   - `npm run dev`

## Stack

* Vite + React 18
* CSS Modules
* Framer Motion
* Vitest + @testing-library/react
* Firebase Hosting
* Formspree (contact form)

## Libraries

- `framer-motion` — scroll entrance animations, card hover effects, lightbox fade/scale transitions
- `vitest` — test runner
- `@testing-library/react` — component rendering and assertions

## Author

TJ Bachorz

[<img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png" width="40" height="40"/>](https://github.com/TJBachorz) &nbsp; [<img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-512.png" width="40" height="40"/>](https://www.linkedin.com/in/tjbachorz/) &nbsp; [<img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/medium-512.png" width="40" height="40"/>](https://tjbachorz.medium.com/)
