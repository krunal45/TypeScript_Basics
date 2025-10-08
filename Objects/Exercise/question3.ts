// **Question 1:**
// Create a `Book` object literal in TypeScript with the following rules:

// 1. It should have these required properties:

//    * `title` (string)
//    * `author` (string)
//    * `publishedYear` (number)

// 2. It should have an optional property:

//    * `genres` (array of strings)

// 3. It should have a method `getSummary()` that returns a string in the format:

//    ```
//    "<title> by <author>, published in <year>"
//    ```

// 👉 Write TypeScript code to define this object literal and call `getSummary()` on it.

// solution
interface Book{
    title: string,
    author: string,
    publishedYear:number,
    genres?:string[]
    getSummary(this:Book):string
}

const book:Book = {
    title: 'Zero to One',
    author: 'Peter Thiel',
    publishedYear: 2000,
    genres: ['Education','Technology'],
    getSummary(this:Book) {
        return `${this.title} by ${this.author}, published in ${this.publishedYear}`;
    },
}
console.log(book.getSummary());