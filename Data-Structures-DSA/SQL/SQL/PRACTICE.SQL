Mental Mode: FROM - JOIN - WHERE - GROUP BY - HAVING - SELECT - DISTINCT - ORDER BY - LIMIT
phele dekho data kis table se aa raha hain (FROM/ JOIN).
phir dekhie kaunse rows filter karne hain (WHERE).
Grouping ki zarurat hai ya nahi (GROUP BY / HAVING).
continous analytics/ranking chal rahi hai toh window functions (OVER(...)) use karein.

Step 1: SQL ki Thinking Strategy(Dimaag kaise chalayein ?)
Jab bhi koi question aaye, hamesha in 4 question ke baare mein sochein:
1.Mujhe result mein kya-kya dikhana hai? -> yeh jayega SELECT mein.
2.Mera data kis table (ya tables) se aa raha hai? -> Yeh jayega FROM aur JOIN mein.
3.Kya Mujhe Specific rows filter karni hain ? -> yeh jayega WHERE mein.
4.Kya summary/ group total nikalna hai? -> yeh jayega GROUP BY aur HAVING mein.

Question 1: IT Department ke saare employees ka name aur salary dikhao.
SELECT name, 
    salary FROM Employees 
    WHERE deparment = "IT";

Question 2: Har department ki Average Salary aur total employees nikalo.
Select department, 
    AVG(salary) AS avg_salary, COUNT(emp_id) AS total_employees
FROM Employees GROUP BY department;

Question 3 (JOIN): Un employees ke naam aur unke project ka naam batao jinko project assign hua hai.
SELECT E.name AS employee_name, P.project_name FROM Employees E INNER JOIN Project P ON E.emp_id = P.emp_id;

Question 4 (Window Function): Har department mein salary ke according highest paid employee ko Rank 1 do.
SELECT name,department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank FROM Employees;

Question 1 (Basic Filter & Sort)
Un sabhi employees ka Name aur Salary dikhao jinki salary 50,000 se zyada hai, aur output ko Highest Salary se Lowest Salary ke order mein sort (arrange) karo.
SELECT name, salary from employees WHERE salary > 50000 ORDER BY salary DESC;

Question 2 (GROUP BY + HAVING)
Un Departments ka naam aur unki Average Salary dikhao jinki Average Salary 60,000 se zyada hai.
SELECT department, AVG(salary) AS avg_salary FROM Employees GROUP BY department HAVING AVG(salary) > 60000;

Question 3 (LEFT JOIN / Advanced)
Sabhi employees ke Name aur unke Project Name dikhao. Chahe unhe koi project assign hua ho ya nahi (jaise Vikas ko koi project nahi mila, fir bhi uska naam output mein aana chahiye).
SELECT E.name AS Employee_name, P.project_name FROM Employees E LEFT JOIN Project P ON E.emp_id = P.emp_id;
