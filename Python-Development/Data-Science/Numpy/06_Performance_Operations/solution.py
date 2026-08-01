import numpy as np

prices = np.array([100,200,30])
discount = 10 # (variable ) price:NDArray[Any]

final_prices = prices -(prices * discount/100)
print(final_prices)
#Result: [ 90. 180.  27.]