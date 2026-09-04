import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";
import { BLOG_TOPIC_VALUES } from "./lib/blog";

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
      // Internal editorial-mix tracking only (docs/08-marketing.md 50/30/20 rule) — not shown to readers.
      category: z.enum(["edukativno", "prodajno", "ostalo"]).optional(),
      // Reader-facing topic shown on cards and the article page (Advice-Blueprint-v1.0.md §11).
      topic: z.enum(BLOG_TOPIC_VALUES).optional(),
      // Editorially chosen for the landing page's "Istaknuti savjeti" section; falls back to most recent.
      featured: z.boolean().optional(),
      heroImage: image().optional(),
    }),
});

export const collections = { usluge, projekti, blog };
