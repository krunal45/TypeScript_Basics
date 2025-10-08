// Define a TypeScript interface `Product` with properties `id` (number), `name` (string), and `price` (number).
// Write a function that takes an array of `Product` objects and a price threshold (number).
// The function should return a new array of `Product` objects sorted in ascending order by price, but only
//  including products with a price less than or equal to the threshold.

// Example:
// ```typescript
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Mouse", price: 25 },
//   { id: 3, name: "Keyboard", price: 50 }
// ];
// // For threshold = 100, expected output: [
// //   { id: 2, name: "Mouse", price: 25 },
// //   { id: 3, name: "Keyboard", price: 50 }
// //]
// ```

interface Product {
  id: number;
  name: string;
  price: number;
};

function getProducts(products: Product[], threshold: number) {
  return products.filter(product => product.price <= threshold)
                  .sort((a,b)=>a.price - b.price);
};

const products = [
  { id: 1, name: "Laptop", price: 100 },
  { id: 2, name: "Mouse", price: 250 },
  { id: 3, name: "Keyboard", price: 160 },
];

const finalProducts = getProducts(products,161);
console.log(finalProducts);