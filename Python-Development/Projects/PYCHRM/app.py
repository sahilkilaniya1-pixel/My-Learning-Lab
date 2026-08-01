import sys
from dbhelper import DBHelper  # Imports your database helper module safely


class Flipkart:

    def __init__(self):
        self.db = DBHelper()  # Setup database connection first
        self.menu()

    def menu(self):
        user_input = input("""
        1. Enter 1 to register
        2. Enter 2 to login
        3. Anything else to exit
        """)
        if user_input == "1":
            self.register()
        elif user_input == "2":
            self.login()
        else:
            sys.exit(1000)

    def login_menu(self):
        input("""
        1. Enter 1 to see profile
        2. Enter 2 to edit profile
        3. Enter 3 to delete profile
        4. Enter 4 to logout
        """)

    def register(self):
        name = input("Please enter your name: ")
        email = input("Please enter your email address: ")
        password = input("Please enter your password: ")

        response = self.db.register(name, email, password)

        if response == 0:
            print("[+] Registration was successful! Check phpMyAdmin now.")
        else:
            print("[-] Registration failed. Look at the database error message above.")

        self.menu()

    def login(self):
        print("\n--- Login Screen ---")
        # UPDATED: Prompt and variable name changed to follow username lookup
        username = input("Enter username: ")
        password = input("Enter password: ")

        # Passes the username directly to the search method
        data = self.db.search(username, password)

        if len(data) == 0:
            print("Incorrect username/password")
            self.login()  # Loops back to login on failure
        else:
            # data[0][1] prints the user's name from your table database match
            print("Hello", data[0][1])
            self.login_menu()  # Goes back to main menu on success


if __name__ == "__main__":
    obj = Flipkart()