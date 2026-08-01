# Finding the Maximum of Two Numbers
# Method 1: Using the max() function
a = 7
b = 3
print("Maximum number:", max(a, b))  # Output: 7

# Method 2: Using the Ternary Operator
a = 7
b = 3
print("Maximum number:", a if a > b else b)  # Output: 7

# Method 3: Using an if-else statement
a = 7
b = 8
if a > b:
    print("Maximum number:", a)
else:
    print("Maximum number:", b)  # Output: 8

# Method 4: Using the sort() method
a = 7
b = 8
num = [a, b]
num.sort()
print("Maximum number:", num[-1])  # Output: 8




# Finding the Minimum of Two Numbers
# Method 1: Using the min() function
a = 6
b = 8
print("Minimum number:", min(a, b))  # Output: 6

# Method 2: Using Conditional (if-else) Statements
a = 5
b = 10
if a < b:
    print("Minimum number:", a)  # Output: 5
else:
    print("Minimum number:", b)

# Method 3: Using the Ternary Operator
a = 7
b = 3
print("Minimum number:", a if a < b else b)  # Output: 3