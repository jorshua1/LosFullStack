function suma(a,b) {
    return a+b
}
console.log(suma(5,5));//Par e Impaar
do {
    var numero = prompt("Ingrese un número de valor Entero Positivo \nSi desea finalizar el programa ingrese la palabra salir")
    alert(parImpar(numero))
  
    function parImpar(numero) {
      if (Number.isSafeInteger(parseFloat(numero)) && parseInt(numero) >= 0) {
        if (numero % 2 === 0) {
          return "El número " + numero + " es par";
        }
        else { return "El número " + numero + " es impar"; }
      } if (numero === "salir") {
        return "adios";
      }
      return (numero + " No es un caracter valido, intente nuevamente");
      

    }
  }while (numero !== "salir");ñ