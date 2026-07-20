# Ab seekhte hain computer ko decusions (faisle) lena sikhana. Jab humein condition ke hisab se code chalana ho, tab hum if aur else ka use karte hain.

# Python ka sabse bada rule (identation): Python mein curly brackets nahi hote. if ke andar ky code chalega, ye batane ke liye hum line ke shuruat mein 4 spaces (ya ek Tab) ka gap dete hain.

age = int(input("Enter your age: "))
if age >=18:
    print("Aap vote de sakte hain")
else:
    print("Aap abhi chhote hain, vote nahi de sakte. ")


# Agar 2 se zyada conditions hon, to hum beech mein elif(else if) ka use karte hain:

mark = 85
if mark >=90:
    print("Grade: A+")
elif mark >=80:
    print("Grade: A")
elif mark >=75:
    print("Grade: B")
else:
    print("Grade: C")