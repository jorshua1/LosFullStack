
let imputual = document.getElementById("erick");
let estudiantes = document.getElementsByClassName("estudiantes")
let hambre=document.getElementsByTagName("p")
let claseimpuntual=document.querySelector(".impuntual")
let hambreid=document.querySelector("#hambre")
let students=document.querySelectorAll(".estudiantes")
let cuerpo=document.getElementsByTagName("body")[0]

for (let index = 0; index < students.length; index++) {
   if(!students[index].className.includes("impuntual")){
    students[index].style.background="yellow";
    students[index].style.color="black";
    students[index].style.padding="10px";
    students[index].style.borderRadius="25px"
    students[index].style.boxShadow="1px 1px 10px 1px rgba(255,255,0)"
   }
    
}

const div =document.createElement('div');




cuerpo.style.fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif";