# This is a simple Python program that demonstrates string concatenation.
# It creates an OTP (One Time Password) by combining a prefix, 
# the first three letters of a name, and the last four digits of a phone number.
name = "Sahil"
phone_number = "1234567890"
otp = "Airtel_"+"" + name[0:3] + "_" + phone_number[-4:]
print(otp)


name=input ("enter the name ")
phone=input("enter the number")
otp="Airtel"+"_"+name[0:4]+"_"+phone[6:10]
print(otp)