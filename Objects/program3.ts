const book = {
    title: 'Atomic Habits',
    author: 'James Clear',
    publishedYear: 2018
};

function getBookSummary(book: {
    title: string;
    author: string;
    publishedYear: number;
}) {
    console.log(`The book '${book.title}' was written by ${book.author} and published in ${book.publishedYear}.`);
}

getBookSummary(book);
