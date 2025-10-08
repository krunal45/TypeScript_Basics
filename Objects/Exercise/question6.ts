// **Question 4 (Intermediate, Record):**
// Create a `Student` object in TypeScript with the following requirements:

// 1. The object should have fixed properties:

//    * `id` (number)
//    * `name` (string)

// 2. It should also have a property `marks` that is a `Record<string, number>`,
//    where the **key** is the subject name (e.g., `"math"`, `"science"`)
//    and the **value** is the marks scored (number).

// 3. Write code to:

//    * Print the student’s name
//    * Loop through the `marks` object and print each subject with its marks

// ---
interface Student {
    id:number,
    name:string
    marks:Record<string, number>
    address?:Record<string, string | number>
};

const student:Student = {
    id:1,
    name:'Stud 1',
    marks:{
        'Maths':41,
        'History':40
    }
};

console.log(`Name: ${student.name}`);
for (const subject in student.marks) {
 console.log(`${subject}: ${student.marks[subject]}`);
}