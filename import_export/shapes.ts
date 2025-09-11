export interface Shape {
    getArea(): number;
}

export class Circle implements Shape {
    public radius:number;
    constructor(radius:number) {
        this.radius = radius;
    };
   
    getArea():number{
     return (Math.PI * this.radius * this.radius);
    }

    getCircumference():number{
        return (2*Math.PI*this.radius);
    }
}

export class Rectangle implements Shape {
    public width:number;
    public height:number
    constructor(width:number,height:number) {
        this.width = width;
        this.height = height;
    }

    getArea():number{
      return (this.width * this.height);
    }

    getPerimeter():number{
       return 2 * (this.width + this.height);
    }
}