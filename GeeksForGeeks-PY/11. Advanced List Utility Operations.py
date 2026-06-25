# Iterating over a List with Indices
a = [10, 20, 30, 40]

# Using enumerate() to fetch both index and value
for index, val in enumerate(a):
    print(f"Index: {index}, Value: {val}")


# Appending Elements at the Beginning of a List
li = [1, 2, 3, 4, 5]
# Method 1: Using insert() at index 0
li.insert(0, 99)
print(li)  # Output: [99, 1, 2, 3, 4, 5]
# Method 2: Using List Concatenation
li = [99] + li


# Selecting a Random Value from a List

import random
import secrets

a = [1, 4, 5, 7, 8, 9]
# Standard random choice
print("Random value:", random.choice(a))
# Cryptographically secure choice
print("Secure random value:", secrets.choice(a))
