
# 1-200 , 2.70 paisa per unit 
# 201-400 , 4 rs per unit
# 401-700 7 per unit
# >700 9 per unit

units = float(input("Enter total units consumed: "))
bill = 0

if units <= 0:
    print("Wrong Input, please enter a positive value.")
elif units <= 200:
    # 1-200 range
    bill = units * 2.70
elif units <= 400:
    # 201-400 range
    units = units - 200      # Remove the first 200 units
    bill = (units * 4) + 540 # 540 is the cost of the first 200 units (200 * 2.7)
elif units <= 700:
    # 401-700 range
    units = units - 400      # Remove the first 400 units
    bill = (units * 7) + 1340 # 1340 is the cost of first 400 units (540 + 800)
else:
    # > 700 range
    units = units - 700      # Remove the first 700 units
    bill = (units * 9) + 3440 # 3440 is the cost of first 700 units (1340 + 2100)

if units > 0:
    print("Total Electricity Bill = Rs.", bill)