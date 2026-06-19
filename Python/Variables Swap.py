# First method to swap two variables

# a=int(input("Enter the value of a="))
# b=int(input("Enter the value of b="))
# a,b=b,a
# print("a=",a)
# print("b=",b)


# Second method to swap two variables

# a= int(input("Enter the value of a="))
# b= int(input("Enter the value of b="))
# c=a
# a=b
# b=c
# print("a=",a)
# print("b=",b)


# Third method to swap two variables
a = int(input("Enter the value of a="))
b = int(input("Enter the value of b="))
a = a + b  # The sum of both has been stored in 'a'
b = a - b  # Subtract the old 'b' from the total, and you get the new 'b' (which was the old 'a')
a = a - b  # Subtract the new 'b' from the total, and you get the new 'a' (which was the old 'b')

print("a=", a)
print("b=", b)

