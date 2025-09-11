function printAlphabets(alphabets: string | string[]) {
    if (typeof alphabets === 'object') {
        alphabets.forEach(value => console.log(value));
    } else {
        console.log(alphabets);
    }
}

printAlphabets('A'); // Printing single alphabet!
printAlphabets(['a', 'b', 'c', 'd']);
