//ejercicio a)
const persona = { 
    nombre: "Ivan Isai",
    edad: 37,
    direccion : {
        Ciudad: "Qro",
        Pais: "Mexico"
    }
};

// Desestructuración 
const { nombre, edad, direccion: { Ciudad, Pais } } = persona;
//hacemos uso de una funcion flecha
const mensaje = (nombre, edad, Ciudad) => `Hola, me llamo ${nombre} y tengo ${edad} años, y vivo en ${Ciudad}`;
//se muestra el mensaje
console.log(mensaje(nombre, edad, Ciudad));


//ejercicio b)
const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

//utilizamos .filter y .map para desplegar la lista con puros nombres
const nombres = productos
  .filter(producto => producto.precio > 1000) 
  .map(producto => producto.nombre);          

console.log(nombres); 

//ejercicio c)
const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];

// 1. Usar .find() para buscar a Luis
const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", personaLuis); 
// { nombre: "Luis", edad: 35 }

// 2. Usar .forEach() para imprimir nombre y edad
personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

// 3. Usar .reduce() para sumar todas las edades
const totalEdades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log("Suma total de edades:", totalEdades); 


