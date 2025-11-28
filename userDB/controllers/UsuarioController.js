import DatabaseService from "../database/DatabaseService";
import { Usuario } from "../models/usuario";

export class UsuarioController{
    constructor(){
        this.listeners = [];
    }

    async initialize() {
        await DatabaseService.initialize();
    }
      async obtenerUsuarios() {
    try {
      const data = await DatabaseService.getAll();
      return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new Error('No se pudieron cargar los usuarios');
    }
  }

  async crearUsuario(nombre) {
    try {
      Usuario.validar(nombre);
      const nuevoUsuario = await DatabaseService.add(nombre.trim());
      this.notifyListeners()
      
        return new Usuario(
          nuevoUsuario.id,
          nuevoUsuario.nombre,
          nuevoUsuario.fecha_creacion
        );
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  notifyListeners(data) {
    this.listeners.forEach(callback => callback(data));
  }

  async actualizarUsuario(id, nombre) {
  try {
    Usuario.validar(nombre);

    const actualizado = await DatabaseService.update(id, nombre);

    this.notifyListeners();
    return actualizado;

  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    throw error;
  }
}

async eliminarUsuario(id) {
  try {
    await DatabaseService.remove(id);

    this.notifyListeners();
    return true;

  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    throw error;
  }
}

}

