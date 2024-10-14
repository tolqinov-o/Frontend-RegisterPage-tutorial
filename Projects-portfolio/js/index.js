import { cards } from "./item.js";

const body = document.querySelector("body"),
    mode = document.getElementById("mode"),
    row = document.querySelector(".row");
let loader = document.getElementById("preloader");

// Scroll Reveal function
ScrollReveal().reveal("section");

// switching mode function
mode.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        mode.src = "./img/sun.png";
    } else {
        mode.src = "./img/moon.png";
    }
});
     
// page loader
window.addEventListener('load', function () {
    loader.style.display = 'none';
});

// Load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(cards);
});

// item cards
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `
        <div class="col">
            <div class="card rounded-3 border-0 bg-transparent">
                <img role="button" src=${item.img} class="img-fluid rounded-3" alt=${item.projectName}>
                <div class="card-body d-flex justify-content-between">
                    <h5 class="card-title">${item.projectName}</h5>
                    <p class="card-text"><a href=${item.projectCode} target="_blank" class="navbar-brand"><ion-icon name="logo-github" class="fs-4 me-3"></ion-icon></a> <a href=${item.projectDemo} target="_blank" class="navbar-brand"><ion-icon name="open-outline" class="fs-4 "></ion-icon></a></p>
                </div>
            </div>
        </div>`;
    });
    displayMenu = displayMenu.join("");
    row.innerHTML = displayMenu;
};