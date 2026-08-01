import pymongo as py

# 1. MongoDB Connection Setup
# 'localhost:27017' aapka default local server hai
client = py.MongoClient("mongodb://localhost:27017")
db = client["BankDB"] # Database ka naam
collection = db["Accounts"] # Table (Collection) ka naam

class Bank:
    def openAccount(self, x, y):
        self.accNo = x
        self.balance = y
        # Database mein naya account save karna
        account_data = {"accNo": x, "balance": y}
        collection.update_one({"accNo": x}, {"$set": account_data}, upsert=True)

    def showBalance(self, accNo):
        # Database se balance fetch karna
        record = collection.find_one({"accNo": accNo})
        if record:
            print(f"Account No: {record['accNo']} | Balance: {record['balance']}")
        else:
            print("Account not found!")

    def deposit(self, accNo, money):
        # Database mein balance update karna ($inc matlab increment)
        collection.update_one({"accNo": accNo}, {"$inc": {"balance": money}})
        print("Money Deposited Successfully!")

    def withdrawl(self, accNo, money):
        record = collection.find_one({"accNo": accNo})
        if record and money > record['balance']:
            print("Insufficient Balance")
        else:
            collection.update_one({"accNo": accNo}, {"$inc": {"balance": -money}})
            print("Money Withdrawn Successfully!")

# Objects setup
bank_sys = Bank()

# Initial accounts setup (Sirf ek baar chalane ke liye)
bank_sys.openAccount(101, 10000)
bank_sys.openAccount(202, 20000)
bank_sys.openAccount(303, 30000)

i = 1
while(i):
    print("\n--- Bank Menu ---")
    print("1: Deposit | 2: Withdrawal | 3: Check Balance")
    choice = int(input("Enter choice: "))

    if choice in [1, 2, 3]:
        acc_choice = int(input("Enter Customer (101, 202, 303): "))
        
        if choice == 1:
            m = int(input("Enter money to deposit: "))
            bank_sys.deposit(acc_choice, m)
        elif choice == 2:
            m = int(input("Enter money to withdraw: "))
            bank_sys.withdrawl(acc_choice, m)
        elif choice == 3:
            bank_sys.showBalance(acc_choice)
    else:
        print("Wrong choice")
    
    i = int(input("\nPress 1 to continue, 0 to exit: "))