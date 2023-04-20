let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let reglas = document.querySelector(".subcontenedor3")

boton1.addEventListener('click', ()=>{
    reglas.style.display="block"
})

boton2.addEventListener('click',()=>{
    reglas.style.display="none"
});