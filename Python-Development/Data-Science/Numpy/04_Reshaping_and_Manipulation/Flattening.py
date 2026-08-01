# Agar aapke paas 2D ya 3D array hai aur aap use wapas ek simple line (1D) mein lana chahte hain, toh flatten() ya ravel() ka use karein.

# .ravel() --> view
# .flatten() --> copy

import numpy as np

arr_2d = np.array([[1,2,3],[4,5,6]])
print(arr_2d.ravel())  #[1 2 3 4 5 6]
print(arr_2d.flatten()) #[1 2 3 4 5 6]