// Write a TypeScript function that takes an object representing a person with properties `name` (string) and `age` (number),
// and an optional object for additional details (e.g., { city: string, job: string }). Use the spread operator to merge the person object
//  with the additional details (if provided) into a new object. If no additional details are provided, return the original person object unchanged.

// Example:
// ```typescript
// interface Person {
//   name: string;
//   age: number;
// }

// // mergePerson({ name: "Alice", age: 30 }) → { name: "Alice", age: 30 }
// // mergePerson({ name: "Alice", age: 30 }, { city: "New York", job: "Engineer" }) → { name: "Alice", age: 30, city: "New York", job: "Engineer" }
// ```
interface Person {
  name: string;
  age: number;
}

function getPerson(person: Person, extraDetail?: Record<string, any>): Person {
  if (extraDetail) {
    return { ...person, ...extraDetail };
  }
  return person;
}

const person: Person = {
  name: "Krunal",
  age: 21,
};

const extraDetail = {
  gender: "Male",
  city: "Rajkot",
  state: "GUJ",
};
const output1 = getPerson(person);
console.log(output1);

const output2 = getPerson(person, extraDetail);
console.log(output2);
// const json_output2 = JSON.stringify(output2);
// console.log(json_output2);
