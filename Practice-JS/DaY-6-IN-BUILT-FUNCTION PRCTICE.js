// =========================================================================
// JAVASCRIPT MASTERCLASS -
// =========================================================================
// This sheet contains Basic Concepts, Advanced Real-World Questions, 
// and optimized solutions for students and job seekers.
// =========================================================================

// =========================================================================
// SECTION 1: ARRAY METHODS (push, pop, shift, unshift, slice, splice)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - push() & pop() work at the END of the array (Fast operations).
    - unshift() & shift() work at the START of the array (Slower, indexes shift).
    - slice(start, end): Copies a portion of an array WITHOUT modifying the original.
    - splice(index, count, item1...): Directly mutates the original array to remove/replace.
*/

// --- Advanced Question 1A: Dynamic Task Queue (FIFO Mechanism) ---
// Scenario: Create a system where new tasks are added at the end, and the oldest task is processed first.
let taskQueue = [];

function addTask(task) {
    taskQueue.push(task); // Adds to the end
    console.log(`[+] Task Added: "${task}"`);
}

function processTask() {
    if (taskQueue.length === 0) return "[-] No tasks left in the queue!";
    let currentTask = taskQueue.shift(); // FIFO: Removes from the very start
    return `[*] Processing: "${currentTask}"`;
}

console.log("--- Task Queue Demo ---");
addTask("Email Send Karo");
addTask("Database Backup");
console.log(processTask()); // Output: Processing: Email Send Karo
console.log(processTask()); // Output: Processing: Database Backup
console.log("\n");


// --- Advanced Question 1B: E-commerce Cart Management ---
// Scenario: If an item quantity becomes 0, remove it completely from the cart (splice). 
// Then, create a preview displaying only the first 2 premium items (slice).
let cart = ["Laptop", "Mobile", "Headphones", "Pen Drive"];

console.log("--- E-commerce Cart Demo ---");
// User set 'Mobile' (index 1) quantity to 0 -> Remove it completely
cart.splice(1, 1);
console.log("Cart after removal:", cart); // Output: ["Laptop", "Headphones", "Pen Drive"]

// Generate checkout preview for the first 2 items safely
let previewItems = cart.slice(0, 2);
console.log("Checkout Preview (First 2 items):", previewItems); // Output: ["Laptop", "Headphones"]
console.log("\n");


// =========================================================================
// SECTION 2: MODERN ARRAY METHODS (map, filter, reduce)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - map(): Transforms every element and returns a brand new array of the same length.
    - filter(): Evaluates a condition and returns a new array with elements that pass (true).
    - reduce(): Accumulates the entire array down to a single value (e.g., total sum, object).
*/

// --- Advanced Question: Employee Payroll Data Processing ---
// Scenario: Calculate the total budget needed for salaries, but ONLY for employees 
// in the "IT" department, and automatically include a 10% bonus on their current salary.
let employees = [
    { name: "sahil", dept: "IT", salary: 50000 },
    { name: "golu", dept: "HR", salary: 40000 },
    { name: "amit", dept: "IT", salary: 60000 },
    { name: "rohit", dept: "Marketing", salary: 45000 }
];

console.log("--- Employee Payroll Demo ---");
let totalITSalaryWithBonus = employees
    .filter(emp => emp.dept === "IT")          // Step 1: Filter IT members only
    .map(emp => emp.salary * 1.10)             // Step 2: Add 10% bonus to their salaries
    .reduce((sum, current) => sum + current, 0); // Step 3: Accumulate total sum

console.log("Total IT Budget (with 10% Bonus) =", totalITSalaryWithBonus); // Output: 121000
console.log("\n");


// =========================================================================
// SECTION 3: STRING METHODS (trim, includes, split, replaceAll)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - trim(): Removes whitespace from both beginning and end of a string.
    - includes(): Checks if a substring exists inside a string (case-sensitive, returns boolean).
    - split(): Breaks a string into an array of substrings based on a delimiter separator.
    - replaceAll(): Replaces all matches of a pattern/string with a replacement string.
