-- ==========================================================================================
-- MASTER SQL SCHEMA: CONSTRAINTS & VALIDATION BASELINES
-- ==========================================================================================

-- ------------------------------------------------------------------------------------------
-- CATEGORY A: NOT NULL & UNIQUE BOUNDARIES
-- (Prevents empty values during data entry and restricts duplicate data)
-- ------------------------------------------------------------------------------------------

-- 1. Restricting Empty Values
CREATE TABLE person (
    id INTEGER NOT NULL,
    name VARCHAR(255)
);

-- 2. Inline Unique Validation
CREATE TABLE users_unique (
    id INTEGER NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE
);

-- 3. Explicit Constraint Assignment Pattern (Best practice for complex schemas)
CREATE TABLE users_constraint (
    id INTEGER NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255),
    CONSTRAINT U_email UNIQUE(email)
);


-- ------------------------------------------------------------------------------------------
-- CATEGORY B: PRIMARY, FOREIGN, & CHECK KEYS
-- (Establishes relationships between tables and maintains data integrity)
-- ------------------------------------------------------------------------------------------

-- 1. Primary Key Anchor
CREATE TABLE users_pk (
    id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    CONSTRAINT U_email_pk UNIQUE(email)
);

-- 2. Foreign Key Integration (For relational mapping)
CREATE TABLE orders (
    order_id INTEGER,
    user_id INTEGER,
    time_of_order DATETIME,
    PRIMARY KEY (order_id),
    FOREIGN KEY (user_id) REFERENCES users_pk(id)
);

-- 3. Check Key Constraints (Input validation based on predefined conditions)
CREATE TABLE students (
    sid INTEGER PRIMARY KEY,
    sname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INTEGER CHECK (age > 6 AND age < 25)
);


-- ------------------------------------------------------------------------------------------
-- CATEGORY C: DEFAULT EVALUATIONS & AUTO-INCREMENT MODELS
-- (Setting fallback default values and automatic ID generation)
-- ------------------------------------------------------------------------------------------

-- 1. Static Fallback Configurations
CREATE TABLE passenger_default (
    pid INTEGER PRIMARY KEY,
    pname VARCHAR(255) NOT NULL,
    gender VARCHAR(255) DEFAULT 'other'
);

-- 2. Dynamic Time Tracking (Automatic timestamp logging)
CREATE TABLE passenger_time (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    journey_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. Sequence Auto-Generation: MySQL Variant
CREATE TABLE passenger_auto_mysql (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

-- 4. Sequence Auto-Generation: PostgreSQL Variant
CREATE TABLE passenger_auto_postgres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);