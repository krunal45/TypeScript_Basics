import {Shape, Circle, Rectangle} from './shapes'

// Method 1
// const circle1 = new Circle(5);
// console.log('-- Circle Area --');
// console.log('Circle - Area: ',circle1.getArea().toFixed(2));
// console.log();
// console.log('-- Circle Circumference --');
// console.log('Circumference: ',circle1.getCircumference().toFixed(2));

// const rectangle1 = new Rectangle(3,2);
// console.log('-- Rectangle Area --');
// console.log("Area: ",rectangle1.getArea().toFixed(2));
// console.log('-- Rectangle Perimeter --');
// console.log("Perimeter: ",rectangle1.getPerimeter().toFixed(2));


// Method 2
const shapes:Shape[] = [
    new Circle(5),
    new Rectangle(2,3)
];

for (const shape of shapes) {
    console.log('Area: ',shape.getArea().toFixed(2));
};
