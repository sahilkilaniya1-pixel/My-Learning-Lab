num = int(input("enter the 4 digit value = "))
# Example: num = 3265

# 4th digit (Last digit) nikalne ke liye:
d4 = num % 10  # Result: 5

# 2nd digit nikalne ke liye:
# Pehle number ko 100 se divide karo (3265 // 100 = 32)
# Phir uska remainder lo (32 % 10 = 2)
d2 = (num // 100) % 10  # Result: 2

z = d2 + d4

print("2nd digit:", d2)
print("4th digit:", d4)
print("Sum of 2nd and 4th digit =", z) # Result: 7




# Level 1: The "Reverse" Challenge (3-Digit Number)

num = int(input("Enter a 3 digit number = "))  # Example: 375
# 1. Aakhri digit nikaali (Right se 1st)
d3 = num % 10          # Result: 5
# 2. Beech ki digit nikaali (Right se 2nd)
d2 = (num // 10) % 10  # Result: 7
# 3. Pehli digit nikaali (Right se 3rd)
d1 = num // 100        # Result: 3
# 4. Reverse karne ka formula (Maths Logic)
reverse_num = (d3 * 100) + (d2 * 10) + d1  # (5 * 100) + (7 * 10) + 3 = 573
print("Original Number:", num)
print("Reversed Number:", reverse_num)




# Level 2: Middle Numbers Multiplier (5-Digit Number)
num = int(input("Enter a 5 digit number = "))  # Example: 43268
# Left se 2nd digit nikalne ke liye: 
# 43268 // 1000 = 43 -> Phir 43 % 10 = 3
d2 = (num // 1000) % 10  # Result: 3
# Left se 4th digit nikalne ke liye:
# 43268 // 10 = 4326 -> Phir 4326 % 10 = 6
d4 = (num // 10) % 10    # Result: 6
# Dono ka multiply
product = d2 * d4
print("Left se 2nd digit:", d2)
print("Left se 4th digit:", d4)
print("Product (Guna) =", product)



# Level 3: The Ultimate Logic - "Palindrome" (3-Digit)
num = int(input("Enter a 3 digit number to check Palindrome = "))  # Example: 121 या 353
# 1. Pehli digit nikaali
first_digit = num // 100
# 2. Aakhri digit nikaali
last_digit = num % 10
# 3. Condition check ki (== ka matlab hota hai 'barabar hai ya nahi')
if first_digit == last_digit:
    print(num, "is a Palindrome Number! ")
else:
    print(num, "is NOT a Palindrome Number. ")

