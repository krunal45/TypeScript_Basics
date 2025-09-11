// Write a **generic function** `getById` that:

// * Accepts an array of objects.
// * Each object must have an `id: number` property (use **generic constraint** to enforce this).
// * Accepts an `id` (number) as the second parameter.
// * Returns the object with the matching `id`, or `undefined` if not found.

// ---

// 👉 Example usage:

// ```ts
// const users = [
//   { id: 1, name: "Aarav" },
//   { id: 2, name: "Meera" },
//   { id: 3, name: "Rohan" }
// ];

// console.log(getById(users, 2));
// // Output: { id: 2, name: "Meera" }

// console.log(getById(users, 5));
// // Output: undefined
// ```

// ⚡ Hint: Use a constraint like `<T extends { id: number }>` so that `T` is guaranteed to have an `id`.

function getById<T extends { id: number }>(objects: T[], id: number) {
    return objects.find((obj) => obj.id === id);
}

const users = [
    { id: 1, name: "Aarav" },
    { id: 2, name: "Meera" },
    { id: 3, name: "Rohan" }
];
console.log(getById(users, 4));
