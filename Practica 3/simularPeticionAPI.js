// Función que simula la petición a una API
function simularPeticionAPI() 
{
  return new Promise(resolve => 
    {
    setTimeout(() => 
    {
      resolve("Datos recibidos correctamente");
    }, 5000); // Se pone el tiempo de espera 5000 = 5 segundos
  });
}

// Función asíncrona que obtiene los datos
async function obtenerDatos() 
{
  try 
  {
    const resultado = await simularPeticionAPI(); // Espera a que la promesa se resuelva
    console.log(resultado); 
  } catch (error) //ocupamos catch para los errores 
  {
    console.error("Error al obtener los datos:", error);
  }
}

obtenerDatos();
