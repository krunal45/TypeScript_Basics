// **Question 3 (Beginner, Record):**
// Create a `Product` object in TypeScript using `Record<string, string | number>` with the following requirements:

// 1. The object should have at least these properties:

//    * `id` (number)
//    * `name` (string)
//    * `price` (number)

// 2. Add at least **two more properties** of your choice (e.g., `category`, `brand`, etc.)

// 3. Print the object to the console.

// 👉 Write TypeScript code to define and print this `Product` object.

// ---
interface Product{
    id:number,
    name:string,
    price:number
    extraItems:Record<string, string | number>
}

const product:Product = {
    id: 1,
    name: 'Taaza',
    price:21,
    extraItems:{
        category:'Dairy',
        brand:'Amul',
        rating:4
    }
};
console.log(product);