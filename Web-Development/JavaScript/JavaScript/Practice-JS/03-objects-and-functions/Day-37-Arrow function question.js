// function validateEmail(email) {
//   let atIndex = -1;
//   let dotIndex = -1;
//   for (let i = 0; i < email.length; i++) {
//     if (email[i] === '@') atIndex = i;
//     if (email[i] === '.') dotIndex = i;
//   }
//   if (atIndex < 1 || dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
//     return false;
//   }
//   return true;
// }
// console.log(validateEmail("user@example.com"));
// console.log(validateEmail("invalid.email@"));




function validatePhoneNumber(number) {
    if (number.length !== 10)
        return false;
    if (number[0] < '6' || number[0] > '9')
        return false;
    for (let i = 1; i < number.length; i++) {
        if (number[i] < '0' || number[i] > '9')
            return false;
    }
    return true;
}
