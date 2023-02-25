
# Introduccion a la programacion con javascript
## **Creacion de variables en javascript:**
En programación, una variable es un espacio en la memoria que se reserva para almacenar un valor. Las variables se utilizan para almacenar valores que pueden cambiar a lo largo del tiempo y se utilizan en la mayoría de los programas.

En JavaScript, se pueden crear variables utilizando la palabra clave `var, let o const`


- La palabra clave `var` se usaba antes de la versión ECMAScript 6 (ES6) de JavaScript para declarar una variable. Es una forma de declarar una variable que se puede reasignar y acceder desde cualquier lugar dentro del alcance donde fue declarada.

- La palabra clave `let` y `const` fueron introducidas en ES6 y tienen algunas diferencias importantes con la palabra clave `var`. `let` se usa para declarar una variable que se puede reasignar, pero solo se puede acceder dentro del bloque donde fue declarada. `const` se utiliza para declarar una constante, es decir, una variable que no puede ser reasignada.

Para declarar una variable, simplemente se escribe la palabra clave correspondiente, seguida del nombre de la variable y, opcionalmente, un valor inicial:

```javascript
    var x = 10;
    let y = 20;
    const z = 30;
```
En este ejemplo, se declaran tres variables: x se declara con la palabra clave var y se le asigna el valor 10. y se declara con la palabra clave let y se le asigna el valor 20. z se declara con la palabra clave const y se le asigna el valor 30.

Es importante tener en cuenta que las variables creadas con var tienen un alcance de función o global, mientras que las variables creadas con let y const tienen un alcance de bloque. Esto significa que var puede ser accedida desde cualquier lugar dentro de la función o el ámbito global, mientras que let y const solo pueden ser accedidas dentro del bloque en el que fueron declaradas.

<br>

## **Tipos de datos:**
En JavaScript, existen varios tipos de datos, incluyendo:

- Tipos de datos primitivos:
    - **number**: números, por ejemplo: 42 o 3.14
    - **string**: cadenas de texto, por ejemplo: "Hola mundo" o '¡Hola! ¿Cómo estás?'
    - **boolean**: valores de verdad, true o false
    - **null**: valor nulo, null
    - **undefined**: valor indefinido, undefined
    - **symbol**: identificador único e inmutable, introducido en ECMAScript 6.

- Tipos de datos compuestos:
    - **object**: objetos, por ejemplo: {nombre: "Juan", edad: 25} o new Date()
    - **array**: arreglos, por ejemplo: [1, 2, 3, 4, 5] o ["rojo", "verde", "azul"]

    <br>
### **Ejemplos:**
```javascript
    // Números / Numbers
    let x = 42;
    let y = 3.14;

    // Cadenas de texto / Strings
    let nombre = "Juan";
    let mensaje = '¡Hola! ¿Cómo estás?';

    // Valores de Booleanos
    let aprobado = true;
    let reprobado = false;

    // Nulo e indefinido / null - undefined
    let nulo = null;
    let indefinido;

    // Objetos / Objects {}
    let persona = { nombre: "Juan", edad: 25 };
    let fecha = new Date();

    // Arreglos / Arrays []
    let numeros = [1, 2, 3, 4, 5];
    let colores = ["rojo", "verde", "azul"];

```
Es importante tener en cuenta que en JavaScript, los tipos de datos son dinámicos, lo que significa que una variable puede contener diferentes tipos de datos en diferentes momentos.

<br>

## **Estructuras de control:**

En programación, las estructuras de control se utilizan para controlar el flujo de ejecución de un programa. Estas estructuras permiten tomar decisiones, repetir instrucciones y ejecutar código en función de ciertas condiciones.

**Las estructuras de control más comunes en JavaScript son:**

- Estructuras de control de decisión: 
    
    se utilizan para tomar decisiones en función de ciertas condiciones. Las estructuras de control de decisión más comunes son `if, else if y else.`

    ```javascript
        if (condicion) {
            // ejecutar si la condición es verdadera
        } else if (otraCondicion) {
            // ejecutar si otra condición es verdadera
        } else {
            // ejecutar si ninguna de las condiciones anteriores es verdadera
        }
    
    ```
- Switch - case:
    ```javascript
        switch(opcion){
            case 1:
                //se ejecuta si la opcion es 1
            break;
            .
            .
            .
            //n+1 casos
            default:
                //se ejecuta si la opcion no se encuentra entre las opcines
                break
        }
    
    ```
    <br>
## **Estructuras repetitivas:**
Las estructuras repetitivas, también conocidas como estructuras de repetición o bucles, son una forma de controlar el flujo de ejecución de un programa para repetir una o varias instrucciones varias veces.

**En JavaScript, existen tres tipos de estructuras de repetición: for, while y do-while.**

1. El bucle for se utiliza para repetir un conjunto de instrucciones un número conocido de veces. Este bucle se compone de tres partes: una inicialización, una condición y un incremento.

    ```javascript
        for (inicialización; condición; incremento) {
        // conjunto de instrucciones a repetir
        }
    ```
2. El bucle while se utiliza para repetir un conjunto de instrucciones mientras se cumpla una condición determinada.
    ```javascript
        while (condición) {
        // conjunto de instrucciones a repetir
        }
    ```
