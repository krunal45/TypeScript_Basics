type CatName = 'Amy' | 'Billie' | 'Chickoo'

interface CatInfo  { 
   age: number,
   breed: string
}

const cats: Record<CatName,CatInfo> = {
    Amy: {age : 1,breed: 'Persian' },
    Billie: {age : 3,breed: 'Maine Coon'},
    Chickoo: {age : 5,breed: 'Maine Coon' }
}

console.log(cats.Amy);