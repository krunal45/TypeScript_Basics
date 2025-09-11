interface Person{
    name: string,
    age: number,
    gender: string
}



function printInfo(person:Person,key: keyof Person) {
    console.log(`${key}: ${person[key]}`);
}

const person:Person = {name:'Ajay',age:21,gender:'male'};
printInfo(person,'name');
printInfo(person,'age');
printInfo(person,'gender');