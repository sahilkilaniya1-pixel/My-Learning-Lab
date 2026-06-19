a=int(input("Enter the value of a="))
b=int(input("Enter the value of b="))
c=int(input("Enter the value of c="))
d=int(input("Enter the value of d="))

if(a>b):
    #  a  c   d
    if(a>c):
        #a   d
        if(a>d):
            print("a is greater")
        else:
            print("d is greater")
    else:
        #  c   d
        if(c>d):
            print("c is greater")
        else:
            print("d is greater")
else:
    # b  c   d
    if(b>c):
            # b  d
        if(b>d):
            print("b is greater")
        else:
            print("d is greater")
    else:
        #  c  d
        if(c>d):
            print("c is greater")
        else:
            print("d is greater")
