-- A. Basic Projection Blocks
-- Full tuple extraction blueprint
SELECT * FROM titanic_practice_data;
-- Specific columnar attribute filtering maps
SELECT Name, Sex, Survived FROM titanic_practice_data;
-- Column alias renaming protocols
SELECT Name AS Passenger_Id, Sex AS GENDER, Survived FROM titanic_practice_data;



-- B. Computed Expressions & Constants
-- Functional math expressions running calculations column against column
SELECT Name, SibSp + Parch AS family FROM titanic_practice_data;
-- Literal computation adjustments scaling target metrics
SELECT Name, Age + 102 AS currentAge FROM titanic_practice_data;
-- Constant column injection blueprint
SELECT Name, 100000 AS compensation FROM titanic_practice_data;



-- C. Cardinality Constraints (DISTINCT Queries)
-- Resolving unique entities within single column parameters
SELECT DISTINCT sex FROM titanic_practice_data;
SELECT DISTINCT Embarked FROM titanic_practice_data;
SELECT DISTINCT Pclass FROM titanic_practice_data;
-- Compiling distinct multi-attribute interaction states
SELECT DISTINCT Pclass, Embarked FROM titanic_practice_data;



-- D. Logic Optimization Rulesets (WHERE Conditionals)
-- Primitive standard value comparison structures
SELECT * FROM titanic_practice_data WHERE Survived = 0;
SELECT * FROM titanic_practice_data WHERE Pclass = 3;
SELECT * FROM titanic_practice_data WHERE Age > 5;
-- Complex compound structural tracking criteria
SELECT * FROM titanic_practice_data WHERE Pclass = 3 AND Survived = 0;
-- Numeric linear bracket evaluations boundaries mapping
SELECT * FROM titanic_practice_data WHERE Age BETWEEN 10 AND 15;
-- Strict matching logic array verification parameters
SELECT name, genre FROM movies WHERE genre IN ('Action', 'Horror', 'Drama');
SELECT name FROM movies WHERE actor IN ('%khan%', '%kapoor%');





-- E. Wildcard Operators (Pattern Frameworks)
-- Precise matching string syntax layouts
SELECT name FROM movies WHERE genre LIKE 'Comedy' OR genre LIKE 'Action';
-- Boundary trailing alphanumeric layout identification models
SELECT name FROM movies WHERE name LIKE 'A%';
-- Embedded text segment tracking profiles
SELECT name FROM movies WHERE name LIKE '%man%';
-- Strict character sequence frame limits checks (5 character placeholder verification)
SELECT name FROM movies WHERE name LIKE '_____';