type addable = number | string;

function add(num1: addable, num2: addable) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return (num1 + num2);
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return (num1 + num2);
    }
    return;
}

const r1 = add(1, 2);
console.log(r1);

const r2 = add('Hello ', 'world!');
console.log(r2);

const r3 = add(1, ' Test');
console.log(r3);
