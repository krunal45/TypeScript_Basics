// 🧪 TypeScript Coding Challenge: Inheritance
// 🔧 Challenge: Create a Class Hierarchy Using Inheritance
// You're building a basic vehicle system.

// 📝 Requirements:
// Create a base class Vehicle with:

// A property brand: string
// A method start() that logs "Vehicle started."
// Create two subclasses:

// Car that extends Vehicle and adds a method drive() which logs "Driving the car."
// Bike that extends Vehicle and adds a method ride() which logs "Riding the bike."
// Write a function operateVehicle(vehicle: Vehicle) that:

// Uses instanceof to check if the vehicle is a Car or a Bike
// Calls the appropriate method (drive() or ride())
// ✅ Your Task:
// Write the complete TypeScript code to implement the above functionality.
class Vehicle {
    brand: string;

    constructor (brand: string){
        this.brand = brand;
    }

    start(){
        console.log('Vehicle started.');
    }
};

class Car extends Vehicle {
    drive(){
        console.log('Driving the car.');
    };
};

class Bike extends Vehicle {
    ride(){
        console.log('Riding the bike.');
    }
};

function operateVehicle(vehicle:Vehicle) {
    if (vehicle instanceof Car) {
        vehicle.start();
        vehicle.drive();
    } else if (vehicle instanceof Bike) {
        vehicle.start();
        vehicle.ride();
    }
};

const car = new Car('Maruti');
operateVehicle(car);

const bike = new Bike('Honda');
operateVehicle(bike);