// - **Q2 (Object transform)**: Given an array of `Book` objects, return titles only using `.map`.
// ```typescript
// interface Book { id: number; title: string; genres: string[]; }
// const books = [
//   { id: 1, title: "A", genres: ["Fantasy", "Adventure"] },
//   { id: 2, title: "B", genres: ["Sci-Fi", "Fantasy"] },
// ];
// // Expected: ["A", "B"]

interface Book {
  id: number;
  title: string;
  genres: string[];
}

function getTitle(books: Book[]) {
  return books.map((book) => book.title);
}

const books = [
  { id: 1, title: "A", genres: ["Fantasy", "Adventure"] },
  { id: 2, title: "B", genres: ["Sci-Fi", "Fantasy"] },
];

const titles = getTitle(books);
console.log(titles);