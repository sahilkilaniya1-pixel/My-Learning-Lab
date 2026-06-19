import numpy as np

# 1. Create the data (Array banana zaroori hai)
temp_celsius = np.array([25, 32, 18, 40, 29, 35])

# 2. Apply the condition (Vectorized operation - no loops!)
status = np.where(temp_celsius > 30, "Hot", "Cool")

print("Temperatures:", temp_celsius)
print("Weather Status:", status)