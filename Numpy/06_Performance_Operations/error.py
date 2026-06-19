import numpy as np

#shape(2,3)
arr1 = np.array([[1,2,3],[4,5,6]])

#share(2,)
arr2 = np.array([1,2])

result = arr1 +arr2

print(result)
#Result: ValueError: operands could not be broadcast together with shapes (2,3) (2,)