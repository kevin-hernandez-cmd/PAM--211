import { Text, StyleSheet, View, view, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen'
import ContadorScreens from './ContadorScreens'
import TextScreen from './TextScreen'
import ImageScreen from './ImageScreen'
import ScrollScreen from './ScrollScreen'
import ActivityIndicator from './ActivityIndicator'
import ListScreen from './ListScreen'
import ModalScreen from './ModalScreen'
import RepasoScreen from './RepasoScreen'

export default function MenuScreen() {
 const [Screens, setScreens] = useState('menu');

 switch(Screens){
    case 'contador':
        return <ContadorScreens/>;
    
    case 'botones':
        return <BotonesScreen/>;
    
    case 'text':
        return <TextScreen/>;
    
    case 'imagen':
        return <ImageScreen/>;

    case 'scroll':
        return <ScrollScreen/>;
    
    case 'indicator':
        return <ActivityIndicator/>;

    case 'lista':
        return <ListScreen/>;

    case 'modal':
        return <ModalScreen/>;
    
    case 'repaso1':
        return <RepasoScreen/>;


    case 'menu': 
        default:
    return (
           <View style={styles.container_1}>
             <Text>Menu de practicas</Text>
              <View style={styles.botones_1}>
             <Button color='pink' onPress={()=>setScreens('contador')}title='Pract:contador'></Button>        
             <Button color='green'onPress={()=>setScreens('botones')}title='Pract:botones'></Button>
             <Button color='orange'onPress={()=>setScreens('text')}title='Pract:texto'></Button>
             <Button color='gold'onPress={()=>setScreens('imagen')}title='Pract:ImageBackgroung & SlapshScreen'></Button>
             <Button color='purple'onPress={()=>setScreens('scroll')}title='Pract:scroll'></Button>
             <Button  color='blue' onPress={()=>setScreens('indicator')}title='Pract:indicator'></Button>
             <Button  color='gray' onPress={()=>setScreens('Lista')}title='Pract:Lista'></Button>
             <Button  color='violet' onPress={()=>setScreens('modal')}title='Pract:modal'></Button>
             <Button color='red' onPress={()=>setScreens('repaso1')} title='Repaso 1'></Button>
        </View>
          </View>
    ) 



 }

}

const styles = StyleSheet.create({
      container_1: {
    flex: 1,
    backgroundColor: 'hsla(171, 66%, 65%, 0.86)',
    alignItems: 'center', //permiten mover los elementos start a la izquierda, end lado derecho, trabaja en el eje x
    justifyContent: 'center', //permiten mover los elementos start a a parte de hasta arriba, end la parte inferior, trabaja en el eje y 
  },
     botones_1: {
  marginTop: 15,  
flexDirection: 'column',
  gap:20, 
  },
})



