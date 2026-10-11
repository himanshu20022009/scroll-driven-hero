# Fizz scroll-driven hero

A responsive React hero inspired by the supplied car scroll animation. GSAP handles the staggered page entrance and maps scroll progress to the car and copy transforms. The car illustration is a project-local SVG component, so no external image asset is required.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Publish on GitHub Pages

Enable **Settings → Pages → GitHub Actions**. The included workflow builds and deploys on pushes to `main` or `master`. It sets the Vite base path from the repository name automatically.

The published URL will be `https://himanshu20022009.github.io/scroll-driven-hero/`.
