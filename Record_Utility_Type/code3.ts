// - **Question**: 
// Given an array of users `{ id: number; name: string }[]`, write a TypeScript function `groupById(users)`
// that returns a `Record<number, { id: number; name: string }>` keyed by `id`. Ensure type safety and throw an
// error if a duplicate `id` is encountered.

const users = [{ id: 1, name: 'name1' },{ id: 2, name: 'name2' }];

function groupById(user:typeof users):Record<number, { id: number; name: string }> {
    const result: Record<number, { id: number; name: string }> = {};
    
    for (const userItem of user) {
        // Check if id already exists in the result
        if (result[userItem.id]) {
            throw new Error(`Duplicate id found: ${userItem.id}`);
        }
        
        // Add user to result with id as key
        result[userItem.id] = userItem;
    }
    
    return result;
}

// Test the function
console.log('Testing with normal users:');
console.log(groupById(users));

// Test with duplicate ids (this should throw an error)
const usersWithDuplicates = [{ id: 1, name: 'name1' }, { id: 1, name: 'name2' }];
console.log('\nTesting with duplicate ids:');
try {
    console.log(groupById(usersWithDuplicates));
} catch (error) {
    console.log('Error caught:', (error as Error).message);
}