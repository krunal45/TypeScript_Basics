// **Question 10 (Advanced, Domain Example with Roles):**

// You have a constant object mapping **user roles** to their allowed actions:

// ```ts
// const rolePermissions = {
//     ADMIN: ["create", "read", "update", "delete"],
//     EDITOR: ["read", "update"],
//     VIEWER: ["read"]
// } as const;
// ```

// 👉 Task:

// 1. Create a type `Role` that represents all valid roles (`"ADMIN" | "EDITOR" | "VIEWER"`) using `keyof typeof`.

// 2. Write a function `getPermissions(role: string)` that:

//    * Accepts a string.
//    * Uses `as keyof typeof rolePermissions` to safely return the list of permissions for the role if it exists.
//    * Returns `["No permissions"]` if the role is invalid.

// 3. Test the function with:

//    * `"ADMIN"` → should return `["create", "read", "update", "delete"]`
//    * `"VIEWER"` → should return `["read"]`
//    * `"GUEST"` → should return `["No permissions"]`

// ---
const rolePermissions = {
  ADMIN: ["create", "read", "update", "delete"],
  EDITOR: ["read", "update"],
  VIEWER: ["read"],
} as const;

type Role = keyof typeof rolePermissions;

function getPermissions(role: Role) {
  return rolePermissions[role as keyof typeof rolePermissions];
}

const result = getPermissions('ADMIN');
console.log(result);
