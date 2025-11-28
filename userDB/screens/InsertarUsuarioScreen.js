import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,
    StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function UsuarioView() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState('');
  

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();

    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  const handleAgregar = async () => {
    if (!nombre.trim()) {
      Alert.alert("Error", "El nombre no puede estar vacío");
      return;
    }

    try {
      setGuardando(true);
      await controller.crearUsuario(nombre.trim());
      setNombre("");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setGuardando(false);
    }
  };



const handleEditar = (usuario) => {
    setUsuarioEditando(usuario);
    setNuevoNombre(usuario.nombre);
    setModalVisible(true);
  };

  const confirmarEdicion = async () => {
    if (!nuevoNombre.trim()) {
      Alert.alert("Error", "El nombre no puede estar vacío");
      return;
    }

    try {
      await controller.actualizarUsuario(usuarioEditando.id, nuevoNombre.trim());
      setModalVisible(false);
      setUsuarioEditando(null);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleEliminar = (id) => {
    Alert.alert(
      "Eliminar",
      "¿Seguro que deseas eliminar este usuario?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              await controller.eliminarUsuario(id);
            } catch (error) {
              Alert.alert("Error", error.message);
            }
          }
        }
      ]
    );
  };

 const renderUsuario = ({ item, index }) => (
  <View style={styles.userItem}>

    <View style={styles.userItemNumber}>
      <Text style={styles.userNumberText}>{index + 1}</Text>
    </View>

    <View style={styles.userItemData}>
      <Text style={styles.userName}>{item.nombre}</Text>
      <Text style={styles.userId}>ID: {item.id}</Text>

      <Text style={styles.userDate}>
        {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </Text>

      <View style={styles.userItemButtons}>

        <TouchableOpacity 
          style={[styles.buttonEE, { backgroundColor: "#006effff" }]} 
          onPress={() => handleEditar(item)}
        >
          <Text style={styles.buttonEEText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonEE, { backgroundColor: "#ff0000ff" }]}
          onPress={() => handleEliminar(item.id)}
        >
          <Text style={styles.buttonEEText}>Eliminar</Text>
        </TouchableOpacity>

      </View>
    </View>

  </View>
);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>INSERT & SELECT</Text>

      <Text style={styles.label}>Insertar Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe el nombre del usuario"
        value={nombre}
        onChangeText={setNombre}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAgregar}
        disabled={guardando}
      >
        <Text style={styles.buttonText}>
          {guardando ? "Guardando..." : "Agregar Usuario"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>Lista de Usuarios</Text>

      {loading && <ActivityIndicator size="large" />}

      <FlatList
        data={usuarios}
        renderItem={renderUsuario}
        keyExtractor={(item) => item.id.toString()}
      />
           {modalVisible && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Usuario</Text>

            <TextInput
              style={styles.input}
              value={nuevoNombre}
              onChangeText={setNuevoNombre}
            />

            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity style={styles.button} onPress={confirmarEdicion}>
                <Text style={styles.buttonText}>Guardar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#aaa" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#F5F5F5"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 10
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },


  userItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },
  userItemNumber: {
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  userNumberText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  userItemData: {
    flex: 1
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  userId: {
    color: "#888"
  },
  userDate: {
    marginTop: 4,
    fontSize: 12,
    color: "#666"
  },
    buttonEEText: {
    color: "white",
    fontWeight: "bold"
  },
    buttonEE: {
    padding: 8,
    borderRadius: 6
  },
 userItemButtons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 8
 },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    borderRadius: 10
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  }
});
