//alert("iniciando html")
//DOOM JAVASCRIPT
let puntual = document.getElementById("adrian");
let estudiante = document.getElementsByClassName("estudiante");
let hambre = document.getElementsByTagName("span");
let classpuntual = document.querySelector(".estudiantepuntual");
let idhambre = document.querySelector("#hambre");
let estudiantes = document.querySelectorAll(".estudiante");

console.log(puntual);
console.log(estudiante);
console.log(estudiante.couch);

console.log(hambre);
console.log(classpuntual);
console.log(idhambre);
console.log(estudiantes);
idhambre.style.backgroundColor = "yellow";
idhambre.style.width = "250px";
idhambre.style.padding = "20px";
idhambre.style.border = "4px solid black";
idhambre.style.borderRadius = "25px";
idhambre.style.color = "black";

puntual.style.backgroundColor = "yellow";
puntual.style.width = "150px";
puntual.style.padding = "20px";
puntual.style.border = "4px solid black";
puntual.style.borderRadius = "25px";
puntual.style.color = "black";

for (let i = 0; i < estudiantes.length; i++) {
  if (estudiantes[i] !== getElementsByClassName.include(puntual)) {
    estudiantes.style.fontColor = "yellow";
  }
}

//otra forma de acceder al una etiquetaconst body =document.getElementsByTagName("body" [0])
document.getElementsByTagName("body"[0]).style.fontFamily = "verdana";

let idTareas = document.getElementById("listaTareas");
// creacion de elsemento de html con javascript
let tareas = document.createElement("li");
//nos sirve para insertar elementos dentro de la variable que estan llamadas
idTareas.append(tareas);
//trae el texto que tenga dentro
console.log(idTareas.innerText);
//trae el centenido en texto asi este vacio o no
console.log(idTareas.textContent);
//trae las etiquetas que estan dentro de el
console.log(idTareas.innerHTML);
//
let tareasDiarias = ["despertar", "cepillarse", "trabajar", "almozar", "comer"];
for (let i = 0; i < tareasDiarias.length; i++) {
  let tareasDiarias = document.createElement("li");
  let texto = tareasDiarias[i];
  tareasDiarias.innerText = texto;
  idTareas.append(tareasDiarias);
  tareasDiarias.setAttribute("class", "tareas");
}

idhambre.remove();

//escuchas de eventos
// capturando datosd de input o cambiar el contenido de un input
let nombre = document.getElementById("#nombre");
nombre.value = "erick";
console.log(nombre);
//captura de evento
let boton2 = document.getElementById("boton2");
let mesajeBo = () => alert("estoy es una captura de eventos");
boton2.addEventListener("click", mesajeBo);

//mouseover

let boton3 = document.querySelector("#boton3");
function cambiarEstilo() {
  boton3.style.backgroundColor = "rgb(240, 149, 79)";
}
function Normal() {
  boton3.style.backgroundColor = "rgb(223, 196, 176)";
}
boton3.addEventListener("mouseover", cambiarEstilo);
boton3.addEventListener("mouseleave", Normal);
