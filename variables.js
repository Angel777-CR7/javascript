//reglaas para nombrar variables en JavaScript
//1. Las variables deben comenzar con una letra, un guion bajo (_) o un signo de dólar ($).
//2. No pueden comenzar con un número.
//3. No pueden contener espacios, pero se pueden usar guiones bajos (_) o camelCase para separar palabras.
//4. No pueden ser palabras reservadas de JavaScript (como var, let, const, if, else, etc.).
//5. Las variables son sensibles a mayúsculas y minúsculas (por ejemplo, nombre y Nombre serían variables diferentes).

let nombre = "Juan"; // string-cadena de texto
let edad = 25; // number-numero 
let esEstudiante = true; // boolean-verdadero o falso
let altura; // undefined-no definido
let peso = null; // null-valor nulo o ausencia de valor     
//let es una palabra reservada para declarar variables en JavaScript. Permite crear variables que pueden ser reasignadas posteriormente. En este caso, se han declarado cinco variables: nombre, edad, esEstudiante, altura y peso, cada una con un tipo de dato diferente.

const PI = 3.14159; // const-constante, no puede ser reasignada
//const es una palabra reservada para declarar constantes en JavaScript. Las constantes son variables cuyo valor no puede ser cambiado una vez asignado. En este caso, se ha declarado una constante llamada PI con el valor de 3.14159.

var ciudad = "Madrid"; // var-otra forma de declarar variables, pero se recomienda usar let o const
//var es una palabra reservada para declarar variables en JavaScript, pero su uso se ha vuelto menos común debido a problemas de alcance (scope) y hoisting. Se recomienda usar let o const para declarar variables en lugar de var.

//que es la caja de pop-up está en el navegador, es una ventana emergente que se muestra al usuario para interactuar con él. En JavaScript, existen varias funciones para crear cajas de pop-up, como alert(), prompt() y confirm().

alert("Hola, " + nombre + "! Tienes " + edad + " años."); // muestra un mensaje emergente con el nombre y la edad
//alert es una función que muestra un mensaje emergente en el navegador. En este caso, se muestra un mensaje que incluye el valor de las variables nombre y edad.

prompt("¿Cuál es tu ciudad?"); // muestra un cuadro de diálogo para ingresar la ciudad
//prompt es una función que muestra un cuadro de diálogo en el navegador para que el usuario ingrese información. En este caso, se solicita al usuario que ingrese su ciudad.

console.log(nombre); // string
console.log(edad);   // number-numero        
console.log(esEstudiante); // boolean-verdadero o falso  
console.log(altura); // undefined-no definido
console.log(peso); // object-valor nulo o ausencia de valor