// **Challenge:**
// Write a TypeScript function called `deepHasProperty` that takes two parameters: an object and a property path (string). 
// The function should return `true` if the property exists in the object at the specified path, and `false` otherwise.

// **Requirements:**
// 1. Use the `in` operator to check if the property exists at each level of the path.
// 2. Ensure that the function works with nested objects of any type.
// 3. Handle cases where the property path is an empty string or invalid.

// **Example:**
// ```typescript
// interface Student {
//   id: number;
//   name: string;
//   address?: {
//     city: string;
//     zip: number;
//   };
// }

// const student: Student = {
//   id: 1,
//   name: 'Ajay',
//   address: {
//     city: 'Vijapur',
//     zip: 382870
//   }
// };

// console.log(deepHasProperty(student, "name")); // Output: true
// console.log(deepHasProperty(student, "address.city")); // Output: true
// console.log(deepHasProperty(student, "address.country")); // Output: false
// console.log(deepHasProperty(student, "")); // Output: false
// ```