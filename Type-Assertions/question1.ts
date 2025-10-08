// **Question 7 (Intermediate, `as keyof typeof`):**

// Suppose you have a constant object:

// ```ts
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff"
// } as const;
// ```

// 👉 Task:

// 1. Write a function `getColorHex(color: string)` that:

//    * Accepts a string input.
//    * Uses **type assertion with `as keyof typeof colors`** to safely return the hex value of the given color if it exists.
//    * Returns `"Unknown color"` if the input is not a valid key in `colors`.

// 2. Call the function with:

//    * `"red"` → should return `#ff0000`
//    * `"yellow"` → should return `"Unknown color"`
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
} as const;

function getColorHex(color: string) {
    if (color in colors) {
         return colors[color as keyof typeof colors];
    }
    return 'Unknown color';
}

const result1 = getColorHex('yellow');
console.log(result1);