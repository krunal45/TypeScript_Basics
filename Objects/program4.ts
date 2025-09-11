// In TypeScript, declare a variable `student` that should store an object with the following properties:

// * `id` (a number, required)
// * `name` (a string, required)
// * `email` (a string, optional)

// Then create one valid `student` object.
interface Studentt {
    id: number,
    name: string,
    email?: string
};

const studentg: Studentt = {
    id: 1,
    name: 'Alok'
}
console.log(studentg);
