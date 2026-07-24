// ====================================================================================================
// ⚡ JAVASCRIPT VARIABLES, SCOPE, MUTATION & ADVANCED CONCEPTS - PRACTICE SHEET
// ====================================================================================================
// Description: Sabhi practice questions ke Exact Outputs, Detailed Line-by-Line Explanations, 
// aur Behind-the-Scenes Memory Working (Hinglish Notes).

// ----------------------------------------------------------------------------------------------------
// 📑 SECTION 1: PRACTICE QUESTIONS (PART 1 - WARM-UP QUESTIONS)
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 1: TYPE COERCION & OPERATORS
// ----------------------------------------------------------------------------------------------------
// Code:
  let num1 = 5;
  let num2 = "5";
  console.log(num1 + num2);
  console.log(num1 * num2);

// Output:
//   "55"
//   25

// 💡 Explanation & Reason:
//   1. num1 + num2 ("55"):
//      - `+` operator JavaScript mein String Concatenation ka kaam bhi karta hai.
//      - Jab ek Number aur ek String ke beech `+` hota hai, toh JS Number ko String mein convert kar deta hai (Implicit Coercion).
//      - Result: `5 + "5"` ban jata hai `"5" + "5"` = `"55"`.

//   2. num1 * num2 (25):
//      - `*` (Multiplication) operator strings par kaam nahi karta.
//      - Isiliye JS string `"5"` ko implicitly Number `5` mein convert kar deta hai.
//      - Result: `5 * 5` = `25`.

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 2: OBJECT COMPARISON (REFERENCE VS VALUE)
// ----------------------------------------------------------------------------------------------------
// Code:
  let obj1 = { val: 100 };
  let obj2 = { val: 100 };
  console.log(obj1 == obj2);

// Output:
//   false

// 💡 Explanation & Reason:
//   - Objects non-primitive data types hote hain jo heap memory mein store hote hain.
//   - Jab hum `==` ya `===` se do objects ko compare karte hain, toh JS unki internal values/keys ko nahi, balki unke **Memory Addresses (References)** ko compare karta hai.
//   - `obj1` aur `obj2` dono alag-alag memory locations ko point kar rahe hain.
//   - Memory Location A != Memory Location B, isiliye answer `false` aayega.

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 3: REFERENCE BREAKING & VARIABLE TYPO
// ----------------------------------------------------------------------------------------------------
// Code:
  let c = [10];
  let d = c;
  d = [20];
  d.push(30);
  console.log("c:", c);
  console.log("d:", d);

// Output:
//   c: [10]
//   d: [20, 30]

// 💡 Explanation & Reason:
//   - Step 1: `d = c` se `d` pehle `c` wale array `[10]` ki memory ko reference kar raha tha.
//   - Step 2: `d = [20]` likhne se humne `d` ko ek bilkul **Naya Array (Nayi Memory Location)** assign kar di. Iss line par `d` aur `c` ka link **toot gaya (Reference Break)**.
//   - Step 3: `d.push(30)` ne sirf `d` ke naye array mein `30` add kiya.
//   - Note: Code mein `console.log("a:", a)` likha tha, standard execution ke liye agar `c` aur `d` print karein toh `c` unmodified [10] rahega aur `d` [20, 30] ho jayega.

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 4: HOISTING & VARIABLE SHADOWING IN FUNCTION
// ----------------------------------------------------------------------------------------------------
Code:
  var e = 1;
  function demo() {
      console.log(e);
      var e = 2;
  }
  demo();

// Output:
//   undefined

// 💡 Explanation & Reason:
//   - Function `demo()` ke andar `var e = 2;` likha hai. `var` variables function-scoped hote hain aur unki declaration function ke top par **Hoist** ho jati hai.
//   - JS engine function ke andar code ko aise execution mein dekhta hai:
      function demo() {
          var e; // Hoisted (Initialization defaults to undefined)
          console.log(e); // prints undefined
          e = 2;
      }
//   - Scope mein local variable `e` global `e` ko shadow (hide) kar deta hai, isiliye `1` ki jagah `undefined` print hota hai.


