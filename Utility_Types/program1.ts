export interface User {
    id : number,
    name: string,
    email: string
}

type UserOptional = Partial<User>;

export function updateData(user:User,data:UserOptional) {
    return {
        ...user,
        ...data
    }
}

const user:User = {id:1,'name':'Ajay','email':'ajay@test.com'};
const user1:UserOptional = {'email':'ajay1@test.com'};
console.log(updateData(user,user1));

// Required property
type UserRequired = Required<User>;

// Only selected property
type UserPick = Pick<User,'id' | 'email'>

// Omiting mentioned property
type UserDelete = Omit<User,'email'>;

// Combining 2 properties

type UserUnion = Required<Pick<User,'email' | 'id'>>;