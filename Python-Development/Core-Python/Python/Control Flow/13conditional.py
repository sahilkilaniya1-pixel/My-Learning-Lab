gender = input("enter gender (male/female:):")
service = int(input("enter year of service:"))
qual = input("Enter Qualifications(post-graduate/graduate):")

# male condition
if gender == "male" and service >= 10 and qual == "post-graduate":
    salary = 15000
elif gender == "male" and service >= 10 and qual == "graduate":
    salary = 10000
elif gender == "male" and service < 10 and qual == "post-graduate":
    salary = 10000
elif gender == "male" and service < 10 and qual == "graduate":
    salary = 7000

# female condition
elif gender == "female" and service >= 10 and qual == "post-graduate":
    salary = 12000
elif gender == "female" and service >= 10 and qual == "graduate":
    salary = 9000
elif (gender == "female" or gender == "male ") and service < 10 and qual ==" post-graduate":
    salary = 10000   # dono ke liye same hain
elif gender == "female" and service < 10 and qual == "graduate":
    salary = 6000
else:
    salary = 0

if salary >0:
    print(f"salary is{salary}")
else:
    print("invalid input")