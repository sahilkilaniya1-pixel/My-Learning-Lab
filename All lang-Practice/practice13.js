/**
 Q2.2: Compact Discount Calculator (Nested / Chained Ternaries)Write a clean expression using ternary operators that calculates a discount percentage for an online store:Premium Member + Spent over $100 $\rightarrow$ 20% discountPremium Member + Spent $100 or less $\rightarrow$ 10% discountNon-Premium Member + Spent over $100 $\rightarrow$ 5% discountNon-Premium Member + Spent $100 or less $\rightarrow$ 0% discount
 */
// function getDiscount (ispremium, amount){
//     if(ispremium){
//         if(amount>100){
//             return 20;
//         } else {
//             return 10;
//         }
//     }else {
//         if (amount >100){
//             return 5;
//         } else {
//             return 0;
//         }
//     }
// }


const correct_pin = 1234;
let accBalance = 5000;

function runATM(enteredPin, option, amounut = 0){
    console.log("ATM Machine Operation");
}

if(enteredPin !== correct_pin){
    console.log("Incorrect pin");
}
console.log("PIN verified successfully");

if(option ==1){
    console.log(`current account balance: ${accountBalance}`);
}

else if(option ===2){
    if(amount <=0){
        console.log("Invalid  deposit amount please enter a positive vale:")
    } else {
        accBalance += amount;
        console.log(`${amount} deposited successfully`);
        console.log(`$updated balance:`);
    }
}

else if (option ===3){
    if(amount <=0){
        console.log("invalid withdrawal amount");
    } else if (amount > accBalance){
        console.log("Insufficient balance Transaction";)
    } else {
        accBalance -= amount;
        console.log(`${amount} withdraw successfully`);
        console.log(`remainig balance :${accBalance}`);
    }
}
