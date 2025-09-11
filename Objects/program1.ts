const student1 = {
    id: 1,
    name: 'Aditya',
    class: 4
};

console.log(student1);

const student2 = {
    id: 2,
    name: 'Jay',
    class: 5
};

console.log(student2);

function printDetail(student: {
    id: number;
    name: string;
    class: number;
}) {
    console.log(student);
};
printDetail(student1);
