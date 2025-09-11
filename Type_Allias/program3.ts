// **Question:**
// Create two types:

// 1. `Developer` → properties:

//    * `name` (string)
//    * `languages` (string\[])

// 2. `Tester` → properties:

//    * `name` (string)
//    * `tools` (string\[])

// Now create a **type intersection** called `DevTester` that combines both `Developer` and `Tester`.

// Finally, create an object `dt1` of type `DevTester` with the following values:

// * name → `"Ananya"`
// * languages → `["TypeScript", "Java"]`
// * tools → `["Selenium", "Postman"]`
type Developer = {
    name: string,
    languages: string[]
};

type Tester = {
    name: string,
    tools: string[]
}

type DevTester = Developer & Tester;

function createDevTester(name: string, languages: string[], tools: string[]) {
    const dt: DevTester = { name, languages, tools };
    return dt;
};

const dt1 = createDevTester('Ananya', ['TypeScript', 'Java'], ['Selenium', 'Postman']);
console.log(dt1);
