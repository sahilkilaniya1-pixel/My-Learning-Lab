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
    def __init__(self, holder_name, balance=1000):
        self.holder_name = holder_name
        self.balance = balance

    def check_balance(self):
        print(f"💰 {self.holder_name}, aapka balance: ₹{self.balance}")

    def deposit(self, amount):
        # 🟢 Positive amount check karke add karenge
        if amount > 0:
            self.balance += amount
            print(f"✅ ₹{amount} successfully deposit ho gaye!")
            self.check_balance()
        else:
            print("❌ Invalid amount! Deposit amount 0 se bada hona chahiye.")

    def withdraw(self, amount):
        # 🟢 Check karenge ki paise hain bhi ya nahi
        if amount <= 0:
            print("❌ Invalid amount! Amount 0 se bada hona chahiye.")
        elif amount > self.balance:
            print(f"❌ Insufficient Balance! Aapke paas sirf ₹{self.balance} hain.")
        else:
            self.balance -= amount
            print(f"✅ ₹{amount} successfully withdraw ho gaye!")
            self.check_balance()


# --- Main ATM Code ---
user_acc = Account("Sahil", 5000)  # Starting with ₹5000

while True:
    print("\n--- 🏦 ATM SYSTEM ---")
    print("1. Check Balance")
    print("2. Deposit Money")
    print("3. Withdraw Money")
    print("4. Exit")
    
    choice = input("Enter choice (1-4): ")
    
    if choice == "1":
        user_acc.check_balance()
        
    elif choice == "2":
        try:
            amt = float(input("Enter deposit amount: ₹"))
            user_acc.deposit(amt)
        except ValueError:
            print("❌ Invalid input! Kripya sirf numbers daalein.")
            
    elif choice == "3":
        # 🟢 Withdraw handle karne ke liye code
        try:
            amt = float(input("Enter withdraw amount: ₹"))
            user_acc.withdraw(amt)
        except ValueError:
            print("❌ Invalid input! Kripya sirf numbers daalein.")
            
    elif choice == "4":
        print("🎉 Thank you for using our ATM! Have a great day!")
        break
        
    else:
        print("⚠️ Invalid choice! Please select between 1 and 4.")