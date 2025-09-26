function VerificarUsuario(usuario)
{
    return new Promise((resolve, reject) => //se crea la promesa
    {
        if (usuario === "admin")
        {
            resolve("acceso concedido");
        }
        else
        {
            reject("acceso denegado");
        }
    });
}

// Caso correcto en los dos ocupamos .then y .catch para manejar los resultados
VerificarUsuario("admin")
  .then(res => console.log(res))  // res es acceso concedido
  .catch(err => console.error(err)); // err es acceso denegado

// Caso incorrecto
VerificarUsuario("Ivan")
  .then(res => console.log(res))
  .catch(err => console.error(err));  