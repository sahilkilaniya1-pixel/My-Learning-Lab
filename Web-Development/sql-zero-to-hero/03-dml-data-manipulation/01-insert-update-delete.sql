-- Topic: DML Commands (INSERT, UPDATE, DELETE)
-- File: 03-dml-data-manipulation/01-insert-update-delete.sql

USE tech_school_db;

-- Setup Table for DML Operations
CREATE TABLE IF NOT EXISTS instructors (
    instructor_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10,2),
    department VARCHAR(50) DEFAULT 'General'
);

-- =====================================================
-- 1. INSERT COMMAND (Data Table me daalna)
-- =====================================================

-- Single Row Insert
INSERT INTO instructors (first_name, last_name, email, salary, department)
VALUES ('Aman', 'Dhattarwal', 'aman@example.com', 75000.00, 'Computer Science');

-- Multiple Rows Insert (Bulk Insert)
INSERT INTO instructors (first_name, last_name, email, salary, department)
VALUES 
('Anuj', 'Kumar', 'anuj@example.com', 60000.00, 'Data Science'),
('Neha', 'Sharma', 'neha@example.com', 50000.00, 'Web Development'),
('Rohan', 'Verma', 'rohan@example.com', 45000.00, 'Data Science');

-- Default Values ke sath Insert (Department automatically 'General' set hoga)
INSERT INTO instructors (first_name, last_name, email, salary)
VALUES ('Pooja', 'Singh', 'pooja@example.com', 40000.00);


-- =====================================================
-- 2. UPDATE COMMAND (Data me badlav karna)
-- =====================================================

-- Single Column Update (Specific Instructor ki Salary badalna)
UPDATE instructors 
SET salary = 80000.00 
WHERE instructor_id = 1;

-- Multiple Columns Update
UPDATE instructors 
SET salary = 65000.00, department = 'AI & Data Science' 
WHERE email = 'anuj@example.com';

-- Bulk Update (Department 'Data Science' ke sabhi instructors ki salary 10% badhana)
UPDATE instructors 
SET salary = salary + (salary * 0.10) 
WHERE department = 'AI & Data Science';

-- ⚠️ WARNING: Bina WHERE clause ke UPDATE chalane par poore table ka data badal jayega!


-- =====================================================
-- 3. DELETE COMMAND (Specific Records hatana)
-- =====================================================

-- Single Row Delete (Specific ID wale instructor ko delete karna)
DELETE FROM instructors 
WHERE instructor_id = 5;

-- Conditional Delete (Jinki salary 50000 se kam hai unhe hatana)
DELETE FROM instructors 
WHERE salary < 50000.00;

-- ⚠️ WARNING: Bina WHERE clause ke DELETE run karne se table ka poora data delete ho jata hai!
-- Example: DELETE FROM instructors; (Isse bachein)