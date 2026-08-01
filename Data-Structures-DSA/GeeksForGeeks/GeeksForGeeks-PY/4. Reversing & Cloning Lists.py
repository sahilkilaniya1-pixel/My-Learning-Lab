# Reversing a List

# Method 1: Using List Slicing
a = [1, 2, 3, 4, 5]
rev = a[::-1]
print("Reversed list:", rev)  # Output: [5, 4, 3, 2, 1]

# Method 2: Using the reverse() method (Modifies original list in-place)
a = [1, 34, 4561, 657]
a.reverse()
print("Reversed list:", a)  # Output: [657, 4561, 34, 1]

# Method 3: Using a While Loop (Two-Pointer approach)
a = [1, 2, 3, 4, 5]
i = 0
j = len(a) - 1
while i < j:
    a[i], a[j] = a[j], a[i]
    i += 1
    j -= 1
print("Reversed list using loop:", a)  # Output: [5, 4, 3, 2, 1]


# Cloning or Copying a List
# Method 1: Using the copy() method
a = [1, 2, 3, 4, 5]
b = a.copy()
print("Copied list:", b)

# Method 2: Using Slicing [:]
a = [1, 2, 3, 4, 5]
b = a[:]
print("Copied list:", b)

# Method 3: Using the list() constructor
a = [1, 2, 3, 4, 5]
b = list(a)
print("Copied list:", b)

# Method 4: Using List Comprehension
a = [1, 2, 3, 4, 5]
b = [item for item in a]
print("Copied list:", b)

# Method 5: Using copy.deepcopy() for Nested Lists
import copy

a = [[34, 56], [23, 78], [12, 34]]
b = copy.deepcopy(a)
print("Deep copied list:", b)
