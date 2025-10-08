// Define a TypeScript interface `Book` with properties `id` (number), `title` (string), and `genres` (string array). 
// Write a function that takes an array of `Book` objects and a genre (string). The function should return a new array 
// of `Book` objects that include the specified genre in their `genres` array. The returned books should have their `genres` array sorted alphabetically.

// Example:
// ```typescript
// interface Book {
//   id: number;
//   title: string;
//   genres: string[];
// }

// const books = [
//   { id: 1, title: "Book A", genres: ["Fantasy", "Adventure"] },
//   { id: 2, title: "Book B", genres: ["Sci-Fi", "Fantasy"] },
//   { id: 3, title: "Book C", genres: ["Mystery", "Thriller"] }
// ];
// // For genre = "Fantasy", expected output:
// // [
// //   { id: 1, title: "Book A", genres: ["Adventure", "Fantasy"] },
// //   { id: 2, title: "Book B", genres: ["Fantasy", "Sci-Fi"] }
// // ]
// ```

interface Book {
    id:number,
    title:string,
    genres: string[]
};

function getBooks(books:Book[],genre:string):Book[] {
    const booksWithSpecifiedGenre = books.filter(book => book.genres.includes(genre))
                                         .map(book => ({...book,
                                                       genres: [...book.genres].sort((a,b)=>a.localeCompare(b))
                                         }))
                                  
    return booksWithSpecifiedGenre;                                      
};

const books = [
  { id: 1, title: "Book A", genres: ["Fantasy", "Adventure"] },
  { id: 2, title: "Book B", genres: ["Sci-Fi", "Fantasy"] },
  { id: 3, title: "Book C", genres: ["Mystery", "Thriller"] }
];

const result = getBooks(books,'Fantasy');
console.log(result);







// Feedback:
// Your solution is on the right track, but there are a few issues with the implementation that prevent it from working as expected. 
// Let’s review your code, identify the problems, and provide a corrected version, along with suggestions for improvement.

// ### Review of Your Solution
// Your function `getBooks` aims to:
// - Filter an array of `Book` objects to include only those with the specified genre.
// - Sort the `genres` array of each matching book alphabetically.
// - Return the filtered array of books.

// For the test case with `genre = "Fantasy"`, the expected output is:
// ```typescript
// [
//   { id: 1, title: "Book A", genres: ["Adventure", "Fantasy"] },
//   { id: 2, title: "Book B", genres: ["Fantasy", "Sci-Fi"] }
// ]
// ```

// However, your current implementation has the following issues:

// 1. **Incorrect Use of `forEach`**:
//    - You used `.forEach(book => book.genres.sort((a,b) => a.localeCompare(b)).values)` after `filter`. The `forEach` method iterates over the array but does not return a new array, 
// and it returns `undefined`. This means `booksWithSpecifiedGenre` is assigned `undefined`, which is not the intended result.
//    - Additionally, `.values` is not a valid method on the result of `sort` (which returns the sorted array itself). This appears to be a mistake.

// 2. **Mutating Original Data**:
//    - The `sort` method modifies the array in place. When you call `book.genres.sort(...)`, it directly modifies the `genres` array in the original `books` array. 
// While this achieves the goal of sorting genres alphabetically, it’s generally better to avoid mutating input data unless explicitly required, 
// as it can lead to unexpected side effects.

// 3. **Return Type**:
//    - Your function implicitly returns `undefined` due to the `forEach` issue. The function should return a `Book[]` array, as specified in the problem.

// 4. **TypeScript Type Safety**:
//    - Your interface definition is correct, but the function lacks an explicit return type annotation. Adding `: Book[]` to the function signature improves type safety and clarity.
//    - The comma separators in the interface (e.g., `id: number,`) are valid but optional in TypeScript. You can use semicolons or omit separators for a cleaner look.

// ### Corrected Solution
// Here’s a corrected and optimized version of your code:

// ```typescript
// interface Book {
//   id: number;
//   title: string;
//   genres: string[];
// }

// function getBooks(books: Book[], genre: string): Book[] {
//   return books
//     .filter(book => book.genres.includes(genre))
//     .map(book => ({
//       ...book,
//       genres: [...book.genres].sort((a, b) => a.localeCompare(b))
//     }));
// }

// const books = [
//   { id: 1, title: "Book A", genres: ["Fantasy", "Adventure"] },
//   { id: 2, title: "Book B", genres: ["Sci-Fi", "Fantasy"] },
//   { id: 3, title: "Book C", genres: ["Mystery", "Thriller"] }
// ];

// const result = getBooks(books, "Fantasy");
// console.log(result);
// ```

// ### Explanation of Changes
// 1. **Fixing the `forEach` Issue**:
//    - Replaced `forEach` with `map` to transform each filtered book into a new object with sorted genres. This ensures the function returns the filtered and modified array of books.

// 2. **Avoiding Mutation**:
//    - To prevent modifying the original `genres` array, we create a new array using the spread operator (`[...book.genres]`) before sorting. This preserves the original data.
//    - The `map` creates a new `Book` object using the spread operator (`...book`) to copy all properties, then overrides the `genres` property with the sorted array.

// 3. **Explicit Return Type**:
//    - Added `: Book[]` to the function signature to explicitly declare the return type, improving type safety and code clarity.

// 4. **Sorting with `localeCompare`**:
//    - Your use of `a.localeCompare(b)` is correct for alphabetical sorting, so it’s retained in the corrected version.

// ### Output for Your Test Case
// For the input:
// ```typescript
// const books = [
//   { id: 1, title: "Book A", genres: ["Fantasy", "Adventure"] },
//   { id: 2, title: "Book B", genres: ["Sci-Fi", "Fantasy"] },
//   { id: 3, title: "Book C", genres: ["Mystery", "Thriller"] }
// ];
// ```
// With `genre = "Fantasy"`, the output is:
// ```typescript
// [
//   { id: 1, title: "Book A", genres: ["Adventure", "Fantasy"] },
//   { id: 2, title: "Book B", genres: ["Fantasy", "Sci-Fi"] }
// ]
// ```

// This matches the expected output, with genres sorted alphabetically in each book.

// ### Additional Notes
// - **Immutability**: The corrected version avoids mutating the input array, which is a good practice unless mutation is explicitly required. If the problem allowed mutating the original data, you could simplify by directly sorting `book.genres` in place, but this approach is safer.
// - **Edge Cases**: The function handles edge cases well (e.g., empty arrays, no matching genres, or case-sensitive genre matches). If case-insensitive matching is needed, you could modify the `includes` check, but the problem doesn’t specify this.
// - **Alternative Implementation**: You could use a more verbose approach with a `for` loop or `reduce` to build the result, but the `filter` + `map` combination is idiomatic and concise.

// ### Example with Edge Cases
// To demonstrate robustness:
// ```typescript
// const edgeCaseBooks = [
//   { id: 4, title: "Book D", genres: [] }, // No genres
//   { id: 5, title: "Book E", genres: ["Sci-Fi"] } // No Fantasy
// ];
// console.log(getBooks(edgeCaseBooks, "Fantasy")); // Output: []
// ```

// Your core logic for filtering by genre was correct, and the main issue was the misuse of `forEach`. With the corrections, the solution is robust and meets all requirements.

// Ready for the next question on Array Types & Object Arrays? Type 'Y' if yes.