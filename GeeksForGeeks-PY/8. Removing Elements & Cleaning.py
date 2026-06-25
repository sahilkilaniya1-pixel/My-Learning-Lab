# Removing Multiple Elements From a List
# Method 1: Using List Comprehension
a = [10, 20, 30, 40, 50, 60]
remove_list = [20, 40, 60]
a = [x for x in a if x not in remove_list]
print("List after removal:", a)  # Output: [10, 30, 50]

# Method 2: Using remove() in a loop
a = [10, 20, 30, 40, 50, 60, 70]
remove_list = [20, 40, 60]
for val in remove_list:
    while val in a:
        a.remove(val)
print("List after removal:", a)  # Output: [10, 30, 50, 70]


# Removing Empty Tuples () from a List
a = [(1, 2), (), (3, 4), (), (5,)]
res = [t for t in a if t]
print("Cleaned list:", res)  # Output: [(1, 2), (3, 4), (5,)]

# Using filter()
res_filter = list(filter(None, a))
print("Cleaned list using filter:", res_filter)


# Removing Specific Elements (First Element / Selected Indices)
# Using the del keyword (Removes the first element)
a = [1, 2, 3, 4]
del a[0]
print(a)  # Output: [2, 3, 4]

# Using the pop() method (Removes element at index 3)
a = [1, 2, 3, 4, 5, 6]
a.pop(3)
print(a)  # Output: [1, 2, 3, 5, 6]

# Using collections.deque to pop left
from collections import deque

d = deque([1, 2, 3, 4, 5])
d.popleft()
print(list(d))  # Output: [2, 3, 4, 5]


# Removing None Values without Removing 0
a = [1, None, 3, None, 5, 0]
b = [x for x in a if x is not None]
print("After removing None:", b)  # Output: [1, 3, 5, 0]
