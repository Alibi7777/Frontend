document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === emailInput.value && u.password === passwordInput.value
    );

    if (user) {
      // Display a success message
      document.body.innerHTML = `
        <div class="confirmation-message">
          <h1>Login Successful!</h1>
          <p>Welcome back, ${user.name}.</p>
          <a href="index.html">Go to Home</a>
        </div>
      `;
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});
