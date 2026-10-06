-- Topic: SQL Database Constraints
-- File: 02-ddl-data-definition/02-database-constraints.sql

USE tech_school_db;

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    
    -- NOT NULL: Empty value allowed nahi hai
    course_name VARCHAR(100) NOT NULL,
    
    -- UNIQUE: Har course ka code alag hona chahiye
    course_code VARCHAR(20) UNIQUE NOT NULL,
    
    -- CHECK: Course price negative (less than 0) nahi ho sakta
    price DECIMAL(8,2) CHECK (price >= 0),
    
    -- DEFAULT: Value na dene par 'Active' automatically set ho jayega
    status VARCHAR(20) DEFAULT 'Active',
    
    -- CHECK: Keval specific valid categories hi allowed hain
    category VARCHAR(50) CHECK (category IN ('Programming', 'Data Science', 'Design'))
);

-- Testing Constraints:

-- Valid Record
INSERT INTO courses (course_name, course_code, price, category) 
VALUES ('Python Masterclass', 'PY101', 4999.00, 'Programming');

-- Invalid Price Check (Yeh FAIL ho jayega Constraint CHECK ki wajah se):
-- INSERT INTO courses (course_name, course_code, price, category) 
-- VALUES ('Invalid Course', 'INV01', -500.00, 'Programming');