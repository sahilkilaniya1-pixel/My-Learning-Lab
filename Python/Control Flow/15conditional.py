status = input("(m/u):")
gender = input("(m/f):")
age = int(input("agr:"))
if age < 18:
    print(" driver is too young! not insured")
elif (
    (status == "m")
    or (status == "u" and gender == "m" and age > 30)
    or (status == "u" and gender == "f" and age > 25)
):
    print("driver is insured")
else:
    print("driver dose not meet criteria . not insured")
