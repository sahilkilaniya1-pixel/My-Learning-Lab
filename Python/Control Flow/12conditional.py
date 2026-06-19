a=int(input("Enter the value of a="))
b=int(input("Enter the value of b="))
c=int(input("Enter the value of c="))
d=int(input("Enter the value of d="))

if(a>b  and a>c and a<d) or (a>b  and a<c and a>d) or  (a<b  and a>c and a>d):  
    print("a is 2nd greater")
elif(b>a and b>c and b<d) or (b>a and b<c and b>d) or (b<a and b>c and b>d):
    print("b is 2nd greater")
elif(c>a and c>b and c<d) or (c>a and c<b and c>d) or (c<a and c>b and c>d):
    print("c is 2nd greater")
else:
    print("d is 2nd greater")