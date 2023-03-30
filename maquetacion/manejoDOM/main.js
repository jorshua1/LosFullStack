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
let tarea = document.createElement("li");
let tareas = [
  "Despertar",
  "comer",
  "hacer cosas x",
  "almorzar",
  "trabajar",
  "morir",
];

for(let i=0; i<tareas.length; i++){
  let tarea = document.createElement("li");
  let texto=tareas[i];
  tarea.innerHTML=texto;
  listaTareas.append(tarea);
  tarea.setAttribute("class", "tarea")
}