// ----------------------------------------------------------------------------------------------------
// 📑 SECTION 2: INTERMEDIATE & ADVANCED SCOPE / REFERENCE QUESTIONS
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 1: TEMPORAL DEAD ZONE (TDZ)
// ----------------------------------------------------------------------------------------------------
// Code:
  let f = 10;
  function testTDZ() {
      console.log(f);
      let f = 20;
  }
  testTDZ();

// Output:
//   Uncaught ReferenceError: Cannot access 'f' before initialization

// 💡 Explanation & Reason:
//   - Local scope mein `let f = 20;` declaration hoist hoti hai, lekin `let` aur `const` variables **Temporal Dead Zone (TDZ)** mein rehte hain jab tak unki line execute na ho.
//   - `console.log(f)` execution time par local `f` ko access karne ki koshish karta hai jo abhi TDZ mein hai.
//   - Standard behavior: JS global `f = 10` tak nahi jaat kyuki local `f` pehle se present hai, par accessible nahi hai. Result: `ReferenceError`.

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 2: OBJECT MUTATION & REFERENCE SHARING
// ----------------------------------------------------------------------------------------------------
// Code:
  const user1 = { name: "Aman", role: "Dev" };
  const user2 = user1;

  user2.role = "Lead";
  console.log(user1.role);
  console.log(user1 === user2);

// Output:
//   "Lead"
//   true

// 💡 Explanation & Reason:
//   - `user2 = user1` pass-by-reference karta hai. Dono variables exact same object memory ko share karte hain.
//   - `user2.role = "Lead"` karne se original memory object hi mutate (change) hota hai.
//   - Isiliye `user1.role` ki value bhi `"Lead"` ho jati hai.
//   - Kyunki dono same memory point karte hain, `user1 === user2` evaluation `true` aata hai.

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 3: FUNCTION PARAMETERS & REFERENCE BREAKING
// ----------------------------------------------------------------------------------------------------
// Code:
  let Numbers = [1, 2, 3, 4];
  function modifyArray(arr) {
      arr.push(5);
      arr = [10, 20, 30];
      arr.push(40);
  }
  modifyArray(Numbers);
  console.log(Numbers);

// Output:
//   [1, 2, 3, 4, 5]

// 💡 Explanation & Reason:
//   1. `modifyArray(Numbers)` pass-by-reference ki tarah local `arr` variable banata hai jo `Numbers` vale array ko point karta hai.
//   2. `arr.push(5)` original array ko mutate karta hai -> `Numbers` ab `[1, 2, 3, 4, 5]` ban jata hai.
//   3. `arr = [10, 20, 30]` line par local parameter `arr` ko naya array reference de diya jata hai (Reference Break).
//   4. Ab `arr.push(40)` sirf naye local array ko modify karega. Outer `Numbers` array untouched reh jata hai.


// ----------------------------------------------------------------------------------------------------
// 📑 SECTION 3: ADVANCED CONCEPTS (LOOPS, CLOSURES, SHADOWING & FREEZE)
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 1: LOOP SCOPING (var vs let WITH setTimeout)
// ----------------------------------------------------------------------------------------------------
// Code:
  for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log("Var:", i), 100);
  }
  for (let j = 0; j < 3; j++) {
      setTimeout(() => console.log("let:", j), 100);
  }

// Output:
//   Var: 3
//   Var: 3
//   Var: 3
//   let: 0
//   let: 1
//   let: 2

// 💡 Explanation & Reason:
//   - `var` Function/Global scoped hota hai:
//     * Loop ke saare iterations single `i` variable share karte hain.
//     * 100ms ke bad jab `setTimeout` ka callback run hota hai, tab tak loop khatam ho chuka hota hai aur `i` ki final value `3` ho chuki hoti hai.
//   - `let` Block scoped hota hai:
//     * Loop ke har ek iteration ke liye ek **Naya Block Scope & Fresh `j` variable** create hota hai.
//     * Closure har iteration ka apna personal `j` value (0, 1, 2) preserve kar leta hai.

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 2: SHALLOW COPY VS DEEP MUTATION (SPREAD OPERATOR)
// ----------------------------------------------------------------------------------------------------
// Code:
  let original = {
      name: "Laptop",
      details: { brand: "Dell", price: 50000 }
  };
  let copy = { ...original };
  copy.name = "phone";
  copy.details.price = 60000;

  console.log("original name:", original.name);
  console.log("original price:", original.details.price);

