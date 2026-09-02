import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const work = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }), schema: z.object({ title: z.string(), description: z.string(), published: z.boolean(), featured: z.boolean(), order: z.number(), role: z.string().optional(), period: z.string().optional(), disciplines: z.array(z.string()).optional(), technologies: z.array(z.string()).optional(), externalUrl: z.string().url().optional(), repositoryUrl: z.string().url().optional() }) });
const notes = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }), schema: z.object({ title: z.string(), description: z.string(), pubDate: z.coerce.date(), updatedDate: z.coerce.date().optional(), published: z.boolean(), tags: z.array(z.string()).optional() }) });
const experiments = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiments' }), schema: z.object({ title: z.string(), description: z.string(), published: z.boolean(), order: z.number().optional(), tags: z.array(z.string()).optional(), externalUrl: z.string().url().optional() }) });
export const collections = { work, notes, experiments };
