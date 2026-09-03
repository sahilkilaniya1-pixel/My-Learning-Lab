<!-- <?php -->
    // Sessions use karne ke liye session_start() sabse pehle (HTML se pehle) hona chahiye
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    // Cookie Handle Logic (Testing ke liye)
    if (isset($_POST['set_cookie_btn'])) {
        $theme = $_POST['theme_choice'] ?? 'light';
        setcookie("user_preferred_theme", $theme, time() + (86400 * 7), "/"); // 7 days valid
        // header("Location: " . $_SERVER['PHP_SELF']);
        exit;
    }

    if (isset($_POST['delete_cookie_btn'])) {
        setcookie("user_preferred_theme", "", time() - 3600, "/"); // Past time sets deletion
        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
    }

    // Session Handle Logic (Testing ke liye)
    if (isset($_POST['login_session_btn'])) {
        $_SESSION['logged_user'] = $_POST['sess_username'];
        $_SESSION['login_time'] = date("h:i:s A");
        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
    }

    if (isset($_POST['logout_session_btn'])) {
        session_unset();
        session_destroy();
        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Learn PHP - Complete Masterclass</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; background-color: #f4f6f9; }
        .container { max-width: 900px; margin: auto; background: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        .section { background: #fafafa; padding: 15px 20px; margin-bottom: 20px; border-radius: 8px; border-left: 5px solid #007bff; }
        h2 { color: #007bff; margin-top: 0; }
        h3 { color: #333; margin-top: 0; }
        code { background: #eef1f6; padding: 2px 6px; border-radius: 4px; color: #d63384; }
        hr { border: 0; height: 1px; background: #ddd; margin: 20px 0; }
        input[type="text"], input[type="password"], select { padding: 8px; margin: 5px 0 10px 0; width: 95%; border: 1px solid #ccc; border-radius: 4px; }
        input[type="submit"], button { background: #007bff; color: #fff; padding: 8px 15px; border: none; border-radius: 4px; cursor: pointer; }
        input[type="submit"]:hover, button:hover { background: #0056b3; }
        .btn-danger { background: #dc3545; }
        .btn-danger:hover { background: #bd2130; }
        .result-box { background: #e7f3fe; border-left: 4px solid #2196F3; padding: 10px; margin-top: 10px; }
        .success-box { background: #d4edda; border-left: 4px solid #28a745; padding: 10px; margin-top: 10px; color: #155724; }
    </style>
</head>
<body>
    <div class="container">
        <h2>My PHP Learning Playground</h2>
        <p>This is my PHP playground setup with Operators, Conditions, Loops, Arrays, Functions, Form Handling, Sessions &amp; Cookies.</p>

        <?php
            /*
            PHP is a dynamically typed language, which means you do not 
            have to declare the data type of a variable. The data type 
            is determined by the value assigned to the variable.
            */

            echo "<p>Hello world and this is my first PHP website!</p>";

            // Single line comment
            /*
            This is a
            multi-line comment
            */

            $variable = 34;
            $variable2 = 45;

            // Adds a space between variables on the same line
            echo "<strong>Concatenation with space:</strong> " . $variable . " " . $variable2; 
            echo "<br>";

            // Adds non-breaking spaces and prints values
            echo "<strong>Concatenation with non-breaking space (&amp;nbsp;):</strong> " . $variable . "&nbsp;&nbsp;&nbsp;" . $variable2;
            echo "<br><br>";
            echo "Hello world again!";
        ?>

        <hr>

        <?php
            /* ======== PART 1: OPERATORS IN PHP ========
            1. Arithmetic Operators
            2. Assignment Operators
            3. Comparison Operators
            4. Logical Operators
            5. Advanced Operators (Ternary, Null Coalescing, Array, Bitwise)
            6. Increment / Decrement Operators
            */
        ?>

        <!-- 1. ARITHMETIC OPERATORS -->
        <div class="section">
            <h3>1. Arithmetic Operators</h3>
            <?php
                $a = 10;
                $b = 3;

                echo "Addition (10 + 3): " . ($a + $b) . "<br>";        // Output: 13
                echo "Subtraction (10 - 3): " . ($a - $b) . "<br>";     // Output: 7
                echo "Multiplication (10 * 3): " . ($a * $b) . "<br>";  // Output: 30
                echo "Division (10 / 3): " . ($a / $b) . "<br>";        // Output: 3.3333333333333
                echo "Modulus Remainder (10 % 3): " . ($a % $b) . "<br>"; // Output: 1
                echo "Exponentiation (10^3): " . ($a ** $b) . "<br>";   // Output: 1000
            ?>
        </div>

        <!-- 2. ASSIGNMENT OPERATORS -->
        <div class="section">
            <h3>2. Assignment Operators</h3>
            <?php
                $x = 20; // Basic assign
                echo "Initial value: " . $x . "<br>";

                $x += 10; // $x = $x + 10
                echo "After += 10: " . $x . "<br>"; // Output: 30

                $x -= 5;  // $x = $x - 5
                echo "After -= 5: " . $x . "<br>";  // Output: 25

                $x *= 2;  // $x = $x * 2
                echo "After *= 2: " . $x . "<br>";  // Output: 50

                $text = "Hello";
                $text .= " World!"; // String Combine (Concatenation)
                echo "String after .= : " . $text . "<br>"; // Output: Hello World!
            ?>
        </div>

        <!-- 3. COMPARISON OPERATORS -->
        <div class="section">
            <h3>3. Comparison Operators</h3>
            <?php
                $num1 = 50;     // Integer
                $num2 = "50";   // String

                echo "Equal (==) - Only Value Check: ";
                var_dump($num1 == $num2); // bool(true)
                echo "<br>";

                echo "Identical (===) - Value + Data Type Check: ";
                var_dump($num1 === $num2); // bool(false)
                echo "<br>";

                echo "Not Equal (!=): ";
                var_dump($num1 != 100); // bool(true)
                echo "<br>";

                echo "Greater Than (>): ";
                var_dump($num1 > 30); // bool(true)
                echo "<br>";

                echo "Spaceship Operator (&lt;=&gt;): ";
                echo (10 <=> 20); // Output: -1 (Kyunki 10 chhota hai 20 se)
                echo "<br>";
            ?>
        </div>

        <!-- 4. LOGICAL OPERATORS -->
        <div class="section">
            <h3>4. Logical Operators</h3>
            <?php
                $age = 22;
                $has_voter_id = true;

                // Both conditions must be true
                echo "<strong>Voting Check (&amp;&amp;):</strong> ";
                if ($age >= 18 && $has_voter_id === true) {
                    echo "<span style='color:green;'>Eligible to Vote!</span><br>";
                } else {
                    echo "<span style='color:red;'>Not Eligible!</span><br>";
                }

                $login_with_google = false;
                $login_with_email = true;

                // Any one condition can be true
                echo "<strong>Login Check (||):</strong> ";
                if ($login_with_google || $login_with_email) {
                    echo "<span style='color:green;'>User Access Granted!</span><br>";
                } else {
                    echo "<span style='color:red;'>Please Login First!</span><br>";
                }
            ?>
        </div>

        <!-- 5. ADVANCED OPERATORS -->
        <div class="section">
            <h3>5. Advanced Operators (Modern PHP)</h3>
            <?php
                // A. Ternary Operator (? :)
                $battery = 15;
                $batteryStatus = ($battery < 20) ? "Low Battery!" : "Battery OK";
                echo "<strong>Ternary Operator (? :):</strong> " . $batteryStatus . "<br>";

                // B. Null Coalescing Operator (??)
                $username = $_GET['user'] ?? "Guest User";
                echo "<strong>Null Coalescing (??):</strong> Hello, " . $username . "<br>";

                // C. Array Union Operator (+)
                $userTheme = ["theme" => "Dark"];
                $defaultSettings = ["theme" => "Light", "language" => "English"];
                $finalSettings = $userTheme + $defaultSettings;
                echo "<strong>Array Union (+):</strong> Active Theme is " . $finalSettings['theme'] . " & Language is " . $finalSettings['language'] . "<br>";

                // D. Bitwise Operator (&)
                define('PERM_READ', 1);
                define('PERM_WRITE', 2);
                $myPermissions = PERM_READ | PERM_WRITE;

                echo "<strong>Bitwise Permission (&amp;):</strong> ";
                if ($myPermissions & PERM_WRITE) {
                    echo "Write Permission Granted!";
                }
            ?>
        </div>

        <!-- 6. INCREMENT & DECREMENT OPERATORS -->
        <div class="section">
            <h3>6. Increment &amp; Decrement Operators</h3>
            <?php
                $x = 5;
                echo "<strong>Post-Increment ($x++):</strong> Output pehle dikhayega: " . $x++ . "<br>";
                echo "Next line mein value update ho chuki hai: " . $x . "<br><br>";

                $y = 5;
                echo "<strong>Pre-Increment (++$y):</strong> Pehle 1 add karega phir output dikhayega: " . ++$y . "<br>";
            ?>
        </div>

        <hr>

        <?php
            /* ======== PART 2: BASIC CONTROL STRUCTURES IN PHP ========
            7. If Statement
            8. If-Else Statement
            9. If-Elseif-Else Statement
            10. Switch Case Statement
            */
        ?>

        <!-- 7. IF STATEMENT -->
        <div class="section">
            <h3>7. If Statement</h3>
            <?php
                // Single condition check
                $age = 20;

                if ($age >= 18) {
                    echo "Aap vote de sakte hain.";
                }
            ?>
        </div>

        <!-- 8. IF...ELSE STATEMENT -->
        <div class="section">
            <h3>8. If...Else Statement</h3>
            <?php
                // Dual decision check
                $age = 15;

                if ($age >= 18) {
                    echo "Aap vote de sakte hain.";
                } else {
                    echo "Aap vote nahi de sakte.";
                }
            ?>
        </div>

        <!-- 9. IF...ELSEIF...ELSE STATEMENT -->
        <div class="section">
            <h3>9. If...Elseif...Else Statement</h3>
            <?php
                // Multiple conditions check
                $marks = 75;

                if ($marks >= 80) {
                    echo "Grade: A";
                } elseif ($marks >= 60) {
                    echo "Grade: B";
                } elseif ($marks >= 40) {
                    echo "Grade: C";
                } else {
                    echo "Grade: Fail";
                }
            ?>
        </div>

        <!-- 10. SWITCH CASE STATEMENT -->
        <div class="section">
            <h3>10. Switch Case Statement</h3>
            <?php
                // Multi-branching value check
                $day = "Monday";

                switch ($day) {
                    case "Monday":
                        echo "Aaj week ka pehla din hai!";
                        break; // Match milte hi execution stop kar deta hai
                    case "Friday":
                        echo "Weekend aane wala hai!";
                        break;
                    case "Sunday":
                        echo "Aaj chhutti hai!";
                        break;
                    default:
                        echo "Normal working day.";
                }
            ?>
        </div>

        <hr>

        <?php
            /* ======== PART 3: ADVANCED CONDITIONS IN PHP ========
            11. PHP 8 Match Expression
            12. Alternative HTML Syntax
            */
        ?>

        <!-- 11. PHP 8 MATCH EXPRESSION -->
        <div class="section">
            <h3>11. PHP 8 Match Expression (Modern Switch replacement)</h3>
            <?php
                // Match expression direct value return karta hai aur break ki zaroorat nahi hoti
                $statusCode = 200;

                $statusMessage = match ($statusCode) {
                    200 => "Status 200: Request Success!",
                    404 => "Status 404: Page Not Found!",
                    500 => "Status 500: Server Error!",
                    default => "Status Unknown!",
                };

                echo "<strong>Match Result:</strong> " . $statusMessage;
            ?>
        </div>

        <!-- 12. ALTERNATIVE HTML SYNTAX -->
        <div class="section">
            <h3>12. Alternative Condition Syntax (Clean for HTML Templating)</h3>
            <?php
                $userIsLoggedIn = true;
                $userRole = "admin";
            ?>

            <!-- HTML ke saath clean syntax: curly braces {} ki jagah : aur endif; use hota hai -->
            <?php if ($userIsLoggedIn): ?>
                <p style="color: green; margin: 0;">Welcome back, User!</p>
                <?php if ($userRole === "admin"): ?>
                    <small>You have access to the Admin Dashboard.</small>
                <?php endif; ?>
            <?php else: ?>
                <p style="color: red; margin: 0;">Please log in to continue.</p>
            <?php endif; ?>
        </div>

        <hr>

        <?php
            /* ======== PART 4: LOOPS IN PHP ========
            13. While Loop
            14. Do...While Loop
            15. For Loop
            16. Foreach Loop
            17. Loop Controls (Break & Continue)
            */
        ?>

        <!-- 13. WHILE LOOP -->
        <div class="section">
            <h3>13. While Loop</h3>
            <?php
                // Condition pehle check hoti hai
                $i = 1;
                while ($i <= 3) {
                    echo "While Count: " . $i . "<br>";
                    $i++;
                }
            ?>
        </div>

        <!-- 14. DO...WHILE LOOP -->
        <div class="section">
            <h3>14. Do...While Loop</h3>
            <?php
                // Code kam se kam ek baar zaroor chalega, condition baad mein check hoti hai
                $i = 10;
                do {
                    echo "Do-While Count (at least 1 run): " . $i . "<br>";
                    $i++;
                } while ($i <= 3);
            ?>
        </div>

        <!-- 15. FOR LOOP -->
        <div class="section">
            <h3>15. For Loop</h3>
            <?php
                // Jab pta ho ki loop kitni baar chalana hai (start; condition; step)
                for ($j = 1; $j <= 3; $j++) {
                    echo "For Count: " . $j . "<br>";
                }
            ?>
        </div>

        <!-- 16. FOREACH LOOP -->
        <div class="section">
            <h3>16. Foreach Loop (Array Iteration)</h3>
            <?php
                // Specially arrays ke har item ko print karne ke liye
                $languages = ["PHP", "JavaScript", "Python", "SQL"];

                foreach ($languages as $index => $lang) {
                    echo "Index " . $index . ": " . $lang . "<br>";
                }
            ?>
        </div>

        <!-- 17. BREAK & CONTINUE -->
        <div class="section">
            <h3>17. Loop Controls (Break &amp; Continue)</h3>
            <?php
                echo "<strong>Continue Example (Skip 3):</strong><br>";
                for ($k = 1; $k <= 5; $k++) {
                    if ($k === 3) {
                        continue; // 3 ko skip kar dega aur agle number par jayega
                    }
                    echo "Value: " . $k . " ";
                }

                echo "<br><br><strong>Break Example (Stop at 3):</strong><br>";
                for ($k = 1; $k <= 5; $k++) {
                    if ($k === 3) {
                        break; // Loop ko yahin rok dega
                    }
                    echo "Value: " . $k . " ";
                }
            ?>
        </div>

        <hr>

        <?php
            /* ======== PART 5: ARRAYS & INBUILT FUNCTIONS ========
            18. Indexed Array
            19. Associative Array
            20. Multidimensional Array
            21. Inbuilt Array Functions
            */
        ?>

        <!-- 18. INDEXED ARRAY -->
        <div class="section">
            <h3>18. Indexed Array</h3>
            <?php
                $fruits = ["Apple", "Banana", "Mango"];
                echo "First Fruit (Index 0): " . $fruits[0] . "<br>";
                echo "Second Fruit (Index 1): " . $fruits[1] . "<br>";
            ?>
        </div>

        <!-- 19. ASSOCIATIVE ARRAY -->
        <div class="section">
            <h3>19. Associative Array</h3>
            <?php
                $student = [
                    "name" => "Sahil Kilaniya",
                    "age" => 22,
                    "course" => "PHP Development"
                ];

                echo "Student Name: " . $student['name'] . "<br>";
                echo "Enrolled Course: " . $student['course'] . "<br>";
            ?>
        </div>

        <!-- 20. MULTIDIMENSIONAL ARRAY -->
        <div class="section">
            <h3>20. Multidimensional Array</h3>
            <?php
                $employees = [
                    ["id" => 101, "name" => "Sahil Kilaniya", "role" => "Developer"],
                    ["id" => 102, "name" => "Priya", "role" => "Designer"]
                ];

                echo "Emp 1: " . $employees[0]['name'] . " (" . $employees[0]['role'] . ")<br>";
                echo "Emp 2: " . $employees[1]['name'] . " (" . $employees[1]['role'] . ")<br>";
            ?>
        </div>

        <!-- 21. INBUILT ARRAY FUNCTIONS -->
        <div class="section">
            <h3>21. Important Inbuilt Array Functions</h3>
            <?php
                $numbers = [10, 20, 30];

                // 1. count() - Array ki length batata hai
                echo "<strong>count():</strong> Total items = " . count($numbers) . "<br>";

                // 2. array_push() - End me item jodta hai
                array_push($numbers, 40);
                echo "<strong>array_push():</strong> Added 40. New Count = " . count($numbers) . "<br>";

                // 3. array_pop() - End se item hatata hai
                $removed = array_pop($numbers);
                echo "<strong>array_pop():</strong> Removed item = " . $removed . "<br>";

                // 4. in_array() - Check karta hai value hai ya nahi
                echo "<strong>in_array():</strong> Is 20 present? ";
                var_dump(in_array(20, $numbers));
                echo "<br>";

                // 5. array_keys() & array_values()
                $user = ["username" => "john_doe", "email" => "john@example.com"];
                $keys = array_keys($user);
                echo "<strong>array_keys():</strong> First Key = " . $keys[0] . "<br>";

                // 6. array_merge() - Do arrays ko milata hai
                $arr1 = ["PHP", "MySQL"];
                $arr2 = ["HTML", "CSS"];
                $merged = array_merge($arr1, $arr2);
                echo "<strong>array_merge():</strong> Combined Array = " . implode(", ", $merged) . "<br>";
            ?>
        </div>

        <hr>

        <?php
            /* ======== PART 6: PHP FUNCTIONS ========
            22. Basic Custom Function
            23. Function with Arguments & Default Parameters
            24. Function with Return Values
            25. Type Declarations (Strict PHP)
            */
        ?>

        <!-- 22. BASIC CUSTOM FUNCTION -->
        <div class="section">
            <h3>22. Basic Custom Function</h3>
            <?php
                function printWelcomeMessage() {
                    echo "Welcome to custom PHP functions playground!<br>";
                }

                // Calling the function
                printWelcomeMessage();
            ?>
        </div>

        <!-- 23. FUNCTION WITH ARGUMENTS & DEFAULTS -->
        <div class="section">
            <h3>23. Function with Arguments &amp; Default Values</h3>
            <?php
                function greetUserProfile($name, $role = "Subscriber") {
                    echo "User <strong>$name</strong> logged in as <em>$role</em>.<br>";
                }

                greetUserProfile("Sahil kilaniya", "Admin"); // Passing both arguments
                greetUserProfile("Mohit");          // Takes default role
            ?>
        </div>

        <!-- 24. FUNCTION WITH RETURN VALUE -->
        <div class="section">
            <h3>24. Function with Return Value</h3>
            <?php
                function calculateDiscount($price, $discountPercent) {
                    $discountAmount = ($price * $discountPercent) / 100;
                    return $price - $discountAmount;
                }

                $finalPrice = calculateDiscount(1000, 15); // 15% discount on 1000
                echo "Original Price: ₹1000 | Discounted Price: ₹" . $finalPrice . "<br>";
            ?>
        </div>

        <!-- 25. TYPE DECLARATION IN FUNCTIONS -->
        <div class="section">
            <h3>25. Type Declarations (Modern PHP 7+)</h3>
            <?php
                // Enforcing integer arguments and integer return type
                function multiplyNumbers(int $num1, int $num2): int {
                    return $num1 * $num2;
                }

                $product = multiplyNumbers(6, 7);
                echo "<strong>Result of multiplyNumbers(6, 7):</strong> " . $product . "<br>";
            ?>
        </div>

        <hr>

        <?php
            /* ======== PART 7: FORM HANDLING ($_GET vs $_POST) ========
            26. Handling $_GET Requests
            27. Handling $_POST Requests (Secure Forms)
            */
        ?>

        <!-- 26. HANDLING $_GET REQUESTS -->
        <div class="section">
            <h3>26. Handling $_GET Data (Visible in URL)</h3>
            <p>Try adding <code>?search=PHP Tutorials</code> at the end of your browser URL and reload!</p>
            <?php
                // Null coalescing operator (??) ensures no error if 'search' is missing
                $searchQuery = $_GET['search'] ?? 'Nothing searched yet';
                echo "<div class='result-box'><strong>GET Search Result:</strong> " . htmlspecialchars($searchQuery) . "</div>";
            ?>
        </div>

        <!-- 27. HANDLING $_POST REQUESTS -->
        <div class="section">
            <h3>27. Handling $_POST Data (Secure Form Submission)</h3>
            
            <form action="" method="POST">
                <label for="uname">Username:</label><br>
                <input type="text" id="uname" name="username" placeholder="Enter username..." required><br>

                <label for="pwd">Password:</label><br>
                <input type="password" id="pwd" name="password" placeholder="Enter password..." required><br>

                <input type="submit" name="login_btn" value="Login Now">
            </form>

            <?php
                // Check if form was submitted using POST method
                if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['login_btn'])) {
                    $user = $_POST['username'];
                    $pass = $_POST['password'];

                    // htmlspecialchars() prevents XSS attacks
                    echo "<div class='result-box'>";
                    echo "<strong>Form Submitted Successfully via POST!</strong><br>";
                    echo "Username Received: " . htmlspecialchars($user) . "<br>";
                    echo "Password Received: " . htmlspecialchars($pass) . " (Hidden from URL!)";
                    echo "</div>";
                }
            ?>
        </div>

        <hr>

        <?php
            /* ======== PART 8: SESSIONS & COOKIES ========
            28. Working with PHP Sessions ($_SESSION)
            29. Working with PHP Cookies ($_COOKIE)
            */
        ?>

        <!-- 28. WORKING WITH PHP SESSIONS -->
        <div class="section">
            <h3>28. PHP Sessions (Server-side State)</h3>

            <?php if (isset($_SESSION['logged_user'])): ?>
                <div class="success-box">
                    <strong>Logged In Active Session!</strong><br>
                    Welcome, <strong><?php echo htmlspecialchars($_SESSION['logged_user']); ?></strong>!<br>
                    Login Time: <?php echo $_SESSION['login_time']; ?>
                </div>
                <form action="" method="POST" style="margin-top: 10px;">
                    <button type="submit" name="logout_session_btn" class="btn-danger">Logout (Destroy Session)</button>
                </form>
            <?php else: ?>
                <form action="" method="POST">
                    <label>Enter Name to Create Session (Simulate Login):</label><br>
                    <input type="text" name="sess_username" placeholder="e.g. Sahil" required><br>
                    <input type="submit" name="login_session_btn" value="Start Session">
                </form>
            <?php endif; ?>
        </div>

        <!-- 29. WORKING WITH PHP COOKIES -->
        <div class="section">
            <h3>29. PHP Cookies (Browser-side Storage)</h3>
            
            <?php
                $currentCookieTheme = $_COOKIE['user_preferred_theme'] ?? 'Not Set (Default)';
            ?>
            
            <p><strong>Current Active Cookie Value:</strong> <code><?php echo htmlspecialchars($currentCookieTheme); ?></code></p>
            
            <form action="" method="POST">
                <label>Choose Preferred Theme Cookie:</label><br>
                <select name="theme_choice">
                    <option value="Dark Mode">Dark Mode</option>
                    <option value="Light Mode">Light Mode</option>
                    <option value="Blue Accent">Blue Accent</option>
                </select><br>
                <input type="submit" name="set_cookie_btn" value="Save Cookie (7 Days)">
                <?php if (isset($_COOKIE['user_preferred_theme'])): ?>
                    <button type="submit" name="delete_cookie_btn" class="btn-danger">Delete Cookie</button>
                <?php endif; ?>
            </form>
        </div>

    </div>
</body>
</html>