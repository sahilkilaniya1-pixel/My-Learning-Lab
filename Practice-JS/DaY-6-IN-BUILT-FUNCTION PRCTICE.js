// =========================================================================
// JAVASCRIPT MASTERCLASS - SUPER EASY HINGLISH GUIDE
// =========================================================================
// Yeh sheet basic concepts, advanced real-world interview questions,
// aur optimized solutions se bhari hai. Students aur Job Seekers ke liye best hai!
// =========================================================================

// =========================================================================
// SECTION 1: ARRAY METHODS (push, pop, shift, unshift, slice, splice)
// =========================================================================

/* 
    💡 BASIC CONCEPT BILKUL DESI STYLE MEIN:
    - push() & pop()  -> Array ke AAKHIR (End) mein kaam karte hain (Bohot fast hote hain).
    - unshift() & shift() -> Array ke SHURU (Start) mein kaam karte hain (Thode slow hain, kyunki baaki sabki seat aage-peeche khiskani padti hai).
    - slice(start, end)   -> Original array ko bina chhede, uski ek safe copy (hissa) nikaal leta hai.
    - splice(index, count, item1...) -> Seedhe original array ke andar ghuskar dakaity karta hai (items delete ya replace kar deta hai).
*/

// --- Advanced Question 1A: Dynamic Task Queue (FIFO - First In First Out) ---
// Scenario: Ek aisa system banao jahan naye tasks peeche se jodein, aur sabse purana task pehle process ho.
let taskQueue = [];

function addTask(task) {
    taskQueue.push(task); // Naya kaam queue ke aakhir mein jodd diya
    console.log(`[+] Task Added: "${task}"`);
}

function processTask() {
    if (taskQueue.length === 0) return "[-] No tasks left in the queue!";
    let currentTask = taskQueue.shift(); // Pehla task line se bahar nikala aur process kiya
    return `[*] Processing: "${currentTask}"`;
}

console.log("--- Task Queue Demo ---");
addTask("Email Send Karo");
addTask("Database Backup");
console.log(processTask()); // Output: Processing: Email Send Karo
console.log(processTask()); // Output: Processing: Database Backup
console.log("\n");


// --- Advanced Question 1B: E-commerce Cart Management ---
// Scenario: Agar kisi item ki quantity 0 ho jaye, toh use cart se bilkul gayab karo (splice).
// Phir, checkout par display karne ke liye sirf pehle 2 premium items ka preview dikhao (slice).
let cart = ["Laptop", "Mobile", "Headphones", "Pen Drive"];

console.log("--- E-commerce Cart Demo ---");
// Maan lo user ne 'Mobile' (index 1) ki quantity 0 kar di -> Cart se uda do!
cart.splice(1, 1); // Index 1 se lekar 1 item delete kar diya
console.log("Cart after removal:", cart); // Output: ["Laptop", "Headphones", "Pen Drive"]

// Checkout preview ke liye pehle 2 items ko safely copy karo bina cart ko kharab kiye
let previewItems = cart.slice(0, 2); // Index 0 se shuru karke index 2 se pehle tak
console.log("Checkout Preview (First 2 items):", previewItems); // Output: ["Laptop", "Headphones"]
console.log("\n");


// =========================================================================
// SECTION 2: MODERN ARRAY METHODS (map, filter, reduce)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - map()    -> Har ek item ko badal kar (transform) ek bilkul naya array banata hai (length same rehti hai).
    - filter() -> Shart (condition) lagata hai, aur jo-jo items paas hote hain unka ek naya array bana deta hai.
    - reduce() -> Poore array ko nichod kar ek single value (jaise total sum ya object) bana deta hai.
*/

// --- Advanced Question: Employee Payroll Data Processing ---
// Scenario: Humein un employees ki total salary ka budget nikalna hai jo "IT" department mein hain,
// aur unki salary mein pehle se hi 10% bonus add ho jana chahiye.
let employees = [
    { name: "sahil", dept: "IT", salary: 50000 },
    { name: "golu", dept: "HR", salary: 40000 },
    { name: "amit", dept: "IT", salary: 60000 },
    { name: "rohit", dept: "Marketing", salary: 45000 }
];

console.log("--- Employee Payroll Demo ---");
let totalITSalaryWithBonus = employees
    .filter(emp => emp.dept === "IT")          // Step 1: Sirf IT waale employees ko filter kiya
    .map(emp => emp.salary * 1.10)             // Step 2: Unki salary mein 10% bonus jodd diya
    .reduce((sum, current) => sum + current, 0); // Step 3: Sabki bonus wali salary ko aapas mein jodd diya

console.log("Total IT Budget (with 10% Bonus) =", totalITSalaryWithBonus); // Output: 121000
console.log("\n");


// =========================================================================
// SECTION 3: STRING METHODS (trim, includes, split, replaceAll)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - trim()       -> String ke aage aur peeche ke faltu khali spaces (whitespaces) ko uda deta hai.
    - includes()   -> Check karta hai ki koi word string ke andar hai ya nahi (True/False deta hai, case-sensitive hai).
    - split()      -> String ko kisi ek nishaan (comma, space) se tod kar array mein badal deta hai.
    - replaceAll() -> Ek jaise dikhne wale saare words ko naye word se badal deta hai.
