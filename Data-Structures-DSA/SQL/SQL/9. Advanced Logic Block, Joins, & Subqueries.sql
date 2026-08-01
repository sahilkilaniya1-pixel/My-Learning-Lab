-- A. Conditional Stream Overrides (CASE Operations)
SELECT title, (gross - budget) AS profit,
CASE
    WHEN (gross - budget) > 1000000000 THEN 'SUPER HIT'
    WHEN (gross - budget) > 250000000 AND (gross - budget) <= 1000000000 THEN 'HIT'
    WHEN (gross - budget) > 0 AND (gross - budget) < 250000000 THEN 'AVERAGE'
    ELSE 'FLOP'
END AS verdict
FROM movies_movies LIMIT 0, 25;



-- B. Cross-Relational Table Joins Matrix
-- Cartesian Product: Comprehensive combination generation across target datasets
SELECT * FROM users CROSS JOIN groups;

-- Inner Join: Merging rows with intersecting domain identity structures
SELECT * FROM membership m JOIN users u ON m.uid = u.id;

-- Self Join: Comparing row records against matching internal attributes within the same entity
SELECT u1.name, u2.name FROM users u1 JOIN users u2 ON u1.emergency_contact = u2.id;

-- Left Outer Join: Retaining complete baseline dataset left of query boundaries
SELECT * FROM membership m LEFT OUTER JOIN users u ON m.uid = u.id;

-- Right Outer Join: Prioritizing right-side dataset structures during correlation matches
SELECT * FROM membership m RIGHT OUTER JOIN users u ON m.uid = u.id;






-- C. Core Optimization Profiles & Multi-Table Union Models
-- Profile Run Path Verification Engine (EXPLAIN ANALYZE):
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'sahil@example.com';
-- Full Outer Join Integration Frameworks (PostgreSQL Native):
SELECT * FROM membership m FULL OUTER JOIN users u ON m.uid = u.id;
-- Full Outer Join Integration Frameworks (MySQL Simulated Workaround):
SELECT * FROM membership m LEFT OUTER JOIN users u ON m.uid = u.id
UNION
SELECT * FROM membership m RIGHT OUTER JOIN users u ON m.uid = u.id;
-- Deduplicated Structural Record Merging:
SELECT id FROM users UNION SELECT gid FROM groups;
-- Total Additive Array Matching (Preserves Duplicates):
SELECT id FROM users UNION ALL SELECT gid FROM groups;




-- D. Nested Subquery Pipelines & Correlated Logic Blocks
-- Independent Nested Subquery filtering boundaries
SELECT * FROM movies_movies WHERE star IN (SELECT star FROM movies_movies WHERE star LIKE 'A%');

-- Correlated Subquery Matrix mapping attributes iteratively across dynamic alias sets
SELECT title, genre, (gross - budget) AS profit
FROM movies_movies m1
WHERE (gross - budget) = (SELECT MAX(gross - budget) FROM movies_movies m2 WHERE m2.genre = m1.genre);



