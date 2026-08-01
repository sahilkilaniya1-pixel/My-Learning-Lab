#                 #num=2-3
num=int(input("enter the 4 digit value = "))
#num=3265
num=num//10  #num=326
x=num%10 #x=6

num=num//10 #num=32
y=num%10 #y=2
z=x+y
print(z) #Output=8




                #num=1-3

num=int(input("enter the 4 digit value = "))
#example num=3265
# 1st digit nikalne ke liye (Thousands place)
d1 = num// 1000 
# 2nd digit nikalne ke liye (Hundreds place)
d3 = (num//100) % 10 

z = d1 + d3
print("1st digit:", d1)
print("3rd digit:", d3)
print("Sum of 1st and 3rd digit:", z) #Output=5

