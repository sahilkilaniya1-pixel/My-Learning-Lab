-- Topic: DDL Commands (CREATE, ALTER, DROP, TRUNCATE)
-- File: 02-ddl-data-definition/01-create-alter-drop.sql

USE tech_school_db;

-- 1. CREATE COMMAND: Nayi table 'employees' banana
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100) NOT NULL,
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

-- 2. ALTER COMMAND (Table Structure Modify Karna)

-- A. Naya column 'joining_date' add karna
ALTER TABLE employees 
ADD joining_date DATE;

-- B. Existing column ka data type badalna
ALTER TABLE employees 
MODIFY COLUMN department VARCHAR(100);

-- C. Column ka naam badalna (Rename Column)
ALTER TABLE employees 
RENAME COLUMN salary TO monthly_salary;

-- D. Column remove karna (Drop Column)
ALTER TABLE employees 
DROP COLUMN joining_date;

-- 3. TRUNCATE COMMAND: Table ke saare records/rows delete karna bina table structure mitaye
-- (TRUNCATE, DELETE se fast hota hai kyunki yeh rollback support nahi karta)
TRUNCATE TABLE employees;

-- 4. DROP COMMAND: Poori table ko uske structure aur data ke sath permanently mita dena
DROP TABLE IF EXISTS employees;