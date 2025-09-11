interface Shape{
    area(): number;
}

class  Rectangle implements Shape{
    public readonly width:number;
    public readonly height:number

   constructor(width:number,height:number){
        this.width = width;
        this.height = height;
    }

    public area(): number{
        return (this.width * this.height);
    }
}
const rect1 = new Rectangle(2,2);
console.log(rect1.area());
