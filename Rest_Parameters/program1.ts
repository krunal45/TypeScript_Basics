function sum(...nums:number[]):number {
    let result:number = 0;
    nums.forEach(num => result+=num);
    return result;
}

const result = sum(1,2,3);
console.log(result);