# (NaN ke saath Calculation)
# Agar aap np.mean() ya np.sum() use karenge aur array mein ek bhi NaN hua, toh output hamesha nan aayega. "Nan-safe" functions iska solution hain.

# np.nansum():
# NaN ko zero maan kar baaki sabko jod deta hai.

# np.nanmean():
# NaN ko ginte hi nahi aur baaki ka average nikal deta hai.


import numpy as np

# Sample data jisme NaNs hain
data = np.array([10, 20, np.nan, 40, 50])

# 1. Normal Mean: Agar ek bhi NaN hua, to pura result NaN aayega
normal_mean = np.mean(data)

# 2. Nan-safe Mean: Ye NaNs ko ignore karke baki numbers ka average nikaalta hai
nan_safe_mean = np.nanmean(data)

print(f"Original Data: {data}")
print("-" * 30)
print("Normal Mean:", normal_mean)      # Output: nan
print("Nan-safe Mean:", nan_safe_mean)  # Output: 30.0