import { StyleSheet, Text, View , ScrollView,Dimensions,TouchableOpacity,TextInput,FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'
import LogContain from './LogContain'
// import { ScrollView } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('window');
import DatePicker from 'react-native-modern-datepicker';
import LottieView from 'lottie-react-native';
import ModalView from './ModalView';
import axios from 'axios';
// import { LottieView } from 'lottie-react-native';
const CleanerLogs = ({route}) => {
  const[employeeId,setEmployeeId]=useState(route.params.nam);
  const[date,setDate]=useState('');
  const[location,setLocation]=useState('');
  const[amount,setAmount]=useState(0.0);
  const[visible,setVisible]=useState(false);
  const[logs,setLogs]=useState([]);
  const[loader,setLoader]=useState(false);
  const fetchData = async() => {
    setLoader(true);
    let res = await axios.get(`https://bullfrog-rich-recently.ngrok-free.app/dailyLogs/view/${route.params.nam}`);
    let dt = await res.data;
    
    setLogs(dt["logs"]);
    console.log(logs);
    setLoader(false);
  }
  useEffect(()=>{
    fetchData();
  }, []);
  return (
    <>
     <ModalView style={styles.uploadbox}
        visible={visible}
        name="Add Post"
        title={"Enter Your Work"}
        onDismiss={() => setVisible(false)}
        onSubmit={async () => {
          setVisible(false);
          // showToast1();
          let data = {
            "employeeId" : employeeId,
            "datetime" : date,
            "location" : location,
            "amount" : amount
          }
          
          console.log(data);
          
          let res = await axios.post("https://bullfrog-rich-recently.ngrok-free.app/dailyLogs/add", data);
          let dt = await res.data;

          console.log(dt);
        }}
        cancelable
        >

          <TextInput
            label="name"
            value={employeeId}
            style={styles.inputText}
            placeholder='Enter Your Name'
            placeholderTextColor='black'
            onChangeText={(text) => employeeId(text)}
            mode="outlined"
            />
          <View style={styles.pick}>
            <Text style={{color:'black',fontSize:18}}>Select Date</Text>
           <DatePicker
           onSelectedChange={date => setDate(date)}
           style={{
             height:300,
            }}
            />
           </View>
           <TextInput
            style={[styles.textArea]}
            value={location}
            placeholder="Enter Location"
            placeholderTextColor="black"
            multiline
            numberOfLines={3} // You can adjust the number of lines as needed
            onChangeText={(text) => setLocation(text)}
            />
          
            <TextInput
              value={amount}
              style={styles.inputText}
              placeholder='Enter Amount'
              keyboardType='numeric'
              placeholderTextColor='black'
              onChangeText={(text) =>setAmount(text)}
              mode="outlined"
              />

          </ModalView>

    <View style={styles.container}>

        <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>

        <LottieView source={require('../globe.json')} autoPlay loop onError={console.error} style={{height:80,width:80,marginTop:10}} />
        <Text style={styles.head}>History</Text>
        </View>

        <TouchableOpacity style={styles.add} onPress={()=>{
          setVisible(true);
        }}>
          <Text style={styles.addText}>Add Work Log</Text>
        </TouchableOpacity>

    
        
        {loader?(
        <LottieView source={require('../welcomee.json')} autoPlay loop onError={console.error} style={{ height: 70,
          width: 70,
          alignSelf:'center',
          justifyContent:'center',
          marginTop:50,
           // Half of the element's width
           // Half of the element's height
        }} />
      ):(
        <FlatList showsVerticalScrollIndicator={false}
            style={styles.flat}
            data={logs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <LogContain
                date={item.datetime}
                location={item.location}
                amount={item.amount}
                />
              </View>
            )}
            />)}

      {/* <LogContain date="don bro" location="12.56" amount="fjiebi"/>
      <LogContain text="master" time="12.56"/>
      <LogContain text="leo" time="12.56"/>
      <LogContain text="puli" time="12.56"/>
      <LogContain text="ajith kumar" time="12.56"/>
      <LogContain text="simbu" time="12.56"/>
        </ScrollView> */}
    </View>
    </>
  )
}

export default CleanerLogs

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    outer:{
        width:width,
        height:height,
        justifyContent:'center',
        alignItems:'center',
        marginTop:-63,
    },
    head:{
        fontSize:25,
        color:'black',
        // marginTop:20,

    },
    add:{
      backgroundColor:'black',
      borderRadius:10,
      marginTop:5,
    },
    addText:{
      color:'white',
      fontSize:20,
      padding:15,

    },
    inputText:{
      borderRadius:10,
      borderColor:'black',
      borderWidth:1.5,
      color:'black',
      marginTop:10,
    },
    pick:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      borderColor:'black',
      borderWidth:1.5,
      marginTop:5,
      borderRadius:10,
    },
    textArea: {
      borderColor:'black',
      color:'black',
      marginTop:5,
      borderWidth:1.5,
      borderRadius:10,
      height: 80, // Adjust the height as needed
      textAlignVertical: 'top', // This makes the text start from the top
      paddingTop: 10, // Adjust the padding as needed
    },
})