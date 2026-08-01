h = int(input("enter the Hardness="))
c = int(input("enter the carbon="))
t = int(input("enter the Tensile="))

c1 = h > 50
c2 = c < 0.7
c3 = t > 5600

if c1 and c2 and c3:
    grade = 10
elif c1 and c2 :
    grade = 9
elif c2 and c3:
    grade = 8
elif c1 and c3:
    grade = 7
elif c1 or c2 or c3 :
    grade = 6
else:
    grade = 5
print(f"The grade of stell is: {grade}")