// Here's your first TypeScript question on **Array Types & Object Arrays**:

// Write a TypeScript function that takes an array of objects, where each object represents a student with properties `name` (string)
//  and `age` (number). The function should return a new array containing only the names of students who are 18 or older.

// Example:
// ```typescript
// const students = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 19 },
//   { name: "Charlie", age: 18 }
// ];
// // Expected output: ["Bob", "Charlie"]
// ```
interface Student{
    name:string,
    age:number
}

function getStudentsOlderThan18(students:Student[]):string[] {
    return students.filter(student => student.age >=18)
                   .map(student => student.name);
};

const students = [
      { name: "Alice", age: 17 },
      { name: "Bob", age: 17 },
      { name: "Charlie", age: 18 }
    ];

const studentsOlderThan18Years = getStudentsOlderThan18(students);
console.log(studentsOlderThan18Years);