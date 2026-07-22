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
        self.brand=brand #Attributes (property)
        self.color =