import sys
from dbhelper import DBHelper

class Flipkart:
    def __init__(self):
        self.db = DBHelper()
        self.current_user = None  # Store logged-in user data
        self.menu()

    def menu(self):
        user_input = input("""
        ===========================
        1. Enter 1 to Register
        2. Enter 2 to Login
        3. Anything else to Exit
        ===========================
        > """)

        if user_input == "1":
            self.register()
        elif user_input == "2":
            self.login()
        else:
            print("Exiting application... Goodbye!")
            sys.exit()

    def register(self):
        print("\n--- USER REGISTRATION ---")
        name = input("Enter your name: ")
        email = input("Enter your email: ")
        password = input("Enter your password: ")

        # Call DBHelper SQL Insert
        response = self.db.register(name, email, password)

        if response == 1:
            print(" Registration Successful!")
        else:
            print(" Registration Failed! (Email might already exist)")

        self.menu()

    def login(self):
        print("\n--- USER LOGIN ---")
        email = input("Enter your email: ")
        password = input("Enter your password: ")

        # Call DBHelper SQL Select
        user_data = self.db.search(email, password)

        if user_data != 0 and user_data != -1:
            self.current_user = user_data
            print(f"\n Login Successful! Welcome {self.current_user[1]}.")
            self.second_menu()
        elif user_data == 0:
            print("\n Invalid Email or Password!")
            self.menu()
        else:
            print("\n Database Error! Try again later.")
            self.menu()

    def second_menu(self):
        user_input = input("""
        ***************************
        1. Enter 1 to See Profile
        2. Enter 2 to Logout
        ***************************
        > """)

        if user_input == "1":
            print("\n--- USER PROFILE ---")
            print(f"ID: {self.current_user[0]}")
            print(f"Name: {self.current_user[1]}")
            print(f"Email: {self.current_user[2]}")
            self.second_menu()
        else:
            self.current_user = None
            print("\n Logged out successfully!")
            self.menu()

# Execute application
if __name__ == "__main__":
    obj = Flipkart()