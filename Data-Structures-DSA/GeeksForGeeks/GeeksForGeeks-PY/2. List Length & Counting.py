# Finding the Length of a List
# Method 1: Using the len() function
a = [1.45, 67, 324, 78]
print("Length of the list:", len(a))  # Output: 4

# Method 2: Using a for loop (Naive Method)
a = [12, 5435, 657, 234]
c = 0
for val in a:
    c += 1
print("Length of the list:", c)  # Output: 4

# Method 3: Using length_hint() from the operator module
from operator import length_hint

a = [123, 56, 8798, 123, 7889]
print("Estimated length:", length_hint(a))  # Output: 5


# Checking if an Element Exists in a List (Search Element)
# Method 1: Using the 'in' operator
a = [20, 30, 40, 50, 60]
element = 30  # Assuming the user inputted 30

if element in a:
    print("Element exists in the list.")
else:
    print("Element does not exist.")

# Method 2: Using a Loop
a = [20, 30, 40, 50, 60]
key = 20
flag = False

for val in a:
    if val == key:
        flag = True
        break

if flag:
    print("Element exists in the list.")
else:
    print("Element does not exist.")

# Method 3: Using the any() function
a = [20, 30, 40, 50, 60]
result = any(x == 30 for x in a)
if result:
    print("Element exists in the list.")
else:
    print("Element does not exist.")

# Method 4: Using the count() method
a = [20, 30, 40, 50, 60]
if a.count(30) > 0:
    print("Element exists in the list.")
else:
    print("Element does not exist.")


# Counting Occurrences of an Element
# Method 1: Using the count() method
a = [34, 56, 23, 23, 78, 78, 12, 34]
print("Total occurrences of 23:", a.count(23))  # Output: 2

# Method 2: Using a loop
a = [1, 3, 2, 6, 3, 2, 8, 2, 9, 2, 7, 3]
count = 0
for val in a:
    if val == 3:
        count += 1
print("Total occurrences of 3:", count)  # Output: 3

# Method 3: Using Counter from the collections module
from collections import Counter

a = [1, 2, 31, 1, 4, 64, 5, 4, 2, 6, 6, 8, 9, 8, 9]
res = Counter(a)
print("Total occurrences of 8:", res[8])  # Output: 2
