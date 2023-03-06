// Objetos

//? formas de crear objetos
// let user = new Object(); //Sintaxis del constructor de objetos
let anotherUser = {}; // Usando el literal de objeto

let user = {
  // un objeto
  name: "John", // En la clave "name" se almacena el valor "John"
  age: 30, // En la clave "age" se almacena el valor 30
};

//! para eliminar una propiedad de un objeto usamos delete seguido la propiedad a eliminar del objeto
delete user.age;

//* creando una funcion la cual devolvera un objeto
function creacionUsuario(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    acceso: true,
    adulto: edad > 18 ? true : false,
  };
}

let usuarioUno = creacionUsuario("Jorshua", 28);
console.log(usuarioUno.adulto);

let usuarioDos = usuarioUno;
console.log(usuarioDos.nombre);

let usuarioTres = creacionUsuario("goffy", 38);
console.log(usuarioTres);

//* si creamos un objeto por medio de una funcion y asignamos el nombre de la clave como el mismo nombre del parametro de la funcion podemos hacerlo de la siguiente manera

function makingUser(nombre, edad) {
  return {
    nombre,
    edad,
    acceso: true,
    adulto: edad > 18 ? true : false,
  };
}

let usuarioCuatro = makingUser("brendan", 38);
console.log(usuarioCuatro);

//! Probar que una clave existe en un objeto
// Tomemos en cuenta que ya tenemos varios objetos

//* para saber si una clave existe en el objeto usamos el operador especial "in"
console.log("edad" in usuarioCuatro);

// la clave no necesariamente debe tener un valor

//! Iterando un objeto con un bucle for...in
// para recorrer las claves de un objeto usamos una forma especial llamada for in
//* for(key in object){
     //* Ejecuta algo para cada clave
//* }

for(key in usuarioCuatro){
    console.log(`${key} contiene el valor de : ${usuarioCuatro[key]}`);
}


//! para tener en cuenta
//* Hay muchos tipos de objetos en javascript
// Array: para almacenar colecciones de datos ordenados
// Date: para almacenar informacion sobre fecha y hora
// Error: para almacenar informacion sobre un error

//? para saber si un objeto no tiene claves, debemos usar isEmpty("objeto")

//! Referencias a objetos 
// Cuando hacemos lo siguiente
let nuevoUsuario = usuarioUno;
// Basicamente estamos pasandole la referencia del objeto almacenado en memoria a la variable nuevoUsuario pero no estamos copiando el objeto como si lo hariamos con los tipos de datos primitivos

// * mas claro
let userx = { name: "John" };
let admin = userx; // copia la referencia

// si intentamos cambiar el valor de la clave name de la referencia admin estariamos alterando la referencia mas no el objeto
userx = { name: 'John' };
admin = userx;
admin.name = 'Pete'; // cambiado por la referencia "admin"
console.log(userx.name); // 'Pete', los cambios se ven desde la referencia "user"


//! Clonacion, mezcla usando Object.assign
// Si quisieramos duplicar un objeto como lo podriamos hacer evitando hacer solo una referencia
const brute = (nombre, agresivo) => {
    return {nombre, agresivo}
}

let bruteUno = brute("atriox", true);
console.log(bruteUno);

//* ahora tenemos un objeto llamado bruteUno pero quiero copiar el contenido del objeto en bruteClone
let bruteClone = {} //Creo una variable con el literal de objeto
// Seguido de eso usamos el iterador for in para iterar el objeto a clonar y asignando la clave y valor como se explica en el codigo siguiente
for(let key in bruteUno){
    bruteClone[key] = bruteUno[key]
}
bruteClone.nombre="atrioxClon"
console.log(bruteClone);

//* otra forma mas facil de clonar objetos es usando el metodo Object.assign
// la sintaxis es:
// Object.assign(dest, ...origen[claves])

let bruteDos = {}
Object.assign(bruteDos, [bruteClone, userx])
console.log(bruteDos)
bruteDos[0].nombre = "Chak'lok"
console.log(bruteDos)

//? tambien podemos hacer lo siguiente
let bruteTres = Object.assign({}, bruteUno)
bruteTres.nombre = "Okkro vagaduuun"
console.log(bruteTres);

// Otro objeto mas
let john117 = {
    nombre: "John",
    clase: "spartan",
    stats:{
        velocidad:"30 km",
        salto: "2 mts",
        fuerza: "1k kg/psi"
    }
}

// clonando objetos anidados
// si clono a john117 en otra variable el objeto anidado no se clonara sino que pasara la referencia segun entendi mal entonces hagamos la copia

let linda108 = Object.assign({}, john117);
console.log(linda108)
linda108.stats.velocidad=80; //Modificamos el valor de velocidad para ver si afecta el obj o la referencia
console.log(john117)
// como se puede ver, efectivamente solo se copio el objeto superficial mas no el anidado llamdo stats
console.log(linda108)

//? como corregimos el error anterior?
// usando el metodo que aplica la estructura de clonacion profunda llamado structuredClone

// let bonita178 = structuredClone(john117);
// console.log(bonita178);

// Este metodo tiene algunas falencias al parecer no puede clonar funciones xd

// forma nativa de copiar un objeto pero esto es valido solo para un nivel de profundidad supongo
let fred114 = {}
for(let key in john117){
    fred114[key] = john117[key];
    if(typeof john117[key] === "object"){
        fred114[key] = Object.assign({}, john117[key])
    }
}
fred114.nombre="Fredd"
console.log(fred114);