import "./styles.css";
import main from './pages/main.js';
import menu from './pages/menu.js';
import contact from './pages/contact.js';

// Get DOM element for buttons
const buttons = document.querySelector(".tab-list");

// Get DOM element for #content
const contentDiv = document.getElementById("content");

// Add Event Listener for all buttons (capturing method)
buttons.addEventListener("click", loadTabPage);

function loadTabPage(e) {
  let buttonId = e.target.getAttribute("id");

  // tab button logic
  switch (buttonId) {
    case "home":
      contentDiv.textContent = '';
      main();
      break;
    case "menu":
      contentDiv.textContent = '';
      menu();
      break;
    case "contact":
      contentDiv.textContent = '';
      contact();
      break;
  };
};

// Highlight tab when clicked
buttons.addEventListener ("click", addTabCover);

function addTabCover(e) {

  // Get all nav buttons
  const allNavButtons = document.querySelectorAll('.tab-list button');

  // Remove the class attribute from all buttons when button is clicked
  allNavButtons.forEach(button => button.classList.remove("active"));

  // Add active to clicked button
  e.target.classList.add("active");
}

 // Run initial homepage
 main();