/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");

let templeList = [];

/* async displayTemples Function */
const displayTemples = temples => {
    temples.forEach(temple => {
        const article = document.createElement("article");

        // Create an h3 element
        const h3Element = document.createElement("h3");
        // Add the temple's name to the h3 element
        h3Element.textContent = temple.templeName;

        // Create an image element
        const imgElement = document.createElement("img");
        // Add the temple's image url property to the src attribute
        imgElement.src = temple.imageUrl;
        // Add the temple's location property to the alt attribute
        imgElement.alt = temple.location;

        // Append the h3 element to the article element
        article.appendChild(h3Element);
        // Append the image element to the article element
        article.appendChild(imgElement);
        // Append the article element to the temples element
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json(); 
    // calling displayTemples function and passing templeList as an argument
    displayTemples(templeList);
}

/* reset Function */
function reset() {
    templesElement.innerHTML = ''; // Clear templesElement
}

/* filterTemples Function */
/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById("filtered").value;

    switch(filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case "alphabetical":
            displayTemples(temples.slice().sort((a, b) => a.templeName.localeCompare(b.templeName)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList); });

console.log(templeList)