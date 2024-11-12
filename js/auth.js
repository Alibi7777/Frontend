document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector(".login-button");

  // Check if a user is already logged in and update the header
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    displayUserProfile(currentUser.name);
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission

      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = storedUsers.find(
        (u) =>
          u.email === emailInput.value && u.password === passwordInput.value
      );

      if (user) {
        // Save the logged-in user to local storage
        localStorage.setItem("currentUser", JSON.stringify(user));
        displayUserProfile(user.name);
        alert(`Welcome back, ${user.name}!`);
        window.location.href = "index.html"; // Redirect to home
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });
  }

  function displayUserProfile(userName) {
    // Replace the login button with the user's name
    if (loginButton) {
      loginButton.textContent = userName;
      loginButton.style.cursor = "pointer";
      loginButton.removeEventListener("click", openLoginPage); // Remove previous login event
      loginButton.addEventListener("click", logout); // Add logout functionality
    }
  }

  function openLoginPage() {
    window.location.href = "login.html";
  }

  function logout() {
    localStorage.removeItem("currentUser"); // Remove current user data
    alert("You have been logged out.");
    loginButton.textContent = "Login"; // Reset to "Login" text
    loginButton.removeEventListener("click", logout); // Remove logout event
    loginButton.addEventListener("click", openLoginPage); // Re-add login event
  }
});
