type student = {
    id: number;
    name: string;
};

const stud1: student = {
    id: 1,
    name: 'Aditya'
}

const stud2: student = {
    id: 2,
    name: 'Ajay'
}

const students: student[] = [];
students.push(stud1, stud2);
console.log(students);
