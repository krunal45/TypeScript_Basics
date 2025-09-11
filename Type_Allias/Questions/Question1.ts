// // Here's a coding question to reinforce the key differences between `type` and `interface` in TypeScript:

// ### Question
// Create a TypeScript program that defines a `Person` with properties `name` (string) and `age` (number). Then:
// 1. Extend it to create an `Employee` with an additional `department` (string) property using both `type` and `interface`.
// 2. Add a second declaration to the `interface` to include an optional `email` (string) property, demonstrating declaration merging.
// 3. Define a `type` that represents a `UserID` which can be either a string or a number.
// 4. Create a variable `employee` using the `interface` and another using the `type`, and log them to the console. 
// Also, create a variable `id` using the `UserID` type and assign it both a string and a number to test its flexibility.

// **Expected Output**:
// ```
// Employee (interface): {"name":"Alice","age":30,"department":"Engineering","email":"alice@example.com"}
// Employee (type): {"name":"Bob","age":35,"department":"Marketing"}
// User ID (string): abc123
// User ID (number): 456
// ```

// ### Solution
// This question tests your understanding of:
// - Defining object shapes with `type` and `interface`.
// - Extending types (`&`) vs. interfaces (`extends`).
// - Declaration merging with `interface`.
// - Using `type` for union types (e.g., `string | number`).

interface Person{
    name:string
    age:number
}

interface Employee extends Person{
    department:string
}

type EmployeeType = {
    department:string
} & Person

interface Person{
    email ?: string
}

type UserID = string | number;

const employee:Employee = {'name':'Aditya','age':21,'department':'QA'};
console.log(employee);

const employeeType:EmployeeType = {'name':'Ajay','age':22,'email':'ajay@test.com','department':'Dev'};
console.log(employeeType);

const userIdNumber:UserID = 1;
const userIdString:UserID = 'a1';
console.log(userIdNumber);
console.log(userIdString);