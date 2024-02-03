

/* LESSON 3 - Programming Tasks */

/* Profile Object  */
/* Populate Profile Object with placesLive objects */
const myProfile = {
    name: "Efe Enahoro",
    photo: {
        src: "images/efe1.jpg",
        alt: "Profile Picture"
    },
    favoriteFoods: [
        'Rice', 'Ukodo',
        'Banga Soup',
        'Beans and Dodo'
    ],
    hobbies: [
        'Coding',
        'Dancing',
        'Bible Reading',
        'Travelling'
    ],
    placesLived: [
        {place: 'London UK', years: 3}, 
        {place: 'Manchester UK', years: 5},
        {place: 'Lagos Nigeria', years: 40}
    ],

};

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerHTML = `My name is <em>${myProfile.name}</em>`;


/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.photo.alt;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach (item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#favorite-foods").appendChild(li);
})


/* Hobbies List */
myProfile.hobbies.forEach (item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(item => {
    let place = item.place;
    let years = item.years;
    let li = document.createElement("li");
    li.textContent = `Lived in ${place} for ${years} years`;
    document.querySelector("#places-lived").appendChild(li);
});
/* Hobbies List */


/* Places Lived DataList */


