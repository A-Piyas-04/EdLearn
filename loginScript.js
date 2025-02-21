document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("authForm");
    const submitBtn = document.getElementById("submitBtn");
    const toggleForm = document.getElementById("toggleForm");
    const switchMessage = document.getElementById("switchMessage");
    const errorMessage = document.getElementById("error-message");
  
    let isLogin = true; // Track login/signup mode
  
    // Toggle Between Login & Signup
    toggleForm.addEventListener("click", function (event) {
      event.preventDefault();
      isLogin = !isLogin;
  
      if (isLogin) {
        formTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        switchMessage.textContent = "Don't have an account?";
        toggleForm.textContent = "Sign Up";
      } else {
        formTitle.textContent = "Sign Up";
        submitBtn.textContent = "Sign Up";
        switchMessage.textContent = "Already have an account?";
        toggleForm.textContent = "Login";
      }
    });
  
    // Basic Form Validation
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
  