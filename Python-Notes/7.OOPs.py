# Ab aap ek alag hi league mein enter kar rahe hain. Industry mein 90% software aur web application OOPs ka use karke he banaye jaate hain.
# OOPs ka simple matlab hota hain: real world ki cheezon ko code ke roop mein imagine karna.

# 1). Class aur Object (Blueprint aur Structure)
# Class: Ek blueprint ya design hota hai (jaise ek ghar ka naksha/map).
# Object: Us blueprint se bani real cheez (jaise us nakshe se bana asli ghar).

# Standard Syntax:
#  __init__(): ye ek special function hota hai jise Constructor khete hain. Jab bhi koi naya object banta hai, ye automatically chal jata hai.
# self: ye batata hai ki  hum particular object ki baat kar rahe hain.

# BluePrint (class) banana
class Car:
    # Constructor (details set karne k liye)
    def __init__(self,brand,color):
        self.brand = brand #Attributes (property)
        self.color = color #Attributes (Property)
    
    # Method (Apki car kya kaam kar sakti hain)
    def start_engine(self):
        print(f"{self.brand} car start hogai hai!")

# Real Objectt banana (Instantiate karna)
car1 = Car("thar", "Black")
car2 = Car("Bmw","Blue")

# Object ki details access karna aur kaam karwana
print(car1.brand)
car1.start_engine()
car2.start_engine()

# 2.Exception Handling (try-except)
# Code likhte waqt agar user koi galat input de de (jaise number ki jagah text daal de),to program crach (stop)ho jata hai.Program ko crash hone se bachane ke liye hum try-excpet ka use karte hain.
try:
    age = int(input("Apni age likho (number mein):"))
    print(f"Aapki age {age}")
except ValueError:
    print("Error! Aapne number ki jagah text daal diya. program crash hone se bach gaya!")
