// Shared blog helpers: reader-facing topic taxonomy (docs/04 - Copywriting/Advice-Blueprint-v1.0.md §11)
// and a simple, always-accurate reading-time estimate computed from each entry's raw body —
// no manual "vrijeme čitanja" field to keep in sync by hand.

export const BLOG_TOPIC_VALUES = [
  "planiranje-prostora",
  "materijali-i-odrzavanje",
  "funkcionalnost-doma",
  "poslovni-prostori",
  "smjestajni-objekti",
  "inspiracija",
] as const;

export type BlogTopic = (typeof BLOG_TOPIC_VALUES)[number];

const BLOG_TOPIC_LABELS: Record<BlogTopic, string> = {
  "planiranje-prostora": "Planiranje prostora",
  "materijali-i-odrzavanje": "Materijali i održavanje",
  "funkcionalnost-doma": "Funkcionalnost doma",
  "poslovni-prostori": "Poslovni prostori",
  "smjestajni-objekti": "Smještajni objekti",
  inspiracija: "Inspiracija",
};

export function blogTopicLabel(topic?: string): string | undefined {
  return topic && topic in BLOG_TOPIC_LABELS
    ? BLOG_TOPIC_LABELS[topic as BlogTopic]
    : undefined;
}

export const BLOG_TOPICS = BLOG_TOPIC_VALUES.map((value) => ({
  value,
  label: BLOG_TOPIC_LABELS[value],
}));

const WORDS_PER_MINUTE = 200;

export function estimateReadingMinutes(body?: string): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
