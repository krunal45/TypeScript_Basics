const person = {
    name: 'Aditya',
    age: 21,
    isStudent: true
}

function printPersonInfo(person: {
    name: string;
    age: number;
    isStudent: boolean;
}) {
    console.log(`Name: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`);
}

printPersonInfo(person);
