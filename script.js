function element(e) {
    return document.querySelector(e);
}

function elements(e) {
    return document.querySelectorAll(e);
}

// Triggers
const hamburger = element(".hamburger");
const navbar = element("#navbar");
const overlay = element(".mobile-overlay");

hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle("show-nav");
    overlay.classList.toggle("show-overlay");
    
    if (navbar.classList.contains("show-nav")) {
        hamburger.setAttribute("src", "images/icon-close.svg");
    } else {
        hamburger.setAttribute("src", "images/icon-hamburger.svg");
    } 
});