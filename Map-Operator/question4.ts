// - **Q4 (Filter + map combo)**: Return books that include genre `"Fantasy"` with their `genres` sorted alphabetically. 
// Use `.filter(...).map(...)`. Don’t mutate input.
// ```typescript
// // Expected: only books containing "Fantasy", with sorted genres
// ```

interface Book {
    id: number;
    title: string;
    genres: string[];
  };

  function getBooks(books: Book[]) {
  return books
    .filter(book => book.genres.includes('Fantasy'))
    .map(book => ({
      ...book,
      genres: [...book.genres].sort(),
    }))
  };
  
  const books = [
    { id: 1, title: "A", genres: ["Fantasy", "Adventure"] },
    { id: 2, title: "B", genres: ["Sci-Fi", "Drama"] },
    { id: 3, title: "C", genres: ["Sci-Fi", "Fantasy"] },
  ];

  const result = getBooks(books);
  console.log(result);