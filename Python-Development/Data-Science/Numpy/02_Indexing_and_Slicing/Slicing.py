# Slicing ka istemal tab hota hai jab aapko ek se zyada elements chahiye hote hain. Iska syntax hai:
# array[start : stop : step]

# start: Jahan se shuru karna hai (Default: 0).

# stop: Jahan tak jaana hai (Lekin ye index include nahi hota).

# step: Kitne elements chhod kar aage badhna hai (Default: 1).


# array[start:end] , start to end -1

# negative step , - 1 reverse


import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6, 7])
# 1 se 5 index tak (5 include nahi hoga)
print(arr[1:5])    # Output: [2, 3, 4, 5]
# Shuru se 4 tak
print(arr[:4])     # Output: [1, 2, 3, 4]
# Step ka use (Har doosra element)
print(arr[0:7:2])  # Output: [1, 3, 5, 7]
# reverse 
print(arr[::-1])   # output: [7 6 5 4 3 2 1]