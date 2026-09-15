import sys
from dbhelper import DBHelper


class Flipkart:
    def __init__(self):
        # Database connect kar rahe hain
        self.db = DBHelper()
        # Main menu load kar rahe hain
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

        # DBHelper ka register function call
        response = self.db.register(name, email, password)

        if response == 1:
            print(" Registration Successful!")
        else:
            print(" Registration Failed! (Email might already exist)")

        # User ko wapas main menu par bhejne ke liye
        self.menu()

    def login(self):
        print("\n--- USER LOGIN ---")
        email = input("Enter your email: ")
        password = input("Enter your password: ")

        # DBHelper ka search function call
        response = self.db.search(email, password)

        if response == 1:
            print("\n Login Successful! Welcome to Flipkart Dashboard.")
            self.second_menu()  # Login ke baad ka menu
        elif response == 0:
            print("\n Invalid Email or Password!")
            self.menu()
        else:
            print("\n Database Error! Try again later.")
            self.menu()

    def second_menu(self):
        """Login hone ke baad dikhne wala menu"""
        user_input = input("""
        ***************************
        1. Enter 1 to See Profile
        2. Enter 2 to Logout
        ***************************
        > """)

        if user_input == "1":
            print("\n Profile Page Coming Soon!")
            self.second_menu()
        else:
            print("\n Logged out successfully!")
            self.menu()


# App start karne ke liye:
obj = Flipkart()