// ### 🧠 **Question:**

// You're building a simple feedback form in TypeScript. When the user submits the form, 
// you want to send the feedback data to a server using the Fetch API with a POST request.

// Write a TypeScript function called `submitFeedback` that:

// - Accepts an object with `name: string`, `email: string`, and `message: string`.
// - Sends this data as JSON to the endpoint `https://api.example.com/feedback`.
// - Uses `fetch` with the POST method.
// - Handles the response and logs `"Feedback submitted successfully"` if the request was successful 
// (status code 200–299), or logs `"Failed to submit feedback"` otherwise.
type User = {
    name: string,
    email: string,
    message: string
}

debugger;
async function submitFeedback(user:User) {
    const response = await fetch('https://api.example.com/feedback',{
        method:'POST',
        body:JSON.stringify(user)
    })

    if (response.ok) {
        console.log('Feedback submitted successfully');
    }else{
        console.log('Failed to submit feedback');
    }
}

const user:User = {
    name:'Aditya',
    email: 'Aditya@test.com',
    message: 'User performed well!'
}

await submitFeedback(user);