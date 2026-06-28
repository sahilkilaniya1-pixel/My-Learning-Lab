-- A. Order Sequence Arrays (Sorting Specs)
-- Descending structural ordering with output volume limits
SELECT title, (gross - budget) AS profit FROM movies_movies ORDER BY profit DESC LIMIT 5;

-- Ascending prioritization model maps
SELECT title, (gross - budget) AS profit FROM movies_movies ORDER BY profit ASC LIMIT 5;

-- Dual-attribute hierarchy order sequence paths
SELECT * FROM movies_movies ORDER BY genre, title DESC;



-- B. Data Grouping Matrices
-- Quantifying occurrences clustered by fields
SELECT star, COUNT(*) AS num_movies FROM movies_movies GROUP BY star;

-- Group consolidation matched with sequence priority rankings limits
SELECT star, COUNT(*) AS num_movies FROM movies_movies GROUP BY star ORDER BY num_movies DESC LIMIT 5;

-- Multi-layered composite grouping metrics calculations
SELECT star, director, SUM(gross - budget) AS profit FROM movies_movies GROUP BY star, director ORDER BY profit DESC LIMIT 5;
SELECT star, genre, SUM(gross - budget) AS profit FROM movies_movies GROUP BY star, genre ORDER BY profit DESC LIMIT 5;




-- C. Aggregated Pipeline Constraints (HAVING Queries)
-- Evaluates computational output profiles after cluster grouping calculations are resolved
SELECT star, AVG(votes) AS opening FROM movies_movies GROUP BY star HAVING opening > 1000 ORDER BY opening DESC;




-- D. Query Background Execution Compiler Sequence Rules
-- When a query executes, the engine evaluates logic blocks in this strict order:
FROM ➡️ JOIN ➡️ WHERE ➡️ GROUP BY ➡️ HAVING ➡️ SELECT ➡️ DISTINCT ➡️ ORDER BY ➡️ LIMIT




