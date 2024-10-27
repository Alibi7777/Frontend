// language-switcher.js
document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("languageSelect");

  // Function to change the language
  function changeLanguage(language) {
    switch (language) {
      case "en":
        updateContent(
          "Electronics Shop",
          "Home",
          "Cart",
          "Favourites",
          "FAQ",
          "Contact Us",
          "Frequently Asked Questions"
        );
        break;
      case "ru":
        updateContent(
          "Электроника Магазин",
          "Главная",
          "Корзина",
          "Избранное",
          "Часто задаваемые вопросы",
          "Связаться с нами",
          "Часто задаваемые вопросы"
        );
        break;
      case "kk":
        updateContent(
          "Электроника Дүкені",
          "Үй",
          "Себет",
          "Таңдаулы",
          "Жиі қойылатын сұрақтар",
          "Байланыс",
          "Жиі қойылатын сұрақтар"
        );
        break;
      default:
        updateContent(
          "Electronics Shop",
          "Home",
          "Cart",
          "Favourites",
          "FAQ",
          "Contact Us",
          "Frequently Asked Questions"
        );
    }
  }

  // Helper function to update the content based on the selected language
  function updateContent(
    title,
    home,
    cart,
    favourites,
    faq,
    contact,
    questions
  ) {
    document.querySelector("h1").textContent = title;
    document.querySelector('a[href="index.html"]').textContent = home;
    document.querySelector('a[href="cart.html"]').textContent = cart;
    document.querySelector('a[href="favourites.html"]').textContent =
      favourites;
    document.querySelector('a[href="faq.html"]').textContent = faq;
    document.querySelector('a[href="contact.html"]').textContent = contact;

    const faqSectionTitle = document.querySelector(".faq-section h2");
    if (faqSectionTitle) {
      faqSectionTitle.textContent = questions;
    }
  }

  // Listen for changes in the language selector
  languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  });

  // Initialize with the default language
  changeLanguage("en");
});
