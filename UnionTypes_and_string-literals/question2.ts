// ### 🧠 Question :  
// You’re designing a function that accepts a parameter representing the status of a payment. 
// The status can only be `"pending"`, `"completed"`, or `"failed"`.

// **Task:**  
// Define a type for the status and write a function `logPaymentStatus` that accepts only those three string values and logs a message accordingly.
import {Status} from './types.js'
function logPaymentStatus(status:Status) {
    console.log(status);
}

logPaymentStatus('pending');