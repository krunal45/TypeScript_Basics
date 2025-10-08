// **Question 6 (Advanced, Nested Record):**
// Create a `Department` object in TypeScript with the following requirements:

// 1. The object should represent multiple departments in a company.

//    * Each department name (like `"IT"`, `"HR"`) should be a **key**.
//    * The value should be another `Record` where:

//      * Key = employee name (string)
//      * Value = employee’s role (string).

// 2. Add at least **two departments** (`IT` and `HR`) with some employees inside them.

// 3. Write code to:

//    * Print all department names.
//    * For each department, print its employees and roles.

// ---

// 👉 Example of expected output:

// ```
// Department: IT
// Employee: Aditya - Role: Developer
// Employee: Arjun - Role: Tester

// Department: HR
// Employee: Meera - Role: Recruiter
// ```

interface Department {
  [departmentName: string]: Record<string, string>;
}

const departments: Department = {
  IT: {
    Aditya: "Developer",
    Aditi: "QA",
  },
  HR: {
    Bipasa: "Senior HR",
    Rahul: "Interviewer",
  },
};

for (const [department, employees] of Object.entries(departments)) {
  console.log(`Department: ${department}`);
  for (const [employeeName, role] of Object.entries(employees)) {
    console.log(`Employee: ${employeeName} - Role: ${role}`);
  }
  console.log("---");
}
