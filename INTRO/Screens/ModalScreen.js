import { Text, StyleSheet, View, Button, Modal } from 'react-native'
import react, {useState} from 'react'


export default function ModalScreen () {

const[modalVisible, setModalVisible]= useState(false);
 
    return (
      <View style={styles.container}>
      <Button title='Mostrar modal' onPress={()=> setModalVisible(true)} color='purple'></Button>
      <Modal
      animationType='fade'
      transparent={true} //fondo sea transparente
      visible={modalVisible}//hacer visible modal
      onRequestClose={()=> setModalVisible(!modalVisible)}> 
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={styles.Textomodal1}>Soy un Modal</Text>
        <Button title='Ocultar modal' onPress={()=> setModalVisible(false)} color='purple'></Button>
       </View>
       </View>
       </Modal> 
       </View>    
    
  
    );
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  modalContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue',
  },
  modalContent:{
    backgroundColor:'white',
    padding:25,
    borderRadius:15,
    alignItems:'center',
  },
  Textomodal1:{
    color:'black',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:15, 
  },
});