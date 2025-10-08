// Question:
// Awesome—let’s practice **TypeScript Object Literals** step-by-step.  
// I’ll ask one coding task at a time. Post your code for review, or just type **“Next”** to get the next task.

// ---

// ## Q1 (Beginner): Create and use an object literal

// **Goal:** Define a `book` object as an object literal and use a method on it.

// ### Requirements
// 1. Create `const book = { ... }` with the following properties:
//    - `title: string`
//    - `author: string`
//    - `pages: number`
//    - `isPublished: boolean`
//    - `describe(): string` → returns a formatted summary using `this` (e.g., `"The Pragmatic Programmer by Andrew Hunt — 352 pages — Published: yes"`)

// 2. Log the result of `book.describe()`.

// 3. Write a function `togglePublished(b: /* your type here */): void` that flips `b.isPublished` (mutates the object). Call it once and log `book.describe()` again to see the change.

// ### Constraints
// - Use **TypeScript** (assume `--strict`).
// - **No `any`.**
// - Use `this` inside `describe()`.

// ### Example Output (shape, not exact text)
// ```
// "The Pragmatic Programmer by Andrew Hunt — 352 pages — Published: no"
// "The Pragmatic Programmer by Andrew Hunt — 352 pages — Published: yes"
// ```

// ### (Optional) Starter Skeleton
// ```ts
// // TODO: (Optional) define a type for Book to help with typing
// // type Book = { ... };

// const book /* : Book */ = {
//   // TODO: title, author, pages, isPublished
//   // TODO: describe(): string { ... }  // use `this`
// };

// function togglePublished(/* b: Book */) {
//   // TODO: flip isPublished
// }

// // Test logs:
// console.log(book.describe());
// togglePublished(book);
// console.log(book.describe());
// ```




interface Book {
  title: string;
  author: string;
  pages: number;
  isPublished: boolean;
  describe(this:Book): string;
}

const book: Book = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 100,
  isPublished: true,
  describe(this:Book){
    const flag = (this.isPublished)?'yes':'no';
    return `${this.title} by ${this.author} - ${this.pages} - Published:${flag}`;
  },
};

// 1. call book.describe()
console.log(book.describe());

// 2. toggleIsPublished
function togglePublished(book: Book) {
  book.isPublished = !book.isPublished;
}
togglePublished(book);
console.log(book.describe());
