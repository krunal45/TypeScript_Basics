// **Question 9 (Advanced, Function Parameters + `as keyof typeof`):**

// You are given the following constant object:

// ```ts
// const httpStatusCodes = {
//     OK: 200,
//     BAD_REQUEST: 400,
//     UNAUTHORIZED: 401,
//     NOT_FOUND: 404,
//     INTERNAL_SERVER_ERROR: 500
// } as const;
// ```

// 👉 Task:

// 1. Create a type `HttpStatus` that represents all the keys of `httpStatusCodes` (using `keyof typeof`).

// 2. Write a function `getStatusCode(status: string)` that:

//    * Accepts a string.
//    * Uses `as keyof typeof httpStatusCodes` to safely return the corresponding status code if it exists.
//    * Returns `-1` if the input string does not match any key.

// 3. Call the function with:

//    * `"OK"` → should return `200`
//    * `"NOT_FOUND"` → should return `404`
//    * `"TIMEOUT"` → should return `-1`

// ---
const httpStatusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
} as const;

type HttpStatus = keyof typeof httpStatusCodes;

function getStatusCode(status: string) {
    if (status in httpStatusCodes) {
        return httpStatusCodes[status as keyof typeof httpStatusCodes]
    }
    return -1;
}

const result = getStatusCode('TIMEOUT')
console.log(result);