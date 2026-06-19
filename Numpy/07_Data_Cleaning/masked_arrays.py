# (Advanced Hiding)
# Ye sabse "Deep" topic hai. Kabhi-kabhi humein NaN ko replace nahi karna hota, balki temporary "chhupana" (mask) hota hai taaki asli data preserve rahe.

# numpy.ma: Ye module ek special array banata hai jismein "Data" aur "Mask" do layer hoti hain.

# Fayda: Original values wahi rehti hain, lekin NumPy operations unhe ignore karte hain.


import numpy as np
import numpy.ma as ma

# Sample data jisme NaN hai
data = np.array([10, np.nan, 30, 40, 50])

# Masking logic: 
# 1 (True) ka matlab hai 'Mask kar do' (Chhupa do)
# 0 (False) ka matlab hai 'Rehne do' (Keep it)
# Humne 2nd element (index 1) ko mask kiya hai jahan NaN tha
masked_arr = ma.masked_array(data, mask=[0, 1, 0, 0, 0]) 

print("Original Data:", data)
print("Masked Array:\n", masked_arr)
print("Mean of Masked Array:", masked_arr.mean())


#Result:
# Original Data: [10. nan 30. 40. 50.]
# Masked Array:
#  [10.0 -- 30.0 40.0 50.0]
# Mean of Masked Array: 32.5