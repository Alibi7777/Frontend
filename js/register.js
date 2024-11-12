document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    clearErrorMessages();

    let isValid = true;

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Full Name is required.");
      isValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    if (passwordInput.value.length < 8) {
      showError(passwordInput, "Password must be at least 8 characters long.");
      isValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      showError(confirmPasswordInput, "Passwords do not match.");
      isValid = false;
    }

    if (isValid) {
      const user = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value, // Store passwords safely in a real project
      };

      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful! You can now log in.");
      window.location.href = "login.html";
    }
  });

  function showError(input, message) {
    const error = document.createElement("div");
    error.classList.add("error-message");
    error.textContent = message;
    input.parentElement.appendChild(error);
    input.classList.add("error-input");
  }

  function clearErrorMessages() {
    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    document
      .querySelectorAll(".error-input")
      .forEach((input) => input.classList.remove("error-input"));
  }

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
});
// After registration
if (isValid) {
  const user = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value,
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(user)); // Set current user

  alert("Registration successful!");
  window.location.href = "index.html";
}
