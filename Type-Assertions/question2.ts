// **Question 8 (Intermediate, `as keyof typeof` + Enums):**

// 1. Create an `enum` called `Status` with values:

//    * `PENDING = "PENDING"`
//    * `IN_PROGRESS = "IN_PROGRESS"`
//    * `COMPLETED = "COMPLETED"`

// 2. Create a constant object `statusMessages` that maps each `Status` value to a user-friendly message, for example:

//    * `"PENDING"` → `"Task is pending"`
//    * `"IN_PROGRESS"` → `"Task is in progress"`
//    * `"COMPLETED"` → `"Task is completed"`

// 3. Write a function `getStatusMessage(status: string)` that:

//    * Accepts a string
//    * Uses **type assertion with `as keyof typeof statusMessages`**
//    * Returns the corresponding message if the status exists, otherwise returns `"Invalid status"`.

// 4. Call the function with:

//    * `"PENDING"` → should return `"Task is pending"`
//    * `"FAILED"` → should return `"Invalid status"`

// ---
enum Status {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED'
}

const statusMessages = {
    PENDING:'Task is pending',
    IN_PROGRESS:'Task is in progress',
    COMPLETED:'Task is completed'
}

function getStatusMessage(status:Status) {
    if (status in statusMessages) {
        return statusMessages[status as keyof typeof statusMessages];
    }
    return 'Invalid status';
}

const result = getStatusMessage(Status.PENDING);
console.log(result);