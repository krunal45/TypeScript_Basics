// Write a generic function `getLength` that:

// * Accepts a value of any type **but only if it has a `length` property** (like arrays, strings, tuples).
// * Returns the length of that value.

// 👉 Example usage:

// ```ts
// console.log(getLength("TypeScript"));   // 10
// console.log(getLength([1, 2, 3, 4]));   // 4
// console.log(getLength(["a", "b"]));     // 2
// ```

// ⚡ Hint: Use a constraint like `<T extends { length: number }>` to enforce that the input must have a `length` property.

function getLength<T extends { length: number }>(val: T) {
    return val.length;
}

const i1 = 'ALOK';
const i2 = 123;//Compile Time error
const i3 = [1, 2, 3, 4];
console.log(getLength(i3));
