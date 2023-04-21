let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let reglas = document.querySelector(".subcontenedor3");

boton1.addEventListener("click", () => {
  reglas.style.display = "block";
});

boton2.addEventListener("click", () => {
  reglas.style.display = "none";
});

let subboton1 = document.querySelector("#subboton1");
let subboton2 = document.getElementById("subboton2");
let regla = document.querySelector("#caja-reglas");

subboton1.addEventListener("click", function () {
  regla.style.left = "660px";
});

boton2.addEventListener("click", () => {
  regla.style.display = "none";
});
