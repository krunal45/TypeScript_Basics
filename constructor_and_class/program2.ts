class Account{
    public owner:string;
    protected balance:number = 0; 
    private pin:string

    constructor(owner:string,pin:string){
        this.owner = owner;
        this.pin = pin;
    }

    public describe():string{
        return `Owner: ${this.owner}`;
    }

    public checkPin(pin:string):boolean{
        return (this.pin === pin);
    }
};

class SavingsAccount extends Account{
    public deposit(amount:number):boolean{
       if (amount >=0 ) {
        this.balance += amount;
        return true; 
       }else{
        console.error('ERROR: Amount cannot be negative!');
        return false; 
       } 
    }

    public withdraw(amount:number, pin:string){
        if (this.checkPin(pin)) {
            if(amount < 0){
                console.error('ERROR: Amount cannot be negative!');
            }
            else if (this.balance >= amount) {
                this.balance -= amount;
                return true;
            }else{
                console.error('ERROR: Insufficient Balance!');
                return false;
            }
        }else{
            console.error('ERROR: Invalid Pin!');
            return false;
        }
    }

    public summary():string{
        return `${this.owner}: ${this.balance}`;
    };
};

function probe(account: Account) {
    console.log(account.owner);          // ✅ OK - public access
    // console.log(account.balance);     // ❌ ERROR - protected access
    // console.log(account.pin);         // ❌ ERROR - private access
}

const s = new SavingsAccount('Aditya','1234');
probe(s);
s.deposit(40);
console.log(s.summary());
// s.withdraw(200,'abc') : This will throw error for incorrect PIN!
// s.withdraw(4001,'1234'); : This will throw error for insufficient balance!
s.withdraw(10,'1234');
console.log(s.describe());
console.log(s.summary());