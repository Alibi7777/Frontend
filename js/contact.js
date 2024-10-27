document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    // Send data using fetch and handle the response
    fetch("https://example.com/api/contact", {
      // Replace with your server URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Callback function for success
        feedback.textContent =
          "Thank you for your message! We will get back to you soon.";
        feedback.style.color = "green";
        form.reset(); // Clear the form
      })
      .catch((error) => {
        // Callback function for error
        feedback.textContent =
          "There was a problem sending your message. Please try again later.";
        feedback.style.color = "red";
      });
  });
});
