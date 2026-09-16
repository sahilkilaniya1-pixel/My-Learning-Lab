const readline = require('readline-sync');
const DBHelper = require('./dbhelper');
class Flipkart {
    constructor() {
        this.db = new DBHelper();
        this.currentUser = null;
        setTimeout(() => this.menu(), 1000);
    }
    menu() {
        console.log(`
        ===========================
        1. Enter 1 to Register
        2. Enter 2 to Login
        3. Anything else to Exit
        ===========================`);
        const userInput = readline.question("> ");
        if (userInput === "1") {
            this.register();
        } else if (userInput === "2") {
            this.login();
        } else {
            console.log("Exiting application... Goodbye!");
            process.exit();
        }
    }
    async register() {
        console.log("\n--- USER REGISTRATION ---");
        const name = readline.question("Enter your name: ");
        const email = readline.question("Enter your email: ");
        const password = readline.question("Enter your password: ");
        const response = await this.db.register(name, email, password);
        if (response === 1) {
            console.log(" Registration Successful!");
        } else {
            console.log(" Registration Failed! (Email might already exist)");
        }
        this.menu();
    }
    async login() {
        console.log("\n--- USER LOGIN ---");
        const email = readline.question("Enter your email: ");
        const password = readline.question("Enter your password: ");

        const userData = await this.db.search(email, password);

        if (userData !== 0 && userData !== -1) {
            this.currentUser = userData;
            console.log(`\n Login Successful! Welcome ${this.currentUser.name}.`);
            this.secondMenu();
        } else if (userData === 0) {
            console.log("\n Invalid Email or Password!");
            this.menu();
        } else {
            console.log("\n Database Error! Try again later.");
            this.menu();
        }
    }
    async secondMenu() {
        console.log(`
        ***************************
        1. Enter 1 to See Profile
        2. Enter 2 to Edit Profile
        3. Enter 3 to Delete Profile
        4. Enter 4 to Logout
        ***************************`);
        const userInput = readline.question("> ");
        if (userInput === "1") {
            console.log("\n--- USER PROFILE DETAILS ---");
            console.log(`User ID   : ${this.currentUser.id}`);
            console.log(`Name      : ${this.currentUser.name}`);
            console.log(`Email     : ${this.currentUser.email}`);
            this.secondMenu();
        }
        else if (userInput === "2") {
            console.log("\n--- EDIT PROFILE ---");
            const newName = readline.question("Enter new name: ");
            const newPassword = readline.question("Enter new password: ");
            const res = await this.db.updateProfile(this.currentUser.id, newName, newPassword);
            if (res === 1) {
                this.currentUser.name = newName;
                this.currentUser.password = newPassword;
                console.log(" Profile Updated Successfully!");
            } else {
                console.log(" Profile Update Failed!");
            }
            this.secondMenu();
        } 
        else if (userInput === "3") {
            const confirm = readline.question("Are you sure you want to delete your account? (y/n): ");
            if (confirm.toLowerCase() === 'y') {
                const res = await this.db.deleteProfile(this.currentUser.id);
                if (res === 1) {
                    console.log(" Account Deleted Successfully!");
                    this.currentUser = null;
                    this.menu();
                } else {
                    console.log(" Failed to Delete Account!");
                    this.secondMenu();
                }
            } else {
                this.secondMenu();
            }
        }
        else {
            this.currentUser = null;
            console.log("\n Logged out successfully!");
            this.menu();
        }
    }
}

new Flipkart();




	
payload = {
    "doc_id": "4d52c36b3193afd66184b4acf1e3bb40",
    "variables": {
        "conversationId": "bb00cf81-7a37-4f06-b21b-be58bc3cdda3",
        "count": 20
    }
}