status = input("Married or Unmarried (m/u): ").lower()
gender = input("Gender (m/f): ").lower()
age = int(input("Age: "))

# Sabse pehle check: Kya driver underage hai?
if age < 18:
    print("Driver is too young! NOT Insured ❌")

# Agar 18+ hai, tabhi baki conditions check hongi
elif (
    (status == "m")
    or (status == "u" and gender == "m" and age > 30)
    or (status == "u" and gender == "f" and age > 25)
):
    print("Driver is Insured ✅")

else:
    print("Driver does not meet criteria. NOT Insured ❌")
