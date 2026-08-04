/*
part 1 basic array kya hai aur memory kaise kaam karti hain?
Array ek continous memory block hota hai jahan hum ek se zyada values ko ek hi variable mein store karte hain har value ko ek index milta hai jo 0 zero se shuru hota hain.
*/

let arr = [10, 20, 30, 40, 50];
//Index:    0,  1,  2,  3,  4

/*
-Element Access: arr[0]-> 10, arr[4]->50
-Length: Array mein kitne elements hain, ye arr.length se  pata chalta hain (yahan 5).
-Last Element index: Always arr.length -1(yahan 5-1=4)
*/


/* 
Part 2:Basic operation(bina built-in functions ke)

1.Elements Add Karna(Insertion)
A.Array ke aakhiri(End) mein elements jodna (Manual push)
Logic:: Aakhiri index arr.length hota hai. Wahan direct value rakh do.
*/
let arr = [10,20,30];
let newElement = 40;

arr[arr.length] = newElement;
//arr ab [10,20,30,40] ho gaya

/*
B:Array ke shuru (Start) mein element jodna (manual unshift)

Logic:sabhi elements ko ek step aage (right side) shift karna hoga, fir 0 index par nayi value rakhni hogi.
*/

let arr = [10,20,30];
let newElement = 5;
