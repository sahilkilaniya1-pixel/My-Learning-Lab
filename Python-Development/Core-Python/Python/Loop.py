# Loops (used to repeat work)
# Need to print from 0 to 9
for i in range(10):
    print("number:", i)



# while loops
num=int(input("Enter the number="))
i=num
while(i<=(num*10)):
    print(i)
    i=i+num
# ==========================================

num=int(input("Enter the number="))
i=1
while(i<=10):
    j=num*i
    print(num,"*",i,"=",j)
    i=i+1

# ==========================================

# 1+2+3+4-------+10
sum=0
i=1
while(i<=10):
    sum=sum+i
    i=i+1
print(sum)
# ==========================================

s=int(input("Enter the start="))
r=int(input("Enter the range="))
sum=0
i=s
while(i<=r):
    sum=sum+i
    i=i+1
print(sum)

# ==========================================


num=int(input("Enter the number="))
multiply=1
i=1
while(i<=num):
    multiply=multiply*i
    i=i+1
print("Factorial is=",multiply)

# ==========================================

num=int(input("Enter the number="))
power=int(input("Enter the power="))
x=1
i=1
while(i<=power):
    x=num*x
    i=i+1
print("Power is=",x)
# ==========================================



count=1  # start
while(count<=5):   # end
    a=int(input("Enter the value of a="))
    b=int(input("Enter the value of b="))
    c=a+b
    print("sum=",c)
    count=count+1 # increament


# ==========================================

total = 0

# The meaning of # range(1, 11) is start from 1 and stop before 11 (that is, up to 10)
for i in range(1, 11):
    total = total + i

print("For loop se sum:", total)

# ==========================================

total = 0
i = 1  # Initial value

while i <= 10:  # Condition: as long as i is 10 or less
    total = total + i
    i = i + 1  # It is important to increase i

print("While loop se sum:", total)

# ==========================================

num = int(input("Enter the number for the table = ")) # Example: num = 5
i = 1  # Loop starts from 1

while i <= 10:  # Loop will run until i is 10 or less
    result = num * i
    print(num, "x", i, "=", result)
    i = i + 1  # Important to increase i, otherwise it will become an Infinite Loop

print("Table completed! ")
