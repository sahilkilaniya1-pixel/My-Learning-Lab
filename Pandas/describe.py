# Step -1 sample data frame
import pandas as pd

data = {
    "Name": ["ram", "Shyam", "Sahil", "Golu", "Kilaniya", "Ghanshyam", "Dhanshyam"],
    "Age": [28, 34, 67, 54, 89, 90, 51],
    "Salary": [5000, 6000, 2000, 80000, 7000, 10000, 67000],
    "Performance Score": [85, 21, 15, 78, 54, 78, 90],
}

df = pd.DataFrame(data)
print("Sample DataFrame")
print(df)
print('Descriptive Statistics')
print(df.describe())