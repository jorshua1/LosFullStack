// alert("Iniciando html");

let impuntual = document.getElementById("Jorshua");

let estudiante = document.getElementsByClassName("estudiante");

let hambre = document.getElementsByTagName("p");

let claseImpuntual = document.querySelector(".impuntual");

let idHambre = document.querySelector("#hambre");

let estudiantes = document.querySelectorAll(".estudiante");

// console.log(impuntual);
// console.log(estudiante);
// console.log(estudiante.Breinner);
// console.log(hambre);
// console.log(claseImpuntual);
// console.log(idHambre);

idHambre.style.backgroundColor = "#ffc300";
idHambre.style.width = "250px";
idHambre.style.padding = "20px";
idHambre.style.border = "4px solid black";
idHambre.style.borderRadius = "25px";
idHambre.style.color = "black";

for (let i = 0; i < estudiantes.length; i++) {
  if (estudiante[i].className.includes("impuntual")) {
    estudiante[i].style.backgroundColor = "#ffc300";
    estudiante[i].style.border = "4px solid black";
    estudiante[i].style.color = "black";
  } else {
    estudiante[i].style.color = "#ffc300";
  }
}
// const body = document.getElementsByTagName("body")[0];
// console.log(body);
document.getElementsByTagName("body")[0].style.fontFamily =
  "Verdana,sans-serif";

let listaTareas = document.getElementById("listaTareas");
let tareas = [
  "Despertar",
  "cepillarse",
  "Comer",
  "bañarse",
  "trabajar",
  "almorzar",
  "trabajar",
  "comer",
  "dormir",
];

for (let i = 0; i < tareas.length; i++) {
  let tarea = document.createElement("li");
  let texto = tareas[i];
  tarea.innerHTML = texto;
  listaTareas.append(tarea);
  tarea.setAttribute("class", "tarea");
}

idHambre.remove();

// Capturando datos de un input
let nombre = document.querySelector("#nombre");
nombre.value = "jorshua";
console.log(nombre);

// Captura de eventos
// onclick
let boton2 = document.getElementById("boton2");
let mensaje = () => alert("yo por ahora no tengo hambre");
boton2.addEventListener("click", mensaje);

// mouseover
let boton3 = document.querySelector("#boton3");
function cambiarEstiloBoton() {
  boton3.style.backgroundColor = "tomato";
  boton3.style.color = "white";
  boton3.style.border = "white";
}
function restablecerBoton() {
  boton3.style.backgroundColor = "#415a77";
  boton3.style.color = "#83c5be";
  boton3.style.border = "2px solid #83c5be";
}
boton3.addEventListener("mouseover", cambiarEstiloBoton);
boton3.addEventListener("mouseleave", restablecerBoton);

let card = document.querySelector(".fondo");
let aumentarFondo = () => {
  card.style.backgroundSize = "150%";
  card.style.backgroundPosition = "center";
  card.style.transition = ".4s";
};
let restablecerFondo = () => {
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";
  card.style.transition = ".4s";
};
card.addEventListener("mouseover", aumentarFondo);
card.addEventListener("mouseleave", restablecerFondo);

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

let procedimiento = (porcentaje, valor) => {
  let calculoTip = (valor * porcentaje) / 100;
  alert(
    `oprimio el boton de ${porcentaje}% para un valor de ${valor} la propina es de ${calculoTip}`
  );
};
btn1.addEventListener("click", function () {
  procedimiento(5, 100000);
});

btn2.addEventListener("click", () => procedimiento(10, 100000));
btn3.addEventListener("click", () => procedimiento(15, 100000));
 