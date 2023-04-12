let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");


let procedimiento =(porcentaje, valor)=>{
    let personas = Number(document.getElementById("personas").value);
    let calculo= (valor*(porcentaje/100))/personas;
    return calculo;
}

function actualizarcampos(valortotal, valortip){
    document.getElementById("total").value = "$" + valortotal.toFixed(2)
    document.getElementById("tip").value = "$" + valortip.toFixed(2)
}
function propina(porcentaje){
    let valor= parseFloat(document.getElementById("money").value);
    let personas= parseInt(document.getElementById("personas").value);

    let tip = procedimiento(porcentaje,valor);
    let total= (tip+(valor/personas)) ;
    actualizarcampos(total,tip);
}
btn1.addEventListener("click", ()=> propina(5)); 
btn2.addEventListener("click", ()=> propina(10));
btn3.addEventListener("click", ()=> propina(15));  
btn4.addEventListener("click", ()=> propina(25)); 
btn5.addEventListener("click", ()=> propina(50)); 
