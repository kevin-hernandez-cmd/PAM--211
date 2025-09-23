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
