# 1-5 daily 50 paisa per day fine
# 6-10 1 rs per day
# >10 5 rs per day fine
fine=0
days=int(input("Enter the days= "))

if(days<=0):
    print("Wrong Input, Plz enter more than one....")
elif(days<=5):
    fine=days*.5
elif(days<=10):
    # 6-10
    days=days-5
    fine=(days*1)+2.5
else: 
    days=days-10
    fine=(days*5)+ 7.5

print("Total fine=",fine)