import numpy as np

# Shape (3, 4) - 3 Cities, 4 Days of data
temp_celsius = np.array([
    [20, 22, 24, 21],
    [30, 32, 31, 33],
    [10, 12, 11, 13]
])

# Formula: (C * 9/5) + 32
# Yahan 9/5 aur 32 scalars hain, jo poore array par broadcast ho jayenge
temp_fahrenheit = (temp_celsius * 1.8) + 32

print("Temperature in Fahrenheit:\n", temp_fahrenheit)

#Result:
#  Temperature in Fahrenheit:
#  [[68.  71.6 75.2 69.8]
#  [86.  89.6 87.8 91.4]
#  [50.  53.6 51.8 55.4]]