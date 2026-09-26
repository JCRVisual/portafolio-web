function saludar() {
  alert("Estas visitando mi portafolio. Muchas Gracias");
}
const modo = document.getElementById("modo");
modo.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
  if (document.body.classList.contains("oscuro")) {
    modo.textContent = "Modo claro";
  } else {
    modo.textContent = "Modo oscuro";
  }
});
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  document.getElementById("respuesta").textContent =
    "Gracias por contactarme, " + nombre + ". Revisaré tu mensaje.";
  formulario.reset();
});
