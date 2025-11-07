import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Button, Alert } from 'react-native';

 const BackgroundImage = require ('../assets/splash-Logo.png');
export default function ExamenPractico() {
 
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

return (

  <View style={styles.mainScreen}>
<Text style={styles.mainTexto}> Bienvenido al menu(Categorias)</Text>

  </View>

);
}
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
    backgroundColor:''

  }

});
