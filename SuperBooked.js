import { StyleSheet, Text, Touchable, View , TouchableOpacity,Linking , TextInput} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const SuperBooked = (props) => {
  const navigation=useNavigation();
  const [employeeId, setEmployeeId] = useState();

  const handleSubmit = async () => {
    let res = await axios.post(`https://bullfrog-rich-recently.ngrok-free.app/supervisor/assignBooking/${props.bookingId}/${employeeId}`);
    let dt = await res.data;
  }

  return (
    <>
    <TouchableOpacity style={styles.container} onPress={()=>{
      // const mapUrl = `https://www.google.com/maps/search/?api=1&query=${props.latitude},${props.longitude}`;  
      //     Linking.openURL(mapUrl)
      //       .then(() => console.log('Opened Google Maps'))
      //       .catch((error) => console.error('Error opening Google Maps:', error));
      navigation.navigate('EmbedMapper', { latitude: props.latitude, longitude: props.longitude });
    }}>
      <Text style={styles.name}>Name : {props.name}</Text>
      <Text style={styles.date}>Date : {props.date}</Text>
    </TouchableOpacity>
    <TextInput
        style={styles.input}
        placeholder="Enter Employee Id"
        onChangeText={(text) => setEmployeeId(text)}
        placeholderTextColor={'black'}
        value={employeeId}
        keyboardType="name"
        autoCapitalize="none"
        
      />
      <TouchableOpacity style={styles.out}
      onPress={()=>{
        handleSubmit();
      }}
      >
        <Text style={styles.butt}>Submit</Text>
      </TouchableOpacity>
    </>
  )
}

export default SuperBooked

const styles = StyleSheet.create({
    container:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
        backgroundColor:'green',
        height:100,
        width:250,
        borderRadius:10,
        marginTop:20,
    },
    name:{
      color:'white',
      fontSize:20,
    },
    date:{
      color:'white',
      fontSize:20,
    },
    input: {
      height: 60,
      width: 250,
      borderRadius: 8,
      paddingHorizontal: 15,
      color: 'black',
      borderColor: 'black',
      borderWidth: 2,
      fontSize: 17,
    },
    out:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'black',
      borderRadius:10,
    },
    butt:{
      color:'white',
      padding:15,
    }
})


