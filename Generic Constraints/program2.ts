// Write a **generic function** `getProperty` that:

// * Accepts two parameters:

//   1. `obj` → an object of any type
//   2. `key` → a key of that object
// * Returns the value of that key from the object.

// 👉 Hint: You’ll need to use **`extends keyof`** to constrain the generic type.

// **Example usage:**

// ```ts
// const person = { name: "Aditi", age: 25 };

// console.log(getProperty(person, "name")); // "Aditi"
// console.log(getProperty(person, "age"));  // 25
// ```

interface personn {
    name: string,
    age: number,
}
debugger;
function getPropertyOfPersonn<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const pp1: personn = { name: 'Aditi', age: 25 };
console.log(getPropertyOfPersonn(pp1, 'name'));
console.log(getPropertyOfPersonn(pp1, 'age'));
