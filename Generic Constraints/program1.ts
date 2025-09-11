interface user {
    id: number,
    name: string,
    length: number
}

interface lengthProperty {
    length: number
}

function lengthComparison<T extends lengthProperty>(a: T[], b: T[]) {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
}

const user1: user[] = [{ id: 1, name: 'Aditya', length: 1 }, { id: 2, name: 'Ajay', length: 1 }];
const user2: user[] = [{ id: 1, name: 'Aditya', length: 1 }, { id: 2, name: 'Ajay', length: 1 }, { id: 3, name: 'Bob', length: 1 }];
console.log(lengthComparison(user1, user2));
