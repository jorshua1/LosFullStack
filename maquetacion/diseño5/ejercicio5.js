let button5 = document.getElementById("button5");
let button10 = document.getElementById("button10")
let button15 = document.getElementById("button15")
let button25 = document.getElementById("button25")
let button50 = document.getElementById("button50")
let reset = document.getElementById("reset");
let text_number =document.querySelector("#text_number");
let text_people =document.querySelector("#text_people");
let result1 = document.querySelector("#text-result1");
let result2 = document.querySelector("#text-result2");
let enter = document.querySelector("#custom");
result1.value = "$ 0.0";
result2.value = "$ 0.0";
function calculo(propina) {
    let text_number = Number(document.querySelector("#text_number").value);
    let text_people = Number(document.querySelector("#text_people").value);
    let reparticion = text_number / text_people;
    let mesero = reparticion * propina;
    result1.value = "$ " + mesero.toFixed(2);
    result2.value = "$ " + reparticion.toFixed(2);
}
button5.addEventListener("click",function(){
    calculo(0.05);
});
button10.addEventListener("click",function(){
    calculo(0.1);
});
button15.addEventListener("click",function(){
    calculo(0.15);
});
button25.addEventListener("click",function(){
    calculo(0.25);
});
button50.addEventListener("click",function(){
    calculo(0.50);
});
enter.addEventListener("keydown",function(){
    let custom = Number(document.querySelector("#custom").value)
    custom=custom*0.01;
    if(event.keyCode===13){
        calculo(custom);
    }
})
reset.addEventListener("click",function(){
    text_number.value="";
    text_people.value="";
    result1.value="$ 0.0";
    result2.value="$ 0.0";
})