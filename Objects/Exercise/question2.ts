// ## Q2: Object Literal with Nested Objects and Optional Properties

// ### Task
// Create a `userProfile` object literal in TypeScript with the following:

// 1. **Properties:**
//    - `username: string`
//    - `email: string`
//    - `age?: number` (optional)
//    - `address: { city: string; zip: string }`
//    - `getSummary(): string` → returns something like:
//      `"User: Alex (alex@example.com), City: New York, ZIP: 10001"`

// 2. Write a function `updateCity(profile: /* your type */, newCity: string): void` that updates the `address.city` property.

// 3. Test:
//    - Log `userProfile.getSummary()`
//    - Call `updateCity` with a new city and log `getSummary()` again.

// ---

// ### Constraints
// - Use **TypeScript** with `--strict`.
// - No `any`.
// - Use **nested object literal** for `address`.
// - Handle optional `age` properly (don’t break if it’s missing).

// ---

// #### Example Output
// ```
// User: Alex (alex@example.com), City: New York, ZIP: 10001
// User: Alex (alex@example.com), City: Los Angeles, ZIP: 10001
interface UserProfile {
  username: string;
  email: string;
  age?: number;
  address: { city: string; zip: string };
  getSummary(this: UserProfile): string;
}

const userProfile: UserProfile = {
  username: "Tom",
  email: "Tom@test.com",
  age: 21,
  address: { city: "London", zip: "ABCDEF" },
  getSummary(this: UserProfile) {
    return `User: ${this.username} (${this.email}), City: ${this.address.city}, ZIP: ${this.address.zip}`;
  },
};

function updateCity(profile: UserProfile, newCity: string): void {
  profile.address.city = newCity;
}

console.log("--Before Update--");
console.log(userProfile.getSummary());
updateCity(userProfile, "Manchester");
console.log();
console.log("--After Update--");
console.log(userProfile.getSummary());
