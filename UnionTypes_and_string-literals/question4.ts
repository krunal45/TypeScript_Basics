// // ### 🧠 Question 3:  
// // You’re building a notification system. Notifications can be of the following types:

// // - `"email"`: requires a `subject` and `body`
// // - `"sms"`: requires a `phoneNumber` and `message`
// // - `"push"`: requires a `title` and `payload`

// // **Task:**  
// // 1. Define a **discriminated union type** called `Notification` for the above.
// // 2. Write a function `sendNotification(notification: Notification): void` that:
// //    - Uses a `switch` statement to narrow the type based on the `type` field.
// //    - Logs a different message for each notification type using its specific fields.
type Notification = 
  | {type:'email'; subject:string; body:string}
  | {type:'sms'; phoneNumber:number; message:string}
  | {type:'push'; title:string; payload:string}

function sendNotification(notification: Notification): void {
    switch (notification.type) {
        case 'email':
            console.log(`Sending EMAIL -> Subject: ${notification.subject}, Body: ${notification.body}`);
            break;
        case 'sms':
            console.log(`Sending SMS -> To: ${notification.phoneNumber}, Message: ${notification.message}`);
            break;
        case 'push':
            console.log(`Sending PUSH -> Title: ${notification.title}, Payload: ${notification.payload}`);
            break;
        default: {
            const _exhaustiveCheck: never = notification;
            return _exhaustiveCheck;
        }
    }
}

sendNotification({ type: 'email', subject: 'Welcome!', body: 'Thank you for joining us!' });
sendNotification({type:'sms', phoneNumber:12345, message:'This is sms message!'});
sendNotification({type:'push', title:'push message', payload:'This is push message!'});