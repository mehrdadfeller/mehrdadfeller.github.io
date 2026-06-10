// @ts-check
import { defineConfig } from 'astro/config';

// Served at the apex of the custom domain, so no `base` path is needed.
// The public/CNAME file binds the GitHub Pages deployment to this domain.
export default defineConfig({
  site: 'https://mehrdadmajzoobi.com',
});
