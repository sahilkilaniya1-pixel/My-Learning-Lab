# Printing Even Numbers in a List
# Method 1: Using List Comprehension
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
res = [val for val in a if val % 2 == 0]
print("Even numbers:", res)  # Output: [2, 4, 6, 8, 10]

# Method 2: Using the Bitwise AND (&) operator
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
res = [val for val in a if val & 1 == 0]
print("Even numbers (Bitwise):", res)


# Printing Odd Numbers in a List
# Method 1: Using List Comprehension
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
res = [i for i in a if i % 2 != 0]
print("Odd numbers:", res)  # Output: [1, 3, 5, 7, 9]

# Method 2: Using filter() and lambda function
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
res = list(filter(lambda x: x % 2 != 0, a))
print("Odd numbers (Filter):", res)


# Counting Even and Odd Numbers in a List
# Method 1: Using a simple loop
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_count = 0
odd_count = 0
for num in a:
    if num % 2 == 0:
        even_count += 1
    else:
        odd_count += 1
print(f"Even: {even_count}, Odd: {odd_count}")


# Filtering Positive and Negative Numbers
# Printing Positive Numbers using NumPy
import numpy as np

a = np.array([-10, 15, 0, 20, -5, 30, -2])
print("Positive numbers:", a[a > 0])  # Output: [15 20 30]

# Printing Negative Numbers using List Comprehension
a = [5, -1, 7, -5, -9, 4]
negatives = [num for num in a if num < 0]
print("Negative numbers:", negatives)  # Output: [-1, -5, -9]
