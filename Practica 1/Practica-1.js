
// ejercicio a)
let nombre = "Armando"; // puede cambiar, entonces usamos let
const edad = 25;        // no cambia, entonces const

nombre = "Ana Maria";   // en este caso es una reasignación 

const saludo = `Hola, ${nombre}. Tienes ${edad} años.`; 

console.log(saludo);

// ejercicio b)


// funcion flecha
const cuadrado = (numero) => numero * numero;

// Probando con 3 números diferentes
console.log(cuadrado(2));  
console.log(cuadrado(5));  
console.log(cuadrado(10)); 

// ejercicio c)
// funcion flecha llamda saludo personal y recibe dos parametro nombre y edad 
const saludoPersonalizado = (nombre, edad) => `Hola, me llamo ${nombre} y tengo ${edad} años.`;

// Probando la función
console.log(saludoPersonalizado("kevin", 20));

