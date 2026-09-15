import mysql.connector


class DBHelper:
    def __init__(self):
        try:
            self.conn = mysql.connector.connect(
                host="127.0.0.1",  # Localhost IP for Kali Linux
                user="root",
                password="",  # XAMPP default password blank hota hai
                database="DB-Practice"
            )
            self.mycursor = self.conn.cursor()
            print("Database connected successfully!")
        except mysql.connector.Error as err:
            print(f"Connection Error: {err}")

    def register(self, name, email, password):
        try:
            query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
            values = (name, email, password)

            self.mycursor.execute(query, values)
            self.conn.commit()
            return 1  # Success flag
        except mysql.connector.Error as err:
            print(f"Registration Error: {err}")
            return 0  # Failure flag

    # NAYA LOGIN METHOD
    def search(self, email, password):
        try:
            # Email aur Password matching query
            query = "SELECT * FROM users WHERE email = %s AND password = %s"
            values = (email, password)

            self.mycursor.execute(query, values)

            # Fetch all matching records
            data = self.mycursor.fetchall()

            # Agar data milta hai toh len(data) > 0 hoga
            if len(data) > 0:
                return 1  # Login Successful
            else:
                return 0  # Invalid Credentials

        except mysql.connector.Error as err:
            print(f"Search Error: {err}")
            return -1  # Database/Query Error