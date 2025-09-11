// Here's a beginner-level coding question that tests your understanding of this TypeScript concept:

// **Question:**

// You have the following object and function:

// ```typescript
// const colors = {
//   red: "#FF0000",
//   green: "#00FF00", 
//   blue: "#0000FF"
// };

// function getColor(colorName: string) {
//   // Your code goes here
// }
// ```

// **Task:** Complete the `getColor` function so that it:
// 1. Takes a `colorName` parameter (string)
// 2. Returns the corresponding color value from the `colors` object
// 3. Uses TypeScript type assertion to ensure type safety
// 4. Returns `undefined` if the color doesn't exist

// **Hint:** You'll need to use the same pattern as the line you just learned about: `object[key as keyof typeof object]`

// **Expected behavior:**
// - `getColor("red")` should return `"#FF0000"`
// - `getColor("purple")` should return `undefined`
// - TypeScript should not show any type errors

const colors = {
      red: "#FF0000",
      green: "#00FF00", 
      blue: "#0000FF"
};
console.log(typeof colors);

function getColor(colorName: string) {
      const colour = colors[colorName as keyof typeof colors];
      return colour;
}

console.log(getColor('red1'));