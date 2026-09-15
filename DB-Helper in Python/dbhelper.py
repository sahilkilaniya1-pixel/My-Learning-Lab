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
        try:
            query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
            values = (name, email, password)
            self.mycursor.execute(query, values)
            self.conn.commit()
            return 1
        except mysql.connector.Error as err:
            print(f"Registration Error: {err}")
            return 0

    def search(self, email, password):
        try:
            query = "SELECT * FROM users WHERE email = %s AND password = %s"
            values = (email, password)
            self.mycursor.execute(query, values)
            data = self.mycursor.fetchall()
            if len(data) > 0:
                return data[0]
            else:
                return 0
        except mysql.connector.Error as err:
            print(f"Search Query Error: {err}")
            return -1

    # 1. UPDATE PROFILE QUERY
    def update_profile(self, user_id, new_name, new_password):
        try:
            query = "UPDATE users SET name = %s, password = %s WHERE id = %s"
            values = (new_name, new_password, user_id)
            self.mycursor.execute(query, values)
            self.conn.commit()
            return 1
        except mysql.connector.Error as err:
            print(f"Update Error: {err}")
            return 0

    # 2. DELETE PROFILE QUERY
    def delete_profile(self, user_id):
        try:
            query = "DELETE FROM users WHERE id = %s"
            values = (user_id,)
            self.mycursor.execute(query, values)
            self.conn.commit()
            return 1
        except mysql.connector.Error as err:
            print(f"Delete Error: {err}")
            return 0