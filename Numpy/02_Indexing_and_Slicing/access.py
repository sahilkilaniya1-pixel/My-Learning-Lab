# Indexing ka matlab hai array mein kisi specific position par rakhi value ko uthana.

# Positive Indexing: 0 se shuru hoti hai (Left to Right).

# Negative Indexing: -1 se shuru hoti hai (Right to Left).

# array [index] #1D array 
# array[row, column] 2D array

import numpy as np
arr = np.array([10,20,30,40,50])
print(arr[0])   #10  first element
print(arr[-1])  #50  second element

# print(arr[10])  # Show Error

