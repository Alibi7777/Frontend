// Function to play the purchase sound
function playPurchaseSound() {
  const purchaseSound = document.getElementById("purchaseSound");
  purchaseSound.play();
}

// Add event listeners to all checkout buttons
document.addEventListener("DOMContentLoaded", function () {
  const checkoutButtons = document.querySelectorAll(".checkout-btn");

  checkoutButtons.forEach((button) => {
    button.addEventListener("click", function () {
      playPurchaseSound();
    });
  });
});
