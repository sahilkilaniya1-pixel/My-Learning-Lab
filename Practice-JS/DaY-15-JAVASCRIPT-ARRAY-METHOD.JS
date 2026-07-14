// =========================================================================
// 11. ARRAY FLATTENING (.flat())
// =========================================================================
// Kab use karein?: Jab arrays ke andar arrays (nested arrays) ki khichdi bani ho,
// aur hume unhe nikal kar ek simple, single-level flat array banana ho.

const nestedArray = [1, 2, [3, 4, [5, 6]]];

// Depth parameter '2' ka matlab hai ki 2 level andar tak jaakar arrays ko kholo
let flatArray = nestedArray.flat(2); 
console.log("11. Flat Array Output:", flatArray);
// EXPECTED OUTPUT: [1, 2, 3, 4, 5, 6]

/*
  💡 Pro Tip: Agar nesting kitni gehri hai yeh pata na ho, toh depth mein 'Infinity' 
  pass kar do (.flat(Infinity)). Yeh saare levels ko nichod kar ekdum flat kar dega!
*/


// =========================================================================
// 12. TRANSFORMING & FLATTENING MAP (.flatMap())
// =========================================================================
// Kab use karein?: Yeh .map() aur 1-level deep .flat() ka dhasu combo pack hai.
// Pehle har element ko transform karega, fir unhe ek level flat karke return karega.

const sentences = ["Hello World", "JavaScript is awesome"];

// Har sentence ko words mein split kar rahe hain aur sath hi sath flat bhi kar rahe hain
let words = sentences.flatMap(str => str.split(" "));
console.log("12. flatMap Output:", words);
// EXPECTED OUTPUT: ['Hello', 'World', 'JavaScript', 'is', 'awesome']

/*
  🧠 Under the hood: 
  Agar hum sirf .map() chalate toh output milta: [['Hello', 'World'], ['JavaScript', 'is', 'awesome']].
  flatMap ne bina kisi extra performance cost ke ise direct single-level array bana diya!
*/


// =========================================================================
// 13. FILLING ELEMENTS (.fill())
// =========================================================================
// Kab use karein?: Jab array ke dabbo mein manually koi static value thosni ho.
// WARNING: Yeh method original array ko mutate (change) kar deta hai!

const fillNumbers = [1, 2, 3, 4, 5];

// Index 1 se lekar Index 4 tak (4 included nahi hoga) '0' bhar do
fillNumbers.fill(0, 1, 4);
console.log("13. Filled Array Output:", fillNumbers);
// EXPECTED OUTPUT: [1, 0, 0, 0, 5]


// =========================================================================
// 14. IN-PLACE ELEMENT COPYING (.copyWithin())
// =========================================================================
// Kab use karein?: Apne hi array ke ek hisse ko copy karke, usi array ke kisi doosre 
// index par chipka dena (overwrite) bina array ki length badle.
// WARNING: Yeh bhi original array ko change (mutate) karta hai!

const sequence = ["A", "B", "C", "D", "E"];

// Index 3 ('D') ko uthao aur use index 0 par paste kar do (index 4 exclusive hai)
sequence.copyWithin(0, 3, 4);
console.log("14. copyWithin Output:", sequence);
// EXPECTED OUTPUT: ["D", "B", "C", "D", "E"]


// =========================================================================
// 15. IMMUTABLE SAFE REVERSING (.toReversed())
// =========================================================================
// Note: Modern ES2023+ standard feature.
// Kab use karein?: Purana .reverse() original array ki band baja deta tha (mutate karta tha).
// .toReversed() bina original ko chhede, safely ek ulta kiya hua naya clone array deta hai.

const originalDataset = [1, 2, 3];
const reversedDataset = originalDataset.toReversed();

console.log("15a. Safe Reversed Array:", reversedDataset);   // EXPECTED OUTPUT: [3, 2, 1]
console.log("15b. Intact Original Array:", originalDataset); // EXPECTED OUTPUT: [1, 2, 3] (Surakshit!)


// =========================================================================
// 16. IMMUTABLE SAFE SORTING (.toSorted())
// =========================================================================
// Note: Modern ES2023+ standard feature.
// Kab use karein?: Bina [...arr].sort() jaisi tricks lagaye, safe sorting karke naya array paane ke liye.

const rawScores = [30, 10, 20];
const immutablySortedScores = rawScores.toSorted((x, y) => x - y);

console.log("16a. Safe Sorted Scores:", immutablySortedScores); // EXPECTED OUTPUT: [10, 20, 30]
console.log("16b. Intact Original Scores:", rawScores);         // EXPECTED OUTPUT: [30, 10, 20] (No change!)