3. El bucle do-while es similar al bucle while, pero garantiza que las instrucciones se ejecutarán al menos una vez antes de comprobar la condición.
    ```javascript
        do {
        // conjunto de instrucciones a repetir
        } while (condición)
    ```
Es importante tener en cuenta que si no se define adecuadamente la condición de salida del bucle, este puede continuar ejecutándose indefinidamente, lo que se conoce como bucle infinito. Para evitar bucles infinitos, es importante asegurarse de que se defina correctamente la condición de salida.

Las estructuras de repetición son fundamentales en la programación y se utilizan para automatizar tareas repetitivas, como procesar datos o iterar sobre una lista de elementos. Al comprender cómo y cuándo utilizar cada tipo de estructura de repetición, se puede escribir un código más eficiente y fácil de entender.

<br>

## Arreglos: manipulacion y metodos
En programación JavaScript, un arreglo o array es una estructura de datos que permite almacenar y acceder a una colección de elementos relacionados a través de un índice numérico.

En un arreglo, los elementos se almacenan en posiciones consecutivas de memoria y se accede a ellos mediante su índice, que comienza en cero para el primer elemento. Por ejemplo, el siguiente arreglo tiene 3 elementos:
```javascript
    var numeros = [1, 2, 3];
```
Para acceder a los elementos de un arreglo, se utiliza la sintaxis arreglo[indice]. Por ejemplo:
```javascript
    var numeros = [1, 2, 3];
    console.log(numeros[0]); // muestra 1
    console.log(numeros[1]); // muestra 2
    console.log(numeros[2]); // muestra 3
```
En JavaScript, los arreglos pueden contener elementos de diferentes tipos de datos, incluyendo números, cadenas, booleanos, objetos y funciones. Además, los arreglos pueden ser dinámicos, lo que significa que pueden crecer o reducirse en tamaño según sea necesario.
```javascript
    var mixto = [1, "dos", true, {nombre: "Juan"}, function() { return "Hola"; }];
    console.log(mixto.length); // muestra 5
```
Los arreglos son una estructura de datos muy útil en programación, ya que permiten trabajar con colecciones de datos de manera eficiente y organizada.

<br>

### **Metodos**
La razón principal de usar métodos en arreglos en JavaScript es para manipular y transformar los datos almacenados en el arreglo de manera más sencilla y eficiente.

Los métodos de arreglo en JavaScript permiten realizar operaciones comunes, como agregar, eliminar o modificar elementos del arreglo, así como también transformar el arreglo a través de operaciones de filtrado, mapeo y reducción.

Por ejemplo, los siguientes son algunos de los métodos de arreglo más comunes en JavaScript:

- **push():** agrega uno o más elementos al final del arreglo.
- **pop():** elimina el último elemento del arreglo y lo devuelve.
```javascript
    var arreglo = [1, 2, 3];
    arreglo.push(4); // Agrega el valor 4 al final del arreglo
    console.log(arreglo); // muestra [1, 2, 3, 4]

    var ultimoElemento = arreglo.pop(); // Elimina y devuelve el valor 4
    console.log(arreglo); // muestra [1, 2, 3]
    console.log(ultimoElemento); // muestra 4

```

- **shift():** elimina el primer elemento del arreglo y lo devuelve.
- **unshift():** agrega uno o más elementos al inicio del arreglo.
```javascript
    var arreglo = [1, 2, 3];
    arreglo.unshift(0); // Agrega el valor 0 al inicio del arreglo
    console.log(arreglo); // muestra [0, 1, 2, 3]

    var primerElemento = arreglo.shift(); // Elimina y devuelve el valor 0
    console.log(arreglo); // muestra [1, 2, 3]
    console.log(primerElemento); // muestra 0

```

- **slice():** devuelve una porción del arreglo como un nuevo arreglo.
```javascript
    var numeros = [1, 2, 3, 4, 5];
    var numerosCortos = numeros.slice(0, 3);
    console.log(numerosCortos); // muestra [1, 2, 3]
```

- **splice():** agrega, elimina o reemplaza elementos en el arreglo.
```javascript
    var numeros = [1, 2, 3, 4, 5];
    numeros.splice(2, 1, 6, 7);
    console.log(numeros); // muestra [1, 2, 6, 7, 4, 5]
```

- **filter():** devuelve un nuevo arreglo con los elementos que cumplen una condición determinada.
```javascript
    var numeros = [1, 2, 3, 4, 5];
    var numerosPares = numeros.filter(function(numero) {
        return numero % 2 === 0;
    });
    console.log(numerosPares); // muestra [2, 4]
```

- **map():** devuelve un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo.
```javascript
    var numeros = [1, 2, 3];
    var numerosDobles = numeros.map(function(numero) {
        return numero * 2;
    });
    console.log(numerosDobles); // muestra [2, 4, 6]
```

- **reduce():** devuelve un valor único generado a partir de la reducción de los elementos del arreglo mediante una función.
```javascript
    var numeros = [1, 2, 3];
    var suma = numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);
    console.log(suma); // muestra 6
```

Como pueden ver, los métodos de arreglo hacen que la manipulación y transformación de los datos sea más sencilla y legible, y también pueden mejorar el rendimiento de la aplicación.
