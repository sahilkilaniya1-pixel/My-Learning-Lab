# (Gaps ko Bharna)
# Cybersecurity analysis ya Trading mein aap data delete nahi kar sakte (kyunki timeline toot jayegi), isliye hum missing values ko fill karte hain. Ise Imputation kehte hain.

# Zero Fill: Jab data missing ka matlab "No Activity" ho.

# Mean/Median Fill: Jab humein average pattern maintain karna ho.



import numpy as np

# 1. Data ko NumPy array mein convert karein (agar pehle se nahi hai)
data = np.array([10, 20, np.nan, 40, np.nan, 60])

# 2. Copy banayein taaki original data safe rahe
clean_data = data.copy()

# 3. Mean calculate karein (NaNs ko ignore karte hue)
mean_val = np.nanmean(clean_data)

# 4. Boolean Indexing: Jahan NaN hai, wahan mean bhar dein
clean_data[np.isnan(clean_data)] = mean_val

print("Original Data:", data)
print("Imputed Data (Mean filled):", clean_data)

#Result: 
# Original Data: [10. 20. nan 40. nan 60.]
# Imputed Data (Mean filled): [10.  20.  32.5 40.  32.5 60. ]