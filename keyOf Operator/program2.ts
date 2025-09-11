// **Challenge:**
// Write a TypeScript function called `getProperty` that takes two parameters: an object and a key. 
// The function should return the value of the specified key in the object. Use the `keyof` operator to ensure type safety.

// **Requirements:**
// 1. Use the `keyof` operator to restrict the key parameter to only valid keys of the object.
// 2. Ensure that the function works with objects of any type.

// **Example:**
// ```typescript
// interface Student {
//   id: number;
//   name: string;
//   age: number;
// }

// const student: Student = {
//   id: 1,
//   name: 'Ajay',
//   age: 20
// };

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// console.log(getProperty(student, "name")); // Output: Ajay
// console.log(getProperty(student, "age"));  // Output: 20
// ```

interface Animal{
    id:number,
    name:string,
    legs:number
}

function getProperty<T,K extends keyof T>(obj:T,key:K):T[K] {
    return obj[key]
}

const cow: Animal = {id:1, name:'cow',legs:4};
console.log(getProperty(cow,'name'));