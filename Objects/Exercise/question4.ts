// **Question 2:**
// Define a `UserProfile` object literal in TypeScript with these requirements:

// 1. Properties:

//    * `username` (string, required)
//    * `email` (string, required)
//    * `age` (number, optional)

// 2. Add an **index signature** so that the object can also hold **any number of extra properties**, but only of type `string | number`.

// 3. Add a method `getInfo()` that returns:

//    ```
//    "<username> (<email>)"
//    ```

// 👉 Write the TypeScript code to define this object literal and call `getInfo()` on it.

interface UserProfile {
  username: string;
  email: string;
  age?: number;
  address: Record<string,string|number>;
  getInfo(this: UserProfile): string;
}

const userProfile: UserProfile = {
  username: "Aditya",
  email: "aditya@test.com",
  address: {city:'London',ZIP:'ABC'},
  getInfo() {
    return `${userProfile.username} ${userProfile.email}`;
  }
};

console.log(userProfile.getInfo());