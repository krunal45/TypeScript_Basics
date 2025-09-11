// Create a TypeScript interface `Book` with the following rules:

// * `id` should be a **readonly** number.
// * `title` should be a string.
// * `author` should be a string.

// Now, write a function `updateBookTitle(book: Book, newTitle: string): void` that:

// * Updates the `title` of the book to `newTitle`.
// * Tries to update the `id` of the book inside the function (this should cause a TypeScript error).

// Finally, call the function with a sample `Book` object and show how the compiler enforces the `readonly` rule.
interface Book {
    readonly id: number,
    title: string,
    author: string
}

function updateBookTitle(book: Book, newTitle: string) {
    book.title = newTitle;
};
