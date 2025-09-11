interface User{
    id:number,
    name:string
}

interface Admin{
    name:string;
}

function logInfo<T extends User | Admin>(user: T, key:keyof T) {
    console.log(`${String(key)}: ${String(user[key])}`);
}

const user1:User = {id: 1,name:'Ajay'};
logInfo(user1,'id'); 
logInfo(user1,'name');

const admin1:Admin = {name:'Ajay'};
logInfo(admin1,'name');