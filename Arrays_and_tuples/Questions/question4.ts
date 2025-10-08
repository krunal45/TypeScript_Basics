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
// For department = "HR", expected output:
// {
//   count: 2,
//   employees: ["Alice", "Charlie"]
// }

interface Employee {
    id: number,
    name:string, 
    department:string
};

interface Result {
    count:number,
    employees:string[]
}

function getEmployees(employees:Employee[],departmentName:string):Result {
    
    const employeeNames = employees.filter(employee => employee.department === departmentName)
                             .map(employee => employee.name)
                             .sort((a,b)=> a.localeCompare(b));
     
    return {
        count: employeeNames.length,
        employees: employeeNames
    }                       
};

const employees = [
  { id: 1, name: "Charlie", department: "HR" },
  { id: 2, name: "Bob", department: "IT" },
  { id: 3, name: "Alice", department: "HR" },
  { id: 4, name: "David", department: "IT" }
];

const finalEmp = getEmployees(employees,'HR');
console.log(finalEmp);