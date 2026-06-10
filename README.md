# mehrdadfeller.github.io

Personal portfolio landing page. Built with [Astro](https://astro.build),
deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Adding content (no layout code needed)

| What | Where | How |
| --- | --- | --- |
| A career project | `src/content/projects/*.md` | Add a Markdown file. Frontmatter (`title`, `role`, `period`, `summary`, `tags`, `heroImage`, `links`, `order`) drives the layout; the body is the case study. Lower `order` = shown first. |
| A publication | `src/content/publications.json` | Add an object with a unique `id`. Sorted by `year` automatically. |
| A talk / video | `src/content/talks.json` | Add an object with a unique `id` and a `videoUrl`. |
| Images / CV | `public/images/...`, `public/cv.pdf` | Drop files in and reference by path (e.g. `/images/projects/foo.jpg`). |
| Bio & contact | `src/components/About.astro`, `src/components/Footer.astro` | Edit copy directly. |

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages at https://mehrdadfeller.github.io.
