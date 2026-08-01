-- A. Mathematical Operations Modules
-- Absolute variance tracker execution analysis
SELECT title, ABS((gross - budget)) AS profit FROM movies_movies;
-- Numerical rounding scales options
SELECT title, ROUND(runtime/60) AS runtime_hrs FROM movies_movies;
SELECT title, ROUND((runtime/60), 1) AS runtime_hrs FROM movies_movies;
-- Boundary ceilings adjustments trackers
SELECT title, CEIL((runtime/60)) AS runtime_hrs FROM movies_movies;
-- Floor minimum coordinate truncation systems
SELECT title, FLOOR((runtime/60)) AS runtime_hrs FROM movies_movies;


-- B. String Engineering Protocols

-- Casing modifiers
SELECT UPPER(title) FROM movies_movies;
SELECT LOWER(title) FROM movies_movies;
-- Row data alignment mergers
SELECT title, CONCAT(actor, ', ', director) AS crew FROM movies_movies;
-- Document string context dimension metric checking
SELECT title, LENGTH(title) AS length FROM movies_movies;
-- Text section segment extraction arrays (Source, start position, limit length)
SELECT title, SUBSTR(title, 1, 5) AS short FROM movies_movies;



-- C. Aggregation Architecture Blocks
-- Standard baseline descriptive matrices computations
SELECT MAX(budget) FROM movies_movies;
SELECT MIN(gross) FROM movies_movies;
SELECT SUM(gross) FROM movies_movies;
SELECT AVG(gross) FROM movies_movies;
-- Row calculations tracker setups
SELECT COUNT(*) FROM movies_movies;
-- Deduplicated entity baseline monitoring systems
SELECT COUNT(DISTINCT(actor)) FROM movies_movies;
SELECT actor, COUNT(DISTINCT(actor)) AS movies_count FROM movies_movies GROUP BY actor;
