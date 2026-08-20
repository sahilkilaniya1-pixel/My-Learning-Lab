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



