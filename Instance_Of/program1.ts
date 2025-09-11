class User {
    _id: number;
    _name: string;

    constructor(id: number,name: string){
        this._id = id;
        this._name = name;
    }
}

class Admin {
    _name: string;
    constructor(name: string) {
        this._name = name;
    }
}

function printInfo(arg: User | Admin) {
    if (arg instanceof User) {
        console.log(arg._id);
        console.log(arg._name);
    }else{
        console.log(arg._name);
    }
}

const userInfo1 = new User(1,'Ajay');
printInfo(userInfo1);

const adminInfo1 = new Admin('Ajay');
printInfo(adminInfo1);