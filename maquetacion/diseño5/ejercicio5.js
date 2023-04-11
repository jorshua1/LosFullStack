let button5 = document.getElementById("button5");
let button10 = document.getElementById("button10")
let button15 = document.getElementById("button15")
let button25 = document.getElementById("button25")
let button50 = document.getElementById("button50")
let reset = document.getElementById("reset");
let result1=document.querySelector("#text-result1");
console.log(result1);
// document.getElementById("text_result2");
let number = 0;
var propina = 0;


function calculadora() {
    var text_number = Number(document.querySelector("#text_number").value);
    var text_people = Number(document.querySelector("#text_people").value);
    var reparticion = text_number*text_people
    result1.value = "$"+reparticion;
}
button5.addEventListener("click", calculadora)




