import pandas as pd
import numpy as np

#loading the dataset
df = pd.read_csv('xy file')
print(df.head())

#checking the missing values
print('Missing values in each column')
print(df.isnull().sum())

import numpy as np
import pandas as pd

# 1. Pehli line mein ',' ki jagah '.' hona chahiye aur assignment zaruri hai
df['Salary (INR)'] = df['Salary (INR)'].fillna(df['Salary (INR)'].mean())

# 2. Performance Rating wali line sahi hai, lekin 'inplace=True' naye Pandas versions mein hatne wala hai
df['Performance Rating'] = df['Performance Rating'].fillna(df['Performance Rating'].median())

# 3. 'np.nan' se pehle '.' ki jagah ',' aayega aur brackets ka dhyan rakhein
df.replace([np.inf, -np.inf], np.nan, inplace=True)



# Remove duplicates records
df.drop_duplicates(inplace=True)


#replace negative salaries
df['Salary (INR)']= np.where(df['Salary (INR)'] <0, df['Salary (INR)'].mean (), df['Salary (INR)'])

salary_mean = df['Salary (INR)'].mean()
salary_std = df['Salary (INR)'].std()
lower_bound = salary_mean - (3 * salary_std)
upper_bound = salary_mean + (3 * salary_std)

#remove rows ehere salary is too high or too low
df = df [(df['Salary (INR)'] >= lower_bound) & (df['Salary (INR)'] <= upper_bound)]

df.to_csv('xyzfile.csv', index=False)
print('Data cleaning completed ! Saved as "xyz.csv"')