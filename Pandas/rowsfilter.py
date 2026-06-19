import pandas as pd

data = {
    "Name": ["ram", "Shyam", "Sahil", "Golu", "Kilaniya", "Ghanshyam", "Dhanshyam"],
    "Age": [28, 34, 67, 54, 89, 90, 51],
    "Salary": [5000, 6000, 2000, 80000, 7000, 10000, 67000],
    "Performance Score": [85, 21, 15, 78, 54, 78, 90],
}

df = pd.DataFrame(data)

high_salary = df[df["Salary"] > 50000]
print("Employees with salary > 50000")
print(high_salary)


# filtering rows salary > 50k & age >30
filtered = df[(df["Age"] > 30) & (df["Salary"] > 50000)]
print(f"Employess list Age > 30 + Salary > 50000")
print(filtered)


# filtered pr condition
# filtered_or = df[(df["Age"] > 35) & (df["Performance_Score"] > 90)]
filtered_or = df[(df["Age"] > 35) & (df['Performance_Score'] > 90)]
print('Employees older than 35 OR performance score > 90')
print(filtered_or)
