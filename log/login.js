document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Check if user is already logged in, redirect to home if true
    if (window.location.pathname.includes("login.html") && localStorage.getItem("isLoggedIn") === true) {
        window.location.href = "../home.html";
    }

    // Login Form Submission
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                localStorage.setItem("isLoggedIn", "true"); // Mark user as logged in
                alert("Login successful! Redirecting to Home...");
                window.location.href = "../home.html"; // Redirect to home page
            } 
            else {
                alert("Invalid email or password.");
            }
        });
    }

    // Registration Form Submission
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const fullname = document.getElementById("fullname").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (fullname && email && password) {
                const user = { fullname, email, password };
                localStorage.setItem("user", JSON.stringify(user)); // Save user in localStorage

                alert("Registration successful! Redirecting to login...");
                window.location.href = "login.html"; // Redirect to login page
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});
