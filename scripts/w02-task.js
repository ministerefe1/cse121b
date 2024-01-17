/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullName = `Efe Enahoro`;
const currentYear = new Date().getFullYear();
const profilePicture = `images/efe1.jpg`;


/* Step 3 - Element Variables */
const nameElement = document.querySelector("#name");
const yearElement = document.querySelector("#year");
const foodElement = document.querySelector("#food");


/* Step 4 - Adding Content */
nameElement.textContent = fullName;
yearElement.textContent = currentYear;


/* Step 5 - Array */
let favoriteFood = ["Beans", "Rice", "Cereals", "Cassava", "Yam"];
foodElement.innerHTML = "<br>" + favoriteFood.join("<br>");

