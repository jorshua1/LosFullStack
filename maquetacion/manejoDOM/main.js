// alert("Ingresando al archivo HTML");

let impuntual = document.getElementById("Breinner");
let estudiante = document.getElementsByClassName("estudiante");
let hambre = document.getElementsByTagName("p");
let claseImpuntual = document.querySelector(".impuntual");
let idhambre = document.querySelector("#hambre");
let estudiantes = document.querySelectorAll(".estudiante");
console.log(impuntual);
console.log(estudiante);
console.log(estudiante.Breinner);
console.log(hambre);
console.log(claseImpuntual);
console.log(idhambre);
console.log(estudiantes);

for (let i = 0; i < estudiantes.length; i++) {
  if (estudiantes[i].className.includes("impuntual")) {
    estudiante[i].style.backgroundColor = "#fffc30";
    estudiante[i].style.color = "#000";
    estudiante[i].style.border = "4px solid black";
  } else {
  }
  estudiante[i].style.color = "#0ff";
}
idhambre.style.backgroundColor = "#fffc30";
idhambre.style.width = "250px";
idhambre.style.padding = "25px";
idhambre.style.border = "4px solid black";
idhambre.style.borderRadius = "25px";
idhambre.style.color = "#000";

// const body = document.getElementsByTagName("body")[0];
// console.log(body);
document.getElementsByTagName("body")[0].style.fontFamily =
  "Verdana, sans-serif";

// let listaTareas = document.getElementById("listaTareas");
let tarea = document.createElement("li");
let tareas = [
  "Despertar",
  "cepillarese",
  "comer",
  "bañarse",
  "trabajar",
  "almorzar",
  "trabajar",
  "comer",
  "dormir"
];


for (let i = 0; i < tareas.length; i++) {
    let tarea = document.createElement("li"); //crear un nuevo elemento en cada ciclo 
    tarea.innerText = tareas[i];
    listaTareas.appendChild(tarea);
    tarea.setAttribute("class", "tarea")
  }

idhambre.remove();

//capturando datos de un input
let nombre= document.querySelector("#nombre");
nombre.value="Breinner";
console.log(nombre);

//captura de eventos
let boton2 = document.getElementById("boton2");
let mensaje =() => alert("yo no tengo hambre prro");
boton2.addEventListener("click", mensaje);

//mouseover
let boton3 = document.querySelector("#boton3");
function cambiarEstiloBoton(){
  boton3.style.backgroundColor="tomato";
  boton3.style.color="#1c003c;"
  boton3.style.border="3px solid #5c004c;"
} 
function restablecerBoton(){
  boton3.style.backgroundColor="aquamarine";
  boton3.style.color="#1c003c;"
  
}
boton3.addEventListener("mouseover", cambiarEstiloBoton);
boton3.addEventListener("mouseleave", restablecerBoton);