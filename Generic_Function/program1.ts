// function getFirstElement<T>(arr: T) {
//     return arr[0];
// }

// const arr1 = ['A', 'B', 'C'];
// let firstElement = getFirstElement(arr1);
// console.log(firstElement);

// const arr2 = [1, 2, 3];
// firstElement = getFirstElement(arr2);
// console.log(firstElement);

// function map<Input, Output>(nums: Input[], doubleNums: (num: Input) => Output) {
//     return nums.map(doubleNums);
// };

// const input = [1, 2, 3];
// const output = map(input, (num) => 2 * num);
// console.log(output);

function convertStringToNumber<Input, Output>(chars: Input[], numbers: (char: Input) => Output) {
    return chars.map(numbers);
}

const input = ['3', '4', 'A'];
const output = convertStringToNumber(input, (char) => parseInt(char));
console.log(output);
