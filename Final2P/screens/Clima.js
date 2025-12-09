import { Text, StyleSheet, View, ImageBackground, Dimensions, Alert, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'

const BackgroundImage = require('../assets/GTR35.jpg');

export default function Clima() {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  const mostrarDetalles = (ciudad, temperatura, humedad, lluvia) => {
    const mensaje = `Temperatura: ${temperatura}°\nHumedad: ${humedad}%\nProbabilidad de lluvia: ${lluvia}%`;
    
    if (Platform.OS === "web") {
      window.alert(`Detalles: ${ciudad}\n${mensaje}`);
    } else {
      Alert.alert(`Detalles: ${ciudad}`, mensaje);
    }
  };

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <ImageBackground
          source={BackgroundImage}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.splashText}>WeatherUPQ</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <>
      <View style={styles.mainScreen}>
        <Text style={styles.mainText}>Clima actual</Text>
        <Text style={styles.mainText}>8/Dic/2025 QRO</Text>
      </View>

      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps="handled"
        >

          <Text style={styles.ciudad}>Estado de México</Text>
          <Text style={styles.temperatura}>22°</Text>
          <Text style={styles.descripcion}>Parcialmente nublado</Text>
          <Text style={styles.detalles}>Humedad: 60%</Text>
          <Text style={styles.detalles}>Probabilidad de lluvia: 20%</Text>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => mostrarDetalles("Estado de México", 22, 60, 20)}
          >
            <Text style={styles.botonTexto}>Detalles</Text>
          </TouchableOpacity>

          <Text style={styles.ciudad}>Guadalajara</Text>
          <Text style={styles.temperatura}>25°</Text>
          <Text style={styles.descripcion}>Soleado</Text>
          <Text style={styles.detalles}>Humedad: 50%</Text>
          <Text style={styles.detalles}>Probabilidad de lluvia: 10%</Text>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => mostrarDetalles("Guadalajara", 25, 50, 10)}
          >
            <Text style={styles.botonTexto}>Detalles</Text>
          </TouchableOpacity>

          <Text style={styles.ciudad}>Monterrey</Text>
          <Text style={styles.temperatura}>31°</Text>
          <Text style={styles.descripcion}>Soleado</Text>
          <Text style={styles.detalles}>Humedad: 40%</Text>
          <Text style={styles.detalles}>Probabilidad de lluvia: 5%</Text>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => mostrarDetalles("Monterrey", 31, 40, 5)}
          >
            <Text style={styles.botonTexto}>Detalles</Text>
          </TouchableOpacity>

          <Text style={styles.ciudad}>Cancún</Text>
          <Text style={styles.temperatura}>28°</Text>
          <Text style={styles.descripcion}>Lluvioso</Text>
          <Text style={styles.detalles}>Humedad: 80%</Text>
          <Text style={styles.detalles}>Probabilidad de lluvia: 70%</Text>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => mostrarDetalles("Cancún", 28, 80, 70)}
          >
            <Text style={styles.botonTexto}>Detalles</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  ciudad: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperatura: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 20,
    marginBottom: 10,
  },
  detalles: {
    fontSize: 16,
    marginBottom: 5,
  },
  boton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 25,
    alignItems: 'center',
  },
  botonTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
