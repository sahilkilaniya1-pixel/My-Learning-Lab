# DDL Alter Commands Reference Sheet

| Schema Objective | PostgreSQL Syntax Rule | MySQL Syntax Rule |
| :--- | :--- | :--- |
| **Inject new attribute columns** | `ALTER TABLE students ADD COLUMN college VARCHAR(255) NOT NULL;` | `ALTER TABLE students ADD COLUMN college VARCHAR(255) NOT NULL;` |
| **Purge existing columns** | `ALTER TABLE students DROP COLUMN age;` | `ALTER TABLE students DROP COLUMN age;` |
| **Alter target data type** | `ALTER TABLE students ALTER COLUMN sname TYPE INT;` | `ALTER TABLE students MODIFY COLUMN sname INT;` |
| **Inject unique constraints** | `ALTER TABLE passenger ADD CONSTRAINT p_email UNIQUE(email);` | `ALTER TABLE passenger ADD CONSTRAINT p_email UNIQUE(email);` |
| **Purge structural constraints** | `ALTER TABLE passenger DROP CONSTRAINT p_email;` | `ALTER TABLE passenger DROP CONSTRAINT p_email;` |