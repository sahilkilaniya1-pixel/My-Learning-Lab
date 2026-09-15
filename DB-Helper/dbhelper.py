import mysql.connector


class DBHelper:
    def __init__(self):
        try:
            self.conn = mysql.connector.connect(
                host="127.0.0.1",
                user="root",
                password="",
                database="DB-Practice"
            )
            self.mycursor = self.conn.cursor()
            print("Database connected successfully!")
        except mysql.connector.Error as err:
            print(f"Database Connection Error: {err}")

    def register(self, name, email, password):
        """SQL Query to INSERT new user record"""
        try:
            # Parameterized SQL INSERT Query
            query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
            values = (name, email, password)

            self.mycursor.execute(query, values)
            self.conn.commit()  # Save changes to database
            return 1  # Success
        except mysql.connector.Error as err:
            print(f"Registration Error: {err}")
            return 0  # Failure / Duplicate Email

    def search(self, email, password):
        """SQL Query to SELECT and Verify user credentials"""
        try:
            # Parameterized SQL SELECT Query
            query = "SELECT * FROM users WHERE email = %s AND password = %s"
            values = (email, password)

            self.mycursor.execute(query, values)
            data = self.mycursor.fetchall()

            if len(data) > 0:
                return data[0]  # Return user row data (tuple)
            else:
                return 0  # User not found
        except mysql.connector.Error as err:
            print(f"Search Error: {err}")
            return -1  # Database/Query error