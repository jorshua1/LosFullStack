
let imputual = document.getElementById("erick");
let estudiantes = document.getElementsByClassName("estudiantes")
let hambre = document.getElementsByTagName("p")
let claseimpuntual = document.querySelector(".impuntual")
let hambreid = document.querySelector("#hambre")
let students = document.querySelectorAll(".estudiantes")
let cuerpo = document.getElementsByTagName("body")[0]
let listatareas = document.getElementById("listaTareas")



for (let index = 0; index < students.length; index++) {
   if (!students[index].className.includes("impuntual")) {
      students[index].style.background = "yellow";
      students[index].style.color = "black";
      students[index].style.padding = "10px";
      students[index].style.borderRadius = "25px"
      students[index].style.boxShadow = "1px 1px 10px 1px rgba(255,255,0)"
   }

}


let tareas = ["despertar", "comer", "bañarse", "lavarse la boca", "trabajar", "almorzar", "trabajar", "comer", "dormir"]

for (let index = 0; index < tareas.length; index++) {
   let tarea = document.createElement("li")
   tarea.innerHTML = tareas[index];
   listatareas.append(tarea);
   tarea.setAttribute('class', 'tarea')
}





hambreid.remove()
const div = document.createElement('div');

console.log(listatareas.childNodes);

cuerpo.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";

let capturainput = document.getElementById("nombre");
console.log(capturainput);
capturainput.value = "manuel";

let boton1 =document.getElementById("boton1")


//let mensaje =()=>alert("mensaje atravez de eventos");
function alerta(){
   alert("alerta")
}

   boton1.addEventListener("click",alerta)

//mouse over
let boton3=document.getElementById("boton3")
function cambiar(){
   boton3.style.backgroundColor="blue";
   boton3.style.color="black";
   boton3.style.border="black"
}

boton3.addEventListener("mouseover",cambiar)

function estadoantes() {
   boton3.style.backgroundColor="transparent";
   boton3.style.color="white"
   boton3.style.border="1px solid white";
}

boton3.addEventListener("mouseleave",estadoantes)
