/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Efe Enahoro";
const currentYear = new Date().getFullYear();
const profilePicture = "images/efe1.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.textContent = fullName;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. He is currently a student of BYUI`);

/* Step 5 - Array */
let favoriteFood = ["Beans", " Rice", " Cereals", " Chicken", " Ukodo", " Cassava", " Yam"];
document.getElementById("food").innerHTML = favoriteFood;



// // function gpaponits(grade) {
// //     let gpaponits = 0;
// // }
// // switch (grade) {
// //     case "A":
// //         gpaponits = 4;
// //         break;
// //     case "B":
// //         gpaponits = 3;
// //         break;
// //     case "C":
// //         gpaponits = 2;
// //         break;
// //     default:
// //         gpaponits = -1;
// //     return gpaponits;
// // }

// // console.log(gpaponits("A"))
// // console.log(gpaponits("B"))
// // console.log(gpaponits("C"))
// // console.log(gpaponits("X"))


// // //Alternatively =
// // function gpaponits(grade) {
// //     let gpaponits = 0;
// //     if (grade==="A") {
// //         gpaponits = 4;
// //     }
// //     else if (grade==="B") {
// //         gpaponits = 3;
// //     }
// //     else if (grade==="C") {
// //         gpaponits = 2;
// //     }
// //     else {
// //         gpaponits = -1;
// //     }
// //     return gpaponits;
// // }
// // console.log(gpaponits("A"))
// // console.log(gpaponits("B"))
// // console.log(gpaponits("C"))
// // console.log(gpaponits("X"))


