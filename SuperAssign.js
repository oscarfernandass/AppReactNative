import { StyleSheet, Text, View,Dimensions, Touchable,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import ModalView from './ModalView';
import DatePicker from 'react-native-modern-datepicker';
const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
import axios from 'axios';

const SuperAssign = () => {
    const[visible,setVisible]=useState(false);
    const[employeeId,setEmployeeId]=useState('');
    const[location,setLocation]=useState('');
    const[date,setDate]=useState('');
    const[commName,setCommName]=useState('');
  return (
    <>
    <ModalView style={styles.uploadbox}
        visible={visible}
        name="Add Post"
        title={"Enter Your Work"}
        onDismiss={() => setVisible(false)}
        onSubmit={async () => {
          setVisible(false);
          let data={
            "date":date,
            "location":location,
            "employeeId":employeeId,
            "community":commName
          }
          let re=await axios.post("https://bullfrog-rich-recently.ngrok-free.app/supervisor/assignDaily", data);
          let dt = await re.data;



        }}
        cancelable
        >

          <TextInput
            label="name"
            value={employeeId}
            style={styles.inputText}
            placeholder='Enter Worker Id'
            placeholderTextColor='black'
            onChangeText={(text) =>setEmployeeId(text)}
            mode="outlined"
            />

          <TextInput
            label="location"
            value={location}
            style={styles.inputText}
            placeholder='Assign Location'
            placeholderTextColor='black'
            multiline
            numberOfLines={4}
            onChangeText={(text) => setLocation(text)}
            mode="outlined"
            />
          
           <View style={styles.pick}>
           <DatePicker
           value={date}
           onSelectedChange={date => setDate(date)}
           style={{
             height:300,
            }}
            />
           </View>

           <TextInput
            label="Community"
            value={commName}
            style={styles.inputText}
            placeholder='Community Name '
            placeholderTextColor='black'
            onChangeText={(text) =>setCommName(text)}
            mode="outlined"
            />
          </ModalView>
    
    <View style={styles.container}>
    <LottieView source={require('../assign.json')} autoPlay loop onError={console.error} 
    style={{
        height:200,
        width:200,
        marginLeft:"5%",
        }} />
    <TouchableOpacity style={styles.butt}
    onPress={()=>{

        setVisible(true);
    }}
    >
        <Text style={styles.text}>Assign Work</Text>
    </TouchableOpacity>
    
      
    </View>
        </>
  )
}

export default SuperAssign

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        height:height,
        width:width,
        gap:10,
    },
    butt:{
        backgroundColor:'black',
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize:20,
        padding:15,
    },
    texti:{
        color:'white',
        fontSize:20,
        padding:15,
        paddingHorizontal:50,
    },
    inputText:{
        borderRadius:10,
        borderColor:'black',
        borderWidth:1.5,
        color:'black',
        marginTop:10,
      },
})