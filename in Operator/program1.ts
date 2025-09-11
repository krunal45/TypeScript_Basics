class Student {
    _id:number;
    _name:string;
    _gender:string;

    constructor(id:number,name:string,gender:string) {
        this._id = id;
        this._name = name;
        this._gender = gender;
    }
}

class Teacher {
    _id:number;
    _name:string

    constructor(id:number,name:string) {
        this._id = id;
        this._name = name;
    }
}

function printInfo(arg: Student | Teacher) {
    if('_gender' in arg){
       console.log('id: ',arg._id);
       console.log('name: ',arg._name);
       console.log('gender: ',arg._gender);
    }else  {
        console.log(arg._id);
        console.log(arg._name);
    }
}

const student1 = new Student(1,'Aditya','male');
printInfo(student1)