// =========================================================================
// 17. ADDING/REMOVING FROM THE END (.push() & .pop())
// =========================================================================
// Dono methods array ke aakhri kone (Tail) se khelte hain aur array ko mutate karte hain.

let structuralFruits = ["Apple", "Banana"];

// Push: Array ke end mein naya element ghusata hai
structuralFruits.push("Mango"); 
console.log("17a. Array after .push():", structuralFruits);
// EXPECTED OUTPUT: ["Apple", "Banana", "Mango"]

// Pop: Array ke aakhri element ko bahar nikal deta hai aur wahi element return karta hai
let poppedFruit = structuralFruits.pop(); 
console.log("17b. Array after .pop():", structuralFruits);
console.log("17c. Extracted Element (.pop value):", poppedFruit);
// EXPECTED OUTPUTS:
// Array after .pop(): ["Apple", "Banana"]
// Extracted Element: "Mango"


// =========================================================================
// 18. ADDING/REMOVING FROM THE START (.unshift() & .shift())
// =========================================================================
// Dono methods array ke aage wale gate (Head) se khelte hain.
// WARNING: Yeh slow hote hain kyunki aage badhne par baaki saare elements ke indexes re-index hote hain!

let processingTeam = ["Bob", "Charlie"];

// Unshift: Shuruat mein naya element jodta hai
processingTeam.unshift("Alice"); 
console.log("18a. Array after .unshift():", processingTeam);
// EXPECTED OUTPUT: ["Alice", "Bob", "Charlie"]

// Shift: Sabse pehla element bahar nikal leta hai
let shiftedPerson = processingTeam.shift(); 
console.log("18b. Array after .shift():", processingTeam);
console.log("18c. Extracted Element (.shift value):", shiftedPerson);
// EXPECTED OUTPUTS:
// Array after .shift(): ["Bob", "Charlie"]
// Extracted Element: "Alice"


// =========================================================================
// 19. CUTTING AN ARRAY SUBSET (.slice())
// =========================================================================
// Kab use karein?: Cake ka ek tukda kaatne ke liye, bina cake ko kharab kiye!
// Yeh original array ko chhue bina uska ek hissa naye array mein copy karke deta hai.

const targetAnimals = ["Ant", "Bison", "Camel", "Duck", "Elephant"];

// Index 1 se start karo aur index 4 se pehle tak kaat lo (index 4 excluded hai)
let subArrayResult = targetAnimals.slice(1, 4);
console.log("19a. Slice Result:", subArrayResult);
console.log("19b. Original Array:", targetAnimals);
// EXPECTED OUTPUTS:
// Slice Result: ["Bison", "Camel", "Duck"]
// Original Array: ["Ant", "Bison", "Camel", "Duck", "Elephant"]


// =========================================================================
// 20. THE SWISS ARMY KNIFE OF ARRAYS (.splice())
// =========================================================================
// Kab use karein?: Jab array ke beech mein se elements hatane hon, naye dalne hon, 
// ya modify karne hon. WARNING: Yeh asli array ke dhaanchan ko badal (mutate) deta hai.

const calendarMonths = ["Jan", "March", "April", "June"];

// Action 1: Index 1 par jao, '0' elements delete karo, aur "Feb" ghusa do!
calendarMonths.splice(1, 0, "Feb");
console.log("20a. Splice Insert:", calendarMonths);
// EXPECTED OUTPUT: ["Jan", "Feb", "March", "April", "June"]

// Action 2: Index 3 par jo bhi hai use uthao aur use poora delete kar do (1 count)
calendarMonths.splice(3, 1);
console.log("20b. Splice Delete:", calendarMonths);
// EXPECTED OUTPUT: ["Jan", "Feb", "March", "June"]


// =========================================================================
// 21. MERGING INDEPENDENT ARRAYS (.concat())
// =========================================================================
// Kab use karein?: Do alag arrays ko milakar ek bada naya joint-array banane ke liye.

const alphabetGroup1 = ["a", "b"];
const alphabetGroup2 = ["c", "d"];

const concatenationResult = alphabetGroup1.concat(alphabetGroup2);
console.log("21. Concat Result:", concatenationResult);
// EXPECTED OUTPUT: ["a", "b", "c", "d"]


// =========================================================================
// 22. STANDARD STRING CONVERSION (.toString())
// =========================================================================
// Kab use karein?: Pure array ko comma-separated simple string mein badalne ke liye.

const genericElements = [1, 2, "a", "b"];
const stringifiedResult = genericElements.toString();

console.log("22. toString Output:", stringifiedResult);
// EXPECTED OUTPUT: "1,2,a,b"
console.log("\n-------------------------------------------");