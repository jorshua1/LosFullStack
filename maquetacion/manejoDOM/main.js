// alert("Iniciando html");

let impuntual = document.getElementById("Jorshua");

let estudiante = document.getElementsByClassName("estudiante");

let hambre = document.getElementsByTagName("p");

let claseImpuntual = document.querySelector(".impuntual");

let idHambre = document.querySelector("#hambre");

let estudiantes = document.querySelectorAll(".estudiante");

console.log(impuntual);
console.log(estudiante);
console.log(estudiante.Breinner);
console.log(hambre);
console.log(claseImpuntual);
console.log(idHambre);
console.log(estudiantes);

// impuntual.style.backgroundColor= "#ffc300";

idHambre.style.backgroundColor = "#ffc300";
idHambre.style.width = "250px";
idHambre.style.padding = "20px";
idHambre.style.border = "4px solid black";
idHambre.style.borderRadius = "25px";
idHambre.style.color = "black";

for (let i = 0; i < estudiantes.length; i++) {
  if (estudiantes[i].className.includes("impuntual")) {
    estudiante[i].style.backgroundColor = "#ffc300";
    estudiante[i].style.border = "4px solid black";
    estudiante[i].style.color = "black";
  } else {
    estudiantes[i].style.color = "#ffc300";
  }
}

document.getElementsByTagName("body")[0].style.fontFamily =
  "Verdana, sans-serif";

let listaTareas = document.getElementById("listaTareas");
let tarea = document.createElement("li");

let tareas = [
  "despertarse",
  "cepillarse",
  "comer",
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
  tarea.setAttribute("class", "tarea")
}

idHambre.remove()

// captura de eventos
// onclick
let boton3 = document.getElementById("boton3");
let mensaje = () => alert("no kismi wakala");
boton3.addEventListener("click", mensaje);

// mouseover
 
let boton2 = document.querySelector('#boton2')
function cambiarEstiloBoton(){
  boton2.style.backgroundColor ="black"
  boton2.style.color="white"
  boton2.style.border="2px solid red"
}
function reestablecerBoton(){
  boton2.style.backgroundColor="#03418d";
  boton2.style.color="#5FA9D6";
  boton2.style.border="none" 
}

boton2.addEventListener("mouseover", cambiarEstiloBoton);
boton2.addEventListener("mouseleave", reestablecerBoton);

let card = document.querySelector(".fondo");
let aumentarFondo