// **Question:**
// You are asked to create a class `Counter` that keeps track of how many objects have been created from it. Use a **`static` property** to store this count.

// 👉 Write the TypeScript code so that:

// * Each time a new object of `Counter` is created, the static counter increases.
// * A static method `getCount()` should return the total number of objects created.

// **Example Output:**

// ```ts
// const c1 = new Counter();
// const c2 = new Counter();
// console.log(Counter.getCount()); // Expected Output: 2
// ```
class Counter {
    private static count = 0;
    constructor() {
        Counter.count++;
    }

    static getCount():number{
        return this.count;
    }
}
const c1 = new Counter();
const c2 = new Counter();
console.log(Counter.getCount());
