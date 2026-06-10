import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// Career projects — one Markdown file each. The frontmatter drives the layout;
// the Markdown body is the long-form case-study write-up. Add a project by
// dropping a new .md file into src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    links: z
      .object({
        live: z.string().url().optional(),
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .default({}),
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

// Academic publications — a single JSON list. Each entry needs a unique `id`.
const publications = defineCollection({
  loader: file('./src/content/publications.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    type: z.string().optional(),
    links: z
      .object({
        pdf: z.string().url().optional(),
        doi: z.string().url().optional(),
        arxiv: z.string().url().optional(),
      })
      .default({}),
  }),
});

// Talks & video — a single JSON list. Each entry needs a unique `id`.
const talks = defineCollection({
  loader: file('./src/content/talks.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    event: z.string(),
    year: z.number(),
    videoUrl: z.string().url(),
    thumbnail: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { projects, publications, talks };
