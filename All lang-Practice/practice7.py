# total_bill= float(input("Enter the total bill "))
# total_people =int(input("Enter the people "))

# newbill= total_bill/total_people

# print(newbill)


# BirthYear = int(input("enter the birthyear: "))
# current_age = 2026 - birth_year
# print(BirthYear+21)



# num =int(input("Enter the number: "))
# if num%2==0:
#     print("Even")
# else:
#     print("Odd")


# traffic_color =input("enter the color (red,yellow,green):").lower()
# if traffic_color == "red":
#     print("STOP")
# elif traffic_color == "yellow":
#   print("GET READY!")
# elif traffic_color == "green":
#     print("GO!")
# else:
#     print("invalid color")



# num1 = float(input("Enter the first number: "))
# num2 = float(input("Enter the second number: "))
# operation = input("kya karna hain? (+,-,*,/):")

# if operation == "+":
#     print("result:",num1+num2)
# elif operation == "-":
#     print("result:",num1 - num2)
# elif operation == "*":
#     print("result:", num1* num2)
# elif operation == "/":
#     if num2 !=0:
#         print("reslt:" num1/num2)
#     else:
#         print("0 se divide nahi kar sakte!")
# else:
#     print("galat operation chuna aapne!")



# mark = [75,80,92,65,88]
# total =0;
# for mark in mark:
#     total = total+mark
# print("Total mark:", total)


# 1. Function ki definition (parameters ke sath)
# def introduce_me(name, city):
#     print(f"Mera naam {name} hai aur main {city} se hoon.")

# # 2. Function Call (Arguments paas karke)
# introduce_me("Sahil", "Delhi")



contact = {}
while True:
    print("--Contact Book Menu--")
    print("1.Add contact")
    print("2.View all contacts")
    print("3.Search contact")
    print("4.Exit")

    choice = input("Choose your choice (1-4):")

    if choice ==1;
        name = input("Enter contact name: ")
        phone = input("Enter contact number: ")
        contact_name = phone
        print(f"contact '{name}' successfully save ho gaya!")
    elif choice ==2:
        if not contact:
            print("Abhi koi contact save nhi ")