// ### Beginner coding question
// **Create an abstract class `Animal` with an abstract method `makeSound(): void`. Then create a class `Dog` that extends `Animal` 
// and implements `makeSound` to log "Woof!". Finally, write code to create a `Dog` and call `makeSound()`. Why can’t you create an instance of `Animal` directly?**
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void{
        console.log("Woof!");
    }
}
const dog1 = new Dog();
dog1.makeSound();

// Why can’t you create an instance of `Animal` directly?
// Answer: Since we cannot instantiate an abstract class.

// ---- Optional Version:
// abstract class Animal {
//     abstract makeSound(): void;
// }

// class Dog extends Animal {
//     makeSound(): void {
//         console.log("Woof!");
//     }
// }

// class Cat extends Animal {
//     makeSound(): void {
//         console.log("Meow!");
//     }
// }

// const animals: Animal[] = [new Dog(), new Cat()];
// animals.forEach(a => a.makeSound());

// Attempting: new Animal() // Error: Cannot create an instance of an abstract class (TS2511)