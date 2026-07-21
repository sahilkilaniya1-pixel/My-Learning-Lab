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




# 3) Dictionaries (key-Values Store)
# Abhi tak aapne list seekhi, jahan data ek sequence (0,1,2...) mein store hota tha. Lekin agar aapko aisa data store karna ho jahan har cheez ka ek label ho (jaise Name -> sahil, Age -> 22, city -> Rohtak),to hum Dictionary use karte hain.

# Dictionary ko curl barackets {} mein  likha jata hai, aur isme key: Value ke pairs hote hain.

student = {
    "name":"sahil",
    "agar": 22,
    "cource":"python"
}
print (student["name"])

student["city"]="Delhi"
student["age"] = 23

for key, value in student.items():
    print()


# 4) File Handling (Data ko Permanently save karna)
# Jab aapka Python program band hota hai, to saara data delete ho jata hai.Agar aap chahate hain ki data computer ki ek .tet file mein save hojaye taaki baad mein bhi mile, to hum File Handling use karte hain.

# Python mein open() function ka use hota hai:
# "w" = write mode(nayi file banata hai. purana data mita deta hai).
# "a" = Append mode(Purane data ke aage naya data jodta hai).
# "r" = read mode (File ko padhta hai).

with open("note.txt","w")as file:
    file.write("Hello ye mera phela saved data hain. \n")
    file.write("Python seekhna mazedar hai")
print("Data saved successfully")

with open("notes.txt","r") as file:
    content = file.read()
    print("file ka content")
    print(content)



# Project Design & Requirement:
# Aapko ek aisa program banana hai jo while True Loop par chale (yaani jab tak user exit na kare, tab tak chalta rahe),
# Program shuru hote he user ko 4 opetions dikhayiye:
# 1.Add Contanct: user se Name aur Phone Number input lijiye. is contanct ko ek dictionary ya file mein save kijiye.
# 2.View Contact: Abhi tak jitne contacts save hue hain, uhne screen par print kijiye.
# 3.Search Contanct: User se naam poochna hai aur agar wo naam saved hai, to unka phone Number screen par dikhana hai.
# 4.Exits: program ko band kar dena hai (break keywords ka use karke). 

contact ={}
while True:
    print("--Contact Book Menu--")
    print("1.Add Contact")
    print("2.View All Contacts")
    print("4.Exit")

    choice = input("choose your choice (1-4):")
    if choice =="1":
        pass
    elif choice =="2":
        pass
    elif choice =="3":
        pass
    elif choice =="4":
        pass
    else :
        print