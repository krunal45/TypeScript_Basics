function add(num1: number | string, num2: number | string) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return (num1 + num2);
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return (num1 + num2);
    }
    return;
}

const res1 = add(1, 2);
console.log(res1);

const res2 = add('Hello ', 'world!');
console.log(res2);

const res3 = add(1, ' Test');
console.log(res3);
