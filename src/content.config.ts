import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const usluge = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/usluge" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      order: z.number().optional(),
      heroImage: image().optional(),
    }),
});

const projekti = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projekti" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      relatedUsluga: z.string().optional(),
      order: z.number().optional(),
      heroImage: image().optional(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      category: z.enum(["edukativno", "prodajno", "ostalo"]).optional(),
      heroImage: image().optional(),
    }),
});

export const collections = { usluge, projekti, blog };
