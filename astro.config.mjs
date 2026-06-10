// @ts-check
import { defineConfig } from 'astro/config';

// User site (mehrdadfeller.github.io) is served at the domain root,
// so no `base` path is needed. If this ever moves to a project repo,
// set `base: '/<repo-name>'` here.
export default defineConfig({
  site: 'https://mehrdadfeller.github.io',
});
