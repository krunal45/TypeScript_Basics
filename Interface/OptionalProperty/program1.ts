// Create an interface `Book` with the following properties:

// * `title` (string)
// * `author` (string)
// * `publishedYear` (number, optional)

// Now, write a function `printBook` that takes a `Book` object and prints its details.
// 👉 If `publishedYear` is missing, it should print `"Published Year: Not Available"`.

interface Book {
    title: string,
    author: string,
    publishedYear?: number
};

const book1: Book = { title: 'book1', author: 'author1' };


function printBook(book: Book) {
    console.log(book);
}

printBook(book1)
