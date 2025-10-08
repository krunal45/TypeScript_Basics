// ### New coding question (similar pattern)
// You’re building a payment processor. Payments can be of the following types:
// - "card": requires cardNumber and amount
// - "upi": requires upiId and amount
// - "cash": requires amount and receivedBy

// Task:
// 1) Define a discriminated union type Payment for the above.
// 2) Write a function processPayment(payment: Payment): void that:
//    - Uses a switch on payment.type to narrow the type.
//    - Logs a different message for each payment type using its specific fields.
type Payment = 
| {type:'card',cardNumber:string,amount:number}
| {type:'upi',upiId:string,amount:number}
| {type:'cash',amount:number,receivedBy:string}

function processPayment(payment: Payment):void {
    switch (payment.type) {
        case 'card':
            console.log(`${payment.type}: Payment Success! with ${payment.cardNumber} & ${payment.amount}`);
            break;

        case 'upi':
            console.log(`${payment.type}: Payment Success! with ${payment.upiId} & ${payment.amount}`);
            break;   
        
        case 'cash':
            console.log(`${payment.type}: Payment Success! of ${payment.amount} receivedBy ${payment.receivedBy}`);
            break;      
    
        default:
            const _exhaustiveCheck: never = payment;
            return _exhaustiveCheck;
    }
}

processPayment({type:'card',cardNumber:'1234',amount:1000})
processPayment({type:'upi',upiId:'bxyz@test',amount:150})
processPayment({type:'cash',amount:200,receivedBy:'Helex'})