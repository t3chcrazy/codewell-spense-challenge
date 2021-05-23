const hamButton = document.getElementById("menu");
const menu = document.getElementsByClassName("navMenu")[0];
const overlay = document.getElementById("overlay");

hamButton.addEventListener("click", function() {
    menu.classList.add("expand");
    overlay.classList.add("show");
});
overlay.addEventListener("click", function() {
    menu.classList.remove("expand");
    overlay.classList.remove("show");
});