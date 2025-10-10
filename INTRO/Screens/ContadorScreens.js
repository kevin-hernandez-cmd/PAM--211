//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-web';

//2. Main: Zona de componentes
export default function ContadorScreens() {

  const[contador, setContador] = useState(0);
  

  return (


      <View style={styles.container}>
      <Text style={styles.texto}> Contador: </Text>
      <Text style={styles.texto2}> {contador} </Text>

      <View style={styles.botonesContainer}>
      <Button color='green' title='Agregar' onPress={()=>setContador(contador+1)} />
      <Button color='gold' title='Quitar' onPress={()=>setContador(contador-1)} />
      <Button color='orange' title='Reiniciar' onPress={()=>setContador(0)} />
      </View>

      <StatusBar style="auto" />
    </View> // se tiliza para visualizar el texto
  );
}

//3. Estilos: Zona estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(225, 137, 188, 0.86)',
    alignItems: 'center', //permiten mover los elementos start a la izquierda, end lado derecho, trabaja en el eje x
    justifyContent: 'center', //permiten mover los elementos start a a parte de hasta arriba, end la parte inferior, trabaja en el eje y 
  },
  texto:{
    color:'black', 
    fontSize: 30,
    fontFamily: 'Times Nwe Roman', //tipo de letra
    fontWeightS: 'bold', //negritas
    fontStyle: 'italic',
    textDecorationLine: 'line-through', //subrayado


  },
    texto2:{
    color:'red',
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeightS: '900',
    fontStyle: 'italic',
    textDecorationLine:'underline',
    

  },
  botonesContainer: {
  marginTop: 15,  //empuja hacia abajo los botones con el margen que seleccionamos
  flexDirection: 'row', //da la direccion en la que se van a poner los botones
  gap:20, //los separa en una misma proporcion
  },



});

