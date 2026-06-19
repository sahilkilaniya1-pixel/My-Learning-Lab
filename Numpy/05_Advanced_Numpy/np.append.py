# Iska use array ke end mein nayi values daalne ke liye hota hai.


import numpy as np
arr = np.array([1, 2, 3])
new_arr = np.append(arr, [4, 5]) 
# Result: [1, 2, 3, 4, 5]

import numpy as np
arr = np.array([10,20,30])
new_arr = np.append(arr, [40,50,60])
# Result: [10 20 30 40 50 60]
print(new_arr)