-- Topic: 02 Primary Foreign Keys

-- Topic: Primary Key and Foreign Key Constraints
-- File: 01-database-fundamentals/02-primary-foreign-keys.sql

-- 1. Database create aur select karna
CREATE DATABASE IF NOT EXISTS tech_school_db;
USE tech_school_db;

-- 2. Parent Table Banana (Primary Key Example)
-- Student_ID primary key hai, yeh NULL nahi ho sakti aur unique honi chahiye.
CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Child Table Banana (Foreign Key Example)
-- student_id foreign key hai jo students table ki primary key ko point kar rahi hai.
CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_name VARCHAR(100) NOT NULL,
    enrollment_date DATE DEFAULT (CURRENT_DATE),
    
    -- Foreign Key Relationship Definition
    CONSTRAINT fk_student_enrollment 
    FOREIGN KEY (student_id) REFERENCES students(student_id)
    ON DELETE CASCADE  -- Agar student delete ho toh uske enrollments bhi delete ho jayein
);

-- 4. Sample Data Insert karke test karna
INSERT INTO students (first_name, last_name, email) 
VALUES ('Rahul', 'Sharma', 'rahul@example.com');

-- Valid Enrollment (Student ID 1 exist karta hai)
INSERT INTO enrollments (student_id, course_name) 
VALUES (1, 'SQL Basic to Advanced');

-- Invalid Insert Check (Yeh error dega kyunki Student ID 99 exist nahi karta):
-- INSERT INTO enrollments (student_id, course_name) VALUES (99, 'Web Development');