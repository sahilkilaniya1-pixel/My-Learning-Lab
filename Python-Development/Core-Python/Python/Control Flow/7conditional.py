a=int(input("Enter the value of a="))
b=int(input("Enter the value of b="))
c=int(input("Enter the value of c="))

if(a>b):
    # a   c
    if(a>c):
        print("a is greater")
    else:
        print("c is greater")
else:
    # b   c
    if(b>c):
        print("b is greater")
    else:
        print("c is greater")