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


const CORRECT_PIN = 1234;
let accountBalance = 5000;

function runATM(enteredPin, option, amount = 0) {
  console.log("ATM Machine Operations");
  if (enteredPin !== CORRECT_PIN) {
    console.log("Incorrect PIN! Access Denied.");
    return;
  }

  console.log("PIN Verified Successfully!\n");
  if (option === 1) {
    console.log(`Current Account Balance: ₹${accountBalance}`);
  } else if (option === 2) {
    if (amount <= 0) {
      console.log("Invalid deposit amount! Please enter a positive value.");
    } else {
      accountBalance += amount;
      console.log(`${amount} deposited successfully!`);
      console.log(`Updated Balance: ₹${accountBalance}`);
    }
  } else if (option === 3) {
    if (amount <= 0) {
      console.log("Invalid withdrawal amount!");
    } else if (amount > accountBalance) {
      console.log("Insufficient Balance! Transaction Failed.");
    } else {
      accountBalance -= amount;
      console.log(
        `${amount} withdrawn successfully! Please collect your cash.`,
      );
      console.log(`Remaining Balance: ₹${accountBalance}`);
    }
  } else if (option === 4) {
    console.log("Thank you for using our ATM. Have a great day!");
  } else {
    console.log("Invalid Option! Please select between 1 and 4.");
  }
}



