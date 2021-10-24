let btn = document.getElementById("btn");
let container = document.getElementById("container");
let text = document.getElementById("text");

function toggleDark() {
    btn.classList.toggle("dark");
    container.classList.toggle("containerDark");
    text.classList.toggle("textColor");
}