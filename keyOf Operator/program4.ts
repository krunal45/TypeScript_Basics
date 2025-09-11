type User = {
    id: number,
    name:string,
    gender:string,
    isMarried:boolean
}

function pickAndFormat<T extends User,K extends keyof T>(object:T,keys:K[]) {
    const out = {} as Record<K,string>;
    
    for (const key of keys) {
        const value = object[key];
        out[key] = String(value);
    }
    return out; 
}

const ajay:User = {'id':1,'name':'Ajay','gender':'male','isMarried':true}; 