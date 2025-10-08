// Write a TypeScript function that takes an array of numbers and uses the spread operator to find and return the minimum and maximum values
// from the array in a tuple (e.g., [min, max]). Handle the case where the array is empty by returning [undefined, undefined].

// Example:
// ```typescript
// // getMinMax([5, 2, 8, 1]) → [1, 8]
// // getMinMax([]) → [undefined, undefined]
// ```

// CODE REVIEW COMMENT: Good function documentation with clear examples
function getMinMax(numbers: number[]): undefined[] | number[] {
  // CODE REVIEW COMMENT: ✅ Good input validation - checking for empty array
  if (numbers.length === 0) {
    // CODE REVIEW COMMENT: ✅ Correctly handles edge case as specified in requirements
    return [undefined, undefined];
  }
  // CODE REVIEW COMMENT: ✅ Excellent use of spread operator with Math.min/max
  // CODE REVIEW COMMENT: ✅ Efficient single-pass solution using spread operator
  return [Math.min(...numbers), Math.max(...numbers)];
}

// CODE REVIEW COMMENT: ⚠️ Consider using a more specific return type
// SUGGESTION: Use [number, number] | [undefined, undefined] for better type safety
// ALTERNATIVE: Consider using a discriminated union or optional tuple types

// CODE REVIEW COMMENT: ✅ Good test cases covering both scenarios
// Tests
const result1 = getMinMax([1, 3, 5]);
// CODE REVIEW COMMENT: ✅ Appropriate test case with valid numbers
console.log(result1);

const result2 = getMinMax([]);
// CODE REVIEW COMMENT: ✅ Good edge case testing
console.log(result2);

// CODE REVIEW COMMENT: 💡 SUGGESTIONS FOR IMPROVEMENT:
// 1. Consider adding JSDoc documentation for better IntelliSense
// 2. Add more comprehensive test cases (negative numbers, single element, duplicates)
// 3. Consider error handling for non-finite numbers (Infinity, NaN)
// 4. Type could be more specific: [number, number] | [undefined, undefined]
// 5. Consider adding input validation for null/undefined array parameter

// CODE REVIEW COMMENT: 🎯 OVERALL ASSESSMENT:
// - ✅ Function correctly implements requirements
// - ✅ Good use of spread operator as requested
// - ✅ Proper handling of empty array case
// - ✅ Clean, readable code
// - ⚠️ Minor type safety improvements possible
// - 💡 Consider additional edge case testing