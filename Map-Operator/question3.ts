// - **Q3 (Clone + sort field, no mutation)**: Using `.map`, return a new array of books where each book is cloned and
// its `genres` is a new alphabetically sorted array. Do not mutate the original.
// ```typescript
// // Expected: each book has genres sorted (e.g., ["Adventure","Fantasy"]), original `books` unchanged

interface Book {
  id: number;
  title: string;
  genres: string[];
}

function getBooks(books: Book[]) {
  return books.map((book) => ({
    ...book,
    genres: [...book.genres].sort((a, b) => a.localeCompare(b)),
  }));
}

const books = [
  { id: 1, title: "A", genres: ["Fantasy", "Adventure"] },
  { id: 2, title: "B", genres: ["Sci-Fi", "Fantasy"] },
];

const result = getBooks(books);
console.log(result);