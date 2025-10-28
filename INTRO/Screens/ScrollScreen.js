import { Text, StyleSheet, View, } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native-web'


export default function ScrollScreen () {
  
    return (
      <View style = {styles.container}>
        <ScrollView style = {styles.scrollArea} 
         contentContainerStyle={styles.scrollContenet} 
         showsVerticalScrollIndicator={true}>
      <Text style={styles.title}>Diferencia entre Biturbo y Twin Turbo</Text>
      <Text style={styles.item}>Los turbocompresores o turbos son dispositivos 
        que aumentan la potencia del motor al comprimir 
        el aire que entra a los cilindros,</Text>
      <Text style={styles.textRed}>lo que permite quemar más combustible 
        y generar más energía</Text>
      <Text style={styles.textRed}>Cuando un motor utiliza dos turbos, puede
         denominarse biturbo o twin turbo, pero estos 
         términos no siempre significan exactamente lo mismo.</Text>
      <Text style={styles.title}>Sistema Biturbo</Text>
      <Text style={styles.textRed}>Un turbo pequeño se activa a bajas
         revoluciones para ofrecer una respuesta 
         rápida y reducir el lag</Text>
      <Text style={styles.textRed}>Este sistema busca combinar respuesta inmediata 
        y potencia en altas revoluciones.</Text>
      <Text style={styles.title}>Sistema Twin Turbo</Text>
      <Text style={styles.textRed}>Menor retraso turbo lag en comparación
         con un solo turbo grande</Text>
      <Text style={styles.textRed}>Entrega de potencia más lineal y continua</Text>
      <Text style={styles.textRed}>Mayor eficiencia volumétrica, ya que el aire entra 
        de forma más equilibrada a cada parte del motor</Text>
      </ScrollView>
      </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  scrollArea:{
    flex:1,
  },
  item:{
    backgroundColor: 'black',
    color: 'white',
    padding:12,
    marginVertical:8,
    borderRadius:10,
    textAlign:'center',
  },
  scrollContenet:{
    alignItems:'center',
    paddingVertical:20,
  },
  title:{
    fontSize:30,
    fontWeight: 'bold',
    color: 'red',
    textAlign:'center',
    marginBottom:20,
  },
  
  subtitleRed:{
    fontSize:22,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    backgroundColor: 'black',
    borderRadius:10,
    marginVertical:12,
    paddingVertical:12,
    paddingHorizontal:10,
    width:'95%',
    alignSelf:'center',
  },
  text:{
    fontSize:16,
    color:'white',
    lineHeight:24,
    textAlign:'justify',
    marginBottom:15,
    padding:10,
  },
  textRed:{
    fontSize:16,
    color:'white',
    lineHeight:24,
    textAlign: 'justify',
    marginBottom:15,
    padding:10,
    backgroundColor:'black',
    borderRadius:10,

  },
})