*/

// --- Advanced Question: Form Tag Sanitizer ---
// Scenario: User ne tags submit kiye hain jisme gande spaces, duplicates aur gaaliyan (badwords) hain. Ise saaf karo!
let dirtyInput = "  badword, cleanText, html, css, badword, javascript   ";

console.log("--- Form Sanitizer Demo ---");
let cleanedInput = dirtyInput
    .split(",")                                                   // Step 1: Comma (,) se tod kar array banaya
    .map(tag => tag.trim())                                       // Step 2: Har tag ke aage-peeche ke faltu spaces saaf kiye
    .filter((tag, index, self) => self.indexOf(tag) === index)    // Step 3: Duplicates ko nikal bahar kiya
    .map(tag => tag === "badword" ? "cleanedWord" : tag);         // Step 4: Gande word ki jagah "cleanedWord" likh diya

console.log("Sanitized Output Array:", cleanedInput);
// Output: ["cleanedWord", "cleanText", "html", "css", "javascript"]
console.log("\n");


// =========================================================================
// SECTION 4: OBJECT METHODS (Object.keys, Object.values, Object.entries)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - Object.keys(obj)   -> Kisi object ki saari "Chabiyaan" (keys) nikal kar array bana deta hai.
    - Object.values(obj) -> Object ka saara "Maal" (values) nikal kar array bana deta hai.
    - Object.entries(obj)-> Keys aur Values ki jodiyan [key, value] ke roop mein arrays ka array bana deta hai.
*/

// --- Advanced Question: High-Value Inventory Filter ---
// Scenario: Ek inventory object diya hai { product_name: price }. Un items ke naam nikalna hai jo 500 se zyada mehnge hain.
let inventory = {
    "shirt": 400,
    "Shoes": 1200,
    "Watch": 2500,
    "Socks": 150,
};

console.log("--- Inventory Filter Demo ---");
// Object.entries se hume har item aur price ka array milta hai -> [ ['shirt', 400], ['Shoes', 1200] ]
let expensiveItems = Object.entries(inventory)
    .filter(([item, price]) => price > 500) // Sirf 500 se zyada price wale filter kiye
    .map(([item, price]) => item);          // Filtered jodiyon mein se sirf product ka naam (item) bahar nikala

console.log("Premium Items (> 500):", expensiveItems); // Output: ["Shoes", "Watch"]
console.log("\n");


// =========================================================================
// SECTION 5: MATH & NUMBER METHODS (floor, ceil, random, parseInt)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - Math.floor()  -> Decimal number ko neeche ki taraf dhakel deta hai (e.g., 4.9 ban jayega 4).
    - Math.ceil()   -> Decimal number ko upar ki taraf dhakel deta hai (e.g., 4.1 ban jayega 5).
    - Math.random() -> 0 se lekar 0.999... ke beech ka koi bhi random point wala number generate karta hai.
    - parseInt()    -> String ke andar se pehle pakke number ko khinch nikalta hai (bina point wala number).
*/

// --- Advanced Question: 4-Digit Secure OTP Generator ---
// Scenario: Ek aisa function banao jo har baar call hone par ek secure 4-digit OTP generate kare.
console.log("--- Secure OTP Generator ---");
function generateOTP() {
    // Math.random() * 9000 karne se range 0 se 8999.99 tak milti hai.
    // Usme 1000 jodd diya toh range 1000 se 9999.99 tak lock ho gayi.
    // Math.floor ne saare points hatakar use solid 4-digit number bana diya!
    return Math.floor(1000 + Math.random() * 9000);
}
console.log("Generated Secure OTP Pin:", generateOTP()); // Output: Koi bhi random 4-digit number
console.log("\n");


// =========================================================================
// SECTION 6: ASYNCHRONOUS ENGINE GLOBALS (setTimeout vs setInterval)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - setTimeout()  -> Ek fix time ke baad kisi kaam ko "Sirf Ek Baar" chalata hai.
    - setInterval() -> Ek fix time gap par kisi kaam ko "Baar-Baar" loop ki tarah chalata rehta hai.
    - clearInterval() / clearTimeout() -> Chalte huye timers ko jhat se rokne (destroy karne) ke liye inki IDs ka use hota hai.
*/

// --- Advanced Question: Live Countdown Timer ---
// Scenario: Ek live countdown clock banao jo 5 seconds se reverse shuru kare aur 0 par aakar ruk jaye.
console.log("--- Countdown Clock Running ---");
let timeLeft = 5;

// setInterval har 1 second (1000ms) baad chalega
let countdown = setInterval(() => {
    if (timeLeft > 0) {
        console.log(`Remaining Time: ${timeLeft} seconds`);
        timeLeft--;
    } else {
        clearInterval(countdown); // Timer ko destroy kar diya taaki system hang na ho!
        console.log("🚨 Time's Up!");
    }
}, 1000);