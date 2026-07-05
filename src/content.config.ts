import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    author: z.string(),
    date: z.string(),
    sortDate: z.coerce.date(),
    image: z.string(),
    imageAlt: z.string(),
    excerpt: z.string(),
    intro: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
