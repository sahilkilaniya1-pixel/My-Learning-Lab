# Transpose ka matlab hai rows ko columns bana dena aur columns ko rows. Yeh matrix calculations mein bahut kaam aata hai.

import numpy as np
arr_2d = np.array([[1, 2], [3, 4], [5, 6]])
# Original shape: (3, 2)

transposed = arr_2d.T
# New shape: (2, 3)