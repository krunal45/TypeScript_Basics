
class Point2D {
private _xPos:number;
private _yPos:number;
    
    constructor(x:number,y:number){
        this._xPos = x;
        this._yPos = y;
    };

    
    public set xPos(x : number) {
        this._xPos = x;
    }
    
    public set yPos(y : number) {
        this._yPos = y;
    }

    public get xPos():number {
        return this._xPos;
    }
    
    public get yPos():number {
        return this._yPos;
    }
};

class Point3D extends Point2D{
    private _zPos:number;

    constructor(x:number,y:number,z:number){
        super(x,y);
        this._zPos = z;
    }

    public set zPos(z : number) {
        this._zPos = z;
    }

    public get zPos():number {
        return this._zPos;
    }
}

// const p1 = new Point2D(0,0);
// console.log(p1.xPos);
// console.log(p1.yPos);
// p1.xPos = 1;
// p1.yPos = 1;
// console.log(p1.xPos);
// console.log(p1.yPos);

const p2 = new Point3D(0,0,1);
console.log(p2.xPos);
console.log(p2.yPos);
console.log(p2.zPos);

// Setting new property values
p2.xPos = 1;
p2.yPos = 1;
p2.zPos = 1;
console.log(p2.xPos);
console.log(p2.yPos);
console.log(p2.zPos);