// ### Beginner TypeScript Question: Function Overloading

// - **Task**: Create an overloaded function `formatValue` with these behaviors:
//   - **number** input → returns a string with the number formatted to 2 decimal places.
//   - **string** input → returns the trimmed string in uppercase.
//   - **boolean** input → returns "YES" for true and "NO" for false.

// - **Starter code (fill in the overloads and implementation):**
// ```typescript
// // Add overload signatures here

// function formatValue(value: number | string | boolean): string {
//   // Implement based on runtime type
//   return '';
// }

// // Example calls (should all compile and return strings)
// formatValue(12.345);     // "12.35"
// formatValue(' hello ');  // "HELLO"
// formatValue(true);       // "YES"
// ```

function formatValue(value: number): string;
function formatValue(value: string): string;
function formatValue(value: boolean): string;

function formatValue(value: number | string | boolean): string {
    if (typeof value === 'number') {
        return (value).toFixed(2);
    } else if (typeof value === 'string') {
        return value.trim().toUpperCase();
    } else {
        return value ? 'YES' : 'NO';
    }
}

console.log(formatValue(12.345));
console.log(formatValue(' hello '));
console.log(formatValue(true));