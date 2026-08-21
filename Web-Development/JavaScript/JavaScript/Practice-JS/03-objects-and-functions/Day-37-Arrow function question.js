// Q1. Write a function validateEmail(email) that checks whether the given email string is in a valid format 
// using a regular expression. 
function validateEmail(email) {
    let atIndex = -1;
    let dotIndex = -1;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') atIndex = i;
        if (email[i] === '.') dotIndex = i;
    }
    if (atIndex < 1 || dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
        return false;
    }
    return true;
}
console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email@"));


// ====================
const validateEmail = (email) => {
    let atIndex = -1;
    let dotIndex = -1;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            atIndex = i;
        } else if (email[i] === '.') {
            dotIndex = i;
        }
    }
    if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
        return true;
    }

    return false;
};
console.log(validateEmail("test@example.com"));
console.log(validateEmail("test@com"));
console.log(validateEmail("@example.com"));
// ===========================




// Q2. Write a function validatePassword(password) that returns true only if the password has at least 8 
// characters, one uppercase letter, one number, and one special character. 
function validatePassword(password) {
    if (password.length < 8)
        return false;
    let hasUpper = false;
    let hasNumber = false;
    let hasSpecial = false;
    let specials = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') hasUpper = true;
        else if (char >= '0' && char <= '9') hasNumber = true;
        else {
            for (let j = 0; j < specials.length; j++) {
                if (char === specials[j]) hasSpecial = true;
            }
        }
    }
    return hasUpper && hasNumber && hasSpecial;
}
console.log(validatePassword("pass@123"))
console.log(validatePassword("Pass@123"))

// =========================================
const validatePassword = (password) => {
    if (password.length < 8) {
        return false;

    }
    let hasUpper = false;
    let hasNumber = false;
    let hasSpecial = false;
    let specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char => 'A' && char <= 'Z') {
            hasUpper = true;
        }
        else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
        else {
            for (let j = 0; j < specialChars; j++) {
                if (char === specialChars[j]) {
                    hasSpecial = true;
                }
            }
        }
    }
    if (hasUpper && hasNumber && hasSpecial) {
        return true;
    } else {
        return false;
    }
};
console.log(validatePassword("Pass@123")); //True
console.log(validatePassword("pass@123")); //False
console.log(validatePassword("Pass123"));  //False

// Q3. Write a function validatePhoneNumber(number) that checks if the given string is a valid 10-digit Indian 
// phone number. 
function validatePhoneNumber(number) {
    if (number.length !== 10)
        return false;
    for (let i = 1; i < number.length; i++) {
        if (number[i] < '0' || number[i] > '9')
            return false;
    }
    return true;
}
console.log(validatePhoneNumber("1234567891")) //Output-True

// =================================
const validatePhoneNumber = (number) => {
    if (number.length !== 10) {
        return false;
    }
    for (let i = 1; i < number.length; i++) {
        if (number[i] < '0' || number[i] > '9') {
            return false;
        }
    }
    return true;
};
console.log(validatePhoneNumber("9876543210")) //Output: true
console.log(validatePhoneNumber("5876543210")); //Output: true
console.log(validatePhoneNumber("98765abc10")); //Output: false
console.log(validatePhoneNumber("98765")); // Output: false
// =============================================



// Q4. Write a function matchPasswords(pass1, pass2) that checks whether two entered passwords (e.g., in a 
// signup form) match.
function matchPasswords(pass1, pass2) {
    if (pass1.length !== pass2.length)
        return false;
    for (let i = 0; i < pass1.length; i++) {
        if (pass1[i] !== pass2[i])
            return false;
    }
    return true;
}
console.log(matchPasswords("Sa123", "Sa123")); // Output-True
console.log(matchPasswords("Sa123", "Sa12")); //Output-False

// =================================
const matchPasswords = (pass1, pass2) => {
    if (pass1.length !== pass2.length) {
        return false;
    }
    for (let i = 0; i < pass1.length; i++) {
        if (pass1[i] !== pass2[i]) {
            return false;
        }
    }
    return true;
};
console.log(matchPasswords("abc123", "abc123"));  //Output: true
console.log(matchPasswords("abc123", "abc124"));  //Output: False



// Q5. Write a function sanitizeInput(str) that removes extra leading/trailing spaces and any HTML tags from a 
// user input string. 
function sanitizeInput(str) {
    let cleanStr = "";
    let insideTag = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '<') insideTag = true;
        else if (str[i] === '>') insideTag = false;
        else if (!insideTag) cleanStr += str[i];
    }
    let start = 0, end = cleanStr.length - 1;
    while (start <= end && cleanStr[start] === ' ') start++;
    while (end >= start && cleanStr[end] === ' ') end--;
    let result = "";
    for (let i = start; i <= end; i++) result += cleanStr[i];
    return result;
}
console.log(sanitizeInput("   <h1>Hello World</h1>   ")); //Output : Hello World

// ===========================
const sanitizeInput = (str) => {
    let cleanStr = "";
    let insideTag = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '<') {
            insideTag = true;
        } else if (str[i] === '>') {
            insideTag = false;
        } else if (!insideTag) {
            cleanStr += str[i];
        }
    }
    let start = 0;
    let end = cleanStr.length - 1;
    while (start <= end && cleanStr[start] === ' ') {
        start++;
    }
    while (end >= start && cleanStr[end] === ' ') {
        end--;
    }
    let result = "";
    for (let i = start; i <= end; i++) {
        result += cleanStr[i];
    }

    return result;
};
console.log(sanitizeInput(" <b>Hello World</b> ")); // Output: "Hello World"
console.log(sanitizeInput("<h1>Title</h1>"));       // Output: "Title"


// Q6. Write a function toggleClass(elementId, className) that toggles a CSS class on a given element (e.g., for
// a dark mode switch).
const toggleClass = (elementId, className){
    const element = document.getElementById(elementId);
    if(!element)
        