import sys

import mysql.connector


class DBHelper:

    def __init__(self):
        try:
            # Attempt to connect to the MySQL server
            self.conn = mysql.connector.connect(
                host="localhost",
                user="root",
                password="",
                database="database",
            )
            self.mycursor = self.conn.cursor()

        except mysql.connector.Error as e:
            print(f"[-] Database connection failed: {e}")
            sys.exit(1)
        else:
            print("[+] Successfully connected to Database!")

    def register(self, name, email, password):
        query = "INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES (NULL, %s, %s, %s)"
        values = (name, email, password)

        try:
            self.mycursor.execute(query, values)
            self.conn.commit()
            return 0
        except mysql.connector.Error as err:
            print(f"[-] MySQL Query Error: {err}")
            return -1

    def search(self, username, password):
        """Queries the database matching directly against the user's name."""
        # UPDATED: Query checks `name` column instead of `email`
        query = "SELECT * FROM `users` WHERE `name` = %s AND `password` = %s"
        values = (username, password)

        try:
            self.mycursor.execute(query, values)
            data = self.mycursor.fetchall()
            return data
        except mysql.connector.Error as err:
            print(f"[-] Database Error during search: {err}")
            return []