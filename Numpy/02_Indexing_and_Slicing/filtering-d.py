# Step 1: Condition Check (arr > 2)
# Jab aap arr > 2 likhte hain, toh NumPy array ke har ek element par jaakar check karta hai ki kya wo 2 se bada hai. Iska result ek Boolean Array (True/False ki list) hota hai:

# Step 2: Indexing (arr[...])
# Ab jab aap is Boolean array ko arr[ ... ] ke andar rakhte hain, toh NumPy ek simple rule follow karta hai:
# Jahan True hai, us element ko rakh lo.

# Jahan False hai, us element ko bahar nikaal do.


import numpy as np
arr = arr = np.array([1, 2, 3, 4, 5, 6, 7])
print(arr[ arr > 2])   # output : [3 4 5 6 7]