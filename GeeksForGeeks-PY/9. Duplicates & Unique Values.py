# Printing Duplicates from a List
# Using collections.Counter
from collections import Counter

a = [1, 2, 3, 4, 2, 4, 3, 1, 5, 6, 7, 6, 7, 5, 9, 8, 8, 9]
count = Counter(a)
res = [num for num, freq in count.items() if freq > 1]
print("Duplicate elements:", res)  # Output: [1, 2, 3, 4, 5, 6, 7, 9, 8]


# Removing Duplicates to Get Unique Values
# Method 1: Using set() (Order is not preserved)
a = [1, 2, 3, 4, 3, 4, 2, 1]
print("Unique values (Set):", list(set(a)))  # Output: [1, 2, 3, 4]

# Method 2: Using dict.fromkeys() (Order is preserved)
a = [1, 2, 3, 4, 5, 4, 3, 2, 5, 6, 1]
res = list(dict.fromkeys(a))
print("Unique values (Dict):", res)  # Output: [1, 2, 3, 4, 5, 6]
