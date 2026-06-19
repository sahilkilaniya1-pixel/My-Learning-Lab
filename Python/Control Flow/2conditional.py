day=int(input("Enter the day="))
x=day%7
if(x==1):
    print("Day is monday")
elif(x==2):
    print("Day is Tuesday")
elif(x==3):
    print("Day is Wednesday")
elif(x==4):
    print("Day is Thursday")
elif(x==5):
    print("Day is Friday")
elif(x==6):
    print("Day is Saturday")
else:
    print("Day is Sunday")