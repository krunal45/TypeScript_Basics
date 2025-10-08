// - **Q5 (Derived field)**: Using `.map`, add a new property `primaryGenre` to each book set to the first genre alphabetically, 
// keeping other fields the same. Do not mutate originals.
// ```typescript
// // Expected: { id, title, genres: [...sorted], primaryGenre: "..." }

interface Book {
    id: number;
    title: string;
    genres: string[];
  };

  function getBooks(books: Book[]) {
  return books
    .map(book => ({
      ...book,
      genres: [...book.genres].sort(),
      primaryGenre:[...book.genres][0]
    }))
  };
  
  const books = [
    { id: 1, title: "A", genres: ["Fantasy", "Adventure"] },
    { id: 2, title: "B", genres: ["Sci-Fi", "Drama"] },
    { id: 3, title: "C", genres: ["Sci-Fi", "Fantasy"] },
  ];

  const result = getBooks(books);
  console.log(result);