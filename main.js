alert("Ingresando al archivo html");

let impuntual= document.getElementById("Erick");
console.log(impuntual);

let estudiantes = document.getElementsByClassName("estudiante");
console.log(estudiantes);
console.log(estudiantes.Jorshua);

let hambre = document.getElementsByTagName("p")
console.log(hambre);

let claseImpuntual= document.querySelector(".impuntual");
console.log(claseImpuntual);

let idHambre= document.querySelector("#hambre")
console.log(idHambre);

let estudiante = document.querySelectorAll(".estudiante");
console.log(estudiante);

idHambre.style.backgroundColor = "#fffc30";
idHambre.style.width = "250px";
idHambre.style.padding = "25px";
idHambre.style.border = "#4px solid black";
idHambre.style.borderRadius = "25px";
idHambre.style.color = "#000";

for(let i=0; i<estudiante.length; i++){
    if(estudiante[i].className.includes("impuntual")){
        estudiante[i].style.backgroundColor = "#fffc30"
        estudiante[i].style.color = "#000"
        
    }else{estudiante[i].style.color="#08f"}
}



document.getElementsByTagName("body")[0].style.fontFamily ="Verdana"


