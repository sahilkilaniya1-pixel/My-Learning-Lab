n = int(input())
# for i in range(1,n):
#     print("*"*(2*i-1))
for i in range(1,n+1):
    if i ==1 or i == n:
        print("*"*n)
    else:
        print("*" + " "*(n-2) + "*")