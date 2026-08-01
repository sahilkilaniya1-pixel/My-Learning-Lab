import numpy as np
import time

# Normal Python Loop
my_list = list(range(1000000))
start = time.time()
squared_list = [x**2 for x in my_list]
print(f"Python Loop Time: {time.time() - start:.4f} sec")

# NumPy Vectorization
my_arr = np.arange(1000000)
start = time.time()
squared_arr = my_arr**2  # Vectorized Operation
print(f"NumPy Vectorized Time: {time.time() - start:.4f} sec")

# #Result:
# Python Loop Time: 0.0619 sec
# NumPy Vectorized Time: 0.0046 sec





#Fast:Addition
import numpy as np
arr1 = np.array([1,2,3])
arr2 = np.array([4,5,6])

result = arr1 + arr2
print(result)
# Result : [5 7 9]




#Fast : Multiplication
import numpy as np
arr = np.array([10,20,30])
multiplied = arr * 3

print(multiplied)
#Result : [30 60 90]