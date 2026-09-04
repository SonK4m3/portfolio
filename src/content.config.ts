import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const work = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }), schema: z.object({ title: z.string(), description: z.string(), published: z.boolean(), featured: z.boolean(), order: z.number(), role: z.string().optional(), period: z.string().optional(), disciplines: z.array(z.string()).optional(), technologies: z.array(z.string()).optional(), externalUrl: z.url().optional(), repositoryUrl: z.url().optional() }) });
const notes = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }), schema: z.object({ title: z.string(), description: z.string(), pubDate: z.coerce.date(), updatedDate: z.coerce.date().optional(), published: z.boolean(), tags: z.array(z.string()).optional() }) });
const experiments = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiments' }), schema: z.object({ title: z.string(), description: z.string(), published: z.boolean(), order: z.number().optional(), tags: z.array(z.string()).optional(), externalUrl: z.url().optional() }) });
const components = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/components' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    id: z.string().regex(/^CMP\.\d{3}$/),
    description: z.string(),
    category: z.enum(['system', 'editorial', 'interaction', 'annotation']),
    capabilities: z.array(z.string()).optional(),
    status: z.enum(['experimental', 'beta', 'stable']),
    framework: z.array(z.string()),
    usedIn: z.array(z.object({ label: z.string(), href: z.string(), area: z.string().optional() })),
    tags: z.array(z.string()),
    order: z.number(),
    published: z.boolean(),
    sections: z.array(z.object({ id: z.string(), label: z.string() })),
  }),
});
export const collections = { work, notes, experiments, components };
