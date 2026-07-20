#  1. Python List (Data ki Diary)
# Abhi tak hum ek varibale mein sirf ek he value save kar pa rahe the (jaise age = 25).Agar aapko apni class ke 5 students ke naam ya 10 products ki prices save karni hon, to aap alag-alag variables nahi banayenge. Unke liye hum List use karte hain.

# List ko hamesha square brackets[] ka andar likha jata hai, aur items ko comma, se alag karte hain.

fruits = ["apple","Banana","Mango","Orange"]
print(fruits[0])
print(fruits[1])

fruits.append("Graphes")
print(fruits)


# 2)Functions (Code ka remote control)
# Sochiye aapko ek bada kaam (jaise user ko bill calcuate karna ) apne program mein 5 alag- alag jagha par karna hai. Agar aap baar- baar wahi code likhenge to code bohot lamba hojayega.

# iske liye hum function banate hain. Function code ka ek tudka hota hai jise hum ek naam de dete hain, aur jab bhi zaroorat ho, bas uska naam lekar use "call" kar lete hain. iske liye def keywords ka use hota hai.

#Function banana (Define Karna)
def greet_user(username):
    print("Welcome back,"+ username+"!Happy Coding.")

#function ko chalana (call karna)
greet_user("rahul")
greet_user("sahil")



def add_number(x, y):
    answer = x+y
    return answer

# function ko call kiya aur result ek varibale mein save kar liye
result = add_number(15, 25)
print ("sum is:", result)  #40
