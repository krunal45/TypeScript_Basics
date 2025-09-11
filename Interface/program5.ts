// Create the following interfaces in TypeScript:

// 1. `Person` → properties:

//    * `name` (string)
//    * `age` (number)

// 2. `Employee` (extends `Person`) → properties:

//    * `employeeId` (number)
//    * `department` (string)

// 3. `Manager` (extends both `Person` and `Employee`) → property:

//    * `teamSize` (number)

// Finally, create an object `mgr1` of type `Manager` with the following values:

// * name → `"Sneha"`
// * age → `40`
// * employeeId → `201`
// * department → `"HR"`
// * teamSize → `12`
interface Person {
    name: string,
    age: number
}

interface Employee extends Person {
    employeeId: number,
    department: string
}

interface Manager extends Employee {
    teamSize: number
}

function createManager(name: string, age: number, employeeId: number, department: string, teamSize: number) {
    const mgr1: Manager = { name, age, employeeId, department, teamSize };
    return mgr1;
}

const mgr1 = createManager('Sneha', 40, 201, 'HR', 12);
console.log(mgr1);
