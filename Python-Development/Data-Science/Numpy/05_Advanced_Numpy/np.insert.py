# Agar aapko kisi specific index par value daalni hai, toh insert ka use karein.

# Syntax: np.insert(array, index, value)


import numpy as np

arr = np.array([1, 2, 4, 5])
print(arr)
# Index 2 par '3' insert karein
new_arr = np.insert(arr, 2, 3)
print(new_arr) # [1, 2, 3, 4, 5]


