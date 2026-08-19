function validateEmail(email) {
  // Enforces a standard TLD of at least 2 letters (e.g., .com, .org, .co.uk)
  const pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("test@com"));         // false