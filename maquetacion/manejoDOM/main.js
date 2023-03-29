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