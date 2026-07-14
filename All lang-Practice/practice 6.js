let balance = 10000;
let withdrawalAmount = 8000;
if(withdrawalAmount <= balance){
    console.log("paise nikal rha hain")
} else{
    console.log("paise kam hain");
}


// > (Bada hai): 10 > 5 $\rightarrow$ True< (Chhota hai): 3 < 1 $\rightarrow$ False>= (Bada hai ya barabar hai): 18 >= 18 $\rightarrow$ True<= (Chhota hai ya barabar hai): 5 <= 2 $\rightarrow$ False=== (Bilkul barabar hai): 5 === 5 $\rightarrow$ True | "Rahul" === "Amit" $\rightarrow$ False

// let marks = 88;
// if(marks >=90){
//     console.log("Grade A");
// } else if(marks >= 75) {
//     console.log("Grade B");
// } else if(marks >= 35) {
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }

let marks = 80;
if(marks >=90){
    console.log("Grade A");
}else if(marks >=75){
    console.log("Grade B");
} else if( marks >= 60){
    console.log("Grade C");
} else {
    console.log("Grade D Fail");
}


let totalBill = 1200;
if(totalBill > 1000){
    console.log("Apko mili free Delivery");
} else {
    console.log("$50 Delivery charges lagege");
}


const friends = ["Rahul","amit","Sahil","Sneha"];
for(let i =0; i<friends.length; i++){
    console.log("Hello " + friends[i]);
}

const friend = ["Rahul","amit","Sahil","Sneha"];
for(const friend of friends){
    console.log("Hello "+ friend);
}

const number = [12,14,13,15,16,18,8,19,20];
for(const num of number){
    if(num % 2 ===0){
        console.log(num +"ek Even number hain .");
    } else {
        console.log(num+ "ek Odd number hain");
    }
}


const cartPrices = [200, 1500, 50, 4000, 800];
for( const price of cartPrices){
    if( price > 1000){
        console.log("Expensive Product: rs. " + price + " ");
    }else {
        console.log("Normal Product: Rs. "+ price + " ");
    }
}