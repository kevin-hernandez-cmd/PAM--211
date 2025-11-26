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
    if (guardando) return;

    try {

      setGuardando(true);
      const usuarioCreado = await controller.crearUsuario(nombre);
      Alert.alert(`Usuario creado: "${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
      setNombre('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
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
  }
});
