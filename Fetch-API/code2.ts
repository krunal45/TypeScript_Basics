import {jsonplaceholderUrl} from './urlTypes.ts';

debugger;
const users = async function fetchUsers() {
    try {
        const response = fetch(jsonplaceholderUrl+'/users')
        return (await response).json();
    } catch (error) {
        console.log(error);
        return error;
    }
}

users().then(data => console.log(data));