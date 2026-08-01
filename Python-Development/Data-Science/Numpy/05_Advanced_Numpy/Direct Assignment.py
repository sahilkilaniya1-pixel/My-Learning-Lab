# Yeh sabse simple tareeka hai. Aap indexing ka use karke kisi bhi element ki value badal sakte hain.

import numpy as np
arr = np.array([10, 20, 30, 40])

# 2nd element (Index 1) ko badal kar 99 kar dete hain
arr[1] = 99 
print(arr) # [10, 99, 30, 40]



# Aap Slicing ka use karke ek saath kayi values bhi badal sakte hain:

arr[1:3] = [0, 0] # Index 1 aur 2 dono 0 ho jayenge
