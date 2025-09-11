// ### 💻 **Coding Challenge: Identify Object Type Using `instanceof`**

// You are building a simple system to identify different types of users in an application.

// #### 🔧 Requirements:

// 1. Create two classes: `Admin` and `Guest`.
// 2. Each class should have a `role` property and a method:
//    - `Admin` should have a method `accessControlPanel()` that logs `"Access granted to control panel."`
//    - `Guest` should have a method `viewHomepage()` that logs `"Viewing homepage."`
// 3. Write a function `handleUser(user: Admin | Guest)` that:
//    - Uses `instanceof` to check the type of `user`.
//    - Calls the appropriate method based on the type.

// ---

// ### 📝 **Your Task:**
// Write the complete TypeScript code to implement the above functionality.

class Admin {
    _role: string;
    constructor(role:string) {
        this._role = role;
    };

    accessControlPanel(){
        console.log('Access granted to control panel.');
    }
}

class Guest {
    _role: string;
    constructor(role:string) {
        this._role = role;
    };

    viewHomepage(){
        console.log('Viewing homepage.');
    }
}

function handleUser(user: Admin | Guest) {
      if (user instanceof Admin) {
        user.accessControlPanel();
      } else {
        user.viewHomepage();
      }
}

const user1 = new Admin('admin');
handleUser(user1);

const user2 = new Guest('guest');
handleUser(user2);