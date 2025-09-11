// **Question:**
// Create a `Car` interface in TypeScript with the following properties:

// * `brand` (string)
// * `model` (string)
// * `year` (number)

// Then, create an object `myCar` using this interface with the values:

// * brand → `"Toyota"`
// * model → `"Corolla"`
// * year → `2020`
interface Car {
    brand: string,
    model: string,
    year: number
};

function createCar(brand: string, model: string, year: number) {
    const myCar: Car = {
        brand,
        model,
        year
    };
    return myCar;
}

const car = createCar('Tiago', 'XZ', 2017);
console.log(car);
