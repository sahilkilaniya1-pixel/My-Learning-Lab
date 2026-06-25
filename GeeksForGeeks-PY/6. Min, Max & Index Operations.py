# Finding the Smallest Number in a List
# Method 1: Using min()
a = [123, 2435, 234, 345, 234]
print("Smallest number:", min(a))  # Output: 123

# Method 2: Using a for loop
a = [1, 23, 45, 6, 8, 9]
res = a[0]
for val in a:
    if val < res:
        res = val
print("Smallest number:", res)  # Output: 1

# Method 3: Using Sorting
a = [8, 123, 54, 7, 8, 90]
a.sort()
print("Smallest number:", a[0])  # Output: 7


# Finding the Largest Number in a List
# Method 1: Using max()
a = [10, 40, 100, 20, 50]
print("Largest number:", max(a))  # Output: 100

# Method 2: Using a for loop
a = [10, 20, 200, 50, 80]
res = a[0]
for n in a:
    if n > res:
        res = n
print("Largest number:", res)  # Output: 200


# Finding the Second Largest Number in a List
# Method 1: Using a single pass loop (O(n))
a = [10, 20, 30, 40, 50]
max1 = max2 = float("-inf")
for n in a:
    if n > max1:
        max2 = max1
        max1 = n
    elif n > max2 and n != max1:
        max2 = n
print("Second largest number:", max2)  # Output: 40

# Method 2: Using heapq.nlargest()
import heapq

a = [10, 30, 199, 100, 89]
res = heapq.nlargest(2, a)
print("Second largest number:", res[1])  # Output: 100

# Method 3: Using Sorting
a = [10, 30, 199, 100, 89]
a.sort(reverse=True)
print("Second largest number:", a[1])  # Output: 100


# Finding the Positions (Indices) of Minimum and Maximum Elements
# Method 1: Using the index() function
a = [3, 4, 5, 6, 7, 8, 9]
print("Maximum position:", a.index(max(a)))  # Output: 6
print("Minimum position:", a.index(min(a)))  # Output: 0

# Method 2: Using NumPy (argmax, argmin)
import numpy as np

a = [3, 5, 7, 2, 8, 1]
ar = np.array(a)
print("Maximum position:", np.argmax(ar))  # Output: 4
print("Minimum position:", np.argmin(ar))  # Output: 5
