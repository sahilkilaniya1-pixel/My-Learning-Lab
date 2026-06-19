# reshape() function ka istemal karke aap kisi array ki rows aur columns badal sakte hain, lekin total elements (size) hamesha same rehne chahiye.

import numpy as np

# 1D array with 12 elements
arr = np.arange(1, 13)

# Isko 3 rows aur 4 columns mein badalte hain 
# (3 * 4 = 12)
new_arr = arr.reshape(3, 4)
print(new_arr)
                # Output [[ 1  2  3  4]
                #         [ 5  6  7  8]
                #         [ 9 10 11 12]]
