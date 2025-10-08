// Write a TypeScript function that takes two arrays of numbers and merges them into a single array using the spread operator. 
// The function should also accept an optional third parameter, which is a single number to insert between the two arrays in the merged result. 
// If the optional number is not provided, just merge the arrays directly.

// Example:
// ```typescript
// // mergeArrays([1, 2], [3, 4]) → [1, 2, 3, 4]
// // mergeArrays([1, 2], [3, 4], 0) → [1, 2, 0, 3, 4]
// ```

function mergeArrays(arr1:number[],arr2:number[],number?:number):number[] {
    if (number!==undefined) {
        return [...arr1,number,...arr2];
    }else{
        return [...arr1,...arr2];
    }
}

const output1 = mergeArrays([1,2],[3,4],0);
console.log(output1);

const output2 = mergeArrays([1,2],[3,4]);
console.log(output2);