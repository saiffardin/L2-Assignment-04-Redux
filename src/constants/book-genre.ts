export const BOOK_GENRE = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
] as const;

export const GENRE_TAG_COLORS: Record<(typeof BOOK_GENRE)[number], string> = {
  FICTION: "purple",
  NON_FICTION: "geekblue",
  SCIENCE: "cyan",
  HISTORY: "volcano",
  BIOGRAPHY: "gold",
  FANTASY: "magenta",
};
