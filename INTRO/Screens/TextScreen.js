import { Text, StyleSheet, View, Button, Alert,TextInput,Platform} from 'react-native'
import React, { useState } from 'react'

export default function TextScreen () {
const [nombre, setNombre]= useState('');

const mostrarAlerta = () => {
    if (nombre.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor ingresa tu nombre');
      } else {
        Alert.alert('Error', 'Por favor ingresa tu nombre');
      }
    } else {
      if (Platform.OS === 'web') {
        window.alert(`¡Hola ${nombre}! Bienvenido `);
      } else {
        Alert.alert('Hola!', 'Bienvenido'+{nombre});
      }
    }
  };
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>TextScreen</Text>

      <TextInput
      style={styles.recuadro}
      placeholder='Escribe tu nombre'
      value ={nombre}
      onChangeText={setNombre}
      maxLength={50}
      />

      <Button color='blue' title='Mostrar saludo' onPress={mostrarAlerta} />
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,

  },
  titulo: {
    fontSize: 22,
    fontWeight:'bold',
    marginBottom: 15,
  },
  recuadro:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
  },
});