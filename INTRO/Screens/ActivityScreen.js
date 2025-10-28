import { useState } from 'react';
import { Text, View, Button, StyleSheet, ActivityIndicator, Platform, Alert } from 'react-native';



export default function ActivityScreen() 
{
  const [cargando, setCargando] = useState(false);
  const carga = () => { 
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      if (Platform.OS === 'web') {
        window.alert ('carga completa');
      } else {
        Alert.alert ('carga completa');
      }
      alert('Carga completa');
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Presione para iniciar la simulación de carga</Text>
      <View style={styles.botonesContainer}>
      {cargando ? (<ActivityIndicator size="large" color="blue" />):(<Button color="red" title="Presione para iniciar" onPress={carga} />)}
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(254, 254, 254, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
  },
  botonesContainer:{
    marginTop:20,
    gap:20,
  },
});