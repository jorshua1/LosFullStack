let impuntual = document.getElementById("erick");
let estudiantes = document.getElementsByClassName("estudiante");
let hambre = document.getElementsByTagName("p");
let claseImpuntual = document.querySelector(".impuntual");
let idHambre = document.querySelector("#hambre");
let estudiante = document.querySelectorAll(".estudiante");

console.log(impuntual);
console.log(estudiantes);
console.log(estudiantes.breinner);
console.log(hambre);
console.log(claseImpuntual);
console.log(idHambre);

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
