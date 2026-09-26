

const titulo = document.querySelector("h1");

titulo.addEventListener("mouseover", function () {
    titulo.textContent = "Descubre la historia del Sol";
});

titulo.addEventListener("mouseout", function () {
    titulo.textContent = "Una historia del Sol";
});



window.onload = function () {
    console.log("Bienvenido a Una Historia del Sol");
};