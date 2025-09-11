interface employee {
    id: number,
    name: string,
    department: string
}

const emp1: employee = {
    id: 1,
    name: 'Ajay',
    department: 'QA'
};

const emp2: employee = {
    id: 2,
    name: 'Aditya',
    department: 'QA'
};

const employees: employee[] = [];
employees.push(emp1, emp2);
console.log(employees);
