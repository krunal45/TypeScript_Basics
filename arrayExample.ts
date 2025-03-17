let fruits:string[] = ['Apple','Banana','Chickoo','Dragon Fruit']
fruits.forEach(fruit=>console.log(fruit));

// Using Generics
let studentNames:Array<string> = ['Alex','Bob','Charu','David']
let studentRollNos:Array<number> = [1,2,3,4]
let studentInfo:Array<any> = ['Alex',1,true]

// MultiType Array
let values:(string | number)[] = ['Apple',1,'Banana',2]
let v1:(number | boolean)[] = [1,true,0,false]

// Printing student names
console.log('--studentNames--');
for (let index in studentNames) {
    console.log(studentNames[index]); 
}