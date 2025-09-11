// **Question:**
// Create an `enum Direction` with the values:

// * `UP`
// * `DOWN`
// * `LEFT`
// * `RIGHT`

// Then, define an interface `GameCharacter` with:

// * `name` (string)
// * `direction` (Direction)

// Finally:

// 1. Write a function `createCharacter(name: string, direction: Direction): GameCharacter` that returns a character object.
// 2. Create two characters:

//    * `"Mario"` facing `Direction.RIGHT`
//    * `"Luigi"` facing `Direction.LEFT`
// 3. Print both characters.
enum Direction {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}

interface GameCharacter {
    name: string,
    direction: Direction
};

function createCharacter(name: string, direction: Direction) {
    const char = { name, direction };
    return char;
};

const char1 = 'Mario'
const direction1 = Direction.DOWN;

const char2 = 'Luigi'
const direction2 = Direction.RIGHT;

const rres1 = createCharacter(char1, direction1);
const rres2 = createCharacter(char2, direction2);

console.log(rres1);
console.log(rres2);
