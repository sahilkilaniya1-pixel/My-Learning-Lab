# Database Administrative Commands Reference Sheet

| Administrative Requirement | PostgreSQL Utility | MySQL Shell Statement |
| :--- | :--- | :--- |
| **List available databases** | `\l` | `SHOW DATABASES;` |
| **Select target working database** | `\c db_name` | `USE db_name;` |
| **List active relation objects/tables** | `\dt` | `SHOW TABLES;` |
| **Inspect table schemas deeply** | `\d table_name` | `DESCRIBE table_name;` |
| **Close interactive workspace shell** | `\q` | `EXIT;` |