# 1 - how big is your dataset
# 2 - what are the name of columns

# shape and columns

import pandas as pd

data = {
    "Name": ["ram", "Shyam", "Sahil", "Golu", "Kilaniya", "Ghanshyam", "Dhanshyam"],
    "Age": [28, 34, 67, 54, 89, 90, 51],
    "Salary": [5000, 6000, 2000, 80000, 7000, 10000, 67000],
    "Performance Score": [85, 21, 15, 78, 54, 78, 90],
}

df = pd.DataFrame(data)
print(df)
print(f'Shape: {df.shape}')
print(f'Column Name :{df.columns}')