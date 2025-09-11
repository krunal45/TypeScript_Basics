// ### Beginner question
// - **Task**: 
// Write a TypeScript function `average(...nums: number[]): number` that takes any number of numeric arguments and returns their average. 
// Call it with `average(2, 4, 6, 8)` and log the result.
// Review: Keep task description concise; good for context.
// Review: Avoid committing `debugger;` unless intentionally needed for active debugging.
// debugger;
// Review: Good use of rest parameters and explicit return type.
// Review: Consider guarding against empty input to avoid division by zero.
function average(...nums: number[]):number {
    let sum:number = 0; // Review: Type could be inferred; explicit is fine for learning.
    let result:number = 0; // Review: You can compute directly without a temp variable.
    sum = nums.reduce((prev:number,curr:number)=>(prev+curr),0);
    // Review: If nums.length === 0, result will be Infinity/NaN. Define desired behavior.
    result = sum / nums.length;
    return result;
}

const numbers = [1,2,3];
// Review: Correct use of spread to satisfy `...nums: number[]`.
console.log(`Average of ${numbers} is : ${average(...numbers)}`);

// Suggested improved version (commented for reference):
// function average(...nums: number[]): number {
//     if (nums.length === 0) return Number.NaN; // or throw new Error("No numbers provided")
//     const sum = nums.reduce((total, n) => total + n, 0);
//     return sum / nums.length;
// }