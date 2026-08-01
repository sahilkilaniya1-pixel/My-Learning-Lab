import pandas as pd

data = {
    "Name": ["ram", "Shyam", "Sahil", "Golu", "Kilaniya", "Ghanshyam", "Dhanshyam"],
    "Age": [28, 34, 67, 54, 89, 90, 51],
    "Salary": [5000, 6000, 2000, 80000, 7000, 10000, 67000],
    "Performance Score": [85, 21, 15, 78, 54, 78, 90],
}

df = pd.DataFrame(data)

#display the dataframe
print("sample Dataframe")
print(df)
print("Name (Single column return series)")
name = df['Name']
print(name)

#Select multiple columns
subset = df[["Name", "Salary"]]
print('\nSubset with Name and salary')
print(subset)