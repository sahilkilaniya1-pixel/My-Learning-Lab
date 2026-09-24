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
Mental Process:
SELECT name, salary FROM Employees WHERE deparment = "IT";

Question 2: Har department ki Average Salary aur total employees nikalo.
Mental Process:
Select department, AVG(salary) AS avg_salary, COUNT(emp_id) AS total_employees
FROM Employees GROUP BY department;

Question 3 (JOIN): Un employees ke naam aur unke project ka naam batao jinko project assign hua hai.
SELECT E.name AS employee_name, P.project_name FROM Employees E INNER JOIN Project P ON E.emp_id = P.emp_id;