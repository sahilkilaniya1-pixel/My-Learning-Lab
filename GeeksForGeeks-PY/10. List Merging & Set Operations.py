# Merging Two Lists
a = [1, 2, 3, 4, 5]
b = [6, 7, 8, 9, 10]

# 1. Using '+' operator
print(a + b)

# 2. Using extend()
a.extend(b)
print(a)

# 3. Using the unpacking (*) operator
c = [*a, *b]


# Finding Common Elements (Intersection) of Two Lists
a = [1, 2, 3, 4, 5]
b = [4, 5, 6, 7, 8]

# Method 1: Using the '&' operator on sets
res = list(set(a) & set(b))
print("Common elements:", res)  # Output: [4, 5]

# Method 2: Using List Comprehension
res2 = [x for x in a if x in b]
print("Common elements:", res2)


# Finding the Union of Two Lists
a = [1, 2, 3, 4]
b = [3, 4, 5, 6]

# Method 1: Using set.union()
u = list(set(a).union(b))
print("Union list:", u)  # Output: [1, 2, 3, 4, 5, 6]

# Method 2: Using NumPy union1d()
import numpy as np

print("NumPy Union:", np.union1d(a, b))
