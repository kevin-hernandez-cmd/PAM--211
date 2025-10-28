import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native'


export default function ListScreen () {

  //FlatList
  const ejercicios = [
 {id: '1', nombre: 'Sentadilla', descripcion:'Ejercicio de pierna y gluteo'},
 {id: '2', nombre: 'extension de piernas', descripcion:'Ejercicio de pierna y gluteo'},
 {id: '3', nombre: 'Peso mierto', descripcion:'Ejercicio de pierna y gluteo'},
 {id: '4', nombre: 'Desplantes', descripcion:'Ejercicio de pierna y gluteo'},
 {id: '5', nombre: 'Sentadilla sumo', descripcion:'Ejercicio de pierna y gluteo'},
 {id: '6', nombre: 'abductores', descripcion:'Ejercicio de pierna y gluteo'},
 {id: '7', nombre: 'Hack', descripcion:'Ejercicio de pierna y gluteo'},
 {id: '8', nombre: 'Prensa', descripcion:'Ejercicio de pierna y gluteo'},
 {id: '9', nombre: 'aductores', descripcion:'Ejercicio de pierna y gluteo'},
 {id: '10', nombre: 'bulgaras', descripcion:'Ejercicio de pierna y gluteo'},

  ]

  //SectionList
  const contacto =[
    {titulo:'A', data: ['Alejandra', 'Ana de las tortillas', 'Adele']},
    {titulo:'M', data: ['Mecanico', 'Mi ex', 'Madre de mi ex']},
    {titulo:'T', data: ['TheWillirex', 'Tiago', 'Trebor']},
  ]
 
    return (
      <View style={styles.container}>
        <View style={styles.ListContainer}>
        <Text style={styles.Titulo}>Lista Ejercicios</Text>
        <FlatList data={ejercicios}
        renderItem={({item}) =>(
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>

          </View>
        )}/>
      </View>

      <View style={styles.ListContainer}>
       <Text style={styles.Titulo}>Contactos</Text>
       <SectionList
       sections={contacto}
       renderItem={({item}) =>(
        <Text style={styles.item}>{item}</Text>
       )} //renderisa 
       renderSectionHeader={({section}) =>(
        <Text style={styles.header}>{section.titulo}</Text>
       )}/> 
      </View>
    
      </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
  },
  ListContainer:{
    flex:1,
    marginBottom:20,
  },
  Titulo:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    margin:10,
  },
  item:{
    padding:10,
    backgroundColor: 'gray',
    marginVertical:5,
    marginHorizontal:10,
    borderRadius:5,
  },
  nombre:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:5,
  },
  descripcion:{
    fontSize:14,
    color:'black',
  },
  header:{
    fontSize:18,
    backgroundColor:'white',
    padding:10,
    marginTop:10,
  },
})