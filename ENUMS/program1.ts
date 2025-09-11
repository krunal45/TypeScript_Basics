// Create an `enum Role` with the following values:

// * `ADMIN`
// * `USER`
// * `GUEST`

// Then, define an interface `Person` with:

// * `name` (string)
// * `role` (Role)

// Finally, create two objects of type `Person`:

// 1. `p1` → name = `"Ravi"`, role = `Role.ADMIN`
// 2. `p2` → name = `"Meena"`, role = `Role.USER`
enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST'
};

interface person {
    name: string,
    role: Role
}

function createPerson(name: string, role: Role) {
    const person1: person = { name, role };
    return person1;
}

const p1 = createPerson('Ravi', Role.ADMIN);
console.log(p1);
const p2 = createPerson('Meena', Role.USER);
console.log(p2);
