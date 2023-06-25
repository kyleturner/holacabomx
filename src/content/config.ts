// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const guidesCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    paid: z.boolean(),
    title: z.string(),
    subtitle: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Hola Cabo'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teasersCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    paid: z.boolean(),
    title: z.string(),
    subtitle: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Hola Cabo'),
    category: z.string(),
    tags: z.array(z.string()),
    highlights: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
        image: z.string()
      })
    ),
    testimonials: z.array(
      z.object({
        description: z.string(),
        featured: z.boolean().default(false),
        author: z.string(),  
        avatar: z.string(),  
      })
    ),
    plan: z.object({
      name: z.string(),
      detail: z.string(),
      price: z.number(),
      frequency: z.string(),
      features: z.array(z.string()),
      button: z.object({
        text: z.string(),
        link: z.string(),
      })
    }),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in src / content
export const collections = {
  guides: guidesCollection,
  teasers: teasersCollection,
};