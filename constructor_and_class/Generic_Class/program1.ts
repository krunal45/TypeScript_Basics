class Databox<T extends { length: number }> {
    private data: T;
    constructor(data: T) {
        this.data = data;
    }

    printData() {
        console.log(this.data);
    }

    printLength(){
        console.log(this.data.length);
    }
}
const d1 = new Databox('Aditya');
d1.printData();
d1.printLength();

const d2 = new Databox([1,2,3]);
d2.printData();
d2.printLength();

const student = {
    id:1,
    name:'Aruhi'
}
const d3 = new Databox(student.name);
d3.printData();
d3.printLength();