// Output:
//   original name: Laptop
//   original price: 60000

// 💡 Explanation & Reason:
//   - Spread operator (`{ ...original }`) **Shallow Copy** (sirf Top-level properties ki copy) banata hai.
//   - Top-Level Property (`name`): Direct value copy hoti hai, isiliye `copy.name = "phone"` karne se `original.name` par koi farq nahi pada ("Laptop" hi raha).
//   - Nested Property (`details`): Internal nested object ka reference share reh jata hai. `copy.details` aur `original.details` same memory address point karte hain.
//   - Result: `copy.details.price = 60000` change karne par `original.details.price` bhi update ho jata hai.

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 3: VARIABLE SHADOWING
// ----------------------------------------------------------------------------------------------------
// Code:
  let x = 100;
  function shadowDemo() {
      let x = 200; // Local function scope
      if (true) {
          let x = 300; // Local block scope
          console.log("Inside IF:", x);
      }
      console.log("Inside function:", x);
  }
  shadowDemo();
  console.log("Global:", x);

// Output:
//   Inside IF: 300
//   Inside function: 200
//   Global: 100

// 💡 Explanation & Reason:
//   - Inner scopes (block/function) apne outer scope ke variable ko same name ke saath declare karke temporary hide (shadow) kar sakte hain:
//     * Block ke andar (`if` block) nearest `x` ki value `300` hai.
//     * Block ke bahar function scope mein nearest `x` ki value `200` hai.
//     * Global level par `x` untouched `100` rehta hai.

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 4: CLOSURES & LEXICAL SCOPE
// ----------------------------------------------------------------------------------------------------
// Code:
  function createCounter() {
      let count = 0;
      return function () {
          count++;
          return count;
      };
  }
  const counter1 = createCounter();
  const counter2 = createCounter();

  console.log(counter1());
  console.log(counter1());
  console.log(counter2());

// Output:
//   1
//   2
//   1

// 💡 Explanation & Reason:
//   - **Closure**: Inner function apne outer lexical environment (outer function ke variables) ki memory ko retain/hold karke rakhta hai.
//   - `counter1` aur `counter2` alag-alag execution contexts se bane hain, isiliye dono ke paas apna independent `count` variable state hai.
//   - `counter1()` 1st call -> count = 1
//   - `counter1()` 2nd call -> count = 2
//   - `counter2()` 1st call -> count = 1 (Iska apna alag counter space hai).

// ----------------------------------------------------------------------------------------------------
// 🔹 QUESTION 5: OBJECT IMMUTABILITY (Object.freeze - SHALLOW FREEZE)
// ----------------------------------------------------------------------------------------------------
// Code:
  const person = Object.freeze({
      name: "Sahil",
      address: { city: "Rohtak" }
  });

  person.name = "Aman"; // (Original code typo fix: name re-assignment attempt)
  person.address.city = "Delhi"; // (Nested mutation attempt)

  console.log(person.name);
  console.log(person.address.city);

// Output:
//   "Sahil"
//   "Delhi"

// 💡 Explanation & Reason:
//   - `Object.freeze()` sirf **Shallow Freeze** karta hai (sirf top-level properties ko immutable/read-only banata hai).
//   - `person.name = "Aman"` attempt fail ho jata hai (non-strict mode mein silently ignore hota hai, strict mode mein error deta hai). Name "Sahil" hi rehta hai.
//   - Nested objects (`address`) freeze nahi hote. `person.address.city = "Delhi"` mutation success ho jayegi aur city change ho kar "Delhi" ban jayegi.

// // ====================================================================================================
// === END OF JAVASCRIPT CONCEPT & PRACTICE SHEET ===
// // ====================================================================================================