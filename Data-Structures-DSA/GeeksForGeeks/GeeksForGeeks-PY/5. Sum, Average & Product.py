# Finding the Sum and Average of a List
# Method 1: Using sum() and len()
a = [1, 2, 3, 1, 1, 4, 64, 5, 4, 2, 6, 6, 8, 9, 8, 9]
total = sum(a)
avg = total / len(a)
print("Total sum:", total)  # Output: 133
print("Average:", avg)  # Output: 8.3125

# Method 2: Using the statistics library
import statistics

a = [2, 4, 5, 6, 7, 8, 9]
print("Average (Mean):", statistics.mean(a))

# Method 3: Using NumPy
import numpy as np

a = [2, 4, 5, 6, 7, 8, 9]
print("Average using NumPy:", np.average(a))


# Sum of Number Digits in a List
# Method 1: Using nested loops and type casting
a = [123, 345, 567]
res = []
for val in a:
    s = str(val)
    digit_sum = 0
    for digit in s:
        digit_sum += int(digit)
    res.append(digit_sum)
print("Sum of digits:", res)  # Output: [6, 12, 18]

# Method 2: Using List Comprehension and sum()
a = [1234, 4567, 7890]
res = [sum(int(digit) for digit in str(val)) for val in a]
print("Sum of digits:", res)  # Output: [10, 22, 24]


# Multiplying All Numbers in a List
# Method 1: Using math.prod()
import math

a = [2, 3, 4, 5]
print("Product:", math.prod(a))  # Output: 120

# Method 2: Using functools.reduce() and operator.mul
from functools import reduce
from operator import mul

a = [4, 5, 6, 7]
print("Product:", reduce(mul, a))  # Output: 840

# Method 3: Using a for loop
a = [2, 4, 6, 8]
res = 1
for val in a:
    res = res * val
print("Product:", res)  # Output: 384
