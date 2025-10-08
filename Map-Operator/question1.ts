// Q1 (Basic): Given an array of numbers, return a new array where each number 
// is doubled using .map.

// const nums = [1, 2, 3];
// // Expected: [2, 4, 6]

function doubleNumbers(numbers:number[]) {
    return numbers.map(number => number * 2);
};

const nums = [1, 2, 3];
const output = doubleNumbers(nums);
console.log(output);