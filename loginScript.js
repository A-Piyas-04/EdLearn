document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("authForm");
    const submitBtn = document.getElementById("submitBtn");
    const toggleForm = document.getElementById("toggleForm");
    const errorMessage = document.getElementById("error-message");

    let isLogin = true; // Track login/signup mode

    // Toggle Between Login & Signup
    toggleForm.addEventListener("click", function (event) {
        event.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            formTitle.textContent = "Login";
            submitBtn.textContent = "Login";
            toggleForm.textContent = "Sign Up";
            document.querySelector(".switch-form").innerHTML = `Don't have an account? <a href="#" id="toggleForm">Sign Up</a>`;
        } else {
            formTitle.textContent = "Sign Up";
            submitBtn.textContent = "Sign Up";
            toggleForm.textContent = "Login";
            document.querySelector(".switch-form").innerHTML = `Already have an account? <a href="#" id="toggleForm">Login</a>`;
        }
    });

    // Form Validation
    authForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            errorMessage.textContent = "Please fill in all fields.";
            return;
        }

        if (!email.includes("@") || email.length < 5) {
            errorMessage.textContent = "Enter a valid email address.";
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters.";
            return;
        }

        // If validation passes
        errorMessage.textContent = "";
        alert(isLogin ? "Login Successful!" : "Signup Successful!");
        authForm.reset(); // Reset form after submission
    });
});
