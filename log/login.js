<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up - LearnSphere</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>

    <div class="auth-container">
        <h2>Create an Account</h2>
        <form id="registerForm">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="Enter your full name" required>

            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required>

            <button type="submit" class="auth-button">Sign Up</button>

            <p class="switch-auth">Already have an account? <a href="login.html">Log in</a></p>
        </form>
    </div>

    <script src="login.js"></script>
</body>
</html>
