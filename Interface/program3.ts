// Create a `Student` interface in TypeScript with the following properties:

// * `name` (string)
// * `age` (number)
// * `isEnrolled` (boolean)

// Then, create an object `student1` using this interface with the values:

// * name → `"Aarav"`
// * age → `21`
// * isEnrolled → `true`
interface Student {
    name: string,
    age: number,
    isEnrolled: boolean
};

function createStudent(name: string, age: number, isEnrolled: boolean) {
    const student1: Student = { name, age, isEnrolled };
    return student1;
}
const s1 = createStudent('Aarav', 21, true);
console.log(s1);
