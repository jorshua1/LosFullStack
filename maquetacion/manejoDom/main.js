let impuntual = document.getElementById("erick");
let estudiantes = document.getElementsByClassName("estudiante");
let hambre = document.getElementsByTagName("p");
let claseImpuntual = document.querySelector(".impuntual");
let idHambre = document.querySelector("#hambre");
let estudiante = document.querySelectorAll(".estudiante");

//console.log(impuntual);
//console.log(estudiantes);
//console.log(estudiantes.breinner);
//console.log(hambre);
//console.log(claseImpuntual);
//console.log(idHambre);

impuntual.style.backgroundColor = "#ffc303";
impuntual.style.border = " 4px solid black";
impuntual.style.color = "black";

const body = document.getElementsByTagName("body")[0];
console.log(body);
body.style.fontFamily = "verdana,sans-serif";

for (i = 0; i < estudiantes.length; i++) {
  if (estudiantes[i].className.includes("impuntual")) {
    estudiantes[i].style.backgroundColor = "#ffc303";
    estudiantes[i].style.border = " 4px solid black";
    estudiantes[i].style.color = "black";
  } else {
    estudiantes[i].style.color = "#ffc303";
  }
}

let listaTareas = document.getElementById("listaTareas");
let tareas = [
  "despertar",
  "comer",
  "bañarse",
  "trabajar",
  "almorzar",
  "trabajar",
  "comer",
  "dormir",
];
for(let i=0; i<tareas.length; i++){
  let tarea = document.createElement("li");
  let texto = tareas[i];
  tarea.innerHTML=texto;
  listaTareas.append(tarea);
  tarea.setAttribute("class","tarea");
}

//console.log(listaTareas.innerText);
idHambre.remove()

let nombre = document.getElementById("nombre");
nombre.value="jenifer"
console.log(nombre);

let boton2= document.getElementById("boton2");
let mensaje = () => alert("ya no");
boton2.addEventListener("click", mensaje);

let boton3 =document.getElementById("boton3");

function cambiarBoton(){
  boton3.style.backgroundColor="black";
  boton3.style.color="white";
}
function restablecerBoton(){
  boton3.style.backgroundColor="white";
  boton3.style.color= "black";
}

boton3.addEventListener("mouseover", cambiarBoton );
boton3.addEventListener("mouseleave", restablecerBoton);