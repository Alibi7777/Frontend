### Project Description

The project is a website for an Electronics Shop, where users can browse frequently asked questions, explore products, and manage their shopping experience. The website aims to provide a smooth user experience with features like a dynamic FAQ section, language selection, a shopping cart, and a contact form. It is built using HTML, CSS, and JavaScript, with JavaScript used extensively to add interactivity, manage user preferences, and handle user events.

### Key Features

1. Dynamic FAQ Section:

   - The FAQ page dynamically displays questions and answers using JavaScript. The answers are initially hidden and are shown when a user clicks on a question. The FAQ data is stored in a JavaScript array and rendered dynamically onto the page.
   - Toggle functionality is implemented to show or hide answers, making the user experience interactive.

2. Language Selector:

   - Users can select their preferred language (English, Russian, or Kazakh) using a language dropdown. The website content updates accordingly based on the user's language selection.
   - The language selection is managed through a switch statement in JavaScript, which updates the text content of various elements on the page according to the selected language.

3. Interactive Navigation:

   - A header with navigation links allows users to easily access different sections of the website, such as Home, Cart, Favourites, FAQ, and Contact Us.
   - The active page is visually highlighted to help users identify their current location within the website.

4. User Preferences Management:

   - The selected language preference is maintained using JavaScript. Future enhancements can include saving preferences in the browser's localStorage to persist the user's settings across sessions.

5. Contact Form with Asynchronous Submission:

   - The website includes a contact form that allows users to submit queries. The form is processed asynchronously using the Fetch API, allowing for a seamless experience without page reloads.
   - The form validation ensures that all required fields are filled correctly before submission.

6. Responsive Design:

   - The website is styled to be responsive, ensuring a consistent user experience across different devices, including desktops and mobile phones.

7. Sound Effects:

   - JavaScript is used to trigger sound effects (e.g., a click sound) when users interact with certain elements like buttons, enhancing the interactivity of the website.

8. Animations and Transitions:
   - The website uses smooth transitions and animations for various elements, such as hovering effects on buttons and expanding/collapsing FAQ answers.

### How User Preferences Are Managed

- Language Selection: The language preference is managed through the JavaScript language-switcher.js script. The selected language is applied across the website, and user interactions (such as selecting a different language) update the content dynamically.
- Interactive FAQ Display: The state of the FAQ (expanded or collapsed) is managed using JavaScript event listeners. The content is shown or hidden based on user clicks, providing a personalized browsing experience.
- Form Validations: User inputs in forms are validated using JavaScript to ensure correct data is submitted. This improves the quality of user interactions and helps prevent errors.

In summary, the project combines front-end technologies to create an interactive and user-friendly website, with a focus on dynamic content rendering, user preference management, and responsive design.
