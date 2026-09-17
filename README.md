# Pooja — Portfolio

A single-page developer portfolio built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Edit your content

All the text on the site — profile info, skills, experience, and projects —
lives in one place: `src/data.js`. Edit that file to update anything without
touching the components.

The visual design (colors, fonts, spacing) lives in `src/index.css` as CSS
variables at the top of the file, under `:root`.

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the static site, ready to deploy.

## Deploy

The easiest options for a static Vite site:

**Vercel**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Vite; click Deploy.

**Netlify**
1. Push this folder to a GitHub repo (or drag-and-drop the `dist/` folder
   after running `npm run build` at netlify.com/drop).
2. Build command: `npm run build`, publish directory: `dist`.

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add `"homepage": "https://<username>.github.io/<repo>"` to `package.json`.
3. Add scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d dist"`.
4. `npm run deploy`.

## Project structure

```
src/
  data.js              ← all your content (edit this to update the site)
  index.css            ← design tokens and all styling
  App.jsx              ← page layout
  main.jsx             ← React entry point
  components/
    Nav.jsx
    Hero.jsx
    Experience.jsx
    Projects.jsx
    Skills.jsx
    Education.jsx
    Contact.jsx
```
