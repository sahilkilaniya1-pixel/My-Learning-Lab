# np.concatenate():
# Do ya do se zyada arrays ko aapas mein jodne ke liye.

# np.vstack() (Vertical Stack):
# Ek ke upar ek array rakhne ke liye (Rows badhengi).

# np.hstack() (Horizontal Stack):
# Bagal mein array jodne ke liye (Columns badhenge).
import numpy as np

a = np.array([1, 2])
b = np.array([3, 4])

print(np.vstack((a, b))) 
# Output: [[1, 2], [3, 4]]