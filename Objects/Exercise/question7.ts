// **Question 5 (Intermediate, Record + Array):**
// Create a list of `Employee` objects in TypeScript with the following rules:

// 1. Each employee must have:

//    * `id` (number)
//    * `name` (string)
//    * `skills` (a `Record<string, number>` where the key is the skill name and the value is the proficiency score out of 10).

// 2. Store at least **two employees** inside an array called `employees`.

// 3. Write code to loop through the array and print each employee’s `name` and their skills in this format:

//    ```
//    Employee: <name>
//    Skill: <skill> - Level: <score>
//    ```
interface Employee{
    id:number,
    name: string,
    skills: Record<string, number>
}

const employee1:Employee = {
    id:1,
    name:'Aditya',
    skills:{
        'C':5,
        'Java':7,
        'Python':6
    }
};

const employee2:Employee = {
    id:2,
    name:'Arjun',
    skills:{
        'C#':5,
        'Java script':7,
        'Python':6
    }
};

const employees = [employee1,employee2];

for (const employee of employees) {
    console.log(`Employee: ${employee.name}`);
    for (const [skill,level] of Object.entries(employee.skills)) {
        console.log(`Skill: ${skill} - Level: ${level}`);
    }
    console.log('---');
};