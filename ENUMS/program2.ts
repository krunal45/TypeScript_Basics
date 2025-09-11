// **Question:**
// Create an `enum Direction` with values:

// * `NORTH`
// * `SOUTH`
// * `EAST`
// * `WEST`

// Then, write a function `move(direction: Direction)` that prints:

// * `"Moving North"` if direction is `Direction.NORTH`
// * `"Moving South"` if direction is `Direction.SOUTH`
// * `"Moving East"` if direction is `Direction.EAST`
// * `"Moving West"` if direction is `Direction.WEST`

enum Direction {
    NORTH = 'NORTH',
    SOUTH = 'SOUTH',
    EAST = 'EAST',
    WEST = 'WEST'
}

function move(direction: Direction) {
    switch (direction) {
        case Direction.NORTH:
            console.log('Moving North');
            break;
        case Direction.SOUTH:
            console.log('Moving South');
            break;
        case Direction.EAST:
            console.log('Moving East');
            break;
        case Direction.WEST:
            console.log('Moving West');
            break;
        default:
            break;
    }
};
const direction = Direction.EAST;
move(direction);
