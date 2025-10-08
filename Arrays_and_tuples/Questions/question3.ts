// Define a TypeScript interface `Employee` with properties `id` (number), `name` (string), and `department` (string). 
// Write a function that takes an array of `Employee` objects and a department name (string). The function should return an object with two properties:
// - `count`: the number of employees in the specified department.
// - `employees`: an array of employee names in that department, sorted alphabetically.

// Example:
// ```typescript
// interface Employee {
//   id: number;
//   name: string;
//   department: string;
// }

// const employees = [
//   { id: 1, name: "Alice", department: "HR" },
//   { id: 2, name: "Bob", department: "IT" },
//   { id: 3, name: "Charlie", department: "HR" },
//   { id: 4, name: "David", department: "IT" }
// ];
// // For department = "HR", expected output:
// // {
// //   count: 2,
// //   employees: ["Alice", "Charlie"]
// // }
// ```