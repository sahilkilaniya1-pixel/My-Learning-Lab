# if -----> single condition
# else ---> double condition
# elif ---> multiple conditions 



# Heading: Comparison of Two Numbers (Comparison of Two Numbers)
# Concept: if-elif-else Ladder
# Why? Because here you are checking all three conditions—whether it's bigger, equal, or smaller.
a=int(input("enter the value of a="))
b=int(input("enter the value of b="))
if a>b:
    print("a is greater than b")
elif a==b:
    print("a is equal to b")
else:
    print("b is greater than ")




# Heading: Understanding Block of Code / Indentation
# Concept: if-else Flow Control
# Why? This code helps to understand that if the condition becomes false, 
# then all the lines inside the else run together.
x =1
if(x>5):
    print("Hello")
    print("world")
else:
    print("Hi")
    print("Python")




# Heading: Find Maximum of Two Numbers (Optimized Method)
# Concept: State Assignment Method
# Why? Here you have used a really smart logic! You assumed 'a' as the bigger one from the start, 
# and only changed the value if 'b' turned out to be bigger. No need to even write an else here.
a=30
b=20
big=a
if (b>a):
    big=b
print("biggest number is",big)




# Heading: Even or Odd Number Checker
# Concept: Modulus Operator with if-else
# Why? Both codes are exactly the same (just one has brackets () and the other doesn't). 
# It checks whether a number is completely divisible by 2 or not.
num=int(input("enter the number="))
x=num%2
if x==0:
    print("number is even")
else:
    print("number is odd")
