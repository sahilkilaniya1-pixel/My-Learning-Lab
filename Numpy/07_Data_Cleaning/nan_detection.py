# (Missing Values ko Pehchanna)
# Missing values (NaN) normal == se detect nahi hoti kyunki NaN khud ke barabar bhi nahi hota. Isliye hum special functions use karte hain.


# np.isnan(arr):
# Har element ke liye True/False batata hai.

# np.any(np.isnan(arr)):
# Kya array mein kam se kam ek NaN hai? (Quick check ke liye).

# np.all(np.isnan(arr)):
# Kya saara array hi khali (NaN) hai?


import numpy as np

# Ek ganda array (Server logs with missing entries)
data = np.array([10, np.nan, 30, np.nan, 50])

print("Detecting NaNs:", np.isnan(data))
print("Any NaN present?:", np.any(np.isnan(data)))

# Counting NaNs
total_nans = np.isnan(data).sum() 
print(f"Total missing entries: {total_nans}")
