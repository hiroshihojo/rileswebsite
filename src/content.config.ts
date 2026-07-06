import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    // Optional second-level grouping shown as a subheading within a category
    // (e.g. category "Radar" -> subcategory "Station" or "Platform").
    subcategory: z.string().optional(),
    author: z.string(),
    date: z.string(),
    sortDate: z.coerce.date(),
    image: z.string(),
    imageAlt: z.string(),
    excerpt: z.string(),
    intro: z.string(),
    tags: z.array(z.string()).default([]),
    // "standard" = normal article layout. "photo-series" = image-forward
    // gallery layout with minimal text between photos.
    format: z.enum(['standard', 'photo-series']).default('standard'),
    // Mark true to pin this article as the homepage hero. If no article
    // is marked featured, the most recent article (by sortDate) is used.
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
