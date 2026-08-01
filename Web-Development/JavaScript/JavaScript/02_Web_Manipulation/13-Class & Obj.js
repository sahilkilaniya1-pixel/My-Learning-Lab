// ==========================================================================
// JAVASCRIPT OBJECTS, PROTOTYPES & CLASSES
// ==========================================================================

// --- 1. What is an Object? ---
const student = {
    fullName: "sahil",
    marks: 94.9,
    printMarks: function () {
        console.log("marks = ", this.marks);
    }
};

student.printMarks();
// // Instance Result -> marks =  94.9


// ==========================================================================
// PROTOTYPES IN JAVASCRIPT
// ==========================================================================
const employee = {
    calTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = { salary: 50000 };
const karanArjun2 = { salary: 60000 };
const karanArjun3 = { salary: 70000 };

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;

karanArjun.calTax();
// // Instance Result -> tax rate is 10%


// ==========================================================================
// CLASSES & CONSTRUCTORS
// ==========================================================================
class ToyotaCar {
    constructor(brand, mileage) {
        console.log("Creating new car instance...");
        this.brandName = brand;
        this.mileage = mileage;
    }

    start() {
        console.log(this.brandName + " engine started...");
    }

    stop() {
        console.log(this.brandName + " engine stopped.");
    }
}

let fortuner = new ToyotaCar("Fortuner", 10);
// // Instance Result -> Creating new car instance...


// ==========================================================================
// INHERITANCE IN JAVASCRIPT
// ==========================================================================
// Inheritance is passing down properties & methods from a parent class to a child class.
// Syntax: class Child extends Parent { ... }
//
// ⚠️ METHOD OVERRIDING RULE: If a child class and parent class have the exact 
// same method, the child's own method will override the parent's method.

// --- Parent Class ---
class Person {
    constructor(name) {
        console.log("1. Entering Parent Constructor...");
        this.species = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("Person is eating.");
    }

    sleep() {
        console.log("Person is sleeping.");
    }
}

// --- Child Class (Inherits from Person) ---
class Engineer extends Person {
    // ==========================================================================
    // THE SUPER KEYWORD
    // ==========================================================================
    // The super keyword is used to call the constructor of its parent class to 
    // access and initialize the parent's properties and methods.
    //
    // ⚠️ CRITICAL RULE: In a child class constructor, super() MUST be invoked 
    // BEFORE using the 'this' keyword, otherwise it throws a ReferenceError.

    constructor(name, branch) {
        console.log("2. Entering Child Constructor...");

        super(name); // Invokes Parent Class Constructor and passes 'name'

        this.branch = branch; // Allowed only AFTER super()
        console.log("3. Exiting Child Constructor...");
    }

    // Method Overriding (If child runs work, this custom block triggers)
    work() {
        console.log("Solve problems, build something technical.");
    }
}

// --- Instantiating the Inherited Class ---
let sahilObj = new Engineer("Sahil", "Computer Science");
// // Instance Result (Order of execution during instantiation):
// // 2. Entering Child Constructor...
// // 1. Entering Parent Constructor...
// // 3. Exiting Child Constructor...

// --- Verifying Inherited and Own Properties ---
console.log("Species Name:", sahilObj.species);
// // Instance Result -> Species Name: homo sapiens (Inherited from Person)

console.log("Engineer Name:", sahilObj.name);
// // Instance Result -> Engineer Name: Sahil (Passed via super to Parent)

console.log("Specialized Branch:", sahilObj.branch);
// // Instance Result -> Specialized Branch: Computer Science (Child's own property)

// --- Executing Methods ---
sahilObj.eat();
// // Instance Result -> Person is eating. (Inherited Method)

sahilObj.work();
// // Instance Result -> Solve problems, build something technical. (Child's Own Overridden Method)


// --- Quick Testing of the requested dynamic constructor arguments ---
let engObj = new Engineer("Golu", "Chemical Eng");
// // Instance Result:
// // 2. Entering Child Constructor...
// // 1. Entering Parent Constructor...
// // 3. Exiting Child Constructor...

console.log("Branch:", engObj.branch);
// // Instance Result -> Branch: Chemical Eng

// ==========================================================================
// APNA COLLEGE: OOPS PRACTICE QUESTIONS (SOLVED)
// ==========================================================================

// --- DATA SOURCE SIMULATION ---
// viewData aur editData ko run karke test karne ke liye ek dummy data variable
let DATA = "Secret College Website Data (Syllabus & Student Records)";


// ==========================================================================
// QUESTION 1: Create a class User
// Properties: name, email
// Method: viewData() -> Allows user to view website data
// ==========================================================================

class User {
    // Constructor initializes name and email properties for every new user instance
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Method to view global website data
    viewData() {
        console.log(`--- Accessing Data as User: ${this.name} (${this.email}) ---`);
        console.log("Website Data Content:", DATA);
    }
}


// ==========================================================================
// QUESTION 2: Create a new class Admin that inherits from User
// Additional Method: editData() -> Allows it to edit website data
// ==========================================================================

// Using 'extends' keyword to inherit properties and methods from User class
class Admin extends User {
    constructor(name, email) {
        // 'super' keyword calls the parent User constructor to initialize name and email
        super(name, email);
    }

    // Method unique only to Admin instances
    editData(newValue) {
        console.log(`\n⚠️ ADMIN ACTION: ${this.name} is updating the college database...`);
        DATA = newValue; // Modifying the global data variable
        console.log("Database update successful!");
    }
}


// ==========================================================================
// VERIFICATION & INSTANCE OUTPUT TESTS
// ==========================================================================

// --- 1. Testing User Instance ---
let studentUser = new User("Sahil", "sahil@college.edu");

studentUser.viewData();
// // Instance Result ->
// // --- Accessing Data as User: Sahil (sahil@college.edu) ---
// // Website Data Content: Secret College Website Data (Syllabus & Student Records)

// studentUser.editData("Hack Database"); 
// // Instance Result -> TypeError: studentUser.editData is not a function 
// // (Because standard users do not have edit permissions!)


// --- 2. Testing Admin Instance ---
let adminObj = new Admin("Golu Admin", "admin.golu@college.edu");

// Admin can use inherited viewData() method
adminObj.viewData();
// // Instance Result ->
// // --- Accessing Data as User: Golu Admin (admin.golu@college.edu) ---
// // Website Data Content: Secret College Website Data (Syllabus & Student Records)

// Admin can execute its own custom editData() method
adminObj.editData("Brand New Syllabus 2026 Updated by Admin.");
// // Instance Result ->
// // ⚠️ ADMIN ACTION: Golu Admin is updating the college database...
// // Database update successful!


// --- 3. Final Verification (Checking if data was actually modified) ---
studentUser.viewData();
// // Instance Result ->
// // --- Accessing Data as User: Sahil (sahil@college.edu) ---
// // Website Data Content: Brand New Syllabus 2026 Updated by Admin.