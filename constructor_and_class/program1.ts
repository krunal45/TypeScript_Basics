debugger;
export class Point2D {
    xPos: number;
    ypos: number;

    constructor(x: number, y: number) {
        this.xPos = x;
        this.ypos = y;
    };
};

debugger;
export class Point3D extends Point2D {
    zpos: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.zpos = z;
    }
}

const p1 = new Point2D(0, 0);
console.log(p1);

const p2 = new Point3D(1, 2, 3);
console.log(p2);
