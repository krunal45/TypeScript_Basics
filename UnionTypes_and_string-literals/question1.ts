// **Question 1 (Union Types & String Literals):**

// 1. Create a function `move` that accepts a parameter `direction`.

// 2. The parameter `direction` should **only allow** the following string values:

//    * `"up"`
//    * `"down"`
//    * `"left"`
//    * `"right"`
//      (Hint: Use a **string literal union type**)

// 3. Inside the function, print a message:

//    ```
//    "Moving <direction>"
//    ```

// 4. Test the function with:

//    * `"up"` → should print `"Moving up"`
//    * `"forward"` → TypeScript should give a compile-time error

type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction:Direction) {
    console.log(`Moving ${direction}`);
}

move('up');