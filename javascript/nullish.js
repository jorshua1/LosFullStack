let nulo = null;
let xd = 10;
//Si la variable nulo es null o undefined entonces tomara el valor de la variable que se encuentra a la derecha
console.log(nulo ?? xd);

// Lo de arriba se puede entender de la siguiente forma
resultado = nulo !== null && nulo !== undefined ? nulo : xd;
console.log(resultado);

//? El siguiente ejemplo explica que si en dado caso el dato no esta nulo o indefinido la asignacion queda con el dato original
let nombre = "Juan"
let acceso = (nombre ?? "Admin")

console.log(acceso);

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

/* 
    ! Se ejecuta de la siguiente manera
    1. verifica si firstName es nulo y en caso de serlo, se le asigna el valor que posee lastName
    2. Verifica si lastName es nulo y en caso de serlo se le asigna el valor que posee nickName
    3. Verifica si nickName es nulo y en caso de serlo se le asigna el valor de "Anonymous"


    ?Lo que sucede en la ejecucion de js
    firstName = null => se asigna el valor de lastName
    lastName = null => se asigna el valor de nickName
    nickName al tener valor finaliza la comparativa y asigna el valor que posee a la variable o operacion que se este ejecutando
*/


console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

//? Algo por anotar es que podemos reemplazar el operador ?? por el operador || pero con la diferencia es que con el operador or devuelve como valor el que sea o cumpla verdadero en cambio el nullish devuelve como valor el valor que tenga predefinido

let height = 0

console.log(height || 100);
console.log(height ?? 100);

// cualquier variable en 0 que se compare con otro valor devolvera false en cambio con el nullish devolvera el primer valor definido en este caso el 0 que ya se habia declarado
