export const genres = [
  { id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" }
];

export function getGenres() {
  return genres.filter(g => g);
}
