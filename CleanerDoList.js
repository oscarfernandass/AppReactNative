import { StyleSheet, Text, View,Dimensions ,TouchableOpacity,Linking} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
const CleanerDoList = (props) => {
  const navigation=useNavigation();
       const press=()=>{
        navigation.navigate('EmbedMapper',{latitude:props.latitude,longitude:props.longitude})
       }
  return (
    <TouchableOpacity style={styles.outer}
    onPress={() => {
        // navigation.navigate('MapCommon', { latitude:14.9367228, longitude:76.9564628});
        press();
      }}
    >
        <Text style={styles.name}>Name: {props.name}</Text>
        <Text style={styles.date}>Date Time: {props.date}</Text>
        <Text style={styles.address}>Status: {props.status}</Text>
    </TouchableOpacity>
  )
}

export default CleanerDoList;

const styles = StyleSheet.create({
    outer:{
        backgroundColor:'green',
        width:width-70,
        borderRadius:15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop:15,
        height:110,
    },
    name:{
        color:'white',
        fontSize:20,
    },
    date:{
        color:'white',
        fontSize:18,
    },
    address:{
        color:'white',
        fontSize:16,
    },
})