// Here's another beginner-level question that builds on this concept:

// **Question:**

// You have a configuration object for different environments:

// ```typescript
// const environments = {
//   development: {
//     apiUrl: "http://localhost:3000",
//     debug: true,
//     timeout: 5000
//   },
//   staging: {
//     apiUrl: "https://staging-api.com",
//     debug: true,
//     timeout: 10000
//   },
//   production: {
//     apiUrl: "https://api.com",
//     debug: false,
//     timeout: 15000
//   }
// };
// ```

// **Task:** Write a function called `getEnvironmentConfig` that:
// 1. Takes an `envName` parameter (string)
// 2. Returns the configuration object for that environment
// 3. Uses the same TypeScript pattern you just learned
// 4. If the environment doesn't exist, throw an error with a helpful message

// **Expected behavior:**
// - `getEnvironmentConfig("development")` should return the development config object
// - `getEnvironmentConfig("invalid")` should throw an error
// - TypeScript should provide proper type checking

// **Bonus challenge:** Can you also add a default fallback to "development" if no environment is provided?

const environments = {
      development: {
        apiUrl: "http://localhost:3000",
        debug: true,
        timeout: 5000
      },
      staging: {
        apiUrl: "https://staging-api.com",
        debug: true,
        timeout: 10000
      },
      production: {
        apiUrl: "https://api.com",
        debug: false,
        timeout: 15000
      }
    };

function  getEnvironmentConfig(envName:string="development"){
 const environmentConfig = environments[envName as keyof typeof environments];
 if (typeof environmentConfig === 'undefined') {
    throw new Error(`FAIL: Invalid Environment! Please select enevironments from > ${Object.keys(environments).join(',')}`);
 }else{
    return environmentConfig;
 }
}
console.log(getEnvironmentConfig('development1'));