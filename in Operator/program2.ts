// Sure, Krunal! Here's a TypeScript coding challenge for you:

// **Challenge:**
// Write a TypeScript function called `hasProperty` that takes two parameters: an object and a property name (string). 
// The function should return `true` if the property exists in the object, and `false` otherwise.

// **Requirements:**
// 1. Use the `in` operator to check if the property exists in the object.
// 2. Ensure that the function works with objects of any type.

// **Example:**
// ```typescript
// interface Person {
//   name: string;
//   age: number;
// }

// const person: Person = {
//   name: "Alice",
//   age: 30
// };

// console.log(hasProperty(person, "name")); // Output: true
// console.log(hasProperty(person, "address")); // Output: false
// ```
interface Student{
  id:number,
  name:string
};

const student: Student = {
    id: 1,
    name:'Ajay'
};

function hasProperty(arg1:Record<string,any>,arg2:string){
    return arg2 in arg1;
};

console.log(hasProperty(student, "name"));