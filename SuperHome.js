import { Text, StyleSheet, View,Dimensions,ScrollView,Image,TouchableOpacity,TextInput,BackHandler } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import animationData from '../welcome.json';
import ModalView from './ModalView';
import robot from '../robot1.png';
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import Toast from 'react-native-toast-message';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import SuperChatbot from './SuperChatBot';
const SuperHome=()=>{
  const navigation=useNavigation();

  const[visible,setVisible]=useState(false);
  const[name,setName]=useState('');

  const showWelcome=()=>{

    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Welcome',
      // Optional, add more lines if needed
      fontSize:90,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  }
  useEffect(() => {
    showWelcome();
  }, []);



  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Disable back button press
        return true;
      };

      // Add a listener for the back button press
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      // Remove the listener when the screen loses focus or on component unmount
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

    return (
      <>
      <TouchableOpacity style={styles.robot}
      onPress={()=>{
        navigation.navigate('SuperChatBot');
      }}
      >
        <Image source={robot} style={styles.roboimg}/>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.outer}>
        <View style={styles.first}>
        <Toast/>
        <LottieView source={require('../tree.json')} autoPlay loop={false} speed={3.0}   onError={console.error} style={{height:200,width:200}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Garbage Free Nation</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>

        <View style={styles.second}>
        <LottieView source={require('../cleaner.json')} autoPlay loop={true} onError={console.error} style={{height:200,width:200}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Collect Garbage</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>

        <View style={styles.third}>
        <Image source={require('../trash.png')}  style={{height:160,width:160}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Garbage</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>

        <View style={styles.fourth}>
        <Image source={require('../cash.png')}  style={{height:160,width:160}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Garbage</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>
        

      </ScrollView>
      </>
    );
}
export default SuperHome;

const styles = StyleSheet.create({
    outer:{
        alignItems:'center',
        width:width,
    },
    first:{
      backgroundColor:'white',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    second:{
      backgroundColor:'#f5fffa',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    third:{
      backgroundColor:'#fffff0',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    fourth:{
      backgroundColor:'#fff0f5',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    create:{
      backgroundColor:'black',
      // backgroundColor:'#408F45',
      borderRadius:25,
      position:'absolute',
      alignSelf:'center',
      top:540,
      
      
      // zIndex:1,
    },
    book:{
      fontSize:20,
      padding:18,
      color:'white',
    },
    inputText:{
      borderRadius:10,
      borderColor:'black',
      borderWidth:1.5,
      color:'black',
      marginTop:10,
    },
    robot:{
      height:50,
      width:50,
      zIndex:3,
      backgroundColor:'transparent',
      position:'absolute',
      bottom:"3%",
      right:"6.5%",
      // borderColor:'black',
      // borderWidth:2,
      // display:'flex',
      // justifyContent:'center',
      // alignItems:'center',
    },
    roboimg:{
      height:55,
      width:55,
      position:'absolute',
      zIndex:3,
      borderColor:'black',
      // borderWidth:2.5,
      // borderRadius:100,

    }

})