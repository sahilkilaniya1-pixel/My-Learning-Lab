# vertically
# horizontally

# vstack() row wise
# hstack() column wise

import numpy as np

arr1 = np.array([1,2,3])
arr2 = np.array([4,5,6])

# verticallly stack
print(np.vstack((arr1, arr2)))

#horizontally stack
print(np.hstack(((arr1,arr2))))

# #Result: [[1 2 3]
#          [4 5 6]]
#        [1 2 3 4 5 6]