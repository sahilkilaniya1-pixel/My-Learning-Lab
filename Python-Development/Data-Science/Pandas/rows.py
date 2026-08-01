# head() tail()
# hear() 5
# tail(n) 5
import pandas as pd
df = pd.read_json("E:\Language\Pandas\sample_Data.json")
print('Display 10 rows of first')
df.head(10)
print(df)

print('Display 10 rows of Last')
df.tail(10)
print(df)