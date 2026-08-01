-- A. Entry Inserters
-- Explicit column mapping syntax
INSERT INTO students (sid, sname, email, college) VALUES (1, 'Sahil', 'sahil1@gmail.com', 'IMT');

-- Positional compact execution mapping (assumes exact physical structural match)
INSERT INTO students VALUES (2, 'Sahil', 'sahil1@gmail.com', 'IMT');



-- B. Record Shifters (UPDATE Mechanics)
-- Blanket structural updates across full record frames
UPDATE passenger SET name = 'Sahil';

-- Targeted column manipulation filtered via basic pattern boundaries
UPDATE passenger SET name = 'Sahil' WHERE email LIKE '%gmail%';

-- Multi-column inline overrides executing on target wildcard criteria
UPDATE passenger SET name = 'Sahil', email = 'abc@gmail.com' WHERE email LIKE '%yahoo%';



-- C. Record Eliminators (DELETE Mechanics)
-- Removing direct entries pinpointed via unique row identity
DELETE FROM passenger WHERE id = 1;

-- Executing criteria-based data pruning strategies
DELETE FROM passenger WHERE id > 2 AND email LIKE '%yahoo%';

-- Full row erasure processing (Equivalent to unconditional validation blocks)
DELETE FROM passenger WHERE 1;



