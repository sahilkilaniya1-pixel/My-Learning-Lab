# Kisi specific index se value delete karne ke liye:

import numpy as np
arr = np.array([10, 20, 30, 40])
# Index 1 (20) ko hata dein
arr = np.delete(arr, 1)
print(arr) # [10, 30, 40]


import numpy as np
arr = np.array([10, 50, 30, 40])
# Index 1 (50) ko hata dein
arr = np.delete(arr, 1)
print(arr) # [10, 30, 40]
