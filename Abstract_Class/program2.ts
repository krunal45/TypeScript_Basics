// ### 💻 Question: Abstract Class and Implementation

// You're building a system to model different types of **notifications** in an app (e.g., Email, SMS, Push). Every notification type must have:

// * A method to **send** the notification (which works differently depending on the notification type).
// * A method to **get the sender info**, which also varies by type.
// * A common method to **log** the notification (same across all types).

// Create an abstract class `Notification` with the appropriate methods, and then create two concrete classes: `EmailNotification` and `SMSNotification` that extend it.

// Then:

// 1. Instantiate both types and call all the methods.
// 2. Ensure TypeScript enforces that `Notification` cannot be directly instantiated.

// ---

// ### ⏳ Bonus Challenge:

// Add a third class, `PushNotification`, and implement it **without copy-pasting code** from the previous two.
abstract class Notification {
    protected msg: string;
    constructor(msg: string) {
        this.msg = msg;
    }

    abstract sendNotification(): void;

    abstract getSenderInfo(): Object;

    logNotification() {
        console.log(this.msg);
    }
}

class EmailNotification extends Notification {
    sendNotification() {
        console.log("You have 2 un-read emails!");
    };

    getSenderInfo(): Object {
        return {
            id: 1,
            name: 'Aditya'
        }
    }

    constructor() {
        super('Email Notification');
    }
};
const emailNotification = new EmailNotification();
console.log("-- EMAIL --");
console.log('-- Sender Info --');
console.log(emailNotification.getSenderInfo());
console.log('-- sendNotification --');
emailNotification.sendNotification();
console.log('-- logNotification --');
emailNotification.logNotification();
console.log();
console.log();
console.log('---');

class SMSNotification extends Notification {
    sendNotification() {
        console.log("You have 2 un-read messages!");
    };

    getSenderInfo(): Object {
        return {
            id: 2,
            name: 'Advaita'
        }
    }

    constructor() {
        super('SMS Notification');
    }
};
const smsNotification = new SMSNotification();
console.log("-- SMS --");
console.log('-- Sender Info --');
console.log(smsNotification.getSenderInfo());
console.log('-- sendNotification --');
smsNotification.sendNotification();
console.log('-- logNotification --');
smsNotification.logNotification();
