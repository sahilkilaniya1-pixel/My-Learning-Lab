year=int(input("Enter the year="))
if(year%4==0):
    feb=29
else:
    feb=28
day=31+feb+10
x=day%7

if(x==1):
    print("Day is Monday")
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