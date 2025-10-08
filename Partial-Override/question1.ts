// ### Coding task
// Implement a function that uses Partial to apply overrides.

// ```ts
// interface CustomerData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
// }

// export function mergeCustomer(
//   defaults: CustomerData,
//   overrides?: Partial<CustomerData>
// ): CustomerData {
//   // Your code here
// }
// ```

// Requirements:
// - If `overrides` is not provided, return `defaults`.
// - If `overrides` is provided, return a new object that keeps `defaults` but replaces any fields present in `overrides`.
// - Do not mutate `defaults`.

// Example usage (should pass):
// ```ts
// const defaults: CustomerData = {
//   firstName: "John",
//   lastName: "Doe",
//   email: "john@example.com",
//   age: 30,
// };

// mergeCustomer(defaults)
// // -> same as defaults

// mergeCustomer(defaults, { email: "j.doe@example.com" })
// // -> { firstName: "John", lastName: "Doe", email: "j.doe@example.com", age: 30 }

// mergeCustomer(defaults, { firstName: "Ana", age: 25 })
// // -> { firstName: "Ana", lastName: "Doe", email: "john@example.com", age: 25 }
// ```

interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

export function mergeCustomer(
  defaults: CustomerData,
  overrides?: Partial<CustomerData>
): CustomerData {
  if (overrides == undefined) {
    return defaults;
  }
  return {...defaults,...overrides};
}

const defaults:CustomerData = {
    firstName: 'Aditya',
    lastName: 'Dave',
    email: 'aditya@test.com',
    age: 21
}

// Tests
// 1
// const result = mergeCustomer(defaults);
// console.log(result);

// 2
// const result = mergeCustomer(defaults,{email: 'aditya.dave@test.com'});
// console.log(result);

// 3
const result = mergeCustomer(defaults,{firstName: 'Ajay',age: 23});
console.log(result);