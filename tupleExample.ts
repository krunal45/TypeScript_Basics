// let user: [string, number];
// userTuple = ['Alex', 1];
// console.log(userTuple); // Output: ['Alex', 1]
// console.log(userTuple[0]); // Output: Alex
// console.log(userTuple[1]); // Output: 1

// let users:[string,number][] = [['Alex',1],['Bob',2],['John',3]];
// console.log(users); // Output: [['Alex',1],['Bob',2],['John',3]]
// console.log(users[0]); // Output: ['Alex',1]

let alphabets:[string,number] = [['A',1]]
let numberOfAlphabets = alphabets.push('B',2,'C',3)
console.log('Number Of Alphabets: ',numberOfAlphabets);
console.log(alphabets);