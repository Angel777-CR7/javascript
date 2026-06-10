/**
 * Tipos de datos en JavaScript
 */

// Tipos de datos primitivos
let nombre = "Juan"; // string-cadena de texto
let edad = 25; // number-numero
let esEstudiante = true; // boolean-verdadero o falso
let altura; // undefined-no definido
let peso = null; // null-valor nulo o ausencia de valor

// Tipos de datos complejos
let hobbies = ["leer", "nadar", "dibujar"]; // array-arreglo o lista
let persona = {
    nombre: "María",
    edad: 30,
    esEstudiante: false
}; // object-objeto

// Mostrar los tipos de datos   console.log(typeof nombre); // string
console.log(typeof edad); // number-numero
console.log(typeof esEstudiante); // boolean-verdadero o falso
console.log(typeof altura); // undefined-no definido
console.log(typeof peso); // object-valor nulo o ausencia de valor
console.log(typeof hobbies); // object-arreglo o lista
console.log(typeof persona); // object-objeto