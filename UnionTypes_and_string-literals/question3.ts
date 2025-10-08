// ### 🧠 Question 2:
// You’re building a function to handle user roles in an admin dashboard. The roles can be `"admin"`, `"editor"`, `"viewer"`, or
//  `"guest"`. Each role has a different level of access.

// **Task:**
// 1. Create a union type `UserRole` using string literals.
// 2. Write a function `getAccessLevel(role: UserRole): number` that returns:
//    - `3` for `"admin"`
//    - `2` for `"editor"`
//    - `1` for `"viewer"`
//    - `0` for `"guest"`
import { UserRole } from "./types";

function getAccessLevel(role: UserRole): number {
  switch (role) {
    case "guest":
      return 0;
      break;
    case "viewer":
      return 1;
      break;
    case "editor":
      return 2;
      break;
    case "admin":
      return 3;
      break;
    default:
      return -1  
      break;
  }
}

const result = getAccessLevel('admin')
console.log(result);