alert("Ingresando al archivo html");

let impuntual = document.getElementById("Erick")

let estudiante = document.getElementsByClassName("estudiante");

let hambre = document.getElementsByTagName("p")

let claseImpuntual = document.querySelector(".impuntual")

let idhambre = document.querySelector("#hambre")

let estudiantes = document.querySelectorAll(".estudiante");

console.log(impuntual);
console.log(estudiante);
console.log(estudiante.Breinner);
console.log(hambre)
console.log(claseImpuntual)
console.log(idhambre)
console.log(estudiantes);


idhambre.style.backgroundColor = "#ffc300";
idhambre.style.width = "250px";
idhambre.style.padding = "20px";
idhambre.style.border = "4px solid black";
idhambre.style.borderRadius = "25px";
idhambre.style.color = " black";


//const body = document.getElementById("body")[0];
//console.log(body);

document.getElementsByTagName("body")[0].style.fontFamily= "Verdana,sans-serif";


for (let index = 0; index < estudiantes.length; index++) {
    if(estudiantes[index].className.includes("impuntual")){
estudiantes[index].style.backgroundColor="yellow";
estudiantes[index].style.color="black"
    }
    
}

let listaTareas = document.getElementById("listaTareas");
let tarea = document.createElement("li");
let tareas = ["Despertar","Cepillarse", "Comer", "Bañarse", "Trabajar", "Almorzar", "Trabajar", "Comer", "Dormir"]

/*console.log(tareas)
console.log(listaTareas.innerText)
console.log(listaTareas.textContent)
console.log(listaTareas.innerHTML)*/


for(let i = 0; i<tareas.length; i++) {
    let tarea = document.createElement("li");
    let texto = tareas[i]
    tarea.innerHTML = texto;
    listaTareas.append(tarea);
    tarea.setAttribute("class", "tarea")
}

idhambre.remove()


//capturando datos de un input

let nombre = document.querySelector("#nombre")
nombre.value= "Yuli";
console.log(nombre)


//captura de evento
//onclick
let boton2 = document.getElementById("boton2")
let mensaje = () => alert("yo ahora no tengo hambre");
boton2.addEventListener("click", mensaje);

//mouseover
let boton3 = document.querySelector("#boton3")
function cambiarEstiloBoton(){
    boton3.style.backgroundColor = "black"
    boton3.style.color = "white"
    boton3.style.border = "white"
}
function restablecerBoton(){
    boton3.style.backgroundColor = "rgb(255, 255, 255)";
    boton3.style.color = "black"
    boton3.style.border =" 1px black"
}
boton3.addEventListener("mouseover", cambiarEstiloBoton);
boton3.addEventListener("mouseleave", restablecerBoton);