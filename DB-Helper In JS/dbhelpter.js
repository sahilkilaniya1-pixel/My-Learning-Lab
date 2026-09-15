const mysql = require('mysql2/promise');

class DBHelper {
    constructor() {
        this.initDatabase();
    }

    async initDatabase() {
        try {
            // MySQL Database Connection
            this.conn = await mysql.createConnection({
                host: '127.0.0.1',
                user: 'root',
                password: '', // XAMPP default password
                database: 'DB-Practice'
            });
            console.log("Database connected successfully!");
        } catch (err) {
            console.log("Database Connection Error:", err.message);
        }
    }

    // 1. REGISTER (INSERT Query)
    async register(name, email, password) {
        try {
            const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
            await this.conn.execute(query, [name, email, password]);
            return 1; // Success
        } catch (err) {
            console.log("Registration Error:", err.message);
            return 0; // Email already exists or Error
        }
    }

    // 2. LOGIN / SEARCH (SELECT Query)
    async search(email, password) {
        try {
            const query = "SELECT * FROM users WHERE email = ? AND password = ?";
            const [rows] = await this.conn.execute(query, [email, password]);

            if (rows.length > 0) {
                return rows[0]; // Return User Object { id, name, email, password }
            } else {
                return 0; // User Not Found
            }
        } catch (err) {
            console.log("Search Error:", err.message);
            return -1;
        }
    }

    // 3. EDIT PROFILE (UPDATE Query)
    async updateProfile(userId, newName, newPassword) {
        try {
            const query = "UPDATE users SET name = ?, password = ? WHERE id = ?";
            await this.conn.execute(query, [newName, newPassword, userId]);
            return 1;
        } catch (err) {
            console.log("Update Error:", err.message);
            return 0;
        }
    }

    // 4. DELETE PROFILE (DELETE Query)
    async deleteProfile(userId) {
        try {
            const query = "DELETE FROM users WHERE id = ?";
            await this.conn.execute(query, [userId]);
            return 1;
        } catch (err) {
            console.log("Delete Error:", err.message);
            return 0;
        }
    }
}

module.exports = DBHelper;