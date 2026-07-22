# Aapne zero se shuruat karke poori Python Journey cover kar li hai. Ab time hain sabhi modules (Loops, Functions, Files/Json, OOPs)ko ek saath use karke Grand Final Project banane ka.

# 1.requirement & Features
# Ek complete application jo aapke daily/monthly kharche(expenses)track kare.
# Add Expense:Amount($), Category(Food,rent,shopping),aur Description
# Save Data: Data .json ya.txt file mein save ho taaki app restart hone par bhi kharchon ka record safe rahe.
# View Summary: Total kharcha kitna hua kis category mein kitne paise gaye.
# Budget alert: Agar total expense $10,000 se upar ho jaye, to screen par WARNING: budget Exceeded! ka alert show kare.


# 2.Logic & arhitecture
# Kharchon ko list of dictionaries mein store kijiye: [{"Amount":200,"category":"Food"}, ...].
# Save/Load ke liye python ki inbuilt json library ka use kijiye (json.dump aur json.load).
# App structure ko OOPs(class ExpenseTracker: )ke roop mein design kihiye.



import json

class ExpenseTracker:
    def __init__(self, filename="expenses.json"):
        self.filename = filename
        self.expenses = self.load_expenses()

    def load_expenses(self):
        try:
            with open(self.filename, "r") as file:
                return json.load(file)
        except (FileNotFoundError, json.JSONDecodeError):
            return []

    def save_expenses(self):
        with open(self.filename, "w") as file:
            json.dump(self.expenses, file, indent=4)

    def add_expense(self, amount, category, description):
        expense = {
            "amount": amount,
            "category": category,
            "description": description
        }
        self.expenses.append(expense)
        self.save_expenses()
        print("✅ Expense added and saved successfully!")

    def show_summary(self):
        total = sum(item["amount"] for item in self.expenses)
        print(f"\n📊 Total Spent: ₹{total}")
        
        # Budget Warning Check
        if total > 10000:
            print("⚠️ WARNING: Budget ₹10,000 exceed ho chuka hai!")

# --- Main Program ---
tracker = ExpenseTracker()

# Yahan while loop banaiye menu ke saath (1. Add Expense, 2. View Summary, 3. Exit)