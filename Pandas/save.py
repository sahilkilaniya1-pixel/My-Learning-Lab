import pandas as pd

data = {
    "Name": ["sahil", "kilaniya", "golu"],
    "Age": [10, 20, 30],
    "City": ["Haryana", "Delhi", "Mumbai"],
}

df = pd.DataFrame(data)
print(df)

# df.to_csv("output.csv", index=False)
# df.to_excel("output.xlsx", index=False)
df.to_json("output.json", index=False)
