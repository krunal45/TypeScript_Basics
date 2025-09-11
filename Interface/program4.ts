// ** Question:**
//     Create a base interface `Person` with the following properties:

// * `name`(string)
//     * `age`(number)

// Then create another interface `Employee` that **extends** `Person` and adds:

// * `employeeId`(number)
//     * `department`(string)

// Finally, create an object `emp1` of type `Employee` with the following values:

// * name → `"Rohit"`
//     * age → `30`
//         * employeeId → `101`
//             * department → `"IT"`

interface Person {
    name: string,
    age: number
};

interface Employee extends Person {
    employeeId: number,
    department: string
}

function createEmployee(name: string, age: number, employeeId: number, department: string) {
    const emp1: Employee = { name, age, employeeId, department };
    return emp1;
}

const empl1 = createEmployee('Rohit', 30, 101, 'IT');
console.log(empl1);
