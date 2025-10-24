import { Text, StyleSheet, View, TextInput, Switch, ImageBackground, Dimensions, Button, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
const BackgroundImage = require('../assets/Demon.jpg')
const Logo = require('../assets/GTR35.jpg')

export default function RepasoScreen() {
  const [prendido, setPrendido] = useState(false)
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return (
      <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.tittle}>Bienvenido</Text>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.tittle}>Cargando...</Text>
        </View>
      </ImageBackground>
    )
  }

  const mostrarAlerta = () => {
    if (nombre.trim() === '') {
      alert('Error: Por favor ingresa tu nombre completo')
      return
    }
    if (correo.trim() === '') {
      alert('Error: Por favor ingresa tu correo electrónico')
      return
    }
   if (!correo.includes('@')) {
  alert('Error: el correo debe contener "@"');
  return;
}
    if (!prendido) {
      alert('Error: Debes aceptar los términos y condiciones')
      return
    }
    alert(`Registro completo:\nNombre: ${nombre}\nCorreo: ${correo}`)
  }

  return (
    <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Repaso 1</Text>
        <Image source={Logo} style={styles.logo} />
        <TextInput
          style={styles.recuadro}
          placeholder="Escribe tu nombre"
          placeholderTextColor="#666"
          value={nombre}
          onChangeText={setNombre}
          maxLength={50}
        />
        <TextInput
          style={styles.recuadro}
          placeholder="Escribe tu correo electrónico"
          placeholderTextColor="#666"
          value={correo}
          onChangeText={setCorreo}
          maxLength={50}
          keyboardType="email-address"
        />
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Aceptar términos y condiciones</Text>
          <Switch value={prendido} onValueChange={setPrendido} />
        </View>
        <Button color="blue" title="Registrar" onPress={mostrarAlerta} />
      </View>
    </ImageBackground>
  )
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tittle: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  recuadro: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    color: 'white',
    marginRight: 10,
  },
})
