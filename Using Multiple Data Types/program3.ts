// Write a TypeScript function `formatId` that accepts an `id` which can be either:

// * a `number`, or
// * a `string`.

// The function should:

// * If `id` is a number → return `"ID-<id>"` (e.g., `ID-101`).
// * If `id` is a string → return the same string in **uppercase**.
function formatId(id: number | string) {
    return (typeof id === "number") ? `ID-${id}` : `${id.toUpperCase()}`;
}

const q1 = formatId(123);
console.log(q1);
const q2 = formatId('ABC');
console.log(q2);
