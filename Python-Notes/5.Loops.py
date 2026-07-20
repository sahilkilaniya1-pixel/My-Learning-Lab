# Jab humein ek he code ko bina baar-baar likhe kai baar chalana ho, tab hum loop ka use karte hain. Python mein do tarah ke loops hote hain:

# A) For Loop (Ginti ke hisab se chalane waala):
# Agar aapko phele se pata ho ki loop kitni baar chalana hai, to for loop aur range () ka use karte hain.

# Note: range(1,6) ka matlab hai 1 se shuru karo aur 6 se ek phele (yaani 5) tak jao.

for i in range (1,6):
    print(i)


#  B) While loop (condition ke hisab se chalne wala)
# ye tab tak chalta retha hai jab tak iski condition Ture rethi hai. Jaise hi condition False hui, loop ruk jata hai.
countdown = 5
while countdown >0:
    print(countdown)
    countdown = countdown -1
print("boom")