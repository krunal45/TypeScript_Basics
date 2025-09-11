class Point2D {
    _xPos: number;
    _yPos: number;

    constructor(_xPos:number, _yPos: number) {
        this._xPos = _xPos;
        this._yPos = _yPos;
    }
}

// function print2DCoordinates1(point:Point2D) {
//     console.log(point._xPos);
//     console.log(point._yPos);
// }

// function print2DCoordinates2(_xPos:number, _yPos: number) {
//     console.log(_xPos);
//     console.log(_yPos);
// }

// const p1 = new Point2D(1,1);
// print2DCoordinates1(p1);

// print2DCoordinates2(2,2);

function print2DCoordinates(point:Point2D):void;
function print2DCoordinates(_xPos:number, _yPos: number):void;

function print2DCoordinates(arg1:unknown, arg2?:unknown) {
    if (typeof arg1 === 'object') {
        console.log((arg1 as Point2D)._xPos);
        console.log((arg1 as Point2D)._yPos);
    } else {
        console.log(arg1);
        console.log(arg2);
    }
}

print2DCoordinates(1,0);
const p1 = new Point2D(3,3);
print2DCoordinates(p1);