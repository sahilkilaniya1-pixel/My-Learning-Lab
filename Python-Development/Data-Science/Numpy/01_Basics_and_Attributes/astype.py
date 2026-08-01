import numpy as np

arr = np.array([1.2,3.4,5.6])
print(arr.dtype)       #float64
int_arr = arr.astype(int)

print(int_arr)         #int64
print(int_arr.dtype)