*/

// --- Advanced Question: Form Tag Sanitizer ---
// Scenario: A user submits tags with bad spacing, duplicates, and explicit words. Clean it up!
let dirtyInput = "  badword, cleanText, html, css, badword, javascript   ";

console.log("--- Form Sanitizer Demo ---");
let cleanedInput = dirtyInput
    .split(",")                                                   // Step 1: Convert to array by splitting commas
    .map(tag => tag.trim())                                       // Step 2: Strip out ugly outer whitespaces
    .filter((tag, index, self) => self.indexOf(tag) === index)    // Step 3: Drop all duplicate entries
    .map(tag => tag === "badword" ? "cleanedWord" : tag);         // Step 4: Redact/Replace bad words safely

console.log("Sanitized Output Array:", cleanedInput);
// Output: ["cleanedWord", "cleanText", "html", "css", "javascript"]
console.log("\n");


// =========================================================================
// SECTION 4: OBJECT METHODS (Object.keys, Object.values, Object.entries)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - Object.keys(obj): Extracts all property names (keys) into an array.
    - Object.values(obj): Extracts all property values into an array.
    - Object.entries(obj): Returns an array of key-value pairs as [key, value] subarrays.
*/

// --- Advanced Question: High-Value Inventory Filter ---
// Scenario: Given an inventory object formatted as { product: price }, extract the names 
// of all products that cost strictly more than 500.
let inventory = {
    "shirt": 400,
    "Shoes": 1200,
    "Watch": 2500,
    "Socks": 150,
};

console.log("--- Inventory Filter Demo ---");
// FIXED: Adjusted parameters inside filter to handle the key-value array structure properly
let expensiveItems = Object.entries(inventory)
    .filter(([item, price]) => price > 500) // Accessing price correctly from array structure
    .map(([item, price]) => item);          // Return only product names

console.log("Premium Items (> 500):", expensiveItems); // Output: ["Shoes", "Watch"]
console.log("\n");


// =========================================================================
// SECTION 5: MATH & NUMBER METHODS (floor, ceil, random, parseInt)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - Math.floor(): Rounds down towards the nearest whole integer.
    - Math.ceil(): Rounds up towards the nearest whole integer.
    - Math.random(): Generates a pseudo-random decimal float between 0 (inclusive) and 1 (exclusive).
    - parseInt(): Parses a string argument and returns an absolute integer base-10 value.
*/

// --- Advanced Question: 4-Digit Secure OTP Generator ---
// Scenario: Build a security function that dynamically spits out a strict 4-digit verification PIN.
console.log("--- Secure OTP Generator ---");
function generateOTP() {
    // Multiplying random by 9000 gives range 0-8999. Adding 1000 locks it perfectly between 1000-9999.
    return Math.floor(1000 + Math.random() * 9000);
}
console.log("Generated Secure OTP Pin:", generateOTP()); // Output: Random 4-digit int
console.log("\n");


// =========================================================================
// SECTION 6: ASYNCHRONOUS ENGINE GLOBALS (setTimeout vs setInterval)
// =========================================================================

/* 
    💡 BASIC CONCEPT:
    - setTimeout(): Schedules a callback code block execution exactly ONCE after a duration delay.
    - setInterval(): Repeatedly triggers a callback loop at fixed timestamp interval steps.
    - clearInterval() / clearTimeout(): Hard-terminates active ticking async timers instantly using reference IDs.
*/

// --- Advanced Question: Live Countdown Timer ---
// Scenario: Build a console countdown clock starting from 5 seconds down to 0, 
// then stop safely and alert the user.
console.log("--- Countdown Clock Running ---");
let timeLeft = 5;

let countdown = setInterval(() => {
    if (timeLeft > 0) {
        console.log(`Remaining Time: ${timeLeft} seconds`);
        timeLeft--;
    } else {
        clearInterval(countdown); // Destroys the interval to optimize system performance
        console.log("🚨 Time's Up!");
    }
}, 1000);