#This example will teach you how to check multiple conditions using the 'or' operator.
month= int(input("Enter monthh number(1-12)"))

if month ==2:
    print("is mhine mein 28 ya 29 din hote hain.")
elif month == 4 or month == 6 or month ==9 or month == 11:
    print("is mahine mein 30 din hote hain.")
else:
    print("is mahine mein 31 din hote hain.")


#  Simple Leap Year (Logic Clarification)
# You had made an example earlier, but the real logic of a Leap Year is a bit deeper.
# Years divisible by 100 are not leap years, unless they are also divisible by 400.

year=int(input("Enter year to check"))
if(year % 400 ==0):
    print(year, "is a century Lea[ Year!")
elif (year % 100 == 0):
    print(year, "is not a leap year(century year).")
elif (year% 4 == 0):
    print(year, "is a leap year!")
else:
    print(year,"is a common year.")


year=int(input("Enter the year="))

if(year%4==0): # current year is leap
    days=366+31+28+10 
else: # current year is not leap
    if((year+1)%4==0): # next year is leap
        days=365+31+29+10
    else: # next year is not leap
        days=365+31+28+10