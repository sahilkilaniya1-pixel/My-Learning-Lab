<?php
// ==========================================
// 1. DATABASE SE CONNECT HONA (Connection Setup)
// ==========================================
$host     = "localhost";
$dbname   = "my_test_db";
$username = "root";       // XAMPP ka default user
$password = "";           // XAMPP ka default password khali hota hai

try {
    // DB Line Connect karna
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database Connection Failed: " . $e->getMessage());
}

// ==========================================
// 2. FORM SUBMIT HONE PAR DATA SAVE KARNA (Insert)
// ==========================================
$message = "";
if (isset($_POST['save_btn'])) {
    $user_name  = $_POST['user_name'];
    $user_email = $_POST['user_email'];

    // Empty template tayar karna (Security ke liye)
    $sql = "INSERT INTO users (name, email) VALUES (:name, :email)";
    $stmt = $pdo->prepare($sql);

    // Data daal kar execute karna
    $stmt->execute([
        ':name'  => $user_name,
        // ':email' => $user_email
    ]);

    // Page Refresh warning se bachne ke liye Redirect
    header("Location: " . $_SERVER['PHP_SELF'] . "?status=success");
    exit();
}

if (isset($_GET['status']) && $_GET['status'] == 'success') {
    $message = "User successfully saved in Database!";
}

// ==========================================
// 3. DATABASE SE DATA NIKALNA (Fetch/Read)
// ==========================================
$stmt = $pdo->prepare("SELECT * FROM users ORDER BY id DESC");
$stmt->execute();
$all_users = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP MySQL Easy Demo</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 30px; background: #f4f4f4; }
        .box { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; max-width: 500px; }
        input { width: 90%; padding: 8px; margin: 8px 0; }
        button { background: green; color: white; padding: 10px 15px; border: none; cursor: pointer; }
        /* table { width: 100%; border-collapse: collapse; margin-top: 10px; } */
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #333; color: white; }
        .success { color: green; font-weight: bold; }
    </style>
</head>
<body>

    <div class="box">
        <h2>Add User to Database</h2>
        <?php if (!empty($message)): ?>
            <p class="success"><?php echo $message; ?></p>
        <?php endif; ?>

        <form method="POST">
            <label>Name:</label><br>
            <input type="text" name="user_name" required><br>

            <label>Email:</label><br>
            <input type="email" name="user_email" required><br>

            <button type="submit" name="save_btn">Save User</button>
        </form>
    </div>

    <div class="box">
        <h2>Users List from Database</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <?php foreach ($all_users as $user): ?>
                <tr>
                    <td><?php echo $user['id']; ?></td>
                    <td><?php echo $user['name']; ?></td>
                    <td><?php echo $user['email']; ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
    </div>

</body>
</html>