import pandas as pd
# # read data form CSV file into a dataframe
# # df = pd.read_csv(sales_data_sample.csv" , encoding="latin1")
# # df = pd.read_excel("SampleSuperstore.xlsx")
df = pd.read_json("E:\Language\Pandas\sample_Data.json")
print(df)

# import pandas as pd

# # Path ko 'r' (raw string) ke sath likhein taaki backslash (\) se error na aaye
# df = pd.read_json(r"E:\Language\Pandas\sample_Data.json")
# print(df)