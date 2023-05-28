// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const experiencesCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
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
      price: z.number(),
      features: z.array(z.string()),
      button: z.object({
        text: z.string(),
        link: z.string(),
      })
    }),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'experiences': experiencesCollection,
  'guides': guidesCollection,
  'teasers': teasersCollection,
};