import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Button, Alert, Dimensions } from 'react-native';

 const BackgroundImage = require ('../assets/splash-Logo.png');
export default function ExamenPractico() {
 const restaurante = {
    nombre: 'Restaurante El Sabor Mexicano',
    descripcion: 'Auténticos sabores tradicionales con el toque de casa.'
  };

  const menu = [
   
    {
      categoria: 'principal',
      platillos: [
        { nombre: 'Tacos al pastor', descripcion: 'Con piña, cebolla y cilantro.', precio: 120 },
        { nombre: 'Enchiladas verdes', descripcion: 'Rellenas de pollo y bañadas en salsa verde.', precio: 110 }
      ]
    },
    {
      categoria: 'Bebida',
      platillos: [
        { nombre: 'Agua de horchata', descripcion: 'Fresca y cremosa.', precio: 40 },
        { nombre: 'Refresco', descripcion: 'Variedad de sabores.', precio: 35 }
      ]
    }
  ];

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000); return() => clearTimeout(timer)
  }, []);
 if (showSplash){
  return (
    <View style={styles.container}>
    <ImageBackground source={BackgroundImage}>
      <Text>KEVIN'S</Text>
      <Text>En este restaurante preparamos comida tradicional mexicama</Text>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

  <View style={styles.mainScreen}>
    <ScrollView style = {styles.scrollArea}
    contentContainerStyle ={styles.scrollContenent}
    showsVerticalScrollIndicator ={true}></ScrollView>
<Text style={styles.mainTexto}> Bienvenido al menu (Categorias)</Text>


<Button color='blue' onPress={() => principal }title='platillo principal'></Button>
<Button color='blue' onPress={() => Bebida }title='Bebidas'></Button>
<Button color='blue' onPress={() => Postre}title='Postres'></Button>☻
  </View>

);
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainScreen: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f0f0f0',
  },
  mainTexto: {
    fontSize: 24,
    color:'#333',
  },

});
