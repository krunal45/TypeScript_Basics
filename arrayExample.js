var fruits = ['Apple', 'Banana', 'Chickoo', 'Dragon Fruit'];
fruits.forEach(function (fruit) { return console.log(fruit); });
// Using Generics
var studentNames = ['Alex', 'Bob', 'Charu', 'David'];
var studentRollNos = [1, 2, 3, 4];
var studentInfo = ['Alex', 1, true];
// MultiType Array
var values = ['Apple', 1, 'Banana', 2];
var v1 = [1, true, 0, false];
// Printing student names
console.log('--studentNames--');
for (var index in studentNames) {
    console.log(studentNames[index]);
}
