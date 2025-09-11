// ### Beginner question
// Create an interface `Vehicle` with methods`start(): void` and`stop(): void`.
// Then define a class `Car` that implements`Vehicle`, and create an instance to call both methods.
interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    public start(): void {
        console.log("Start Car");
    }
    public stop(): void {
        console.log("Stop Car");
    }
}
const tiago = new Car();
tiago.start();
tiago.stop();