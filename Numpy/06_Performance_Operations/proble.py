price = [100,200,300,400]

discount = 10 #10% discount

final_prices = []

for price in price:
    final_price = price - (price * discount/100)
    final_prices.append(final_price)

print(final_prices)
#Result: [90.0, 180.0, 270.0, 360.0]