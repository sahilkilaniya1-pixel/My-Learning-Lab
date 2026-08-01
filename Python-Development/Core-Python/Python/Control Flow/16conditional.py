stock = 50000
creadit = int(input("Press 1: for ok Press 0: for not ok="))

if creadit == 0:
    print("Do not supply")
else:
    order = int(input("Enter the order="))
    if order <= stock:
        print("supply the goods")
    else:
        order = order - stock
        print("Remaining order that is=", order, " will be supply soon:")
