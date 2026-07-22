# Ab hum OOPs aur Exception Handling dono milakar ek ATM Machine System banayege!

# Project Requirements:
# aapko ek Account naam ki class banani hai.

# 1.Attributes(__init__ ke andar):
# holder_name(User ka naam)
# balance(Starting paise, e.g.1000)

# 2.Methods(Class ke andar ke functions):
# check_balance(): Current balance screen par dikhaya.
# deposit(amout): account mein paise add kare aur naya balance bataye.
# withdraw(amount):Account se paise nikale.
    # Validation: Agar user balance se zayda paise nikalne ki koshish kare(e.g.balance 1000 hai aur withdraw 5000 karna chahe).to dikhaiye: "Insufficient Balance! Aapke pass itne paise nahi hain."


# 3.Main program loop:
# Class ka ek object banaiye(e.g. user_acc = Account ("Sahil",5000)).
# User ko menu dikhaiye: 1.Check Balance, 2.Deposit, 3.withdraw, 4.Exit.
# try-except ka use karke ensure kijiye ki agar user amount mein text de to app crash na ho.

class Account:
    def __init__(self, holder_name, balance=10000):
        self.holder_name =holder_name
        self.balance = balance

    def check_balance(self):
        print(f"{self.holder_name},aapka balance: ${self.balance}")

    def deposit(self,amount):
        pass

    def withdrwa(self, amount):
        pass

user_acc = Account("Sahil",5000) #Starting with 5000

while True:
    print("--ATM SYSTEM--")
    print("1.Check Balance")
    print("2.Deposite money")
    print("3.Withdraw Money")
    print("4.Exit")

    choice = input("enter choice(1-4):")