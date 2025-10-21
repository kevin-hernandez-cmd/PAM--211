import { Text, StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import React, { useState, useEffect} from 'react'

const BackgroundImage = require ('../assets/splash-icon.png');
export default function ImageScreen({navigation}){
  const[showSplash, setShowSplash]=useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return() => clearTimeout(timer)
  },[]);
  if (showSplash) {
    return (
    <View style={styles.container}>
    <ImageBackground source={BackgroundImage}
      style={styles.background}
      resizeMode='cover'>

      <View style={styles.overlay}>
        <Text style={styles.tittle}>Bienvenido</Text>
        <Text style={styles.tittle}>Cargando...</Text>
      </View>
    </ImageBackground>
    </View>
    
    );
  }
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.mainText}>Bienvenido a la pantalla principal</Text>
    </View>
  );
}

const {width, height} = Dimensions.get('window');
    const styles = StyleSheet.create({
           background: {
            width: width,
            height: height,
        },
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
        },
        tittle: {
            fontSize: 32,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
        },
        mainScreen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
        },
        mainText: {
            fontSize: 24,
            color: '#333',
        },
    });