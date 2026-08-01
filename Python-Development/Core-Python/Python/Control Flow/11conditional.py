a=int(input("Enter the value of a="))
b=int(input("Enter the value of b="))
c=int(input("Enter the value of c="))
d=int(input("Enter the value of d="))

if(a>b  and a>c and a>d):  # logical operator  and  or  not
    print("a is greater")
elif(b>c and b>d):
    print("b is greater")
elif(c>d):
    print("c is greater")
else:
    print("d is greater")